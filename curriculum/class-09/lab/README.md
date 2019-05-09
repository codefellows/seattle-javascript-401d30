# LAB: Classes, Inheritance, Functional Programming

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

## Getting Startedd
* You will be continuing to work on your API server
* Provided for you is a working server, which you may use as a starter

## Requirements

### UML
Create a UML diagram that describes the code (and potential data) flow for each route:
  * `GET /api/v1/:model`
  * `GET /api/v1/:model/:id`
  * `POST /api/v1/:model`
  * `DELETE /api/v1/:model/:id`
  * `PUT /api/v1/:model/:id`
  
Your diagram should include proper module and functional definitions, connections and parameter/data transfers:
  * Does each function get called when the route is fired and send results to the browser?
  * What params are being sent between the functions?
  * What data is coming back?
  * Is the request object being modified?
  
### Technical Writing
* Create a folder called `/docs` at the root of the project
* Create sub-folder under `/docs` called `/config` where you will store your swagger and jsdoc configuration files

#### JSDoc
This server works great, but isn't very developer friendly at this point. 
Refer to *Documentation* in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) to generate jsdocs for this lab.

#### Swagger
Now that the server has been upgraded to support dynamic models in the routes using the `/:model` url parameter, we need to revisit our swagger documentation to reflect this.

* Add swagger.json to `docs/config` folder
* Create a get route in the `/api/v1.js` file called `/api/v1/doc` that will use the swagger-ui-express node module to render swagger documentation using a swagger.json file that you created and stored in the `/docs/config` folder
* This should pull up the swagger live docs and allow you to fully run and test your API

### Deployment
Get this server deployed to production. Although you aren't writing code against it, your documentation must be accessible through the links in your readme.  

### Testing
* Complete all of the data model and server tests
* Use `supergoose`

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations


