# LAB: HTTP and REST

Get your hands dirty in using and properly documenting an API

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

### Build a working JSON Server

* Implement an API server suitable for a storefront, using json-server
  * Install `json-server` globally
  * Create a new repository called "simple-api"
  * Create a folder called `data` with a `db.json` file
  * Start json-server from within the `simple-api` folder and "watch" your database file
    * `json-server --watch=./data/db.json`
  * Data models should contain the following fields:
    * `categories`
      * `_id`, `name`, `display_name`, `description`
    * `products`
      * `_id`, `category`, `name`, `display_name`, `description`
  * Your api will (should) respond to the following endpoints:
    * `/categories`  GET, POST
    * `/categories/:id/` PUT, DELETE
    * `/products`  GET, POST
    * `/products/:id/` PUT, DELETE

* Connect a web server
  * Open this [React Application](https://codesandbox.io/s/w638oyk7o8) and "Fork" it
  * Open the .env file and enter the URL to your API Server
  * This server is configured to use the routes noted in the first lab requirement
  * If your lab is working, this app will show your API Data!

* Swagger Documentation
  * In your API, Create a folder called `docs`
  * Write and publish swagger documentation with Swagger Editor
    * Open [Swagger Editor](https://swagger.io/tools/swagger-editor/)
    * Review and use swagger's default **Pet Store** documentation for reference
    * Copy and paste swagger.json from starter code into the editor, resolve errors, and complete missing documentation


### Testing
**No automated testing is required for this assignment**


### Stretch Goal:
* Alter json-server to produce proper standardized API output
  * Rather than just an array of objects on a get
    * Return an object with a `count: ##` property and a `results: []` array
    * To do this, you'll need a server.js that requires in json-server and which overrides the renderer.  You will find instructions and examples on the json-server github page
  * Alter the swagger docs to reflect the new json format
  * Alter the www server to use the new json format

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
