# Welcome to Watson
Cognitive computing can be complex, but we're here to help you make sense of it.  This is a technically focused set of pages that will allow you to explore the technology, see the latest best practices, and help you master cognitive application development.
# Contents
- **[Introduction](#introduction---getting-started)**
  - [The IBM Cloud](#the-ibm-cloud)
  - [Support on the IBM Cloud](#support-on-the-ibm-cloud)
- **[Watson Services and APIs](#watson-services-and-apis)**
  - [Watson Assistant](#watson-assistant)
  - [Watson Discovery](#watson-discovery)
  - [Watson Language Translator](#watson-language-translator)
  - [Watson Natural Language Understanding (NLU)](#watson-natural-language-understanding-nlu)
  - [Watson Natural Language Classifier (NLC)](#watson-natural-language-classifier-nlc)
  - [Watson OpenScale](#watson-openscale)
  - [Watson Personality Insights](#watson-personality-insights)
  - [Watson Speech (STT/TTS)](#watson-speech-stttts)
  - [Watson Tone Analyzer](#watson-tone-analyzer)
  - [Tradeoff Analytics](#watson-tradeoff-analytics)
  - [Visual Recognition](#watson-visual-recognition)
  - [Watson Knowledge Studio](#watson-knowledge-studio-wks)
  - [Watson Studio](#watson-studio)
- **[Common Use Cases](#common-use-cases)**
  - [Chatbots](#chatbots)
  - [Visual Inspection](#visual-inspection)
- **[Cognitive Development Topics](#cognitive-development-topics)**
  - [General Cognitive Development Information](#general-cognitive-development-information)
  - [Cognitive Architectures](#cognitive-architectures)
  - [The Importance of Data](#the-importance-of-data)
  - [DevOps with Cognitive on IBM Cloud](#devops-with-cognitive-on-ibm-cloud)
  - [Testing Approaches and Methods](#testing-approaches-and-methods)
  - [Watson/IBM Cloud Security Concerns](#watsonibm-cloud-security-concerns)
- **[Code Development Resources and GitHub Repositories](#code-development-resources-and-github-repositories)**
  - [Development Resources](#development-resources)
  - [Learning and Training](#learning-and-training)
- **[Common Tips and Tricks](#common-tips-and-tricks)**
  - [Staying Aware of Watson and Cloud Best Practices](#staying-aware-of-watson-and-cloud-best-practices)

---
# Introduction - Getting Started

## The IBM Cloud
Watson is the collection of cogntive services hosted on the [IBM Cloud](https://cloud.ibm.com/) platform.  They are available as cloud based services.  These services include all of the services listed below.  Many of these services can also be used in an "on premises" mode, with the use of IBM Cloud Packs.  These pages cover the basics about these services, and will get into some technical detail - most of which also apply to these services on other platforms (like the IBM Cloud Packs).

### References for Further Reading
- [IBM Cloud Account Setup](https://cloud.ibm.com/docs/account?topic=account-account_setup#account_setup) - A simple set of guidelines for getting started.
- **[Getting Started Right on the IBM Cloud](https://dtoczala.wordpress.com/2018/09/20/getting-started-right-on-the-ibm-cloud/)** - A blog post by [Dan Toczala](https://github.ibm.com/dtoczala) that covers a lot of the things that you need to know BEFORE getting your corporate account all set up and ready to deploy your first applications.
- [Cloud Architecture Center](https://www.ibm.com/cloud/architecture/architectures/dataAIArchitecture) - basic architecture concepts and patterns for Cloud and Cognitive development.
- [Watson Cognitive Developer Certification Study Guide](https://github.com/havasnewyork/IBM-Watson-Developer-Certification-Study-Guide) - a nice guide on GitHub with a nice background on core cognitive principles and concepts.  A bit acedemic, it goes into some detail on neural networks and other concepts which are nice to know, but not required for using the Watson services effectively.  Parts of this are out of date, but the review of Cognitive Computing Fundamentals is pretty solid.
- [Authentication for your App on the IBM Cloud](https://dtoczala.wordpress.com/2019/11/18/authentication-for-your-app-on-the-ibm-cloud/) - a quick blog post that covers how to effectively authenticate from within your application, when using Watson services on the IBM Cloud.
- [Watson Developer Articles](https://developer.ibm.com/technologies/artificial-intelligence/articles/#) - these are articles on a variety of topics.  Some are just high level recaps of successful Watson applications, but some do get into technical depth on various different topics.
- [Watson Developer Blogs](https://medium.com/ibm-watson) - don't be fooled by the title, most of the blog entries here are more along the lines of announcements of new capabilities available with Watson.  Some technical content here, but it's good to follow this to remain aware of the new things coming.

## Support on the IBM Cloud

In traditional support scenarios, support comes along with the purchase of product licenses.  How does support work when you are just paying for what you use on the IBM Cloud?  Is my support metered too?  Do I have to pay by the ticket?  No, you don't.  Support on the IBM Cloud looks like this:

If you are like me, you use an unpaid (either trial or free) IBM Cloud account.  You are not paying anything for using it.  For these accounts, you begin with just preliminary support.  It means that you start with just very simple support - no support for the services on the IBM Cloud, just for the Cloud infrastructure itself.

Creating tickets is available to EVERYONE within the context of their own account.  In the context of another account (like most individual user situations), this ability is granted to particular users.  This is done through account management on the IBM Cloud (read more about IAM here).  

Once an account starts to spend money, they get **[BASIC support](https://cloud.ibm.com/docs/get-support?topic=get-support-support-plans#basic-support)**.  This gets you 24 x 7 access to the IBM Cloud technical support team through support cases.  Phone and chat are available for these customers, but there are no SLA's (service level agreements), and responses may not be as quick as you might like.  This support is still kind of basic (thus the name).

If you want something a bit more robust, you can pay for **[ADVANCED support](https://cloud.ibm.com/docs/get-support?topic=get-support-support-plans#standard-support)**. This gets you 24 x 7 access to the IBM Cloud technical support team through support cases, phone and chat.  There are some specific SLA's for different severity levels of support case.   Responses may not be as detailed as you might want, but IBM Support will give your case some priority.  This is typically what we would suggest for a customer that has one or two production applications deployed or dependent on the IBM Cloud.

If you want something even more robust, you can pay a little more for **[PREMIUM support](https://cloud.ibm.com/docs/get-support?topic=get-support-support-plans#premium-support)**.  Premium support gives you the usual access to support tickets, phone and chat.  The SLA's for Premium support are even more responsive than those associated with the Advanced support plan (which is what you would expect).  In addition to better priority and quicker responsiveness, you also get access to IBM experts, which can help you when you are looking at strategic uses of the IBM Cloud.  You will also get an Technical Account Manager assigned to you - and they will help you manage your support tickets, and make sure that the IBM Cloud is providing value to you.  This contribution to your business goals is covewred in. quarterly business reviews.  This is typically what we would suggest to a customer that has a large number of applications either deployed or dependent on the IBM Cloud - where the IBM Cloud is a major part of your IT infrastructure.

### References for Further Reading
- [Basic, Advanced, and Premium Support plans](https://cloud.ibm.com/docs/get-support?topic=get-support-support-plans) - the most up-to-date info on support plans and what to expect - from the IBM Cloud documentation.

---
# Watson Services and APIs
The following section will focus on the various Watson services and API's, providing links to high quality technical content focused specifically on these services.  This is an overview of each of these services, click on the links to go to the individual landing pages for each service to find materials that are specific to that service.  This is meant as more of a high level description and review of the capabilities of the services and business value that they bring.  For the technical details, go diving into those service specific pages.

## Watson Assistant
The Watson Assistant was formerly called Watson Conversation, and you might still here some people refer to it as that.  The name was changed in March 2018 - but now most people I know of refer to it by it's real name, Watson Assistant.

The Assistant service allows you to add a natural language interface to your application, and to automate interactions with your end users. Common applications include virtual agents and chat bots that can integrate and communicate on any channel or device.

The tooling used to "develop" the Assistant service consists of three parts.  The first part deals with user intents.  The purpose of intents is to map “what a user says” to “what a user means”. Because of the wide variety of utterances users say to mean the same intent, Watson Assistant leverages deep learning technology to extract intents from user statements (often called utterances). You, as the app developer, have complete control in defining what intents are relevant to your application. Once you’ve defined your list of intents, you need to teach Watson how to recognize these intents by providing it with sample utterances and how they map to these intents. Probably the most common question we get from developers is “how many sample utterances do I need to provide”. While the tool requires a minimum of five sample utterances, the general guideline is “the more the better”. We’ve typically seen good results with 10-30 sample utterances per intent. The key observation is to try and capture real end-user input utterances and then map those to the intents you’ve defined for your application.  We mean REAL utterances, with misspellings, bad grammar, "umms", and all of the other things that can make communication a challenge.

The second part handles Entities.  Entities provide specific information that your bot can leverage to provide most relevant response. For example, if the user’s utterance is “I would like to book a flight to Paris”, then the intent might be “book_flight”, and the entity would be “Paris”. You, as the app developer, define the entities that are relevant for your application by providing a list of entity names and for each entity, a list of values and for each value a corresponding list of synonyms.  

Once intents and entities are defined in the Assistant service, it is the third part, called Dialog, that actually orchestrates the conversation based on extracted intents and entities, as well as context provided by the application. Context is an extremely important concept as it is the bridge that links the Assistant service to your bot (or application). Any information communicated back and forth between the Assistant service and the bot goes across through the context variables. Dialog consists of a number of user defined nodes where each node executes based on whether its condition is true. Think of each node as an “if” condition where the condition checked is based on a combination of intents, entities, and context variables (or any derived variables). If the condition is true, then the node executes; if not, the flow continues to the next node in the dialog. Please note that the order of the nodes is important as the flow executes top to bottom, left to right.

### References for Further Reading
- [Watson Assitant Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Assistant.html) - our landing page with Watson Assistant specific links to more general information, best practices, and technical details about the service.
- [Watson Assistant Demos, Videos, and Hands-On Labs](https://www.ibm.com/demos/collection/Watson-Assistant/) - these are maintained and change over time.  If you have trouble visualizing how the Assistant service is used, or how it provides value for users, check out these resources.
- [Getting Started with Watson Assitant](https://cloud.ibm.com/docs/services/assistant?topic=assistant-getting-started) - our getting started page from the online Watson Assitant documentation.

## Watson Discovery
The Watson Discovery service helps you gather insights from large amounts of data, similar to a search engine.  The big difference is that the Discovery service doesn't just "look for keywords", it understands concepts as well.  Discovery lets you upload (or ingest) your own enterprise data and then uses its enrichment capabilities to understand the data and gather insights.  You can use Discovery in various use cases such as capturing insights from data as well as question/answer use cases where the corpus consists of a large number of documents and the objective is to find the most relevant answers to a query.

This can also be used in conjunction with custom annotation/ontology models developed using Watson Knowledge Studio, enabling you to identify industry/domain specific entities and relations in the ingested content.  

Another interesting feature of Discovery is that it comes preinstalled with a Watson News data set.  This is a public data set of the news, with approximately 300,000 articles and blogs daily, that is pre-enriched with cognitive insights. This results in a data set of primarily English language news sources that is updated continuously. You can use the Discovery News capability to query this data set for insights that you can integrate directly into your application.

### References for Further Reading
- [Watson Discovery Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Discovery.html) - our landing page with Watson Discovery specific links to more general information, best practices, and technical details about the service.
- [Watson Discovery Demos, Videos, and Hands-On Labs](https://www.ibm.com/demos/collection/Watson-Discovery/) - these are maintained and change over time.  If you have trouble visualizing how the Discovery service is used, or how it provides value for users, check out these resources.
- [Getting Started with Watson Discovery](https://cloud.ibm.com/docs/services/discovery?topic=discovery-getting-started) - our getting started page from the online Watson Discovery documentation.

## Watson Language Translator
From translating documents, apps, and websites to creating multilingual chatbots, what will you build? Instantly translate your content into multiple languages. Add on to your base translation model via corpus customization; which allows you to create your own translation models which account for regional or industry-specific terms. 

### References for Further Reading
- [Watson Language Translator Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Translation.html) - our landing page with Watson Language Translator specific links to more general information, best practices, and technical details about the service.  
- [Getting Started with Watson Language Translator](https://cloud.ibm.com/docs/services/language-translator?topic=language-translator-gettingstarted) - our getting started page from the online Watson Language Translator documentation.

## Watson Natural Language Understanding (NLU)
The Natural Language Understanding (NLU) service allows you to analyze text to extract meta-data from supplied content such as concepts, entities, keywords, categories, sentiment, emotion, relations, and semantic roles.  It also has the capability to be used in conjunction with custom annotation models developed using Watson Knowledge Studio, enabling you to identify industry/domain specific entities and relations in unstructured text.

It has replaced most of the functionality that was previously exposed in the Alchemy Language service.  Users who utilized Alchemy Language in the past are now encouraged to use the Watson NLU service.

### References for Further Reading
- [Watson NLU Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_NLU.html) - our landing page with Watson NLU specific links to more general information, best practices, and technical details about the service.  
- [Watson NLU Demos, Videos, and Hands-On Labs](https://www.ibm.com/demos/collection/Watson-Natural-Language-Understanding) - these are maintained and change over time.  If you have trouble visualizing how NLU is used, or how it provides value for users, check out these resources.
- [Getting Started with Watson Natural Language Understanding (NLU)](https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-getting-started) - our getting started page from the online Watson Natural Language Understanding (NLU) documentation.

## Watson Natural Language Classifier (NLC)
The Natural Language Classifier service applies cognitive computing techniques to return the best matching classes (typically referred to as intents) for a sentence or phrase. For example, you submit a question and the service returns keys to the best matching intents. You create a classifier instance by providing a set of utterances and a corresponding set of correct intents for each training question. After training, the new classifier can accept new questions or phrases and return the top matches with a probability score for each match.

This is the same kind of "intent detection" capability that you see in the [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) service - and we encourage new users to use the [Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) service instead.  It provides more and better tools for managing and testing yopur classification engine.

### References for Further Reading
- [Watson NLC Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_NLC.html) - our landing page with Watson NLC specific links to more general information, best practices, and technical details about the service.  Not a lot of info here, most users of the service are "legacy" users who used this service before the Watson Assistant service was available.
- [Watson NLC Demos, Videos, and Hands-On Labs](https://www.ibm.com/demos/collection/Watson-Natural-Language-Classifier) - these are maintained and change over time.  If you have trouble visualizing how NLC is used, or how it provides value for users, check out these resources.
- [Getting Started with Watson Natural Language Classifier (NLC)](https://cloud.ibm.com/docs/services/natural-language-classifier?topic=natural-language-classifier-natural-language-classifier) - our getting started page from the online Watson Natural Language Classifier (NLC) documentation.


## Watson OpenScale
Watson OpenScale allows enterprises to automate and operationalize the AI lifecycle in business applications.  It will help ensure that AI models are free from bias, can be easily explained and understood by business users, and are auditable in business transactions. OpenScale supports AI models built and run in Watson Studio.  Examples are Watson Machine Learning, Azure ML, Amazon SageMaker, and others.  

### References for Further Reading
- [Watson OpenScale Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_OpenScale.html) - our landing page with Watson NLC specific links to more general information, best practices, and technical details about the service.
- [Getting Started with Watson OpenScale](https://cloud.ibm.com/docs/services/ai-openscale?topic=ai-openscale-gettingstarted#gettingstarted) - our getting started page from the online Watson OpenScale documentation.

## Watson Personality Insights (PI)
Watson Personality Insights (often abbreviated as PI) derives insights from written and social media data to identify psychological traits which can influence personal decisions, intent and behavioral traits; all of which can be utilized to improve customer interactions, customer engagement, and customer satisfaction.  The service needs samples of a user's written communications, and uses these to build a psychological profile and will identify psychological traits which determine purchase decisions, intent and behavioral traits; which can then be utilized to improve conversion rates.

### References for Further Reading
- [Watson PI Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Personality.html) - our landing page with Watson PI specific links to more general information, best practices, and technical details about the service.
- [Getting Started with Watson Personality Insights (PI)](https://cloud.ibm.com/docs/services/personality-insights?topic=personality-insights-gettingStarted) - our getting started page from the online Watson Personality Insights (PI) documentation.


## Watson Speech (STT/TTS)
Watson Speech services include both Speech to Text (STT) and Text to Speech (TTS).  These are well understood capabilities, so no use in going into a long and boring explanation.  They convert spoken word to text, and text to spoken word.  There is support for [multiple different languages](https://cloud.ibm.com/docs/services/speech-to-text?topic=speech-to-text-models) - and this is expanding over time, so if your target language isn't supported today, contact someone and see if it is on the roadmap to be supported in the future.  Watson Speech services are often coupled with [Watson Natural Language Understanding (NLU)](#watson-natural-language-understanding-nlu) or [Watson Assistant](#watson-assistant), to help form compelling cognitive applications.

Often latency can be an issue with STT, and is is HIGHLY recommended that you you use Web Sockets for your data transfer when using STT.  It greatly reduces the latency (as compared to http).

### References for Further Reading
- [Watson Speech Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Speech.html) - our landing page with Watson Speech specific links to more general information, best practices, and technical details about the service.
- [Getting Started with Watson Speech to Text (STT)](https://cloud.ibm.com/docs/services/speech-to-text?topic=speech-to-text-gettingStarted) - our getting started page from the online Watson Speech to Text (STT) documentation.
- [Getting Started with Watson Text to Speech (TTS)](https://cloud.ibm.com/docs/services/text-to-speech?topic=text-to-speech-gettingStarted) - our getting started page from the online Watson Text to Speech (TTS) documentation.


## Watson Tone Analyzer
Watson Tone Analyzer leverages cognitive linguistic analysis to identify a variety of tones at both the sentence and document level. This insight can then used to refine and improve communications. It detects two types of tones, emotion (anger, fear, joy and sadness), and language styles (analytical, confident and tentative) from the input text.

### References for Further Reading
- [Watson Tone Analyzer Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Tone.html) - our landing page with Watson Tone Analyzer specific links to more general information, best practices, and technical details about the service.
- [Getting Started with Watson Tone Analyzer](https://cloud.ibm.com/docs/services/tone-analyzer?topic=tone-analyzer-gettingStarted) - our getting started page from the online Watson Tone Analyzer documentation.

## Watson Tradeoff Analytics
This service has been deprecated.  

## Watson Visual Recognition
The Watson Visual Recognition API is used for vision services.  The service has a "general" model which it uses to classify things in submitted images.  You can also train the service to recognize more specific items in images.  Be careful, people will sometimes abbreviate this and call it Watson VR - which might give some people that impression that it is a virtual reality service.  It isn't.

Often when doing analysis of pictures, it is useful to "tile" the image, and break it down into smaller chunks.  See the link to the [Visual Recognition Tile Localization](https://github.com/IBM-Bluemix/Visual-Recognition-Tile-Localization) tool, which is a KEY component for segmenting larger images into bite size pieces for Visual Recognition.

### References for Further Reading
- [Watson Visual Recognition Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Visual.html) - our landing page with Watson Visual Recognition specific links to more general information, best practices, and technical details about the service.
- [Watson Visual Recognition Demos, Videos, and Hands-On Labs](https://www.ibm.com/demos/collection/Watson-Visual-Recognition) - these are maintained and change over time.  If you have trouble visualizing how Visual Recognition is used, or how it provides value for users, check out these resources.
- [Getting Started with Watson Visual Recognition](https://cloud.ibm.com/docs/services/visual-recognition?topic=visual-recognition-getting-started-tutorial) - our getting started page from the online Watson Visual Recognition documentation.


## Watson Knowledge Studio (WKS)
The Watson Knowledge Studio is used to teach Watson the language of your domain, creating custom models that identify entities and relationships unique to your industry, in unstructured text. You are able to build your models in a collaborative environment designed for both developers and domain experts, without needing to write code. Use the resulting models in [Watson Discovery](#watson_discovery), [Watson Natural Language Understanding (NLU)](#watson-natural-language-understanding-nlu), and Watson Explorer.

### References for Further Reading
- [Watson Knowledge Studio Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_WKS.html) - our landing page with Watson Knowledge Studio specific links to more general information, best practices, and technical details about the service.
- [Watson Knowledge Studio Demos, Videos, and Hands-On Labs](https://www.ibm.com/demos/collection/IBM-Watson-Knowledge-Studio) - these are maintained and change over time.  If you have trouble visualizing how WKS is used, or how it provides value for users, check out these resources.
- [Getting Started with Watson Knowledge Studio](https://cloud.ibm.com/docs/services/watson-knowledge-studio?topic=watson-knowledge-studio-wks_tutintro) - our getting started page from the online Watson Knowledge Studio documentation.

## Watson Studio
Watson Studio is an environment which encompasses a variety of tools, capabilities, and services.  It supports the use of [Jupyter notebooks](https://jupyter.org/) (for Python), [R Studio](https://www.rstudio.com/), Watson Machine Learning, and other machine learning technologies (like TensorFlow, Caffe, and Keras).  The Watson Studio environment will allow you to clean and prepare data, and then use that data to build a variety of different types of machine learning models which can then be used to help provide some level of business intelligence and analytics capability.

The [Jupyter Python](https://jupyter.org/) environment is the one that I am most familiar with.  The experience in Watson Studio is comparable to what you get when running on your own local machine.  You can share and collaborate on your work with other team members, and you have the ability to easily develop your Python code and access a wide variety of IBM Cloud resources, from Watson services, to IBM Cloud data storage solutions, to various database services on the IBM Cloud.  

### References for Further Reading
- [Watson Studio Landing Page](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Studio.html) - our landing page with Watson Studio specific links to more general information, best practices, and technical details about the service.
- [Watson Studio and Watson Knowledge Catalog Documentation](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/overview-ws.html) - an ordered set of links to materials to help you get started with Watson Studio.

---
# Common Use Cases
This section will cover some of the basic patterns and cognitive use cases that we have seen implemented using the Watson services.  Ryan Anderson has a blog post on [Leveraging Cognitive Design Patterns for Enterprise Value Creation](https://www.linkedin.com/pulse/cognitive-bucket-list-leveraging-design-patterns-value-ryan-anderson/) which I suggest you take 5 minutes to read.  It's an older article, but a lot of it still rings true.  Ryan is a smart guy - he has a lot of good ideas here.

## Chatbots

Chatbots are popular right now, and they can help serve a real purpose.  Many customers use them for customer care and customer support scenarios.  They have been integrated into a number of different communications channels, and they can often do the repetitive work associated with common customer questions and requests.  Some are deplopyed as internal facing, support functions.  Some are customer facing.

### References for Further Reading
- [The Bots are Coming](https://medium.com/@snrubnomis/the-bots-are-coming-b0fa71475381) - an interesting overview on what is important to remember when you begin to build out your chatbot.  Quick read, great general guidance and good perspective.
- [Short-tail, Long-tail, and Human-tail Chatbots](http://fredrikstenbeck.com/short-tail-long-tail-and-human-tail-chatbot/) - We don't agree with EVERYTHING this guy says, but he lays out a nice, quick explanation of the various depths/degrees that chatbots get to.  A good way to explain the difference between short-tail and long-tail questions.
- [Build an IT Support Chatbot with Watson Assistant](https://www.ibm.com/cloud/garage/tutorials/watson_conversation_support) - great tutorial and guide for building your first chatbot.
- [Build a Chatbot That Cares](https://medium.com/ibm-watson-developer-cloud/build-a-chatbot-that-cares-part-1-d1c273e17a63\#.h9ahlfoh1) - nice series on building an IOT chatbot using the Coversation, Tone Analyzer, Speech-to-Text and Text-to-Speech services.  Uses the [TJBot](https://ibmtjbot.github.io/) which is based on a Raspberry Pi - one of our favorite DIY platforms.
- [Chatbot with Conversation, NLU and Weather](https://developer.ibm.com/dwblog/2017/chatbot-watson-conversation-natural-language-understanding-nlu/) - developerWors article that walks you through setting up and cloning a project that will build a chatbot that uses Assistant, NLU and Weather.  Good example and you can poke through the code.  Be aware , this is beginning to get a bit dated....

## Visual Inspection

This use case involves a visual inspection of still images using the Visual Recognition service and some other technologies.  Used to inspect, identify, and inform.

### References for Further Reading
- [Seafood Inspection (Dory)](https://devpost.com/software/dory) - a team created a seafood inspection app using Visual Recognition that will distinguish between different types of seafood.
- [Pokemon Go App](https://www.ibm.com/blogs/internet-of-things/pokemon-go-watson/) - Find Pokemon with the help of the Watson Visual Recognition services.

---
# Cognitive Development Topics

This is a colection of various popular topics within the realm of cognitive development.  Before you dive in and beginn building that first Watson driven application, you probably want to check out the [IBM Watson Coding Tips and Tricks](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Coding_Tips_Tricks.html).  This is a colection of observations and lessons learned from people actually **_building things_** with the IBM Watson services.

## General Cognitive Development Information
Cognitive development in general is not always a well understood topic.  Software development teams are unfamiliar with the changes to typical concerns and iterations that a cognitive development project will have.  Teams often have incorrect expectations, and underestimate the importance of data, as well as the number of training iterations required to build a highly effective cognitive model.

### References and Further Reading
- [Building a Cognitive App in 70 days](https://developer.ibm.com/dwblog/2016/cognitive-solution-70-days-joe-kozhaya/) - An insider take on the critical factors involved in building a cognitive application (the [Watson Business Coach](https://www.ibm.com/cognitive/businesscoach/) ) in only 70 days.  This is a dated article - and references a product no longer available - but the general concepts still hold true.
- [IBM Certified Application Developer - Watson V3](https://www.ibm.com/certify/cert?id=60000101) - get your Watson Application Developer certification badge.

## Cognitive Architectures
Cognitive architectures are not that different from the architectures for applications that you are familiar with.  They just use cognitive capabilities and components that may behave somewhat differently than a more "classical" software component.  You also need to take into account the need for _training_ in your maintenance of a cognitive solution, which adds a new wrinkle to how you architect a cognitive application.

### References for Further Reading
- [Common Cognitive Architectures](https://www.ibm.com/cloud/architecture/architectures/aiAnalyticsArchitecture) - taken from the IBM Cloud Garage Method, this set of architectures makes a good starting point for architects new to the building of cognitive solutions.

## The Importance of Data
Data is the lifeblood of any cognitive solution.  You need to be aware of [the common challenges that you will face](http://freedville.com/blog/2017/03/05/machine-learning-is-just-the-tip-of-the-iceberg-5-dangers-lurking-below-the-surface/) when working with the data that powers your cognitive solution.  The training processes used with cognitive systems is iterative, and the management of the data to do this training is an ongoing concern.  It's part of the common maintenance that is needed for a truly cognitive system.

Many tasks require specialized models and a lot of data - and many large data sets are not commercially available without incurring a large cost.  So IBM makes some common AI models available out on the [Model Asset Exchange](https://developer.ibm.com/exchanges/models/), which shares some common AI models and allows you to quickly get started.  Some of these may not meet your needs, and you might want to train your own models - but you need data to do this.  IBM makes some nice datasets available (for free, and for commercial use) out on the [Data Asset Exchange](https://developer.ibm.com/exchanges/data/).  Some of these datasets are just collections of freely available data, some are new data sets.

### The IBM Watson Studio
IBM has an environment that will help you with the intersection of data science and machine learning, it's called the [IBM Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio#about).  This has a variety of resources and tools to help with your data science projects, and allow you to "unlock" the value hidden in your data.  Check out the special landing page devoted to [Watson Studio](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Watson_Studio.html).

### Data Science, Design and User Experience
Data science manages to surface data and information from large data sets, to help us understand better.  Design and user experience design help bring this data, and it's insights, to life for your end user.  Any powerful application that delights it's end users will have both a strong user experience, and a strong data science component.  Here is some suggested reading on the intersection of design and data:

- [How Designers can use Data to create amazing work](http://blog.invisionapp.com/how-designers-can-use-data/) - Roger Huang of Springboard talks about 5 basic goals in this area, and provides some key resources and tips for the day-to-day application of these concepts.
- [Experience Design in the Machine Learning Era](https://medium.com/@girardin/experience-design-in-the-machine-learning-era-e16c87f4f2e2) - A long but very good post by Fabien Girardin of BBVA, on the importance of design and data for the success of a any cognitive application.  Thought provoking content.
- [5 Steps to Thinking Like a Designer in Machine Learning](http://machinelearningmastery.com/5-steps-to-thinking-like-a-designer-in-machine-learning/) - Kevin Dallas brings up 5 basic points that need to be considered when doing data science, and makes the argument that good data scientists need to be good designers.  This is a n old post - but a lot of this remains true today.

### References for Further Reading
- [Why Does Machine Learning Require So Much Data](http://freedville.com/blog/2016/12/15/why-does-machine-learning-require-so-much-training-data/) - Great look at why you need so much data, and a veiled reference to [Malcoim Gladwell's 10000 hour rule](https://www.vox.com/science-and-health/2019/8/23/20828597/the-10000-hour-rule-debunked).
- [Data Considerations When Building a Cognitive Solution](https://kozhayasite.wordpress.com/2016/07/31/data-considerations-when-building-a-cognitive-solution/) - an overview of data considerations when working with Watson services.
- [Data Scientists and App Develpment](https://medium.com/cognitive-resonance/data-scientists-and-app-development-fde50ebb54de#.nz70d9ke0) - Anthony discusses the importance of data science in the building of cognitive applications, and he shares some ways to learn more about data science.
- [Invisible Design - AirBnb](http://airbnb.design/invisible-design/) - Amber Cartwright of AirBnB writes about how you need to truly understand a product and the technology behind it, to be able to design effectively.
- [The 50 Best Free Datasets for Machine Learning](https://gengo.ai/articles/the-50-best-free-datasets-for-machine-learning/) - 50 solid free datasets for machine learning models.  Nice collection of resources here.
- [Kaggle](https://www.kaggle.com/) - register and you can see all sorts of different kinds of datasets, some free, some not.

## DevOps with Cognitive on IBM Cloud
The topic of DevOps when working in IBM Cloud is deserving of it's own "landing page".  The open cloud platform and the ability to apply the [Continuous Delivery](https://cloud.ibm.com/docs/services/ContinuousDelivery?topic=ContinuousDelivery-getting-started) service, along with it's support for toolchains, means that you have a lot of options when configuring your IBM Cloud environment to promote best practices and DevOps principles.

### References for Further Reading
- [All-In-One Tool for Backing Up IBM Cloud and Watson Services](https://github.com/modlanglais/ibm-cloud-backup) - a Python project, led by [Morgan Langlais](https://github.com/modlanglais), out on GitHub which will backup (and eventually restore) your IBM Cloud and IBM Watson repositories and services.
- [Design the structure of your IBM Cloud Foundry Enterprise Environment](https://cloud.ibm.com/docs/cloud-foundry?topic=cloud-foundry-bpimplementation#bpimplementation) - Guidance focused on Cloud Foundry Enterprise Environments (CFEE), helping you on your orgs and spaces.
- [Data and AI — Data Dev Ops Rules of Engagement](http://ibm.biz/datadevops) - You MUST take care of your data, and subject it to the same types of DevOps principles that you use for everything else in your software development environment.  [Anna Chaney](https://medium.com/@anna_seg) tells you what you need to focus on.
- [Full Cycle Cognitive Development (4 part series)](https://dtoczala.wordpress.com/2017/02/02/full-cycle-cognitive-development-part-1-business-concepts/) - A series by D. Toczala on the concerns, tools, and strategies for doing Cognitive development, from ideation through build and maintenance.
- [A Version Control Strategy for AI Applications](https://medium.com/ibm-watson/a-version-control-strategy-for-ai-applications-f421d5b91934) - a great blog post by Andrew Freed, on strategies to use for doing version control as part of a broader DevOps strategy with cognitive applications.

## Testing Approaches and Methods
When looking at testing Cognitive systems, we run into issues that are new to software developers.  Cognitive systems are _trained_, and they may be non-deterministic.  So we have to apply some different principles and techniques when we test cognitive systems.

[Andrew Freed](https://medium.com/@arfreed) has an excellent series of articles that cover the [testing pyramid](https://developer.ibm.com/watson/blog/2016/09/21/cognitive-system-testing-part-1-how-to-test-a-cognitive-system-and-why-its-so-important/), and discuss cognitive system concepts for [smoke testing](https://developer.ibm.com/watson/blog/2016/10/03/cognitive-system-testing-smoke-testing/), [accuracy testing](https://developer.ibm.com/watson/blog/2016/11/07/cognitive-system-testing-part-5-overall-system-accuracy-testing/), [ingestion](https://developer.ibm.com/watson/blog/2016/10/19/cognitive-system-testing-testing-at-the-beginning-with-ingestion-verification-test/) and [NLP](https://developer.ibm.com/watson/blog/2016/10/31/cognitive-system-testing-natural-language-processing-unit-testing/) testing, and finally [unit testing](https://developer.ibm.com/watson/blog/2016/11/21/cognitive-system-testing-so-i-dont-need-to-unit-test-my-cognitive-system/).  The series is a great overview of cognitive testing concepts.

There are also some good tools available to help you in you testing of your Watson cognitive services.  There is the [Watson Cognitive Testing Framework](https://github.com/joe4k/wdcutils/) for measuring performance, which provides several commonly used performance metrics of custom ML models (Accuracy, Precision/Recall/F1, Confusion Matrix, AUC).  [Andrew Freed](https://medium.com/@arfreed) has an excellent [2 part series on testing your chatbot](https://medium.com/ibm-watson/testing-strategies-for-chatbots-part-1-testing-their-classifiers-20becaf5f211).

### References for Further Reading
- [Andrew Freed Blogs](https://medium.com/@arfreed) - Andrew has done some thinking about cognitive testing, his blog posts will give you some insight into solid testing approaches.  You can probably tell, we're big fans of his.
- [Cognitive Quality Assurance \- An Introduction](https://brainsteam.co.uk/2016/03/29/cognitive-quality-assurance-an-introduction/) and [Cognitive Quality Assurance \- Performance Metrics](https://brainsteam.co.uk/2016/05/29/cognitive-quality-assurance-pt-2-performance-metrics/) - both authored by James Ravenscroft, with some good advice and introduction to the concepts of accuracy, precision, recall, and confusion matrices.
- [Tox K-Fold testing and deployment tool](https://github.com/public-data-and-ai-csm/Public-DataAI-Assets/blob/master/WatsonAssistant/CSM-BOT-KFold-Test.ipynb) - this is a Python notebook which you can deploy on Watson Studio, which will do k-fold testing of your Watson Assistant intents, and give you insights into how effective your training is.
- [Testing an Express app with SuperTest, moxios and Jest](https://codewithhugo.com/testing-an-express-app-with-supertest-moxios-and-jest/) - a blog post outlining a good approach for testing your Express based apps.
- [Jest](https://jestjs.io/) - a simple JavaScript testing framework you can use.  I haven't used it yet, but it comes highly recommended.
- [Codeless Test Automation for IBM Watson Chatbots](https://chatbotsmagazine.com/10-minutes-codeless-test-automation-for-ibm-watson-chatbots-d71eac9626d7) - a great 10 minute read that introduces [Botium](https://www.botium.at/), a no-code chatbot testing tool.
- [Tutorial: Benchmark Your Chatbot on Watson, Dialogflow, Wit.ai and more](https://medium.com/@floriantreml/tutorial-benchmark-your-chatbot-on-watson-dialogflow-wit-ai-and-more-92885b4fbd48) - [Florian Treml](https://medium.com/@floriantreml) has some interesting things to say about Chatbot testing using [Botium](https://www.botium.at/), and a nice [GitHub repo with code](https://github.com/codeforequity-at/botium-samples-nlpanalytics) to help you implement some testing with [Botium](https://www.botium.at/).

## Watson/IBM Cloud Security Concerns
There are some very real security implications that you will have to consider when developing applications and systems that use the IBM Cloud, and the Watson services hosted on that cloud.  Many of the "standard" questions that an infosec team will ask, have already been answered by IBM Security teams out on the [Cloud Security Alliance](https://cloudsecurityalliance.org/star/registry/ibm-cloud/) website.

If you are just concerned with [basic application security best practices on the IBM Cloud](https://www.ibm.com/cloud/learn/cloud-security#toc-best-pract-v7bPIzDi), you should look at the [IBM Cloud Security](https://www.ibm.com/cloud/learn/cloud-security) site.  It covers best practices, has information about cloud security risks and threats, frameworks, and checklists.

- **Question:** How do Watson Developer Cloud services handle PII and PHI data?
  - **Answer:** PHI (Personal Health Information) data should NOT be handled by IBM Public Cloud services. PII (Personally Identifiable Information), on the other hand may be okay to send to IBM Cloud services. Watson\ services do not save any data if the user opts-out. If that is NOT sufficient, then the customer has the responsibility of any required de-identifying before sending the data to the Watson services. In certain emergency scenarios, deletion of PII data may be done by IBM team but this is handled on a case-by-case basis (contact Watson Security for any such needs).

---
# Code, Development Resources, and GitHub Repositories
This section has a list of great places where you can see working code, find development resources, or GitHub repositories with useful content.

## Development Resources
- [Watson Developer Cloud (GitHub)](https://github.com/watson-developer-cloud) - this GitHub repository has commonly used SDK's (software development kits) and code for some interesting demos.  Some of the SDK's included here are listed below, but you should check this site for other less common SDKs as well.
  - [.NET SDK](https://github.com/watson-developer-cloud/dotnet-standard-sdk)
  - [Python SDK](https://github.com/watson-developer-cloud/python-sdk)
  - [Node SDK](https://github.com/watson-developer-cloud/node-sdk)
  - [Unity SDK](https://github.com/watson-developer-cloud/unity-sdk)
  - [Swift SDK](https://github.com/watson-developer-cloud/swift-sdk)
  - [Java SDK](https://github.com/watson-developer-cloud/java-sdk)
  - [Android SDK](https://github.com/watson-developer-cloud/android-sdk)
- [Code Patterns](https://developer.ibm.com/patterns/) - a series of different code patterns and full solutions to some common problems and use case.  often spans a few different technologies, so this can be a good place to see integrations in action.

## Learning and Training
This section will share a few different learning environments and approaches.  I am always interested in hearing feedback from real people who took any of these courses, indicating how useful and effective they are.

### Coursera 
- [AI for Everyone](https://www.coursera.org/learn/ai-for-everyone/home/) - a "starter course" suitable for technical and non-technical people.
- [IBM Applied AI Certificate](https://www.coursera.org/professional-certificates/applied-artifical-intelligence-ibm-watson-ai#about) - a certificate granting set of courses which will walk you through the basics of building out an AI solution using the Watson services, Python, and OpenCV.
- [AI Engineer Certificate](https://www.coursera.org/professional-certificates/ai-engineer#about) - another set of  certificate granting courses, but these focus on machine learning.  You'll use Python in conjunction with Spark, Keras, PyTorch, and TensorFlow.  Much more "in depth" than the Watson focused certificate - with a focus on Machine Learning.

---
# Common Tips and Tricks
This section will cover some of the common tips and tricks used by cognitive develpment professionals, and covers some of those things that are not addressed in the documentation.

- [IBM Watson Developer - Tips and Tricks](https://public-data-and-ai-csm.github.io/Public-DataAI-Assets/Coding_Tips_Tricks.html)

## Staying Aware of Watson and Cloud Best practices
There are some very good sources for current material on best practices with the Watson services.  Often these are published in a few "hotspots", and it's possible for you to monitor these so you are always aware of the latest information.  Here are some RSS feeds to some key "hotspots":

- [IBM Watson page on Medium](https://medium.com/ibm-watson) - seems to have quick notes on what is new and what is newsworthy in the Watson world - not always technical, but informative.
