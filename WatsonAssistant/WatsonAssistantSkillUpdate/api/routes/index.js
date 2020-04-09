const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

// Configure local storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, path.extname(file.originalname));
  }
});

// create local storage to hold file before uploading
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 50000000
  }
});

// Upload file route
router.post("/upload", upload.single('file'), async (req, res, next) => {

  // TODO: Check to make sure the file is a .json
  if (!req.file) {
    const error = new Error('Please select a file')
    error.httpStatusCode = 400
    return next(error)
  }

  if (!req.body.wa_apikey) {
    const error = new Error('Please enter the API key')
    error.httpStatusCode = 400
    return next(error)
  }

  if (!req.body.wa_skillid) {
    const error = new Error('Please enter the skill ID')
    error.httpStatusCode = 400
    return next(error)
  }

  // Extract file data to strings
  let file = req.file;
  let pathToFile = file.path;

  let wa_apikey = req.body.wa_apikey;
  let wa_skillid = req.body.wa_skillid;
  let skillObj;
  let intents;
  let entities;
  let dialog;

  try {
    skillObj = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
    intents = skillObj.intents;
    entities = skillObj.entities;
    dialog = skillObj.dialog_nodes;
    webhooks = skillObj.webhooks;
  }
  catch(err) {
    const error = new Error('Please submit a valid skill .json')
    error.httpStatusCode = 400
    return next(error)
  }

  fs.unlink(pathToFile, (err) => {
    if (err) throw err;
    console.log('File was deleted');
  });

  // Instantiate Assistant object
  const assistant = new AssistantV1({
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
        apikey: wa_apikey,
    }),
    url: 'https://gateway.watsonplatform.net/assistant/api',
  });

  const params = {
    append: true,
    workspaceId: wa_skillid,
    intents: intents,
    entities: entities,
    dialogNodes: dialog,
    webhooks: webhooks
  };

  assistant.updateWorkspace(params)
  .then(response => {
      console.log(JSON.stringify(response.result, null, 2));
      res.send("Success!");
  })
  .catch(err => {
      console.log(err);
      return next(err);
  });
});

module.exports = router;