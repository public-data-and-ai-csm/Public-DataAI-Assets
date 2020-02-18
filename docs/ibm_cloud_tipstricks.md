# IBM Cloud Tips and Tricks

# Contents
  - [Informative and Interesting Links](#informative-and-interesting-links)
  - [Annoying pop-ups asking for your credit card](#annoying-pop-ups-asking-for-your-credit-card)
 
## Informative and Interesting Links
- The [IBM Cloud Help](ibm.biz/ibmcloudhelp) page is an "unofficial" collection of links done by Lionel Mace.  Nice collection of places to start from.

## Annoying pop-ups asking for your credit card
If you run into the issue of an annoying pop-up window from IBM Cloud that prompts you to enter credit card information,the most likely cause is:
- You created a trial IBM Cloud account (this is probably before a corporate account subscription was initiated). Later on, a corporate IBM Cloud account is created and you were invited to work under that account. However, because the initial trial account still exists and is associated with your user id, you will continue to get the pop-up window from the IBM Cloud prompting you to enter credit card information.
- **Resolution:**
  1. Submit a IBM Cloud support ticket to delete the trial account. Make sure that you understand that **any data in that trial account will be lost!**
  1. Even though the IBM Cloud trial account is deleted, you can still log into the IBM Cloud using your id and then work under the corporate IBM Cloud account.
- **Work Around:**
  1. Log into the IBM Cloud using your account
  1. Close the pop-up message you get
  1. On top of the IBM Cloud console, click on your account and switch to the account of your organization (which is validated with subscription or paygo).  You should be able to do this, since you can access that account.
