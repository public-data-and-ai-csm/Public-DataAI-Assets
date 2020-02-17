# IBM Watson - Coding Tips and Tricks

This content is changing over time.  Please clean up anything that is out of date.  

## Good General Watson Architecture Practices
### Have a Secondary Watson service Instance
It is good architectural practice to have a second Watson service instance for your Watson services, and that it be located in a different Kubernetes cluster, and a different data center.  This gives you the ability to gracefuly degrade should you lose connectivity to, or the service of, one of your Watson service instances.
_Note: You should not have to do this in development environments.  You can test failover capability in test and performance environments prior to deployment.

## Good General Watson Coding Practices
### Use Environmental Parameters for Watson service endpoints
It is good coding practice to use two environmental parameters in your code.  One for a primary Watson service endpoint, and one for your secondary (or failover) Watson service endpoint.  So if you had a colaboration layer application that communicated with Watson Assistant, you would have the following:
- One called PRIMARY_WA_ENDPOINT
- One called SECONDARY_WA_ENDPOINT

## Good practices for Python Notebooks in Watson Studio
### Have a standard first three blocks of your Python Notebook
It's considered good coding practice to decalre all of the Python modules that you will need in your first block of code in your notebook.  It should look like this:
```
import sys, os
import json
import importlib
```
The very next section should contain your credentials, constants, and settings.  Just keep in mind that you will use FAKE SETTINGS for these values, so you don't go sharing your credentials with anyone if the notebook is published on GitHub.  It will often look similar to this (although you should comment these so you users know how to use these values):
```
credentials = {
    'USE_COS' : 'True',
    'IAM_SERVICE_ID': 'crn:v1:bluemix:public:iam-identity::a/d50fb47sjewy36597f8f2efdwe53eeds5::serviceid:ServiceId-2beye65f-2ww9-4226-beef-7363eds5233a',
    'IBM_API_KEY_ID': '84823hyrTH62UY762dlf7wmrPkZrh12eytey346dejqw7HW5N',
    'ENDPOINT': 'https://s3.us-south.cloud-object-storage.appdomain.cloud',
    'IBM_AUTH_ENDPOINT': 'https://iam.bluemix.net/oidc/token',
    'BUCKET': 'my-bucket',
#
    'ASSISTANT_API_KEY': 'xxx999999999863Eshsyetd3GFotx4pBtoxtoxwesd6x',
    'ASSISTANT_VERSION': '2019-02-28',
    'ASSISTANT_URL': 'https://gateway.watsonplatform.net/assistant/api',
    'ASSISTANT_SKILL_ID': '2354west-45e4-4a23-8ac1-e6187ert5w45'
}
#######################################################
# CONSTANTS 
#
MAX_TERMS_DISPLAY = 30                # Total number of terms to display in various outputs
```
The third section should be a duplicate of your second section of code, except that it should have the "# @hidden cell" qualifier, and then it should have all of your ACTUAL CREDENTIALS.  These won't be exported if/when you export your notebook to GitHub (or something else).  Your third section would look somethiong like this:
```
# @hidden_cell
credentials = {
    'USE_COS' : 'True',
    'IAM_SERVICE_ID': 'crn:v1:bluemix:public:iam-identity::a/d50fb47sjewy36597f8f2efdwe53eeds5::serviceid:ServiceId-2beye65f-2ww9-4226-beef-7363eds5233a',
...
```
