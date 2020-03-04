# Watson Assistant

This is a "landing page" for Watson Assistant.  Look here for links to high value technical content specific for this service.

## References for Further Reading
- [Cognitive Class - How to Build a Chatbot](https://cognitiveclass.ai/courses/how-to-build-a-chatbot/) - a Cognitive Class offering that will help you build up and learn how to build your own chatbot.
- [Conversation Redbook](http://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/sg248394.html) - A large document with some best practices and example use cases using Assistant.  Very big, lots of details.
- [Conversational Assistants and Quality with Watson Assistant — Revisited](https://medium.com/@dtoczala/conversational-assistants-and-quality-with-watson-assistant-revisited-123fb3bb9f1f) - nice blog post that highlights some best practices for a deployed chatbot with Watson Assistant.  Check out the Python notebook with k-fold testing and intent analysis.
- [Best Practices for Building and Maintaining a Chatbot](https://medium.com/ibm-watson/best-practices-for-building-and-maintaining-a-chatbot-a8b78f0b1b72) - great article that highlights some of the things that you have to consider when you are building a chatbot that is going to be a REAL chatbot.

## Intents
- [Defining Intents](https://cloud.ibm.com/docs/services/assistant?topic=assistant-intents#intents) - great starter page with video to help you in defining your intents.
- [Compund Questions](https://sodoherty.ai/2017/02/06/compound-questions/) - Nice article on a technique for detecting compound questions.
- [Watson in the White and Black Room](https://sodoherty.ai/2017/02/10/watson-in-the-black-and-white-room/) - Quick article on understanding Watson confidence scores.

## Entities
- [Defining Entities](https://cloud.ibm.com/docs/services/assistant?topic=assistant-entities) - great starter page with video to help you in defining your entities.
- [Improving Your Intents with Entities](https://sodoherty.ai/2017/01/16/improving-your-intents-with-entities/) - an exploration of how intents and entities work together.

## Dialog
- [Building Dialogs](https://cloud.ibm.com/docs/services/assistant?topic=assistant-dialog-build) - great starter page with video to help you in defining your entities.  It's a long page, but building a dialog can be a complex task.
- [SpEL Language Guide](https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#expressions-language-ref) - Valid expressions in conditions are written in the Spring Expression (SpEL) language.  This is a reference guide for the SpEL language.
- [Using Advanced Dialog Features](https://medium.com/ibm-watson/using-advanced-dialog-features-in-watson-conversation-5c0cea89e9b3) - great article with some tips on how to address some common challenges in Dialog flows, like counters, handling multiple intents, handling topic switches, and using pattern entities.
- [Pattern for Gathering Information with Conversation](https://ollycox.me/2016/11/18/pattern-for-gathering-information-in-ibm-watson-conversations/) - an example (with code) of gathering multiple pieces of information in a Conversation flow.
- [Gathering Information with Conversation](https://medium.com/@snrubnomis/gathering-information-with-ibm-watson-conversation-e23887ccbe3d) - a nice example using a pizza ordering use case that demonstrates using "frames" in Conversation to collect a series of inputs from a user.

## Integration
- [It’s Now Way Easier to Personalize Your Assistant!](https://medium.com/ibm-watson/its-now-way-easier-to-personalize-your-assistant-9a23a9cadd4) - great article by [Mitch Mason](https://medium.com/@mitchellmason) on how to use Webhooks to integrate your own applications with Watson Assistant, and how to use this to add some personality to your chatbot or assistant.
- [Build a configurable, retail-ready chatbot](https://developer.ibm.com/technologies/artificial-intelligence/patterns/create-cognitive-retail-chatbot/) - this is a good example of integrating usage of Assistant and Discovery, along with some other things.  It includes code as well.
- [Learn how to export & import a Watson Assistant workspace](https://github.com/rodalton/export-import-wa-workspace) - great little guide done by [Ronan Dalton](https://github.com/rodalton) (with curl examples) of how to migrate your work via API calls from one Watson Assistant workspace to another.  We like Ronan - he comes up with some really great stuff.
- [Watson Conversation: How to Manage Workspaces](https://www.ibm.com/blogs/bluemix/2017/04/watson-conversation-manage-workspaces/) - great article and [code for a Watson Assistant workspace management tool](https://github.com/data-henrik/watson-conversation-tool).
- [Extending Your Watson Chatbot](https://medium.com/@dtoczala/entending-your-watson-chatbot-fbd3291e0dd2) - article describing how to enable the Watson Assistant/Watson Discovery integration, allowing you to extend the capabilities of your chatbot to address those "long tail" questions.

## Code
- [Watson Assistant API Reference](https://cloud.ibm.com/apidocs/assistant/assistant-v1) - The API reference page.  be aware that there is also an [Assistant V2 API reference page](https://cloud.ibm.com/apidocs/assistant/assistant-v2), which covers the V2 API which does different things than the V1 API.
- [How to Use Watson Assistant with Webhooks](https://www.youtube.com/watch?v=5z3i5IsBVnk&feature=youtu.be) - great video that covers using Webhooks with Watson Assistant and IBM Cloud Functions.  [Morgan Langlais](https://github.com/modlanglais) also shares some code with you out on GitHub in her [Webhook demo](https://github.com/modlanglais/assistant-webhook-demo) project. 
- [10 Steps to Train a Chatbot and its Machine Learning Models to Maximize Performance](
https://developer.ibm.com/dwblog/2016/10-steps-train-chat-bot-chatbot-machine-learning/) - this outlines the methodology for training chatbots and the associated machine learning models to maximize performance. Although presented in the context of chatbots due to their high popularity, the methodology applies to all cognitive solutions, not just chatbots.  Old, but still relevant.
- [Chatbot with Conversation, NLU and Weather](https://developer.ibm.com/dwblog/2017/chatbot-watson-conversation-natural-language-understanding-nlu/) - developerWorks article that walks you through setting up and cloning a project that will build a chatbot that uses Assistant, NLU and Weather.  Good example and you can poke through the code.
- [Introducing Version Control in Watson Assistant](https://medium.com/ibm-watson/watson-assistant-versions-announcement-d60869b1f5f) - the announcement of the ability to create versions of your Watson Assistant skills, with a nice explanation of how it works. 

## Testing
- [Testing Strategies for Chatbots (Part 1)— Testing Their Classifiers](https://medium.com/ibm-watson/testing-strategies-for-chatbots-part-1-testing-their-classifiers-20becaf5f211) - make sure that you are testing your intents and classifiers adequately.  Andrew Freed has some good approaches to doing testing in this area.
- [Testing Strategies for Chatbots (Part 2)— Testing Their Dialog Logic](https://medium.com/ibm-watson/testing-strategies-for-chatbots-part-2-testing-their-dialog-logic-58e5f0e5548c) - make sure that you are testing your dialogs adequately.  Andrew Freed has some good approaches to doing testing in this area, in part 2 of a series on chatbot testing.
- [Testing a Chatbot with k-folds Cross Validation](https://medium.com/ibm-watson/testing-a-chatbot-with-k-folds-cross-validation-68dab111a6b) - another Andrew Freed blog post with links to a [k-fold testing tool](https://github.com/cognitive-catalyst/WA-Testing-Tool) out on GitHub.
- [How to Design the Training Data for an AI Assistant](https://medium.com/ibm-watson/announcing-dialog-skill-analysis-for-watson-assistant-83cdfb968178) - this introduces a [Dialog skill testing notebook](https://github.com/watson-developer-cloud/assistant-dialog-skill-analysis), which is a really interesting concept. It attemopts to give you a solid look at the entire skill - not just classification.

## Logs
- [Improve Your Chatbot using Watson Assistant Chat Logs](https://chatbotslife.com/improve-your-chatbot-using-watson-conversation-chat-logs-54a36b671261) - nice article showing you how to use the Assistant chat logs to provide feedback on chatbot performance and operations, and use that information to improve your chatbot.
- [I love Pandas!](https://sodoherty.ai/2017/04/19/i-love-pandas) - quick but informative blog post on how to use the Python pandas library to analyze your Assistant logs.
- [Improve your Premium Development Instance with Intent Recommendations](https://github.ibm.com/pratyushsingh/Logs-Retrieval-Watson-Assistant) - Customers using a premium instance of Watson Assistant will get pertinent data for their intent recommendations feature in their production environment. If however, they are using a separate premium instance, or “slot”, for lower development environments they will not be able to see those recommendations in the workspaces/skills on that slot. This script addresses that need to export and import those intent recommendations.  Developed by [Prat Singh](https://github.ibm.com/pratyushsingh).
