# LAB: Express

**This is a paired Lab**

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
In the `starter-code`, there are folders that map to each of the lab assignments. You'll be creating 3 new repositories today, one for each part of the assignment.

## Requirements

### Middleware, Routing, Modularization Practice
* Create a repository called `lab-07-middleware` and copy the contents of the `starter-code/middleware` folder into it
* Complete the following tasks in the `server.js` file
  * Write error handling middleware
  * Write not found middleware and a catch-all route that uses it
  * Write middleware that runs on every route that adds a property called `requestTime` with a value of the current Date/Time to the request object
  * Write middleware that runs on every route that will run a `console.log()` containing the **method**, **path**, and the new property `requestTime` from the request
  * Write middleware that runs only on the `/d` route that raises an error using `next`
  * Write middleware that runs only on the `/b` route that takes a number as a parameter, squares it, and and sets that value on the request object in a property called `number`
    * Alter the `/b` route to `.send()` that number from the request object to the browser
* Ensure that all of your routes and middleware work as expected
* Create a router in a separate file called `routes.js`
  * Move just the `/c` and `/d` routes into it
  * Export it
  * Import it into the server file and properly `use()` it
  
**Engineering Note** - *Modularity is a tool that not only makes your code more readable and consumable by other developers, it helps you to think about how to break problems down*


### API Server
* Create a repository called `lab-07-api-server` and copy the contents of the `starter-code/api-server` folder into it
* Complete the server's CRUD functionality
  * Implement DELETE
  * Implement PUT
* Implement data integrity checking
  * Create a constructor that all input for new and updated records (POST and PUT) can be run through
  * This constructor should return a properly formatted and validated object (type checked, and required fields)
  * Only with a good object, should a write operation be allowed to occur
* JSDoc for all methods, routes
* Provide full swagger documentation
  * Your Lab-06 Swagger should be suitable as a starting point
  * Wire up to a route called `/docs/api` using the `swagger-ui-express` npm module
  * Note that your routes might be different as well as the returned data shape ... update accordingly

**Engineering Note** - *Testing servers without side-effects is crucial. More critical is not having to manage starting/stopping a server in multiple environments.*

### Testing
* Server tests have been partially provided
  * Complete the tests to cover all of your routes
* Write unit tests for the middleware
* Write unit tests for the data model


### Stretch Goal:
* Add support for `products`
  * New Model
  * Additional Routes


## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
