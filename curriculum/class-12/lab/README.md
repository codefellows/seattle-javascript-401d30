# LAB: OAuth

Our company has decided to integrate OAuth instead of managing usernames and passwords internally. In order to make the best decision, we are creating small research teams to assess the suitability of various OAuth providers.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started
* This lab contains 2 folders
  * `www-server` - The Web Server with the login form
  * `auth-server` - The Backend Server that takes care of the authentication and user creation processes
* **You will need to create 2 new repositories from the contents of these folders**
  * All files/folders must be at the root of the new repository, not in the sub folders they currently reside in.
  * For the server, you will need to create a .env file with:
      * MONGODB_URI
      * PORT
      * SECRET
      * GOOGLE_API_KEY
      * GOOGLE_CLIENT_SECRET
* When you deploy, deploy the auth and www servers separately to Heroku, into new dynos.

## Requirements
* You will be assigned an OAuth provider to integrate with. Sites such as Yahoo, Github, Facebook, and AWS all have OAuth mechanisms that work similarly to Google. Integrate your provider into the auth server, using google+ as your guide, reporting back to the team with a general feasability report.
* This is a group lab that will have you integrating OAuth with any provider.
* Spend no more than 4 hours on this assignment.

### backend server
* create an account/app/credential on your assigned OAuth Provider
 * configure oauth credentials to support a client app on `http://localhost`
 * configure oauth credentials to support a server redirect uri to `http://localhost:3000/oauth`
* create a backend route `GET /oauth` for handling oauth redirects
* create a new file under `/src/auth/oauth` for your provider

### frontend server
* create an index.html with an anchor tag pointing to the google authorization page
* configure the query string with correct key value pairs

### Testing
* Not Required

## Assignment Submission Instructions
* Complete the REPORT.md file included in the lab folder and prepare a group presentation for the class based on your findings.
* Have 1 person from your group submit the REPORT.md

## Provider Documentation Reference
* [GitHub](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
* [Auth0](https://auth0.com/)
* [Wordpress](https://developer.wordpress.com/docs/oauth2/)
* [Facebook](https://developers.facebook.com/docs/facebook-login/)
* [LinkedIn](https://developer.linkedin.com/docs/signin-with-linkedin)
* [Amazon](https://developer.amazon.com/login-with-amazon)
