import com.ibm.watson.assistant.v1.*;
import com.ibm.watson.assistant.v1.model.*;
import com.ibm.cloud.sdk.core.security.*;
import java.util.*;
import java.io.*;

/**
 * This is a sample Java app that calls the Watson Assistant v1 API to extract chat logs and writes it to a CSV file
 *  
 */
public class ExtractChatLogsV1 {
	
	// Watson Assistant environment properties
	public static String API_KEY = "zabc....3726x";
	public static String ASSISTANT_URL = "https://gateway.watsonplatform.net/assistant/api";
	public static String SKILL_ID = "e12ab3c4-4567-wxyz-77ab-d6c578e56789";
	public static String ASSISTANT_ID = "d12345aa-1234-abcd-4567-1ab21e1737e5";
	public static String OUTPUT_FILENAME = "chatLogs.csv";
	public static String QUERY_STRING = "language::en,response_timestamp>=2020-08-26";
	public static String WA_API_VERSION = "2020-04-01";

	public static FileWriter fw;
	public static PrintWriter pw;  
	
	public static void main(String[] args) throws Exception {

		try {
			
			fw = new FileWriter(OUTPUT_FILENAME);
			pw = new PrintWriter(fw, true);  
			
			// Extract chat logs 
			Iterator it = extractWorkspaceLogs(); 
			
			// print the csv header record
			printCSVHeader();
			
			// iterate through the chat log results and write to CSV file
			printChatLogRecords(it);			
			
			pw.close();
		
		} catch (Exception ex) {
			ex.printStackTrace();    
		}
		
	}
	
	/**
	 * Extract the chat logs from a Watson Assistant Skill/Workspace
	 * 
	 * @throws Exception
	 */
	public static Iterator extractWorkspaceLogs() throws Exception {
		
		//Log log = new Log();
		
		IamAuthenticator authenticator = new IamAuthenticator(API_KEY);
		Assistant assistant = new Assistant(WA_API_VERSION, authenticator);
		assistant.setServiceUrl(ASSISTANT_URL);
		
  		String filter = QUERY_STRING;		
  		// To query against a specific Assistant, pass the following Assistant ID parameter
  		//String filter = QUERY_STRING + ",request.context.system.assistant_id::"+ASSISTANT_ID;
  		
		ListLogsOptions options = new ListLogsOptions.Builder(SKILL_ID).filter(filter).build();
		System.out.println("Query Filter: " + filter);
		
		LogCollection response = assistant.listLogs(options).execute().getResult();

		List<Log> logs = response.getLogs();
		Iterator iterator = logs.iterator(); 
		System.out.println("Extracting Workspace Logs. Number of chat logs extracted: " + logs.size());
		
		return iterator;
		
	}	
		
	/**
	 * Print the CSV header record
	 * 
	 * @throws Exception
	 */
	public static void printCSVHeader() throws Exception {
		
		printToCSV("request_timestamp");
		printToCSV("response_timestamp");
		printToCSV("input_text");
		printToCSV("conversation_id");		
		printToCSV("dialog_turn_counter");				
		printToCSV("user_id");				
		printToCSV("output_text");
		
		pw.println();
	}
	
	/**
	 * Iterate through the chat logs and print each record to CSV file
	 * 
	 * @throws Exception
	 */
	public static void printChatLogRecords(Iterator iterator) throws Exception {
		
		while (iterator.hasNext()) {
			
			Log log = (Log) iterator.next();
			
			String requestTimeStamp = log.getRequestTimestamp();
			String responseTimeStamp = log.getResponseTimestamp();
			
			printToCSV(requestTimeStamp);			
			printToCSV(responseTimeStamp);
			
			MessageResponse mr = log.getResponse();
			String inputText = mr.getInput().getText();
			printToCSV(inputText);
				
			Context context = mr.getContext();
			String conversationID = context.getConversationId();
			printToCSV(conversationID);
				
			SystemResponse sr = context.getSystem();
			String turnCounter = sr.get("dialog_turn_counter").toString();		
			printToCSV(turnCounter);		
		
			MessageContextMetadata mcm = context.getMetadata();
					
			String userID = null;
			try {
				userID = mcm.userId();
			} catch (Exception ex) {} 
		
						
			// some conversations may not have a user_id passed in via API
			if (userID != null) {
				printToCSV(userID);				
			} else {
				printToCSV("");	
			}			
		
			OutputData od = mr.getOutput();
			
			String outputText = "";
			try { 
				outputText = od.getText().get(0);	
			} catch (Exception ex) {
				
			}
		
			// Escape any commas in the output text
			pw.print("\"" + outputText + "\"");
						
			// new line for end of record
			pw.println();
			
		}		
	}
	
	/**
	 * Convenience method to write to CSV along with comma separator
	 * 
	 * @throws Exception
	 */
	public static void printToCSV(String outputString) throws Exception {
		
		pw.print(outputString);
		pw.print(",");
		
	}

}

