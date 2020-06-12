# Watson Assistant Log Deletion
This notebook enables you to search WA logs for specific phrases then delete all logs associated with the user. This script was specifically created for the Web Chat integration, which assumes that the `user_id` is equal to the `customer_id`.

If you assign your own `customer_id` with conversations, then in the next to last cell, replace `metadata.user_id` with `metadata.customer_id`

**Directions**
- Import this notebook into your Watson Studio instance
- Open the notebook then click `Add project token` from the menu bar
- In the **Housekeeping** section download the two Python files from the links and add to your project assets
- In Section 1.1 update:
-- Update wa-apikey to your Watson Assistant API key
-- Update wa-url to your Watson Assistant URL
-- Update workspace_id or assistant_id to reflect the settings in your bot
-- Update log_filter for any other filters, e.g. update response_timestamp if you wish to limit the amount of data retrieved.
- In Section 1.4 find this line of code: `removeDF = allLogsDF[allLogsDF['input.text'].str.contains("1999")]`
- Replace `1999` with the string that you would like to delete the conversations from
- Run all of the cells up until the last cell. Once you read the warning and are comfortable deleting conversations associated with the listed customer IDs, run the last cell

Inspired by [Preeth's Watson Assistant Metrics Notebook](https://github.com/preethm/watson-assistant-metrics-notebook)
