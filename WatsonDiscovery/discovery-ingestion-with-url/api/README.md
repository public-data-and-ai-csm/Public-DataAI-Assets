# Discovery Ingestion Tool (API)

This app creates an API endpoint `/upload` that the front-end will call in order to process your document and upload it to Cloud Object Storage and Discovery.

## Installation

To test the app locally:

- CD to the `api` directory

- `npm install` to install the Node packages

- Update the .env file with credentials and rename from .env.example to .env

- Update `manifest.yml` with your application API name. This will be part of your URL, i.e. discovery-ingestion-with-url-api.mybluemix.net <- This will be your HOME_URL (see next step).

- IF you are running the app locally, comment out `HOME_URL` in the .env file under the `#PROD` section then un-comment `HOME_URL` in the `#DEV` section

- `nodemon start` to run

## Deploy

From the command line:

- CD to the `api` directory

- `ibmcloud api cloud.ibm.com`

- `ibmcloud login`

- Enter your credentials when prompted

- `ibmcloud target -o your-org-name -s your-space-name`

- `ibmcloud app push`