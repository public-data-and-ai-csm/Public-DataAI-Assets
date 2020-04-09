# Watson Assistant Skill Update Tool

## About

The Watson Assistant Skill Update Tool is a Node.js application that will accept a skill ID, API key, and skill .json file and update your existing skill with changes from the new, uploaded skill. It is essentially a UI for the `updateWorkspace()` method with `append=true` as a parameter.

### Structure

The project contains 2 parts: the client and the API. Each of the two folders has a corresponding README.md that will tell you how to install and run the application. It is advisable to start the API before the client.

    .
    ├── client                  # front-end files
    ├── api                     # api
    └── README.md               # you are here
