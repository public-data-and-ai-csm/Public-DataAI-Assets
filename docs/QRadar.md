# QRadar

This is a "landing page" for QRadar.  QRadar is the leader in Security Information and Event Management (SIEM) technology, and has been in the Gartner Magic Quadrant for the past 12 years.  By consolidating log events and network flow data from thousands of devices, endpoints and applications distributed throughout your network, QRadar correlates all this different information and aggregates related events into single alerts to accelerate incident analysis and remediation. 

## What it Does

QRadar will help customers and organizations address the following use cases:
- Detecting Advanced Threats - like abnormal connection behaviors, DNS attacks and more
- Detecting Insider Threads - from trusted users, abnormal authentication and trusted host compromise
- Securing the Cloud - watching usage, container activity, multiu-cloud attacks, and more
- Protecting Critical Data - watching for exfiltration, phishing attacks, and more
- Reponding to Alerts - endpoint detection, automated investigation and offense chaining
- Prioritizing and Managing Risks - expired accounts, network monitoring, user monitoring
- Proving Compliance - for GDPR, HIPPA, PCI DSS, SOX, and more

## How It Works

QRadar looks at ***events*** (which come from the logs that QRadar is collecting) and ***flows*** (from the network connections that QRadar has).  These events and flows can be monitored individually, or together, to detect situations where security may be compromised.  These situations are called ***offenses***.  QRadar has a number of rules that are combinations of conditions that should trigger an offense.  So a rule might be something like, "Look at network packets that are delivering email attachments, that have a certain link" (like a phishing email).  When we detect that, we raise an offense.

At an architectural level, you deploy a series of hardware/software appliances.  A single appliance can support everything (All-in-One), if the volumes are low enough.  For most customers, you will need a console server, one or more event collectors, one or more event procesors, and one or more flow collectors.  In addition, you can deploy data processors to help with doing the user searches kicked off from the console server.  The processor and collector nodes can scale to whatever number you need to be able to process the volumes of data you need to process.

In turn, many of the "add-on" capabilities of QRadar can also be deployed on these nodes.  These "add-on" capabilities will often extend the vision and reach of the current QRadar capabilities - often providing either real-time or cognitive capabilities.

### Tips and Tricks - Things to Remember

- Since even users with ***Admin*** roles cannot edit their own account roles and security profiles, it is always suggested to have at least 3 different users with the Admin role - that way you always have two other people who can modify the account of the third administrator.
- Define specific ***roles*** for your users, and then assign users to specific roles.  Then you can manage the access for **ALL** users with a certain role, by adjusting the permissions for that user role.  
- Do the same with security profiles - which provide access to resources.  Be careful to properly assign Permission Preferences - this can severly limit visibility to events, flows, and offenses based on the log source or network.
- Domains (and filtering of events based on Domains) happen as soon as you make them (or make changes to them).  Changes to security profiles need to be deployed before they take effect.
- Rule counters are maintained and rules are evaluted for each domain individually.  So be careful in how you specify your domains.
- 

## Qradar on Prem

xxx

## QRadar on Cloud (QRoC)

xxx

## References for Further Reading
- [My linked article](https://cloud.ibm.com) - Some information.
