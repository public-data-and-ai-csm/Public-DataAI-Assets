# Watson Speech
 
Please also use the **[Watson Apps Community](https://community.ibm.com/community/user/watsonapps/home)**, and the [Watson APIs Topic Group](https://community.ibm.com/community/user/watsonapps/communities/community-home?communitykey=8c142458-ea99-4266-9c82-b4f0eccff834&tab=groupdetails) for collecting links to high quality technical enablement materials.

This is a "landing page" for Watson Speech services.  This includes both Watson Speech-to-Text (STT) and Watson Text-to-Speech (TTS).  Look here for links to high value technical content specific for this service.

## References for Further Reading
- [Why The Overall Voicebot Solution And User Experience Are More Important Than Speech Accuracy](https://medium.com/ibm-data-ai/why-the-overall-voicebot-solution-and-user-experience-are-more-important-than-speech-accuracy-d229bf54aede) - Do you want to have a successful working chatbot, that talks and understands what your customers are saying?  Read this article - great advice on setting appropriate expectations for quality and accuracy.
- [Watson Speech to Text: How to Plan Your Migration to the Next-Generation Models](https://medium.com/ibm-data-ai/watson-speech-to-text-how-to-plan-your-migration-to-the-next-generation-models-6b10605b3bc5) - some guidance on how to migrate to the newer, more accurate, speech models now available for Watson Speech-To-Text (August 2021).
- [Replacing My Old Interactive Voice Response (IVR) System with IBM Watson AI Technologies](https://medium.com/ibm-data-ai/moving-my-old-interactive-voice-response-ivr-system-to-ibm-watson-ai-technologies-cf0c66cd3dd3) - A great not-too-technical blog post by [Marco Noel](https://medium.com/@marconoel) on how to get from your current IVR nightmare, to a chatbot that your customers will find helpful and delightful.
- [Speech to Text (STT) API Reference](https://cloud.ibm.com/apidocs/speech-to-text/speech-to-text) - The API reference page for STT.
- [Text to Speech (TTS) API Reference](https://cloud.ibm.com/apidocs/text-to-speech/text-to-speech) - The API reference page for (TTS).
- [TTS/STT Redbook](http://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/sg248388.html) - A large document with some best practices and an example use case using NLU.  Very big, lots of details.
- [IBM Watson Text to Speech: Neural Voices Generally Available](https://medium.com/ibm-watson/ibm-watson-text-to-speech-neural-voices-added-to-service-e562106ff9c7) - Read about and listen to the newer more natural sounding voices that are available as of July 2019.
- [IBM STT Model Hits New Milestone](https://www.ibm.com/blogs/watson/2017/03/reaching-new-records-in-speech-recognition/) - no technical information here, but an overview of how STT is done, and how IBM continues to improve it's speech recognition models.
- [Data Collection and Training for Speech Projects](https://medium.com/ibm-watson/data-collection-and-training-for-speech-projects-22004c3e84fb) - great article with a step-by-step approach to training your speech based applications.

## Code
- [How To Control Background Noise with Watson Speech-To-Text](https://medium.com/ibm-data-ai/how-to-control-background-speech-and-noise-in-watson-speech-to-text-4a99e47a8676) - Find out how to optimize how well you are able to deal with noisy environments with your Watson Speech-To-Text service.
- [Simple Node.js STT App](https://github.com/watson-developer-cloud/speech-to-text-nodejs) - A simple starter app in Node.js that utilizes the Speech to Text service.
- [Train a Speech-to-Text Model Code Pattern](https://developer.ibm.com/patterns/customize-and-continuously-train-your-own-watson-speech-service/) - a demo and associated GitHub repo with code which highlights how to build out a specialized model for a Speech-to-Text service.
- [A Postman Collection for Training IBM Watson Speech to Text](https://medium.com/@ptuton/a-postman-collection-for-training-ibm-watson-speech-to-text-dfdda0c424f0) - a collection of Postman instructions and directions for using them, written by [Peter Tuton](https://github.com/ptuton), that you can use to customize a language model and an acoustic model for your improved Speech-to-Text service.

## Testing
- [New Python Scripts to Measure Word Error Rate on Watson Speech to Text](https://medium.com/@marconoel/new-python-scripts-to-measure-word-error-rate-on-watson-speech-to-text-77ecaa513f60) - nice blog post by [Marco Noel](https://medium.com/@marconoel) on how you can measure the accuracy of your Watson Speech model, with links to a GitHub project with a Pythin script that shows you how to do it.
- [Testing Strategies For Speech Applications](https://medium.com/ibm-watson/testing-strategies-for-speech-applications-4aebfedc4b4f) - make sure that you are testing your speech applications adequately.  Andrew Freed has some good approaches to doing testing in this area - it is not as easy as it sounds (pun intended).
- [Announcing the Release of the Voice Agent Tester](https://www.ibm.com/cloud/blog/announcements/announcing-the-release-of-the-voice-agent-tester) - a testing resource to use for testing and improving your voice agent over time.  It uses Watson Voice Gateway and Watson Speech services to test out your solution.

## Integrations
- [Wave Hello to Watson Assistant Voice Interaction, and Goodbye to Complex Phone Trees](https://medium.com/ibm-watson/wave-hello-to-watson-assistant-voice-interaction-and-goodbye-to-complex-phone-trees-9521c2b8cc85) - nice article by [Preeth](https://medium.com/@preethm) on using the [Watson Assistant for Voice Interaction (WAVI)](https://medium.com/ibm-watson/introducing-watson-assistant-for-voice-interaction-e64d04656fde) integration to eliminate phone trees and annoying IVR systems.
- [Quickly improve your voice agent with a speech model](https://medium.com/ibm-watson/quickly-improve-your-voice-agent-with-a-speech-model-15f20749cfb) - a great way to rapidly kickstart the use of a custom speech model to help make your chatbot really chat....

## Customizations
- [Watson Speech Services: Introducing a Simple Interface to Train STT and TTS Custom Models!](https://medium.com/ibm-data-ai/watson-speech-services-introducing-a-simple-interface-to-train-stt-and-tts-custom-models-912618d42d9b) - great article with links to a [GitHub repo](https://github.com/IBM/speech-customization-ui) that has a simple UI that can help you customize your Watson Speech services more easily.
- [Tune by Example: How to Tune Watson Text to Speech for Better Intonations](https://medium.com/ibm-data-ai/tune-by-example-how-to-tune-watson-text-to-speech-for-better-intonations-bcee8404d927) - nice article on how you cane tune the way that your Watson Text-To_Speech model talks.  Don't settle for "robotic" and choppy voices, have your responses sound natural and clear.
- [Why The Audio Compression Format Impacts the Speech to Text Transcription Accuracy](https://medium.com/ibm-data-ai/why-the-audio-compression-format-impacts-the-speech-to-text-transcription-accuracy-84da6438024c) - Great exploration of how the recording format of speech files has a direct impact on the quality of the training of your speech models.
