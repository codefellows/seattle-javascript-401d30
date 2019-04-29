![cf](http://i.imgur.com/7v5ASc8.png) OAuth
===========================================

## Learning Objectives

**Students will be able to ...**
* Students will learn to setup a Google Cloud appliction
* Students will learn to implement OAuth2 on the server side

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## Computer Science Concept:
* Open Auth and Authorization

## UI Concept:
* Grid Layouts

## Main Topic

### OAUTH2.0
OAuth is an open standard for access delegation. It serves as a way to give users the ability to grant application access to services, without giving the application their password.

### Access Code
First the client needs to grant the application permision. To do this you need to provide an `<a>` tag that will take them to the service's authorization page. This `<a>` tag should pass the following information through a query string to the authorization server.
  * `response_type=code` indicates that your server wants to recieve an authorzation code
  * `client_id=<your client id>` tells the authorization server which app the user is granting access to
  * `redirect_uri=<your redirect uri>` tells the auth server which server enpoint to redirect to
  * `scope=<list of scopes>` tells the auth server what you want the user to give access to
  * `state=<anything you want>` a place where you can store info to pass to your server if you want

### Access Token
If the users grants access to the application, the authorization server will redirect to a provided redirect URI calback with a "code". Once you have this code, you can exchange it for an access token by making a `POST` request to the authorization server and providing the following information:
  * `grant_type=authorization_code`
  * `code=<the code your recieved`
  * `redirect_uri=REDIRECT_URI` must be same as the redirect URI your client provied
  * `client_id=<your client id>` tells the authorization server which application is making the requests
  * `client_secret=<your client secret>` authenticates that the application making the request is the application registered with the `client_id`
* once you get an access token, you can use it to make API calls to the service on behalf of that user
