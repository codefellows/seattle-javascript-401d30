# LAB - Data Modeling

You have been provided a partially working API server. The assignment for today is to complete the server's functionality by creating the data models and writing a full test suite

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

* install uuid, supertest, mongodb-memory-server
* start mongo server: `mongod --dbpath=/Users/path/to/data/db`

## Requirements

### Task 1: Modeling
The provided API server is setup to work, but the data models are not implemented

* Work in the `api-server/src/models` folder in the starter code
* You will find the models (with empty methods) in the models folder
* Implement each data model, in different manners, **using only TDD**
* **Categories**
  * Create this as a class
  * Create a mongoose schemas for this collection
  * The model class should hold and manage the data in memory
  * The model class should expose methods that match REST verbs
    * `get()`
    * `post()`
    * `put()`
    * `delete()`
* **Products**
  * Create this as a class
  * Create a mongoose schemas for this collection
    * Use a pre-save hook to manipulate some part of the input (uppercase something, for example)
  * The model class should expose methods that match REST verbs yet use mongoose data access methods
    * `get()`
    * `post()`
    * `put()`
    * `delete()`
* Refer to the API server for guidance on how to properly implement the model interfaces (This is the interface contract)
  * How is the server calling each of the model methods? (What params are being sent)
  * What does the server expect back in terms of data?
  * How do the models need to return that data?
* Use **supergoose** to write tests that ensure that your mongo models work properly

**Engineering Note** APIs that enforce a data contract that define the shape of the data are the heart of a scalable and extensible system. When it's well established and agreed upon, code is movable and extendable
  
---

### Task 2: INTEGRATE WITH THE API
* Once the models are completed and tested, they should integrate well with the API Server.
* So long as your models obey the interface contract, your API routes should begin working
  * Verify this manually by visiting each of the routes with httpie or postman
    * get, post, put, delete on /categories and /categories/ID
    * get, post, put, delete on /products and /products/ID
  * Write supergoose tests to verify that your routes are functioning
    * /post saves a new record
    * /get gets all records
    * ...etc
    
---

### Stretch Goal: MODULARIZING

* Move the 2 sets of routes and functions into separate, external routers
  * They should go into a `routes` folder as separate files
  * They will need to export an express router instance
  * The app will now need to import and use these routes
* Once you've moved the routes out, the tests that you wrote should still work.

**Engineering Note** This is a main benefit of testing -- asserting that major changes don't effect functionality!

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations



