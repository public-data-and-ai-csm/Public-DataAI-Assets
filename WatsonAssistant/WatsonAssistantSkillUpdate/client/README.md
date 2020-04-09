# Watson Assistant Skill Update Tool

## Installation

To test the app locally:

- CD to the `client` directory

- `npm install` to install the Node packages

- IF you are running the app locally, change the `uploadUrl` variable in `src/App.js` on line 4 to `http://localhost:9000/`

- IF you are deploying the app, change the `uploadUrl` varible in `src/App.js` on line 4 to your API url, i.e. `http://wa-update-tool-api.mybluemix.net`

- Update your `manifest.yml` file to include the name of your app, such as `wa-update-tool-api`

- `nodemon start` to run

## Deploy

From the command line:

** Before deploying, make sure `uploadUrl` points to the your API endpoint: `https://my-app-name-api.mybluemix.net/` **

- CD to the `client` directory

- `ibmcloud api cloud.ibm.com`

- `ibmcloud login`

- Enter your credentials when prompted

- `ibmcloud target -o [org-name] -s [space-name]`

- `ibmcloud app push`