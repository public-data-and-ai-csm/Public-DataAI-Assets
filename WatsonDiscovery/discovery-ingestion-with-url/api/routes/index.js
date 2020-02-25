const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const myCOS = require('ibm-cos-sdk');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

// Discovery credentials
const disc_apikey = env.DISC_APIKEY;
const disc_url = env.DISC_URL;
const collectionId = env.DISC_COLLECTIONID;
const environmentId = env.DISC_ENVIRONMENTID;
const disc_version = env.DISC_VERSION;

// Home page URL
const home_url = env.HOME_URL;

// COS credentials
const config = {
  endpoint: env.COS_ENDPOINT,
  apiKeyId: env.COS_APIKEY,
  ibmAuthEndpoint: env.COS_AUTHENDPOINT,
  serviceInstanceId: env.COS_SERVICEINSTID,
  bucketName: env.COS_BUCKETNAME
}

// Instantiate COS client
let cosClient = new myCOS.S3(config);

// Instantiate Discovery object
const discovery = new DiscoveryV1({
  version: disc_version,
  authenticator: new IamAuthenticator({
    apikey: disc_apikey,
  }),
  url: disc_url
});

// Configure local storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, path.extname(file.originalname));
  }
});

// create local storage to hold file before uploading to Discovery
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 50000000
  }
});

// Upload file route
router.post("/upload", upload.single('file'), async (req, res, next) => {
  /**
     * {
     *  body: {
     *    fileUrl: String
     *  },
     *  file: [File] Object - {originalName: String, path: String, mimeType: String}
     * }
     */

  if (!req.file) {
    const error = new Error('Please select a file')
    error.httpStatusCode = 400
    return next(error)
  }

  // Extract file data to strings
  let fileUrl = req.body.fileUrl || '';
  let file = req.file;
  console.log("file: ", req.file);
  let originalName = file.originalname;
  let pathToFile = file.path;
  let contentType = file.mimetype;

  // Configure parameters for Discovery upload
  const addDocumentParams = {
    environmentId: environmentId,
    collectionId: collectionId,
    file: fs.createReadStream(pathToFile),
    filename: originalName,
    fileContentType: contentType,
    metadata: { url: fileUrl }
  };

  // Add document to discovery
  discovery.addDocument(addDocumentParams)
    .then(documentAccepted => {
      console.log(JSON.stringify(documentAccepted, null, 2));
      unlinkAsync(req.file.path);
    }).then(someObject => {
      // Then upload original document to COS
      console.log("Creating the object");
      cosClient.putObject({
        Bucket: config.bucketName,
        Key: originalName,
        Body: Buffer.from(pathToFile)
      }).promise()
        .then(() => {
          res.send('Success. <a href="' + home_url + '"Click here to upload another file/a>');
        })
        .catch((e) => {
          // Catch COS errors and display error
          console.error(`COS ERROR: ${e.code} - ${e.message}\n`);
          return next(err)
        });
    })
    .catch(err => {
      // Catch Discovery errors and display error
      console.log('Discovery error:', err);
      return next(err)
    });
});

module.exports = router;