# Public Watson Assistant Content

This folder contains a variety of tools, scripts and routines that you can use for Watson Assistant operations.

## Table of Contents

### Testing and Measuring

- **[Chatbot Testing Tool](https://github.com/public-data-and-ai-csm/Public-DataAI-Assets/blob/master/WatsonAssistant/CSM-BOT-KFold-Test.ipynb)** - [D. Toczala](https://github.com/dtoczala) - February 2020 - This Python notebook can be run by itself or from within Watson Studio.  You need to provide creds for the Watson Assistant instance to be tested, as well as a COS bucket where the results files will be stored.  You have the optiopn of not using COS for result logging.

### Tools

- **[Watson Assistant Skill Update Tool](https://github.com/public-data-and-ai-csm/Public-DataAI-Assets/tree/master/WatsonAssistant/WatsonAssistantSkillUpdate)** - [M. Langlais](https://github.com/modlanglais) - April 2020 - This Node.js app allows you to upload a skill to update your current skill in Watson Assistant without using the API directly. It is essentially a UI for the `updateWorkspace()` method with `append=true` as a parameter.
- **[Watson Assistant Extract Chat Logs Java Sample](https://github.com/public-data-and-ai-csm/Public-DataAI-Assets/tree/master/WatsonAssistant/WatsonAssistantExtractChatLogs)** - [T. Lai](https://github.com/timl1) - Sept 2020 - This Java sample shows you how to call the Watson Assistant V1 API to extract chat logs and write them out to a CSV file 
