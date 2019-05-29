# LAB: Bearer Authorization

To this point, our `auth-server` is able to handle Basic Authentication (user provides a username + password) and Oauth (user authenticates through a 3rd party). When a "good" login happens, the user is provided a JWT signed "Token" from our auth-server.  

This lab will have you operating on the `/signin` route to add support for Token based authentication ("Bearer Auth") using a token that you can obtain from performing the above activities.

You'll be required to wire up Bearer auth properly and then to dive in deeper and add some security measures to the tokens to prevent misuse and fraud.

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

* You'll need copy the contents of the auth-server folder into a new git repository for this lab, install your dependencies, setup your npm script commands, and pull in your config files
* You will need to create a .env file with:
    * MONGODB_URI
    * PORT
    * SECRET

## Requirements
Implement a Bearer Authentication system with optional token expiry, api keys, and single use tokens.

### Assignment 1: Install the core bearer authorization system
* `middleware.js` - Handle the Bearer Header to pull and verify with the token
* `users-model.js` - Add a bearer authorization method that verifies the token
* Create a few users+passwords to test with

### Assignment 2: Improve the core bearer authorization system...
* Add support for the creation and usage of time sensitive (valid for 15 minutes) JWTs
* Add support for the creation and usage of 'single-use' JWTs
  * With every authenticated access, re-send a new JWT token as a cookie or header
  * Disable those that you've already authenticated
* Implement these via configuration (i.e. an env setting or login option) so that your system can handle multiple authorization schemes

### Assignment 3: Create a Auth Key system
  * Create a new route: `router.post('/key' ... )` that will generate a JWT without an expiration date, and noted to be an auth key (so that it won't be deleted like a single use token)
  * Allow users to authenticate using the Auth Key as they would a normal token
  * Auth Keys should never expire
  * Auth Keys should be re-usable
  * How might you make this secure?
  
### Notes

To test your routes, you'll need to first login with a valid user to get a token, and then use httpie or postman to hit the routes using a Bearer Token

**httpie**
```
http post :3000/hidden-stuff "authorization: bearer TOKENHERE"
```

### Testing
* Add test coverage to the auth tests to assert that:
  * given a good token user is able to "log in" and receive a new token
  * Tokens can optionally be expired
  * Expired tokens do not allow a user to login
  * Auth Keys can login a user as a token would
  * Auth Keys do not expire


## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
