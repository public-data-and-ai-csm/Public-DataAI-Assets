# wa-webhook-covid19-count

This will demonstrate how to have your [Watson Assistant](https://www.ibm.com/cloud/watson-assistant/) provide a user with the latest count of confirmed cases for COVID-19. This will work for any country, state, or city. The information is sourced from an open API provided by bing.com and sourced from information from CDC and WHO.

## Prerequisites
1. Watson Assistant Skill
2. IBM Cloud Function

## Instructions

### Cloud Function Instructions
1. Create a new Cloud Function with a NODE.JS runtime
2. Copy/paste the Javascript code from `covid19-webhook-function.js` into the Function
3. Click on `Endpoint`,  copy down the URL from the CURL command (including `blocking=true`) and the API Key

### Watson Assistant Instructions
1. Create a Skill, import from the Content Catalog the intent named `Covid_Case_Count`
2. Go to Options > Webhook, paste in the URL
3. Click **Add authorization**, paste in API Key
4. Create a Dialog node that recognizes this intent
5. Click on **Dialog** settings, enable Webhook
6. Add parameter `country` (optional `state` and `city`) to call out to webhook (this can either be collected by your Assistant or hard coded in)

![](https://github.com/preethm/wa-webhook-covid19-count/blob/master/screenshot_546.png)

7. In Assistant responds section, if assistant recognizes the return variable, respond with `There are approximately $webhook_result_1.response.result.message confirmed cases of COVID-19. ` This can be formatted to include your search criteria (country, state, or city).
8. Highly Recommended: Include a disclaimer message in case this data is inaccurate. Something along the lines of: `Please note that this data is sourced from the CDC and World Health Organization but inaccuracies may exist.`
8. Include an error message in the `anything_else` such as `Sorry, I'm unable to retrieve this information at this time. Please visit bing.com/covid19 for the latest update.`

### Try it out
Navigate to the right side of Watson Assistant, click on `Try it`, type in "how many cases of COVID-19 are there in Arkansas?" and make sure you get the appropriate response back. You can double check this response with information directly from bing.com/covid19 to ensure it is accurate.

![](https://github.com/preethm/wa-webhook-covid19-count/blob/master/screenshot_544.png)
