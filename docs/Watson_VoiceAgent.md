# Watson Voice Agent

This is a "landing page" for Watson Voice Agent.  In late 2019, IBM announced a new integrated solution called Watson Assistant for Voice Interaction (WAVI). This solution provides customers with an easy option to modernize their traditional Interactive Voice Response (IVR) system by enabling their end users to speak in natural language in order to get their problems solved. Say good-bye to complex phone trees ("press 1 for new reservations, press 2 for existing reservations") -- and hello to simple actions ("I need help changing my existing reservation for my trip to Hawaii on August 26").

## What is Watson Assistant for Voice Interaction (WAVI)?

Let's break down the four components behind the covers of this Watson Voice Agent. 

### Watson Assistant

Create your [Watson Assistant](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Assistant.html) skill in a similar way as a chatbot; train intents, entities, and write the dialog flow. The difference with a voice solution is you need to make sure you are tailoring it to an experience that will work for callers. Keep Watson responses short, and train it so it will be able to handle common voice utterances such as “um”, “sure”, “yep”, “nope”, etc.

### Speech to Text (STT)

As the name implies, this service transcribes voice into text in order to flow the input into the text-based Watson Assistant. The Base model for [Speech-To-Text](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Speech.html) is very good. You may not need to do any customization for your solution. However, custom training might be needed for other intents (e.g. for Watson to understand you say Gastroenterology or Otolaryngology).  Acoustic training can be done to handle accents or background noises.

### Text to Speech (TTS)

The [Text-To-Speech](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Speech.html) service takes the text output (response) from Watson Assistant and synthesizes it back into audio to be played to the caller.  There are two components here that you should be aware of.

1. **Voices** - It's important that you select a Watson voice that resonates with the end user. To address the common customer complaint about the voice sounding robotic, in 2019 we announced neural voices - a HUGE advancement in our Speech capabilities and a major difference maker for us. To help you select a voice, check out [this page with voice samples](https://cloud.ibm.com/docs/text-to-speech?topic=text-to-speech-voices#languageVoices).

1. **Custom Words** - If you notice Watson mispronouncing words, you can easily create custom words (with pronunciation). While many applications will not require custom words, for a different caller scenario you might have to train Watson on specific terms (such as Gastroenterology and Otolaryngology). For more information check out the [documentation on customization](https://cloud.ibm.com/docs/text-to-speech?topic=text-to-speech-customIntro).

### Voice Gateway

IBM’s Voice Gateway is a SIP orchestrator and a very important part of voice-over-IP technology that handles the orchestration between the caller (telephone) and Watson. No steps are required for setup since the WAVI solution handles them for you.

- **SMS** - The WAVI solution improves the user experience by sending the user a text message with important information (URLs, Google Map directions, long responses) that is otherwise hard to communicate over voice.
- **Barge In** - Lets you choose whether a user can interrupt Watson in the middle of a response. There's a trade-off to consider here, but as long as you keep Watson responses short, turning off Barge In ensures a cough or background noise does not interrupt a dialog.
- **DTMF**- Allows users to press numbers on their phone to provide Watson with inputs. Useful for situations where you want a higher accuracy for numbers so Watson does not confuse "eight" vs "ate" or "four" vs "floor".

Note: Each of these components (Cloud services) are provisioned over WAVI’s simple user interface and the solution does the integration behind the covers. You do need a SIP Trunk to enable you to dial a phone number in order to connect to the solution. Enterprises use major providers such as Avaya, Cisco, or Mitel - but you can [sign up for a Twilio trial account](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account) and get one for free. 

## References for Further Reading
- [Getting started tutorial](https://cloud.ibm.com/docs/services/voice-agent?topic=voice-agent-getting-started) - a hands-on tutorial to get you started with the solution.
- [Video with step-by-step instructions](https://developer.ibm.com/tv/building-voice-enabled-cognitive-applications-with-watson/#comments) - if you like video better, try this out.  it's done by Ronan Dalton (we like Ronan) and it's about 7 minutes long.
- [Medium announcement of WAVI](https://medium.com/ibm-watson/introducing-watson-assistant-for-voice-interaction-e64d04656fde) - the original announcement on the [IBM Watson channel](https://medium.com/ibm-watson) on Medium.
