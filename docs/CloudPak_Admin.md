# IBM Cloud Pak Administration
IBM Cloud Paks can be tough to understand, especially if you are unfamiliar with the underlying technologies like Open Shift and containers.  This is a collection of technical content which a community of us have found useful in the past.  We want to share it woth you.
This is a technically focused set of pages that will allow you to more quickly explore the different facets of Cloud Pak administration, see the latest best practices, and help you with your administrative tasks on the IBM Cloud Paks.
# Contents
- **[Introduction](#introduction)**
- **[User Administration](#user-administration)**
  - **[Authentication and LDAP](#authentication-and-ldap)**
- **[Monitoring and Alerting](#monitoring-and-alerting)**
  - **[Common Issues](#common-issues)**

---
# Introduction
Once you have your Cloud Pak for Data environment all set up, you will want to put some things into place to help you do the daily administrativer tasks, as well as the monitoring and alerting to needed to make sure that your Cloud Pak is operating and supporting your users around the clock.  Some things you will need to configure once, and then just maintain.  Other thongs will need to be continuopusly maintained, and still other things need to be monitored.  Luckily, there are a lot of automated tools and techniques that make this relatively easy with the Cloud Pak for Data environment.

### References for Further Reading
- **[Monitoring Open Shift in Cloud Pak for Data](https://www.ibm.com/support/pages/node/6174375)** - A nice whitepaper that goes over a couple of simple monitoring use cases, and shows you how to quickly and easily set up monitoring in ANY Cloud Pak/Open Shift environment.  A GREAT place to start your monitoring and alerting jourrney.
- - **[Some content]()** - A simple piece of content.

# User Administration
ipso lorem ipso shinto shrine.

## Authentication and LDAP
ipso lorem ipso shinto shrine.

### References for Further Reading
- **[Some content]()** - A simple piece of content.

# Monitoring and Alerting
Once you have your Cloud Pak for Data environment all set up, you will want to make sure that it stays healthy.  What should you monitor?  How do you want to be alerted about potential issues with your Cloud Pak for Data environment?  You need to merge this monitoring and alerting capability into your existing monitoring capabilities (or create this discipline for your organization).  The health of the environment should be continuously monitored, and potntial responses to issues should be automated where possible.

## Common Issues

Here is a list of some of the more common issues that we have seen, and the workarounds and fixes for these issues.

- Two service pods cyclically failing in your CP4D environment:  diagnostics-cronjob and watchdog-alert-monitoring-cronjob
  - The cronjob watchdog & diagnostics are in an error state. If you do a delete(restart) on the pods, this will remove the error in the UI.  As these cronjobs are schedule based, and don't impact any of the services, they can be deleted(restart) when there is issue with a specific run of the cronjob.

### References for Further Reading
- **[Monitoring Open Shift in Cloud Pak for Data](https://www.ibm.com/support/pages/node/6174375)** - A nice whitepaper that goes over a couple of simple monitoring use cases, and shows you how to quickly and easily set up monitoring in ANY Cloud Pak/Open Shift environment.  A GREAT place to start your monitoring and alerting jourrney.
