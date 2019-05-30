# LAB: Access Control

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

## Requirements

Implement Role Based Authentication

### Assignment
* Create a new router that contains a few new routes (see examples below) that we can protect using our authentication model.
* Protect your New Routes with the proper permissions based on user capability
  * `router.get('/public-stuff')` should be visible by anyone
  * `router.get('/hidden-stuff')` should require only a valid login
  * `router.get('/something-to-read')` should require the `read` capability
  * `router.post('/create-a-thing)` should require the `create` capability
  * `router.put('/update)` should require the `update` capability
  * `router.patch('/jp)` should require the `update` capability
  * `router.delete('/bye-bye)` should require the `delete` capability
  * `router.get('/everything')` should require the `superuser` capability
* You will need to restrict based on the given permission via middleware
* Implementation of the ACL itself should be re-written using a separate model called "roles" populated as a virtual field in the users table
   * *not as a hard-coded table within the User Model as done in the demo*
   * Hint: This might impact the .can() function and how you build out the token
   
### Notes
* You will need to create, roles and capabilities permissions in a new collection called 'roles' in  your mongoose database before anything will work properly
* There are many ways to do this
  * Create a route that lets you create a role (similar to a POST in the API) and create them one at a time
  * Create a route that builds the roles collection 
  * Write a separate .js script that builds the roles and an npm script that you can use to initiate that from the command line (or during deployment)

To test your routes, you'll need to first login with a valid user to get a token, and then use httpie or postman to hit the routes using a Bearer Token

**httpie**
```
http post :3000/hidden-stuff "authorization: bearer TOKENHERE"
```

### Testing
* Add tests to the api routes, asserting restricted access to the routes as shown.
* Add tests to the mongoose model for the created static and instance methods.

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
