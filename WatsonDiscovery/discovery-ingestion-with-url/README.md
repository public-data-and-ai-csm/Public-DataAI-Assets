# Discovery Ingestion Tool w/ URL

## About

The Discovery Ingestion Tool is a Node.js application that will accept a document and corresponding URL from the user, add it to Cloud Object Storage, then submit it to Discovery for ingestion AND append the URL as a metadata field for the document. The idea is that when using the search skill with a chatbot, you will be able to link to the specified URL instead of just returning a partial document.

### Structure

The project contains 2 parts: the client and the API. Each of the two folders has a corresponding README.md that will tell you how to install and run the application. It is advisable to start the API before the client.

    .
    ├── client                  # front-end files
    ├── api                     # api
    └── README.md               # you are here