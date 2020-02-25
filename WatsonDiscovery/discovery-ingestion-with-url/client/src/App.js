import React, { Component } from 'react';
import './App.css';

let uploadUrl = "http://localhost:9000/upload";

class App extends Component {
  state = {
    error: ''
  };

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Discovery Ingestion Tool with URL</h2>
          <h5>https://github.com/modlanglais/discovery-ingestion-with-url</h5>
        </header>
        <div className="bordered">
          <p><b>Add a new document to the collection</b></p>
          <p>{this.state.error}</p>
          <form action={uploadUrl} method="post" encType="multipart/form-data">
            <p>Select the file you would like to add to Discovery and (optionally) enter a URL to accompany it then click 'Upload'</p>
            <input type="file" name="file" />
            <label>Reference Link: </label>
            <input type="text" name="fileUrl" size="75" />
            <button type="submit" value="submit" className="btn btn-success btn-block">Upload</button>
            <input type="reset"></input>
          </form>
          <br />
        </div>
      </div>
    );
  }
}

export default App;