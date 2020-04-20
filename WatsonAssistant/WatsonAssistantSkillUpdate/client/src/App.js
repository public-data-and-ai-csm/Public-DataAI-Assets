import React, { Component } from 'react';
import './App.css';

// For testing locally
// let uploadUrl = "http://localhost:9000/";

// For deployment
let uploadUrl = "http://wa-update-tool-api.mybluemix.net/"

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
          <h2>Watson Assistant Update Tool</h2>
          <h5>Download the code here: <a href="https://github.com/public-data-and-ai-csm/Public-DataAI-Assets">https://github.com/public-data-and-ai-csm/Public-DataAI-Assets</a></h5>
        </header>
        <div className="bordered">
          <p><b>This tool will take an input file (WA skill) and append its differences to the skill you direct it to below. Using this tool, existing elements in your skill are preserved, and new elements are added. If any elements in the new data collide with existing elements, the update request fails and you will see an error.</b></p>
          <p>{this.state.error}</p>
          <form action={uploadUrl + "upload"} method="post" encType="multipart/form-data">
            <p>WARNING: Do NOT use this tool for a production skill. You may setup a copy of the skill and call it "dev" then perform this operation on that skill. Once you verify the changes are accurate, then you can upload to your production skill.</p>
            <p>
              <label>New Skill: </label><input type="file" name="file" />
            </p>
            <p>
              <label>API Key: </label>
              <input type="text" name="wa_apikey" size="75" />
            </p>
            <p>
              <label>Skill ID: </label>
              <input type="text" name="wa_skillid" size="75" />
            </p>
            <p>
              <button type="submit" value="submit" className="btn btn-success btn-block">Upload</button>
              <input type="reset"></input>
            </p>
          </form>
          <br />
        </div>
      </div>
    );
  }
}

export default App;
