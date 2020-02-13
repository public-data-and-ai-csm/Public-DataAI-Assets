# Welcome to IBM Cloud

Cloud computing can be complex and confusing, but we're here to help you make sense of it. This is a technically focused set of pages that will allow you to explore the technology, see the latest best practices, and help you master the IBM Cloud.

This page is still taking shape, but it should always be in an "under construction" mode, as we remove links that are no longer relevant, and add links to new relevant materials.  The idea here is not to give you EVERY possible link on a topic, but instead to steer you to content that is high quality, and that has been applied in the real world.

The structure here is important.  On this page are links for people getting started with using these technologies on IBM Cloud.  The `/docs` folder contains additional markdown pages that contain links to technical material that is "deeper" and targeted to more advanced users.

_Note: Why is this titled "bluemix-landing-page"?  In the past, the IBM Cloud platform was called "Bluemix", and I didn't want to change the title of the project and have people lose their bookmarks to this page._

# Contents
- **[Introduction - Getting Started](https://github.com/dtoczala/bluemix-landing-page#introduction---getting-started)**
   - [IBM Cloud - a Platform as a Service (PaaS)](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#ibm-bluemix---a-platform-as-a-service-paas)
   - [IBM Softlayer - an Infrastructure as a Service (IaaS)](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#ibm-softlayer---an-infrastructure-as-a-service-iaas)
   - [IBM Cloud Terms and Topologies](https://github.com/dtoczala/ibm-cloud-landing-page/blob/master/README.md#ibm-cloud-terms-and-topologies)
   - [Architecting Cloud Applications](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#architecting-cloud-applications)
- **[Infrastructure Sevices and APIs](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#infrastructure-services-and-apis)**
   - [Compute](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#compute)
   - [Storage](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#storage)
   - [Network](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#network)
   - [Security](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#security)
   - [Containers](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#containers)
   - [VMware](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#vmware)
   
- **[Platform Sevices and APIs](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#bluemix-services-and-apis)**
   - [APIs](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#apis)
   - [Application Services](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#application-services)
   - [Blockchain](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#blockchain)
   - [Cloud Foundry Apps](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#cloud-foundry-apps)
   - [Data and Analytics](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#data-and-analytics)
   - [DevOps](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#devops)
   - [Finance](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#finance)
   - [Functions](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#functions)
   - [Integrate](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#integrate)
   - [Internet of Things (IoT)](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#internet-of-things-iot)
   - [Mobile](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#mobile)
   - [Security](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#security-1)
   - [Watson](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#watson)

---
# Introduction - Getting Started

## IBM Cloud - a Platform as a Service (PaaS)

Bluemix is the former name of the IBM Cloud PaaS product which provides a wide array of services and capabilities that allow you to move your computing workload to a scalable and "on demand" foundation.  Some of these services are in the category of "Infrastructure as a Service" (or IaaS), some of them are in the category of "Software as a Service" (or SaaS), and some are "Functions as a Service" (or FaaS).  Give the marketing folks some more time and they will come up with some new "as a service" category.

The general idea is to use digital resources on an "as needed" basis, and to pay for them on an "as used" basis.  This allows organizations to avoid buying hardware and software that is underutilized or ignored.  When coupled with the concepts of [DevOps](https://www.ibm.com/cloud-computing/learn-more/what-is-devops/) and [microservices architectures](https://martinfowler.com/articles/microservices.html), the IBM Cloud platform can become a key foundation for a culture of innovation and continuous improvement.

The IBM Cloud itself is based on [Cloud Foundry](https://www.cloudfoundry.org/) (although this is evolving), which is an open source cloud application platform for developing and deploying enterprise cloud applications.  Now the platform is evolving to a platform based on [Identity and Access Management, or IAM](https://cloud.ibm.com/docs/iam?topic=iam-iamoverview).  IAM uses the concept of Resource Groups to manage your services and applications on the IBM Cloud.  

### References for Further Reading
- [Lionel's Bluemix Help](http:/ibm.biz/bluemixhelp) - this page is an "unofficial" collection of links done by Lionel Mace.  Nice collection of places to start from.
- [Beginners Guide to IAM](https://github.com/jamesbeltonIBM/IBMCloudIAM) - a great PDF for you to download and read so you can get started quickly in understanding the IBM Cloud and IAM.
- [Common Bluemix ID and Billing Questions](https://www.ibm.com/blogs/bluemix/2017/08/common_qa/) - great guide on common Bluemix ID and billing questions with good answers.  We use this a lot.
- [Managing Resource Groups](https://console.bluemix.net/docs/admin/resourcegroups.html#rgs) - it's just a link to the documentation, but this new feature introduced in November 2017 allows you more freedom and options in organizing your development efforts on the IBM Cloud.
- [Free Course - Bluemix Essentials](https://developer.ibm.com/courses/all/bluemix-essentials/) - a free introductory course that will help you learn the essential concepts and terminology of the IBM Bluemix platform.
- [Bluemix Annoyances and Work Arounds](docs/bluemix-faq.md) - sub-page with guidance on how to work around some of the minor annoyances you might encounter with Bluemix.
- [Five facts you may not know about Cloud Foundry](https://www.ibm.com/developerworks/cloud/library/cl-5-facts-about-cloud-foundry/index.html) - a deeper technical article outlining the capabilities and limitations of Cloud Foundry, which deals with 5 common misconceptions about the platform.
- [Getting Started with the IBM Cloud CLI](https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started) - online documentation introducing use of the command line interface for the IBM Cloud.
- [Service Availability Catalog by Region](https://mycatalog.mybluemix.net/) - shows availability of services based on region, type of service and some other filters.  Is the Watson Conversation service available in the Australian region?  Find out here...
- [IBM Cloud Foundation Skills Series](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - a series of videos on various technical subjects around the IBM Cloud technology.  Some really good videos here.

## IBM Softlayer - an Infrastructure as a Service (IaaS)

Softlayer is the IBM Cloud IaaS product which provides a wide array of infrastructure capabilities that allow you to move your computing workload to a scalable and "on demand" foundation.  These are exposed within the IBM Cloud interface as "Infrastructure", and allow you to select from different resource options like Devices, Storage, Network, Security, as well as some add-on services.

### References for Further Reading
- [Regulate access to your network resources with IBM Cloud security groups](https://www.ibm.com/blogs/bluemix/2017/09/network-security-groups/) - this page is good place to start for learning about creating, using and maintaining security groups.

## IBM Cloud Terms and Topologies

In traditional Cloud environments, and when using deployment technologies like [Kubernetes](https://cloud.ibm.com/kubernetes/catalog/cluster) for deployment into those envirtonments, it is important to know something about how applications are expected to respond to changes in the environment.  The important thing to understand is some of the basic concepts, and have an understanding f the terminology being used.

A **Geography** is a large geographical area, which may contain multiple **Regions**.  IBM Cloud users will deploy their applications into **Regions** that they specify (like US East or US South).  Regions will consist of either one **Zone** (in which case it is referred to as a **Single Zone Region or SZR**), or at least three **Zones** (in which case it is referred to as a **Multi Zone Region or MZR**).  A **Zone** is a logically isolated Data Center in a **Region** with independent electrical, mechanical and network infrastructures isolated from other Zones.

When used in conjunction with [Kubernetes](https://cloud.ibm.com/kubernetes/catalog/cluster), an MZR can provide a level of highly-available (HA) capability for an application.

### References for Further Reading
- [Geography / Region / Zone Characteristics](https://pages.github.ibm.com/CloudEngineering/system_architecture/regions_zones.html) - a great overview of the terminology used to describe the infrastructure supporting the [IBM Cloud](https://cloud.ibm.com).  There is a section on deployment patterns which is good to read.  It also has a table at the end of the page of all of the current regions, zones, and data centers available.

## Architecting Cloud Applications

In traditional Enterprise application development it is assumed that the underlying infrastructure has 99.999% availability and that applications can be scaled by adding more hardware. The ops focus is largely at the infrastructure level. Cloud applications are more typically based on [micro-service architectures](https://www.ibm.com/devops/method/content/architecture/microservices/), which put the ops and reliability focus on the application.  This distinction is important and critical, and it represents a paradigm shift for most application architects and developers.

When architecting cloud applications, you need to be aware of the fact that Cloud resources are just like your old on premise hardware resources - they fail from time to time.  Using microservices and cloud you should be able to distribute "copies" of your microservices to different cloud locations, making them more resilient.  Don't depend on "the Cloud" to do it for you.  In this way you can more easily tune and scale your overall application (adding more microservice instances to address bottlenecks), as well as making it more resilient and flexible.

### References for Further Reading
- [What are Microservices?](https://developer.ibm.com/cloud-microservices/) - a quick discussion of microservices and how they work with Agile development practices and Cloud infrastructures.  Good overview.
- [Site Reliability Engineering, the Cloud Approach to Operations](https://www.ibm.com/blogs/bluemix/2017/08/site-reliability-engineering-cloud-approach-operations/) - a quick discussion of the importance of Site Reliability Engineering for Cloud applications.
- [99.95% availability. Balancing release velocity and reliability](https://www.ibm.com/blogs/bluemix/2017/09/sre-availability-balancing-release-velocity-reliability/) - a quick discussion of the importance of monitoring to DevOps, and how this impacts the reliability of cloud based applications.
- [Developing Node.js Applications on IBM Cloud](http://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/sg248406.html?Open) - an IBM Redbook which walks through examples of developing Node,js application on the IBM Cloud.
- [Essentials of Application Development on IBM Cloud](http://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/sg248374.html?Open) - another IBM Redbook, this one covers some of the basics around application development on the IBM Cloud.  Great for learning those foundational Cloud development skills - and a key piece of preparation for Cloud certification.

---
# Infrastructure Services and APIs

## Compute

Compute resources include [bare metal servers](https://console.bluemix.net/catalog/infrastructure/bare-metal) and [virtual servers](https://console.bluemix.net/catalog/infrastructure/virtual-server-group), as well as VMware resources.  These resources are used in a cloud environment to provide computing power and server capabilities for a customer. You have the ability to specify a number of vCPUs (up to 64 of them), your network performance, some local storage (SAN), with the ability to select from multiple data centers located in a number of different countries.

### References for Further Reading
- [Intro to Compute Resources on IBM Cloud](https://www.youtube.com/watch?v=dfk53yb51yw&t=0s&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=3) - A 15 minute overview of the compute services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [Intro to VPC Infrastructure on IBM Cloud](https://github.com/jamesbeltonIBM/VPC-Infrastructre-on-IBMCloud) - A 15 minutnice PDF with an overview of the Virtual Private Cloud (VPC) infrastructure available on the IBM Cloud.  It's another one of [James Belton's](https://www.linkedin.com/in/jamesbelton/) Getting Started PDF's.
- [Interacting With a Device](https://console.bluemix.net/docs/vsi/vsi_interact_device_snapshot_view.html#interact-with-a-device-in-snapshot-view) - A simple guide to some basic operations with a virtual server instance.
- [Managing Device Access](https://console.bluemix.net/docs/vsi/vsi_device_access.html#managing-device-access) - a simple guide to managing access to virtual server instances.
- [What are the Different Types of Virtual Server?](https://www.youtube.com/watch?v=ARUefnCR9xw&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=17) - part of the [IBM Cloud Foundation Skills Series](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series, this 7 minute video will walk you through the basics of virtual servers, and what the different types of virtual server are able to do.
- [Bare Metal Server Basics](https://www.youtube.com/watch?v=vDRm7JqBy3k&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=15) - An 8 minute overview of bare metal servers on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [What are the Different Types of Virtual Server?](https://www.youtube.com/watch?v=ARUefnCR9xw&index=16&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - A 7 minute explanation and description of the various different types of virtual servers on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.

## Storage

Cloud Object Storage (COS) is one form of storage available to users of the IBM Cloud platform.  Cloud Object Storage provides storage in the cloud of a persistent set of objects - for later retrieval.  You can store, manage and access your data via a self-service portal and RESTful APIs.

### References for Further Reading
- [Intro to Container, Storage, and Networking Resources on IBM Cloud](https://www.youtube.com/watch?v=cKv8MhVs7ME&index=3&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - A 12 minute overview of the container, network, and storage services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [Introduction to Storage Types](https://www.youtube.com/watch?v=v_T-3CA79wc&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=23) - A 8 minute video from [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series, going over the different types of Cloud storage, and what they are best suited for.
- [Introduction to Cloud Object Storage](https://www.youtube.com/watch?v=2WPsC6AgAJY&index=26&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - part of the [IBM Cloud Foundation Skills Series](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series, this 6 minute video will walk you through the basics of Cloud Object Storage.
- [Block Storage Deeper Dive](https://www.youtube.com/watch?v=PBYGdk3KDz4&feature=youtu.be) - A 6 minute video from [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series, going into more depth on the options (performance vs. endurance) available with Block Storage technology.
- [Working With IBM Cloud Object Storage In Python](https://medium.com/ibm-data-science-experience/working-with-ibm-cloud-object-storage-in-python-fe0ba8667d5f) - A simple project that shows how to use Cloud Object Storage (COS) in conjunction with a [Data Science Experience (DSX)](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#data-and-analytics) project, all in Python.
- [Connecting an s3 API-Compatible Third-Party Utility to work with IBM Cloud Object Storage](https://github.com/jamesbeltonIBM/Connecting-an-s3-API-Compatible-Third-Party-Utility-to-work-with-IBM-Cloud-Object-Storage-/blob/master/ConnectaThirdPartyUtilitytoObjectStorage.pdf) - a nice "how to" showing how to hook up and use [Transmit](https://panic.com/transmit/) to move things to and from IBM Cloud Object Storage.
- [How to Use IBM Cloud Object Storage When Building and Operating Cloud Native Applications](http://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/redp5491.html?Open) - an IBM Redbook on using Cloud Object Storage on the IBM Cloud.
- [Cloud Object Storage as a Service: IBM Cloud Object Storage from Theory to Practice - For developers, IT architects and IT specialists](http://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/sg248385.html?Open) - another IBM Redbook covering the basics of Cloud Object Storage for developers, architects, and operations.

## Network

Network services on the IBM Cloud can be used to configure your Cloud applications and resources for secure operation and development.  This includes things like [load balancers](https://cloud.ibm.com/catalog/infrastructure/load-balancer-group), content delivery networks, domain name services (DNS), gateway appliances for security, firewalls, direct linking for private connections to the IBM Cloud, VPN's, VLAN's, subnets and everything that you might want to configure in your Cloud deployed resources.

In 2019 a new functionality was introduced to the IBM Cloud, called Virtual Private Cloud, or VPC.  This allows you to create your own "private" cloud, virtually, on the IBM Cloud.  

### References for Further Reading
- [Intro to VPC landing page](https://github.com/jamesbeltonIBM/VPC-Infrastructre-on-IBMCloud) - A landing page that is similar to this one, with information on Virtual Private Clouds, another great asset by [James Belton](https://www.linkedin.com/in/jamesbelton/).  Refer back to this from time to time, it's still growing as he captures best practices and links to better technical content.
- [Intro to Container, Storage, and Networking Resources on IBM Cloud](https://www.youtube.com/watch?v=cKv8MhVs7ME&index=3&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - A 12 minute overview of the container, network, and storage services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [Intro to Gateway Appliances](https://ibm-dte.mybluemix.net/network-appliances) - a series of videos helping you to manage your physical and virtual networks for routing multiple VLANs, for firewalls, VPN, traffic shaping and more.
- [Load Balancer Lab](https://www.youtube.com/watch?v=oZnRBf783Gw&feature=youtu.be) - part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube, this hands on lab shows you how to set up a simple application with three nodes, all froneted by a load balancer with some basic security.  He goes through setting up the security groups and everything.
- [Monitor Your VPNs on IBM Cloud](https://www.ibm.com/cloud/blog/monitor-your-vpns-on-ibm-cloud) - a nice article introducing NetOrc, and walking you through some basic setup to monitor your Virtual Private Networks (VPN's).


## Security

Deploying securely is always an issue for people using any cloud infrastructure.  It's important to remember that there are many different aspects to security - from the security and roles associated with specific users in the development environments, to the access and security of the production environments.  

### References for Further Reading
-[Cloud App Security: What Makes a Secure App?](https://www.ibm.com/cloud/blog/cloud-app-security) - A quick 5 minute overview of security basics when working on the Cloud.  Some good links and a good introduction to the concepts and terminologies that matter for security.
- [Intro to Integration, IoT and Security on IBM Cloud](https://www.youtube.com/watch?v=Rzq-bChLaek&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=5) - A 5 minute overview of the integration, Internet of Things (IoT) and security services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [The top ten security articles you need to read](https://www.ibm.com/developerworks/security/library/se-top-security-articles-you-need-read/index.html) - We're sorry, a link to an article with more links.  But good for general security awareness.
- [How to Enhance Security by Rotating Service Credentials](https://www.ibm.com/cloud/blog/how-to-enhance-security-by-rotating-service-credentials) - I always want to be secure from the start when developing apps, but I am always unsure how to start and set up a strategy for credentials that makes sense (and works in the long term).  After reading this article - no more excuses.  Securing your app in easy and can be easily incorporated into your DevOps processes. 
- [IBM Cloud Security Patterns](https://github.ibm.com/ibmcloud/cloud-patterns) - on the IBM GitHub instance, but has some nice patterns around deploying secure virtual machines and Kubernetes clusters on the IBM Cloud.  Very nice.

## Containers

A container is a standard way to package an app and all its dependencies so that the app can be moved between environments and run without changes.  Containers in the IBM Cloud are [Docker images](https://docs.docker.com/engine/userguide/storagedriver/imagesandcontainers/), from your [Docker registry](https://console.bluemix.net/docs/containers/cs_planning.html#cs_planning_images), that are deployed on [Kubernetes](https://console.bluemix.net/docs/containers/cs_ov.html#kubernetes_basics).  This is how you should deploy your microservices based applications for improved scalability and survivability.

A key piece of Kubernetes functionality is provided by [Istio](https://istio.io/), a microservice mesh that includes routing, ingress control, microservice discovery, and other benefits for your Kubernetes cluster.  Istio is a joint effort by IBM, Google, Lyft, 

If you are curious abut how to structure your project which will deploy to production on Kubernetes, you should probably read the tutorial [Best practices for organizing users, teams, applications](https://console.bluemix.net/docs/tutorials/users-teams-applications.html#best-practices-for-organizing-users-teams-applications) in Kubernetes.  It will guide you through the process of establishing a project and providing a CICD development environment for your development teams.

You might also want to look into using [Open Shift](https://www.ibm.com/cloud/openshift), if you don't have a definite idea of how you want to implement your CI/CD pipelines and work environments.  You can learn more about the differences between [Kubernetes](https://console.bluemix.net/docs/containers/cs_ov.html#kubernetes_basics) and [Open Shift](https://www.ibm.com/cloud/openshift) by watching this quick video on [Kubernetes and OpenShift: What's the Difference?](https://www.youtube.com/watch?v=cTPFwXsM2po).

### References for Further Reading
- [Kubernetes Architecture: Four Approaches to Container Solutions](https://www.ibm.com/cloud/blog/new-builders/kubernetes-architecture) - Excellent article explaining how Kubernetes helps developers, administrators, operators, and security analysts.  Some great links in this article as well.
- [Intro to Container, Storage, and Networking Resources on IBM Cloud](https://www.youtube.com/watch?v=cKv8MhVs7ME&index=3&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - A 12 minute overview of the container, network, and storage services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM Cloud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [Container, Docker, Kubernetes Overview](https://console.bluemix.net/docs/containers/cs_ov.html#cs_ov) - From the IBM Cloud documentation.  A simple place to learn the basic concepts.
- [Kubernetes on the IBM Cloud](https://ibm-dte.mybluemix.net/container-service) - a series of educational modules that will help you become familiar with Kubernets and containers on the IBM Cloud.
- [Best practices for organizing users, teams, applications](https://console.bluemix.net/docs/tutorials/users-teams-applications.html#best-practices-for-organizing-users-teams-applications) - a tutorial that will guide you through the process of establishing a project and providing a CICD development environment for your development teams.
- [Kubernetes Service Policies](https://www.ibm.com/blogs/bluemix/2017/10/kubernetes-service-policies/) - Read this BEFORE you begin to deploy Kubernetes clusters into your environment.  Failure to do so will result in your clusters being visible globally in your account.  [David Callies](https://www.ibm.com/blogs/bluemix/author/dbcallieus-ibm-com/) post explains how to define and setup policies for your Kubernetes clusters.  You'll thank us later.
- [Speed deployment on Kubernetes with Helm Chart – Quick YAML example from scratch](https://www.ibm.com/blogs/bluemix/2017/10/quick-example-helm-chart-for-kubernetes/) - Great hands-on tutorial on using containers, Kubernetes, and Helm to deploy a simple application.
- [Enable your microservices with advanced traffic management and request tracing capabilities using Istio](https://developer.ibm.com/code/patterns/manage-microservices-traffic-using-istio/) - a good demo (with code) for the beginner who wants to learn more about Istio.
- [How Istio manages microservice applications – A traffic flow analysis](https://developer.ibm.com/dwblog/2017/how-istio-manages-microservice-applications/) - a quick read and associated video, which explains how Istio does the routing to your Kubernetes based microservices.
- [Isolating Clusters with Calico Policies in IBM Cloud Kubernetes Service](https://www.ibm.com/cloud/blog/isolating-clusters-with-calico-policies-in-ibm-cloud-kubernetes-service) - a quick read about how you can isolate your Kubernetes clusters and provide security for your clloud based applications.
- [Doing Multicloud Management with Helm Charts](https://wwwpoc.ibm.com/cloud/blog/more-charts-more-problems-lets-bring-some-sanity) - nice Advice and guidance on using Helm charts to manage a multicloud deployment of resources.

## VMware

[VMware Cloud Foundation® (VCF)](https://console.bluemix.net/infrastructure/vmware-solutions/console/gettingstarted/vcf) and [vCenter Server (VCS)](https://console.bluemix.net/infrastructure/vmware-solutions/console/gettingstarted/vcs) on IBM Cloud provide the fundamental building blocks that include [VMware vSphere](https://console.bluemix.net/infrastructure/vmware-solutions/console/gettingstarted/vss), [vCenter Server (VCS)](https://console.bluemix.net/infrastructure/vmware-solutions/console/gettingstarted/vcs), and shared storage options including vSAN, needed to flexibly architect a VMware software–defined data center (SDDC) solution that best fits your workloads. 

By using advanced automation and single–tto the client in a matter of hours. At this point, the client can access and manage the IBM–hosted environment via the native VMware clients, Command Line Interface (CLI), existing scripts, or other familiar vSphere API–compatible tools.

### References for Further Reading
- [VMware on IBM Cloud Solution Architecture](https://www.ibm.com/cloud/garage/files/VMware-on-IBM-Cloud-Solution-Architecture.pdf) - The solution architecture for VMware on the IBM Cloud.
- [Virtualization Reference Architecture](https://www.ibm.com/cloud/garage/architectures/virtualizationArchitecture/reference-architecture) - the reference architecture for virtualization on the IBM Cloud.
- [IBM Cloud for VMware Solutions](https://ibm-dte.mybluemix.net/vmware) - a series of educational modules that will help you become familiar with what VMWare can do when hosted on the IBM Cloud.
- [Getting Started with VMWare vCentre on the IBM Cloud](https://github.com/jamesbeltonIBM/gettingStartedwithvCentre/blob/master/Getting%20Started%20with%20VMWare%20vCentre%20on%20the%20IBM%20Cloud.pdf) - a PDF with some good guidance on getting started with vCenter on the IBM Cloud.

---
# Platform Services and APIs

## APIs

Ipso facto lipitor walla-walla

### References for Further Reading
- [grunt](https://grunt) - A simple sound

## Application Services

Though it's listed under Databases, [Messages for RabbitMQ](https://cloud.ibm.com/catalog/services/messages-for-rabbitmq) routes messages between microservices for modern applications. [Messages for RabbitMQ](https://cloud.ibm.com/catalog/services/messages-for-rabbitmq) makes RabbitMQ even better by managing it for you and allowing you to focus on development of your microservices and your overall architecture.

### References for Further Reading
- [Getting Started with IBM Cloud Messages for RabbitMQ](https://www.ibm.com/cloud/blog/getting-started-with-ibm-cloud-messages-for-rabbitmq) - A simple beginners guide that helps you see the difference between [Messages for RabbitMQ](https://cloud.ibm.com/catalog/services/messages-for-rabbitmq) and [Compose for Rabbit MQ/CloudAMQP](https://cloud.ibm.com/catalog/services/cloudamqp).  Allows you to make an informed choice of how you want to deploy Rabbit MQ for your application.

## Blockchain

Blockchain is one of the most talked about new technologies in recent memory.  It is popular because it holds the promise of maintaining an unmutable hyper-ledger, meaning that a chain of events which cannot be modified or corrupted.  This serves as the foundation for many crypto-currencies like [Bitcoin](https://bitcoin.org/en/) and [Etherium](https://ethereum.org/).  Blockchain can also be used to manage contracts, financial transactions, supply chain, health data, and other types of use cases where there is a need for a shared ledger, with full auditability and security.

### References for Further Reading
- [IBM Blockchain Developer Center](https://developer.ibm.com/blockchain/) - a good landing page for news and information on Blockchain technology, geared for developers.
- [IBM Blockchain Platform Overviews](https://ibm-dte.mybluemix.net/cloud-based-blockchain-platform) - as eries of videos and [hands on labs](https://ibm-dte.mybluemix.net/cloud-based-blockchain-platform#deep-dive) that will. help you get started with Blockchain on the IBM Cloud
- [Blockchain basics: Glossary and use cases](https://www.ibm.com/developerworks/cloud/library/cl-blockchain-basics-glossary-bluemix-trs/) - learn the terminology first, and examples of typical use cases, and then move on and learn more about Blockchain.
- [IBM Blockchain 101: Quick-start guide for developers](https://www.ibm.com/developerworks/cloud/library/cl-ibm-blockchain-101-quick-start-guide-for-developers-bluemix-trs/index.html) - A great place to start in your exploration of Blockchain technology.  Highlights different ways to work with and deploy Blockchain based solutions and applications.
- [Blockchain Basics: Introduction to Distributed Ledgers](https://www.ibm.com/developerworks/cloud/library/cl-blockchain-basics-intro-bluemix-trs/) - a good overview of distributed ledgers and some basic Blockchain concepts.
- [Top 6 technical advantages of Hyperledger Fabric for blockchain networks](https://www.ibm.com/developerworks/cloud/library/cl-top-technical-advantages-of-hyperledger-fabric-for-blockchain-networks/index.html?ca=drs-) - an overview of the technical advantages of using Hyperledger fabric when implementing Blockchain solutions on the IBM Cloud platform.
- [IBM Blockchain Essentials Course](https://developer.ibm.com/courses/all/blockchain-essentials/) - a good course for developers who want to learn the basics of working with Blockchain.
- [Hyperledger Composer basics, Part 1 - Model and test your blockchain network](https://www.ibm.com/developerworks/cloud/library/cl-model-test-your-blockchain-network-with-hyperledger-composer-playground/index.html?ca=drs-) - the first in a series of tutorials showing how you can begin investigating and using Blockchain technology.

## Cloud Foundry Apps

Cloud Foundry allows you to develop applications using certain packaged environments, known as buildpacks.  These buildpacks provide the runtime environment for your application, and allow you to build and deploy this application on the IBM Cloud.

### References for Further Reading
- [Increase productivity with five Cloud Foundry plugins](https://www.ibm.com/developerworks/cloud/library/cl-cloud-foundry-plugins/index.html) - Article detailing 5 different Cloud Foundry plugins, how to install them and how to use them.
- [Essentials of Application Development on IBM Cloud](http://www.redbooks.ibm.com/redbooks/pdfs/sg248374.pdf) - This is an IBM Redbook (meaning that it is big - a 222 page PDF), but there is some good info in here.  Some of it may be out of date, as the platform has been changing wuite rapidly, but the concepts here are solid.
- [Developing Node,js Applications on IBM Cloud](http://www.redbooks.ibm.com/redbooks/pdfs/sg248406.pdf) - Another IBM Redbook, this is a 146 page PDF focused on Node.js development.  Good for someone learning Node.js (or new to it), and provides some simple examples with Express and React.

## Data and Analytics

This area is huge - and contains a variety of different database technologies, analytics platforms and technologies, data science tools and platforms (like the [Data Science Experience](https://datascience.ibm.com/), or DSX), and even Watson Machine Learning (WML).  We're just going to cover the highlights here, and provide some good starting points for where to learn more.

The [Cloudant NoSQL DB](https://console.bluemix.net/catalog/services/cloudant-nosql-db) is often used as a solid no SQL option for storing JSON and other unstructured types of data.  It is compatible with CouchDB (and uses some of the same tools).

The [Data Science Experience](https://datascience.ibm.com/) is used by data scientists as a single area with common tools and visualization technologies for their data science work.  Often these data science efforts will be used to build a [Watson Machine Learning](https://console.bluemix.net/catalog/services/machine-learning) (WML) model.

### References for Further Reading
- [Intro to Analytics, Databases and Developer Tools Resources on IBM Cloud](https://www.youtube.com/watch?v=XaEdaaorHWU&index=4&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - A 9 minute overview of the analytics, database, and developer tools services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [Intro to IBM Cloud Databases](https://www.youtube.com/watch?v=_AZUwxfQRRA&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=37) - A 9 minute overview of the analytics, database, and developer tools services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [Intro to IBM Cloudant](https://ibm-dte.mybluemix.net/database-management) - a series of getting started videos which can help you get started with using the IBM Cloudant database service.

#### Code
- [Create an analytics application in IBM Data Science Experience (DSX) and Deploy it in Watson Machine Learning (WML)](https://github.com/ibm-cloud-architecture/refarch-data-science) - a GitHub project that walks through creating an analytics application and and deploying the model in Watson Machine Learning.
- [Working With IBM Cloud Object Storage In Python](https://medium.com/ibm-data-science-experience/working-with-ibm-cloud-object-storage-in-python-fe0ba8667d5f) - A simple project that shows how to use [Cloud Object Storage (COS)](https://github.com/dtoczala/bluemix-landing-page/blob/master/README.md#storage) in conjunction with a Data Science Experience (DSX) project, all in Python.
- [A Visual Introduction to Machine Learning](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/) - a great little animation that highlights some basic machine learning concepts around classification and training.  

#### Cloudant
- [Cloudant NoSQL DB backup and recovery](https://console.bluemix.net/docs/services/Cloudant/guides/backup-cookbook.html#cloudant-nosql-db-backup-and-recovery) - From the online documentation - goes over the basics.  Also see the section on [Disaster Recovery and Backup](https://console.bluemix.net/docs/services/Cloudant/guides/disaster-recovery-and-backup.html#disaster-recovery-and-backup).
- [Who Limits the Rate-Limiters?](https://medium.com/ibm-watson-data-lab/who-limits-the-rate-limiter-68013263f9d2) - an interesting article on how to effectively use the queueing of API requests to use Cloudant more efficiently.

#### DB2
- [Foundational Skills - DB2](https://www.youtube.com/watch?v=IUhX17saCJ0&feature=youtu.be) - A 20 minute video from [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.  A bit lengthy, but a good start to using the DB2 service on the IBM Cloud.

## DevOps

The IBM Cloud platform supports a variety of DevOps services, which help organizations create software development toolchains and environments for doing [Continuous Integration (CI)](https://en.wikipedia.org/wiki/Continuous_integration) and [Continuous Delivery (CD)](https://en.wikipedia.org/wiki/Continuous_delivery).  These allow you to provide an Agile development environment where changes are built and deployed in an automated manner, allowing teams to move quickly into development environments, integrating code as they deliver.

In March 2018, IBM released a Cloud delivery environment called [Microclimate](https://microclimate-dev2ops.github.io/).  It claims to be able to deploy to multiple Cloud environments, and is built to provide an end to end development environment that lets you rapidly create, edit, and deploy applications. Applications are run in [Docker containers](https://www.docker.com/what-container) from day one and can be delivered into production on [Kubernetes](https://kubernetes.io/) through an automated DevOps pipeline using [Jenkins](https://jenkins.io/). Microclimate can be installed locally or on IBM Cloud Private.  it sounds pretty sharp, but it's new so we don't know how wonderful it really is yet.

### References for Further Reading
- [Intro to Analytics, Databases and Developer Tools Resources on IBM Cloud](https://www.youtube.com/watch?v=XaEdaaorHWU&index=4&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - A 9 minute overview of the analytics, database, and developer tools services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series on YouTube.
- [Quickly Develop, Build, and Deploy Applications on IBM Cloud with DevOps services - Part 1](https://www.ibm.com/blogs/bluemix/2017/07/quickly-develop-build-deploy-applications-ibm-cloud-devops-services/) - Steve Weaver goes through deploying a toolchain and setting up a development pipeline on the IBM Cloud.
- [Quickly Develop, Build, and Deploy Applications on IBM Cloud with DevOps services - Part 2](https://grunt) - Steve Weaver goes through the steps to deploy a toolchain for an already existing application on the IBM Cloud.
- [Master continuous integration and delivery with the IBM Devops Toolchain](https://www.ibm.com/blogs/bluemix/2016/08/master-continuous-integration-delivery-ibm-devops-toolchain/) - good article, worth the time to check out.
- [How to Use a Delivery Pipeline to Rotate App Credentials](https://www.ibm.com/cloud/blog/how-to-use-a-delivery-pipeline-to-rotate-app-credentials) - I always want my apps to be secure, but I hate screwing around with the credentials.  Why not make life easier, and just build credential rotation into your DevOps toolchain?
- [Learn to use GitHub with GitHub Learning Lab](https://www.zdnet.com/article/learn-to-use-github-with-github-learning-lab/) - not comfortable with GitHub, or never used it before?  Then go through this education path from GitHub and get comfortable.
- [Integrate Jenkins with your toolchain to send job notifications, track code deployments](https://www.ibm.com/blogs/bluemix/2017/06/integrate-jenkins-to-your-toolchain/) - guidance on how to integrate your Jenkins server into an IBM DevOps Toolchain that deploys your applications to the IBM Cloud.  The integrations here are really nice - Slack notifications, PagerDuty alerts, etc.
- [Documentation for Microclimate](https://microclimate-dev2ops.github.io/document) - the online documentation, has some guided help for you.

## Finance

This area of the catlog is filled with a series of third-party financial applications and services.  This changes over time, and we don't have a lot of direct experience in working with these services.  Some of them look to be quite interesting and powerful - we suggest that you do your homework and research the capabilities, capacity, and costs associated with any of these services.

## Functions

IBM Cloud Functions (based on [Apache OpenWhisk](https://openwhisk.incubator.apache.org/)) is a Function-as-a-Service (FaaS) platform which executes functions in response to incoming events and costs nothing when not in use.  This is more commonly referred to as [Serverless Computing](https://www.ibm.com/cloud/functions).  Serverless is a way to build and run applications and services without thinking about servers. Serverless applications don’t require you to provision, scale and manage any servers.

### References for Further Reading
- [OpenWhisk/Functions Concepts](https://console-regional.ng.bluemix.net/openwhisk/learn/concepts) - A great starting point to understand the concepts behind the Functions capability.
- [IBM Functions Overview](https://ibm-dte.mybluemix.net/functions) - A series of videos highlighting the utility and usage of IBM Functions (based on [OpenWhisk](https://openwhisk.incubator.apache.org/)) on the IBM Cloud.
- [Rethinking the way you build software with serverless](https://sdtimes.com/cloud/rethinking-the-way-you-build-software-with-serverless/)- Nice article that covers serverless concepts and the benefits of going in a serverless direction.
- [Using Separate Namespaces to Test IBM Cloud Functions](https://github.com/jamesbeltonIBM/Using-Separate-Namespaces-to-Test-IBM-Cloud-Functions) - great little paper by James Belton on how you can use namespaces when using IBM Cloud functions, as a way to keep your various implementation environments seperate.
- [Functions CLI](https://console-regional.ng.bluemix.net/openwhisk/learn/cli) - install and test out the Functions CLI.
- [Invoking a microservice hosted on IBM Cloud Functions](https://developer.ibm.com/tv/dw-mailbag-invoking-microservice-hosted-ibm-cloud-functions/) - a humorous video on how to call an IBM Cloud Function from a Node.js application.
- [Capture audience feedback with IBM Bluemix OpenWhisk](https://www.ibm.com/blogs/bluemix/2017/02/capture-audience-feedback-with-ibm-bluemix-openwhisk/?social_post=812305763&fst=Learn&linkId=34571093) - great demo application implemented on a "serverless" platform using IBM Cloud Functions.
- [IBM Cloud Usage Tool](https://github.com/IBM-Cloud/openwhisk-cloud-usage-sample) _ a great little tool that helps you break down your IBM Cloud usage, and it is deployed as an OpenWhisk function.  Great little projec t to learn OpenWhisk, and to get a better view of your IBM Cloud usage.

## Integrate

There are a few different services included under the integrate category of services.  By their nature, these services tend to have a lot in common with other services and service areas.  Some of the more popular ones are the [Secure Gateway](https://console.bluemix.net/catalog/services/secure-gateway) and [API Connect](https://console.bluemix.net/catalog/services/api-connect) services.

The [Secure Gateway](https://console.bluemix.net/catalog/services/secure-gateway) Service provides a quick, easy, and secure solution for connecting anything to anything. Rather than bridging your environments at the network level like a traditional VPN that begins with full access and must be limited from the top down, Secure Gateway provides granular access only to the resources that you have defined.

[API Connect](https://console.bluemix.net/catalog/services/api-connect) is a comprehensive end-to-end API lifecycle solution that enables the automated creation of APIs, simple discovery of systems of records, self-service access for internal and third party developers and built-in security and governance. Using automated, model-driven tools, create new APIs and microservices based on Node.js and Java runtimes — all managed from a single unified console.

### References for Further Reading
- [Intro to Integration, IoT and Security on IBM Cloud](https://www.youtube.com/watch?v=Rzq-bChLaek&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=5) - A 5 minute overview of the integration, Internet of Things (IoT) and security services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills]
- [Secure Gateway with Watson Services on IBM Cloud](https://developer.ibm.com/recipes/tutorials/secure-gateway-with-watson-services-on-ibm-cloud/) - This "receipe" is a quick how-to approach to setting up a Secure Gateway instance with some Watson services that are located on the IBM Cloud.  A nice and quick example.

## Internet of Things (IoT)

The Internet of Things (IoT) is a huge topic all by itself.  it refers to the small devices and sensors that operate in the real world, on the edge of the internet, in various different "things" like smart watches, weather sensors, RFID tags, wearable tech, and other devices.  This section is just going to serve as a gateway into your dive into IoT on the IBM Cloud if this is something that you are pursuing.  At some point in the future, this may be large enough and broad enough to warrant a full landing page of it's own.

### References for Further Reading
- [Intro to Integration, IoT and Security on IBM Cloud](https://www.youtube.com/watch?v=KdOcMBcEGyc&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=5) - A 5 minute overview of the integration, Internet of Things (IoT) and security services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills]

## Mobile

Mobile services are specific to mobile platforms and the applications that run on those mobile platforms.  Typically this means cellular phones, but mobile platforms are expanding and beginning to encompass more than that.   

### References for Further Reading
- [Intro to Starter Kits, Web and Mobile on IBM Cloud](https://www.youtube.com/watch?v=Rzq-bChLaek&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz&index=6) - A 5 minute overview of the starter kits, web and mobile services available on the IBM Cloud, part of [James Belton's](https://www.linkedin.com/in/jamesbelton/) [IBM CLoud Foundation Skills] series.

## Security

Security is something that you need to seriously consider when constructing cloud based applications and systems.  The IBM Cloud offers a variety of Security services, but you need to make sure that your approach to security covers multiple levels from multiple perspectives.

If you are doing penetration testing or load testing of IBM Cloud based applications, please let the IBM Cloud team know about this.  otherwise our IBM Cloud security team and security infrastructure could shut down your application, mistaking your testing as a DDOS attack or some other security event.

#### References for Further Reading
- [The top ten security articles you need to read](https://www.ibm.com/developerworks/security/library/se-top-security-articles-you-need-read/index.html) - We're sorry, a link to an article with more links.  But good for general security awareness.
- [List of IP Ranges for various datacenters](https://knowledgelayer.softlayer.com/faq/what-ip-ranges-do-i-allow-through-firewall) - For determining what IP ranges to use for the various data centers, when configuring your own security.
- [Intro to the Secure Gateway Service](https://ibm-dte.mybluemix.net/secure-gateway) - some videos introducing you to a cloud service that enables you to establish a secure tunnel between the specific resources you want to connect.

### Events and Logs

Good security for cloud based applications is a concern for ALL organizations.  Securing software requires a deep understanding of the data being managed, and then ensuring that only appropriate access is granted to the appropriate parties.  The IBM Cloud services are designed to provide the basic building blocks to achieve this - but like any tool or technique, they need to be properly exercised to be effective.

Customers will find some IBM Cloud services of particular interest when it comes to the logging of events, the analysis of those logs, monitoring of services and applications, and the general support of a production application.  The [IBM Cloud Log Analysis](https://console.bluemix.net/catalog/services/log-analysis) service automatically collects data from selected IBM Cloud services, with no instrumentation necessary.  The service allows you the flexibility to monitor and analyze logs on the IBM Cloud, using [Kibana dashboards](https://console.bluemix.net/docs/services/CloudLogAnalysis/kibana/analize_logs_dashboard.html#analize_logs_dashboard), or use the [Log Analysis API](https://console.bluemix.net/apidocs/log-analysis-api) to push data to other logging services and repsitories.

The [IBM Cloud Availability Monitoring](https://console.bluemix.net/catalog/services/availability-monitoring) service can be used to monitor application and cloud service availability, as well as application/service responsiveness.  Responsiveness and performance monitoring can be driven by sythetic tests driven by Selenium scripts.  The closely related [IBM Cloud Monitoring](https://console.bluemix.net/catalog/services/monitoring) service can be used to automatically collect metric data from IBM Cloud applications and services, eliminating the need for agents. APIs make it easy to add custom metrics and to query your monitoring data.

Platform level logging of events is facilitated via the [IBM Cloud Activity Tracker](https://console.bluemix.net/catalog/services/activity-tracker) service.  It will capture user and application interactions with your provisioned IBM Cloud resources. Store captured events as long as you require, safe guarded on cloud based storage solutions. Query your collected event data via API, or export your cloud activity data for further analysis.

#### References for Further Reading
- [Managing Events Using the Activity Tracker](https://console.bluemix.net/docs/services/cloud-activity-tracker/tutorials/manage_events_cli.html#tutorial2) - this tutorial takes you step-by-step through what you need to do to track events with your services and applications.
- [Analyze Logs in Kibana for IBM Cloud Kubernetes Applications](https://console.bluemix.net/docs/services/CloudLogAnalysis/tutorials/container_logs.html#container_logs) - this shows you how to set up and use Kibana to check your logs for your Kubernetes containers.
- [Analyze Logs in Kibana for Cloud Foundry Applications](https://console.bluemix.net/docs/tutorials/application-log-analysis.html#generate-access-and-analyze-application-logs) - same as the one above, but this time focused on a Cloud Foundry based application.  Also touches on setting up availability monitoring - really nice tutorial.
- [Getting Started with Application Monitoring](https://www.ibm.com/cloud/garage/content/course/get_started_monitor_mvp/1) - good tutorial on setting up some simple Availability Monitoring.

### IBM Cloud Identity & Access Management (IAM)

You can manage users across the IBM Cloud platform and Infrastructure services from the Users page for your account.  This utilizes the Identity & Access Management (IAM) interface.  Using this interface, you have the ability to limit the access of IBM Cloud users to certain areas of your IBM Cloud footprint (spaces and organizations), as well as limiting the access and roles for a user based on a particular service.  You can also create Service IDs, which will limit the scope and access of a particular service (or set of services).  By creating and assigning keys for these users and services, you have the ability to limit access and visibility for both individual users aand services.  By rotating your keys (deleting and recreating new keys) on a regular basis, you are able to keep your IBM Cloud infrastructure secure.

#### References for Further Reading
- [Authentication for your App on the IBM Cloud](https://dtoczala.wordpress.com/2019/11/18/authentication-for-your-app-on-the-ibm-cloud/) - A quick blog post that will help developers quickly understand and use identity management and authentication with the various IBM Cloud API's.
- [IBM Cloud – Identity and Access Management](https://github.com/jamesbeltonIBM/IBMCloudIAM) - An EXCELLENT beginner’s guide to understanding IAM written by [James Belton](https://github.com/jamesbeltonIBM).  My recommendation for the place to start when attempting to understand IAM on IBM Cloud.
- [Introducing IBM Cloud IAM Service IDs and API Keys](https://www.ibm.com/blogs/bluemix/2017/10/introducing-ibm-cloud-iam-service-ids-api-keys/) - An introduction to some of the concepts and capabilities of IAM.
- [Managing Users and Access Policies](https://console.bluemix.net/docs/iam/iamusermanage.html#iamusermanage) - part of the overall documentation of IAM, this section details the specific steps that you will take to set up and provide users access to your IBM Cloud infrastructure.
- [User Roles and Permissions](https://console.bluemix.net/docs/iam/users_roles.html#userroles) - a listing of user roles and permissions based on scope and visibility.
- [Bluemix CLI Commands for Managing Keys and Policies](https://console.bluemix.net/docs/cli/reference/bluemix_cli/bx_cli.html#bx_commands_iam) - a listing and description of the various command line options for managing keys and policies for IAM.
- [IAM Recipe for IBM Cloud Access & Migration Path from CF](https://brandymguillory.wordpress.com/2018/05/31/iam-recipe-for-ibm-cloud-access-migration-path-from-cf/) - a nice walk through of setting up IAM for a real-world application.
- [Creating Dynamic Rules for Access Groups](https://console.bluemix.net/docs/iam/accessgroup_rules.html#rules) - if you have SAML federated identity management, then you can create dyanmic rules that take advantage of some of those SAML assertions that you have set up within your organization.
- [Cloud Foundry and IAM Admin 101](https://www.youtube.com/watch?v=w2AyDVS2SSM&index=12&list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) - part of the [IBM Cloud Foundation Skills Series](https://www.youtube.com/playlist?list=PLmesOgYt3nKCfsXqx-A5k1bP7t146U4rz) series, this 20 minute video will walk you through the basics of Cloud Foundry role management and the IAM identity and role management.

 ### App ID

Use the IBM Cloud App ID service to add authentication to your mobile and web apps and protect your back-end systems. You can also host user profile info that you can use to build engaging experiences. App ID supports authentication using social identity providers, so that users can log-in with their existing Facebook and Google accounts.  This is meant to support user authentication, and should not be your only security consideration.

#### References for Further Reading
- [Securing single page apps with App ID service](https://www.ibm.com/blogs/bluemix/2017/09/securing-single-page-apps-app-id-service/) - A simple tutorial showing an example of how to implement user authentication using the App ID service.

### General Data Protection Regulation (GDPR)

General Data Protection Regulation (GDPR) is a hot topic recently.  It is a European regulation that covers how data is stored, protected, and handled.  This isn't really a security topic in the way that most people think of security, as they consider approaches securing applications and identities.  It's in the security section because it addresses DATA security.

#### References for Further Reading
- [General Data Protection Regulation (GDPR) Principles and Primer](https://www.ibm.com/blogs/bluemix/2017/06/general-data-protection-regulation-gdpr-principles-primer/) - a quick blog post that covers GDPR at a high level and dicusses some approaches to dealing with GDPR.

## Watson

Watson and all of the cognitive capabilities of IBM are exposed as services on the IBM Cloud platform.  This topic is huge, and there is a [whole GitHub repository (similar to this one), focused on the Watson services](https://github.com/dtoczala/watson-landing-page).  For information on specific Watson services, see that repository.

The Watson cognitive services can be broken up into some rough groupings that characterize how we think, and the capabilities that are available today.  These areas are:
- **Language** - the ability to understand conversational language.  Also includes grasping concepts from language, forming personality profiles, translating languages, and understanding tone and context.
- **Speech** - the ability to speak (text-to-speech) as well as listen (speech-to-text).
- **Vision** - the ability to "see" digital images, and to then discern information based on the images themselves.
- **Insights** - the ability to ingest data, and then provide insights on the data.

### References for Further Reading
- [Watson Landing Page](https://github.com/dtoczala/watson-landing-page) - A GitHub repository similar to this one, with pages of guidance and links to best practices that organizations adopting Watson have found valuable.
- [A beginner's guide to artificial intelligence, machine learning, and cognitive computing](https://www.ibm.com/developerworks/library/cc-beginner-guide-machine-learning-ai-cognitive/index.html) - A quick article on the history of artificial intelligence and cognitive computing.  Interesting just for background information.
