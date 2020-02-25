# Discovery Ingestion Tool (Client)

## Installation

To test the app locally:

- CD to the `client` directory

- `npm install` to install the Node packages

- IF you are running the app locally, change the `uploadUrl` variable in `src/App.js` on line 4 to `http://localhost:9000/`

- Update your `manifest.yml` file to include the name of your file, such as `discovery-ingestion-with-url`

- `nodemon start` to run

## Deploy

From the command line:

** Before deploying, make sure `uploadUrl` points to the `/upload` API endpoint: `https://my-app-name-api.mybluemix.net/upload` **

- CD to the `client` directory

- `ibmcloud api cloud.ibm.com`

- `ibmcloud login`

- Enter your credentials when prompted

- `ibmcloud target -o test-org_3qdsevx9 -s dev`

- `ibmcloud app push`