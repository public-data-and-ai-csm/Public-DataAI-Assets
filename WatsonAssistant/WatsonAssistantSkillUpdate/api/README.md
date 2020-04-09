# Watson Assistant Skill Update Tool (API)

This app creates an API endpoint `/upload` that the front-end will call in order to process your skill and upload it to Assistant.

## Installation

To test the app locally:

- CD to the `api` directory

- `npm install` to install the Node packages

- Update `manifest.yml` with your application API name. This will be part of your URL, i.e. wa-skill-update-api.mybluemix.net

- `nodemon start` to run

## Deploy

From the command line:

- CD to the `api` directory

- `ibmcloud api cloud.ibm.com`

- `ibmcloud login`

- Enter your credentials when prompted

- `ibmcloud target -o your-org-name -s your-space-name`

- `ibmcloud app push`