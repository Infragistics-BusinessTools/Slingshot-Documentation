---
title: Slingshot API Overview – REST API Documentation
_description: Learn how to use the Slingshot REST API to access and integrate your Slingshot data. Supports HTTP requests with JSON responses in UTF-8 encoding.
---

# Overview

In order to access your Slingshot data from another app, for example, a tasks list, a connection between Slingshot and that app has to be established. This connection can be built with the help of the Slingshot API.

The Slingshot API uses [REST](https://developer.mozilla.org/en-US/docs/Glossary/REST) principles. You can submit HTTP requests and the information will be returned in [JSON](https://www.json.org/json-en.html) format.

Keep in mind that the requests and responses support only one type of character encoding - [UTF-8](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8). 

To start using the API, you need to first authenticate yourself. [Here](authentication.md) you can find more information about the process of authentication. 

>[!NOTE] Below, you can find the general object model of Slingshot. 

<p align="center">
<img src="images/hierarchy-structure.png" alt="Example of general hierarchy structure" class="response-img" width="28%">
<p align="center">

To learn more about the specific hierarchy options at each level, you can head [here](https://www.slingshotapp.io/en/help/docs/slingshot-api/explore-object-model).


