# Welcome to IBM Cloud

Cloud computing can be complex and confusing, but we're here to help you make sense of it. This is a technically focused set of pages that will allow you to explore the technology, see the latest best practices, and help you master the IBM Cloud.

THIS IS NOT A DEFINITIVE LIST OF THINGS TO HELP YOU ADMINISTER THE IBM CLOUD!!

This is just something to help you get started.  Consider it a guide to give you enough so that you can get things set up and get started with developing a cognitive application on the IBM Cloud.

This page is still taking shape, but it should always be in an "under construction" mode, as we remove links that are no longer relevant, and add links to new relevant materials.  The idea here is not to give you EVERY possible link on a topic, but instead to steer you to content that is high quality, and that has been applied in the real world.

# Contents
- **[IBM Cloud Administration](#ibm-cloud-administration)**
   - [Organization of Your IBM Cloud](#organization-of-your-ibm-cloud)
   - [The IBM Cloud CLI - Your Best Tool](#the-ibm-cloud-cli---your-best-tool)
   - [Tools You Can Use](#tools-you-can-use)
- **[Common IBM Cloud Use Cases](#common-ibm-cloud-use-cases)**
   - [Cognitive Applications](#cognitive-applications)
- **[Common Tips and Tricks](#common-tips-and-tricks)**
   - [IBM Cloud API's and Core SDKs](#ibm-cloud-apis-and-core-sdks)
   - [Getting Alert Emails to the Right People](#getting-alert-emails-to-the-right-people)
   - [Debugging Node.js and Java applications on IBM Cloud](#debugging-nodejs-and-java-applications-on-ibm-cloud)
   - [Staying Aware of Watson and Cloud Best practices](#staying-aware-of-watson-and-cloud-best-practices)
   - [Finding Training Classes](#finding-training-classes)

---
# IBM Cloud Administration

One of the nice things about a Platform as a Service (PaaS) and Infrastructure as a Service (IaaS) is that you have the ability to provide computing environments quickly for your internal development customers.  In order to do this, you need to manage and administer your IBM Cloud environment.   There are some basic administrative things that you should be aware of - and that you need to put into place.

## Organization of Your IBM Cloud

You need to break up your IBM Cloud account into different Cloud Foundry organizations (or orgs), with a single org for each project and team.  You can then add users to an org, and give them access, roles and permissions so they can do work within that org.  You can then create individual spaces underneath that org, with each space representing a different stage of development, or development environment.  It is then possible for each team to create their own deployment pipelines which will provide a DevOps capability for their project - and automated deployments to a variety of different environments.  You can read more about this approach in [Getting Started Right on the IBM Cloud](https://dtoczala.wordpress.com/2018/09/20/getting-started-right-on-the-ibm-cloud/).  It is also explained in [Using Organisations more effectively in IBM Cloud](https://thebluemixdigest.wordpress.com/2018/04/10/using-organisations-more-effectively-in-ibm-cloud/).

You can also use Resource Groups to help define groups of resources in your infrastructure, and then provide the ability to limit access to those resources.  The article on [Resource Groups and Access Management](https://www.ibm.com/blogs/bluemix/2017/12/resource-groups-access-management/) discusses some best practices for managing and using resource groups to help provide security.  A more recent tutorial on [Cloud Access to Cloud Resources](https://developer.ibm.com/tutorials/use-iam-access-groups-to-effectively-manage-access-to-your-cloud-resources/) walks you through doing this in a hands-on exercise that you can do in under an hour.

If you prefer video's, then check out [Cloud Foundry and IAM Administration 101](https://www.youtube.com/watch?v=w2AyDVS2SSM&index=11&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz), a 20 minute video which pulls together many of the concepts discussed in the links above.  It is part of the [James Belton](https://github.com/jamesbeltonIBM) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series.

Another really good source of information on setting up roles and DevOps pipelines, is the guidance on [best practices for organizing users, teams and applications](https://console.bluemix.net/docs/tutorials/users-teams-applications.html#best-practices-for-organizing-users-teams-applications).  There are some good diagrams and explanations in here, with guidance around Kubernetes, Helm, DevOps, user roles and IAM security.

## The IBM Cloud CLI - Your Best Tool

The best tool that you have at your displosal is the [IBM Cloud Command Line Interface (CLI) tool](https://console.bluemix.net/docs/cli/index.html#overview).  This tool will allow you to do almost anything in the IBM Cloud, and will enable you to use scripts to automate your most repetitive IBM Cloud administrative tasks.  Just follow the directions on the [IBM Cloud CLI Installation](https://console.bluemix.net/docs/cli/reference/ibmcloud/download_cli.html#install_use) page.  Most of these deal with "interactive" tool installation, but if you would rather download the latest binaries and put the installed tool in some custom location, make sure to check out the [CLI image download links](https://console.bluemix.net/docs/cli/reference/ibmcloud/download_cli.html#install-to-a-custom-directory) for the most popular OS platforms.

If you are having issues with the IBM Cloud CLI connecting, make sure that you can "see" the IBM Cloud site API endpoint (which is at api.ng.bluemix.net), and that you can "talk" on port 443.  You may need to have your IT team create some firewall rules to allow this communication to happen.

## Other Tools You Can Use

Here is a list of some of the tools that are available to help in the administration and management of your IBM Cloud infrastructure.  Check these out and use the ones that seem to fit best with your own usage of the IBM Cloud.

- [All-In-One Tool for Backing Up IBM Cloud and Watson Services](https://github.com/modlanglais/ibm-cloud-backup) - a Python project, led by [Morgan Langlais](https://github.com/modlanglais), out on GitHub which will backup (and eventually restore) your IBM Cloud and IBM Watson repositories and services.
- [My Console](http://myconsole.mybluemix.net/) - a simple app deployed out on the IBM Cloud which will ask for your credentials, and will then display an interactive view of your IBM Cloud environment and usage.
- [Another Useless Billing Script](https://dtoczala.wordpress.com/2019/11/06/another-useless-ibm-cloud-script-or-not/) - this blog post and [associated GitHub project](https://github.com/dtoczala/IBMCloudBillingScript) is a great start towards automating your billing and chargebacks with some simple Python code.
- [Administering Your IBM Cloud Account](https://developer.ibm.com/dwblog/2018/administering-your-ibm-cloud-account-a-script-to-help/) - blog post with an associated [GitHub repository](https://github.com/dtoczala/IBM_Cloud_Admin) which has a Python script for an interactive and scriptable command line tool to help administer your IBM Cloud account.
- [Using Terraform with the IBM Cloud Provider](https://ibm-cloud.github.io/tf-ibm-docs/#using-terraform-with-the-ibm-cloud-provider) - using Teraform to manage your IBM Cloud infrastructure is an easy way to automate full blown deployments onto the IBM Cloud.
- [CURL Cookbook](https://catonmat.net/cookbooks/curl) - not a tool, but a collection of web pages that will help you do ANYTHING that you need to do with CURL.  Great reference material - bookmark this for yourself.
- [Removing those pending users](https://github.com/jamesbeltonIBM/ibmcloud-delete-pending-accounts) - a shell script that will remove the "pending" users from your IBM Cloud account.


### References for Further Reading
- [Getting Started Right on the IBM Cloud](https://dtoczala.wordpress.com/2018/09/20/getting-started-right-on-the-ibm-cloud/) - good overview and strategy for organizing your IBM Cloud account infrastructure.
- [Using Organisations more effectively in IBM Cloud](https://thebluemixdigest.wordpress.com/2018/04/10/using-organisations-more-effectively-in-ibm-cloud/) - good overview and video on the concepts driving the Account/Organization/Space organization of a CloudFoundry based cloud account.
- [Resource Groups and Access Management](https://www.ibm.com/blogs/bluemix/2017/12/resource-groups-access-management/) - discusses some best practices for managing and using resource groups to help provide security and to help organize your work on the IBM Cloud.
- [Best practices for organizing users, teams and applications](https://console.bluemix.net/docs/tutorials/users-teams-applications.html#best-practices-for-organizing-users-teams-applications) - good diagrams and explanations on user roles and IAM security.  Also has examples of typical user roles.
- [Cloud Access to Cloud Resources](https://developer.ibm.com/tutorials/use-iam-access-groups-to-effectively-manage-access-to-your-cloud-resources/) - a hands-on tutorial that walks you through some basic cloud access and security operations, all in under an hour.
- [Monitoring Bluemix usage and spending](https://developer.ibm.com/dwblog/2017/monitoring-bluemix-usage-and-spending/) - this quick article explains how to monitor your current usage and spending on the IBM Cloud via the IBM Cloud console.
- [Help – My Machine is Locked Down and I Can’t Install the IBM Cloud CLI Tool!](https://thebluemixdigest.wordpress.com/2018/10/11/help-my-machine-is-locked-down-and-i-cant-install-the-ibm-cloud-cli-tool/) - another great blog post by [James Belton](https://github.com/jamesbeltonIBM).  This shows you how to build your own virtual server to run the IBM Cloud CLI commands on.  [Part 2 of the blog](https://thebluemixdigest.wordpress.com/2018/10/16/help-my-machine-is-locked-down-and-i-cant-install-the-ibm-cloud-cli-tool-part2/) is if you are a Windows person, and you want a good IBM Cloud environment, with Anaconda, Jupyter, and Git

---
# Common IBM Cloud Use Cases

One of the nice things about a Platform as a Service is the fact that it provides a pattern for how to deploy applications and workload onto the Cloud.  Below are some of the more common patterns (or generic use cases) that we have seen deployed on the IBM Cloud.

When building cloud based applications and systems, it is often useful to think of things using the dessert analogy.  We often picture projects as **cupcakes** (small, tasty, proves that the ingredients work together and form something useful), **cakes** (medium sized, proves that the cupcake can scale and serve a wider audience), and **wedding cakes** (big, tasty, built to serve a large population).  When using this analogy, you can think of the various services as your ingredients (add a pinch of Storage capability, two cups of Watson services, a cup of a Node application,....).  The effort to build the project is the baking - and your development and implementation team are the bakers.  What we highlight in the sections below are the basic receipes that have yielded good cupcakes/cakes/wedding cakes.

Now just because you have the recipe, it doesn't mean that you will be successful.  Just like a receipe in the real world, how you combine the ingredients is important, the skill of your baker is important, and the little things that you add for "flavor" are important too.  Each of the receipes below are good starting points, but you should make sure that what you are baking will work for your ultimate audience.  Don't waste time/money/effort making a 3 tier wedding cake when a cupcake will satisfy the needs of your organization.  Heck, sometimes all they want is a [blueberry muffin](https://www.eater.com/2016/3/11/11203948/puppy-bagel-teenybiscuit).

And just like in the real world, there are a lot of specialty bakeries out there that will make custom cakes and cupcakes for you.  If you're not very good in the kitchen, then this might be your best bet.

### References for Further Reading
- [Call Analytics Integrated Application](https://github.com/rodalton/call-analytics) - an EXCELLENT piece of code done by [Ronan Dalton](https://github.com/rodalton) that uses a Java application in combination with various Watson services, Cloud Object Storage (COS), and DB2 on Cloud.  Does analytics of call center recordings using the cognitive capabilities of Watson.

## Cognitive Applications

There are a variety of proven patterns that you see in the world today.  Everything from Chatbots, to digital assistants, to strategic insight gatherers.  Artifical intelligence is a relatively young field, so our list of use cases is always growing, as people come up with new an innovative applications of the cognitive technologies. 

### References for Further Reading
- [Cognitive Use Cases](https://github.com/dtoczala/watson-landing-page#common-use-cases) - The "use case" section from the [Watson Landing Page](https://github.com/dtoczala/watson-landing-page).

## Microservice Architectures

Many organizations are moving towards [microservice architectures](https://www.ibm.com/cloud/garage/content/architecture/microservices/) as a way to implement business systems in a way which will easily scale, and provides flexibility for future growth.  A microservice approach also allows development organizations to more easily implement and support [Continuous Integration (CI)](https://en.wikipedia.org/wiki/Continuous_integration) and [Continuous Delivery (CD)](https://en.wikipedia.org/wiki/Continuous_delivery) approaches to support applications development.

## References for Further Reading

- [Microservices from Theory to Practice: Creating Applications in IBM Bluemix Using the Microservices Approach](http://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/sg248275.html?OpenDocument) - an IBM Redbook, this is a long and technically dense review of Microservice architectures and techniques that can be used with the IBM Cloud environment.
- [My microservice has crashed, now what?](https://www.ibm.com/blogs/bluemix/2017/05/microservice-crashed-now/) - a nice article outlining the pros and cons of different ways to deploy microservices in a high-availability aechitecture.
---
# Common Tips and Tricks
This section will cover some of the common tips and tricks used by Cloud development professionals, and covers some of those things that are not addressed in the documentation.

## IBM Cloud API's and Core SDKs
Each of the services on the IBM Cloud has their own API, and most have an SDK of some sort.  However, if you want to manage and administer the entire IBM Cloud environment, then you need to use some of the [IBM Cloud Platform API's](https://cloud.ibm.com/apidocs?category=platform_services).  These include things like the API for [IBM Cloud usage metering](https://cloud.ibm.com/apidocs/usage-metering), [IBM Cloud Resource Management](https://cloud.ibm.com/apidocs/resource-manager), [IBM Cloud User Management](https://cloud.ibm.com/apidocs/user-management), and a bunch of other platform capabilities.

Also be aware that these can be accessed programmatically by using one of the following SDK's:
- [Node SDK](https://www.npmjs.com/package/ibm-cloud-sdk-core)
- [Python SDK](https://pypi.org/project/ibm-cloud-sdk-core/)

## Getting Alert Emails to the Right People
- On the [Spending Notifications](https://cloud.ibm.com/billing/spending-notifications) screen you can specify multiple email addresses.
- On the [Account Notifications](https://cloud.ibm.com/account/notifications) screen you can select multiple email addresses for each alert type.
- On the [Account Profile](https://cloud.ibm.com/account/company-profile) page you can Request a Profile Update, and you can set a single account email for notifications.  I suggest setting it to some email alias or email group, that will then forward emails to a number of people (whomever is in the email group).

## Common Cloud Best Practices and Good Habits
There are some generic best practices and good habits that we have found make life easier for software development teams working in a Cloud environment.  Here's a quick list of some of the better ones that we have seen:
- [Deploying Production Cloud Applications - A Readiness Checklist](https://dtoczala.wordpress.com/2018/01/17/deploying-production-cloud-applications-a-readiness-checklist/) - A list of some common sense things that you should make sure that you have addressed before you deploy that Cloud based application for production use.
- Use a functional ID for your Cloud accounts (as highlighted in [Bluemix and Watson – Getting Started Right](https://dtoczala.wordpress.com/2017/05/26/bluemix-and-watson-getting-started-right/), that way your organization "owns" your development and deployment environments, not some employee (who may leave your company tomorrow....)

## Debugging Node.js and Java applications on IBM Cloud
One of the more difficult things to do is debugging a Node.js or Java application in a cloud environment.  This excellent video on [using App Management on Bluemix](https://www.ibm.com/blogs/bluemix/2015/10/advanced-debugging-node-apps-bluemix/) by [Sai Vennam](https://www.ibm.com/blogs/bluemix/author/svennam92gmail-com/) shows you how easy it is to profile and debug your applications on the IBM Cloud platform.  For more information, check out the [App Management documentation](https://console.bluemix.net/docs/manageapps/app_mng.html) on the IBM Cloud.  It's easy to do, requires no additional services, and can be enabled with the switch of a single environment variable.

## Staying Aware of Watson and Cloud Best practices
You should be monitoring the IBM Cloud status support center (https://cloud.ibm.com/unifiedsupport/supportcenter).  

The best way to get notifications of significant IBM Cloiud events is to log into the IBM Cloud with your own IBM Cloud account, click on your "person" icon in the upper right corner of the browser window, and then select [Profile and Settings](https://cloud.ibm.com/user).  Once that screen comes up, click on [Notifications](https://cloud.ibm.com/user/notifications) in the left hand navigation bar.   Now you will be able to select notifications for platform changes, announcements, and all other IBM Cloud communications.

## Finding Training Classes

A good place to find training and certification courses for the IBM Cloud is on the [Global Knowledge website](https://www.globalknowledge.com/us-en/training/course-catalog/brands/ibm/ibm-cloud/).  Global Knowledge is a certified IBM Training provider, and they also offer certification prepartion.
