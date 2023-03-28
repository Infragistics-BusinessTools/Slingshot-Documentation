# API Explorer

In order to help you test the Slingshot API, we created a test environment that you can use in the web browser. 
You can try it out with the steps mentioned below:

1.	Head [here](https://my.slingshotapp.io/v1/api-browser/index.html) and click on the **Authorize** button that is in the right corner.

2.	A dialog will open up, where you need to enter the value. The value is a combination of the word **[Bearer](https://swagger.io/docs/specification/authentication/bearer-authentication/)** and the **Slingshot API Key**. If you don’t have an API key, you can check [this](authentication.md) article in order to create one.

   <img src="images/available-authorizations-dialog.png" alt="Available authorizations dialog where the value can be entered" class="responsive-img" width="80%"/>

3.	When you are ready, click on **Authorize** and then **Close** the dialog.

4.	Open the resource you want to test and click on **Try it out**. 

5.	Depending on your request, you might need to add a parameter. Otherwise, you won’t be able to submit it. When you are ready, click on **Execute**.

6.	You will be provided with the curl request, the request URL and the response body, and response headers. You can also find examples of possible responses.

7.	If needed, you can *Copy* the curl request to your clipboard. You can also *Copy* the response body to a clipboard or download it.

