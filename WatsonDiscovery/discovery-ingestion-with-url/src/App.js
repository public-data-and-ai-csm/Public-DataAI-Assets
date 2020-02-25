import React, { Component } from 'react';
import './App.css';
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: process.env.DISC_APIKEY,
  }),
  url: process.env.DISC_URL,
});

const collectionId = process.env.DISC_COLLECTIONID;
const environmentId = process.env.DISC_ENVIRONMENTID;

class App extends Component {
  state = {
    cfResponse: '',
    selectedFile: null,
    fileUrl: '',
    error: ''
  };

  componentDidMount() {
  }

  onFileChange = e => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  onUrlChange = e => {
    this.setState({
      fileUrl: e.target.value
    })
  }

  onClickHandler = (e) => {
    e.preventDefault();
    // TODO: Make sure it is the proper file type i.e. .docx, .pdf, etc.
    // should be able to handle just doc or just URL
    // TODO: Create the backend to handle this

    console.log("Oh look there's a file. Yay!");

    // const addDocumentParams = {
    //   environmentId: environmentId,
    //   collectionId: collectionId,
    //   file: browserify.createReadStream(this.state.selectedFile),
    //   // file: this.state.selectedFile,
    //   metadata: { url: this.state.fileUrl }
    // };

    // discovery.addDocument(addDocumentParams)
    //   .then(documentAccepted => {
    //     console.log(JSON.stringify(documentAccepted, null, 2));
    //   })
    //   .catch(err => {
    //     console.log('error:', err);
    //   });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>CSM Bot Discovery Ingestion Tool</h2>
          <h5>https://github.com/modlanglais/discovery-ingestion-with-url</h5>
        </header>
        <div className="bordered">
          <p><b>Add a new document to the collection</b></p>
          <p>{this.state.error}</p>
          <form>
            <p>Select the file you would like to add to the CSM bot and (optionally) enter a URL to accompany it then click 'Upload'</p>
            <input type="file" name="file" onChange={this.onFileChange} />
            <label>Reference Link: </label>
            <input type="text" name="fileUrl" size="75" onChange={this.onUrlChange} />
            <button type="submit" value="submit" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
            <input type="reset"></input>
          </form>
          <br />
        </div>
      </div>
    );
  }
}

export default App;