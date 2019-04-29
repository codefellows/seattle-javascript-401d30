![cf](http://i.imgur.com/7v5ASc8.png) Express 
==========================================

## Learning Objectives

**Students will be able to ...**

* Understand Express Middleware
* Understand Express Routing
* Properly test an `express` server
* Implement CRUD behavior through HTTP to a REST API
  * Considerations for Modeling Data

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
* State Management

## UI Concept:
* Basic Form Layout

## Main Topic:

#### Modularization & Separation of Concerns
* Modularizing your code into logical chunks
* Each thing should do the thing its best at
* Dan Abramov: http://react-file-structure.surge.sh/

#### HTTP Form Handling
* Browsers only care about GET and POST
* On our server, we need to care about PUT, PATCH, DELETE
* Express has given us a nice assist here with "Method Overrides"

#### CRUD Operations
* CREATE
* READ
* UPDATE
* DESTROY

#### Server Testing
* Generally, avoid starting the actual server for testing
* Instead, export your server as a module in a library
* Then, you can use `supertest` to run your tests.
  * This will hit your routes as though your server was running, without actually starting it.
  * That's one less thing to go wrong (eliminate variables when testing!)
* Additionally, you can wrap `superagent` in a module (the demo code created an `agent.js` module that does this)
  * Doing this, allows you set up a "mock" of this new agent module
  * Create a folder called `__mocks__` where the `agent.js` file is with an agent.js file in it.
  * When you invoke `jest.mock()` on the agent file in your test, jest is smart enough to use that mocks version instead of the real one.
  * Why is this cool? We can 100% fake every call to the API.  Again -- you don't want your tests of the web server to be dependant on the API running, so mock (fake) it, so that you are testing only the interface to the API, not the actual data.
  * You test the data/veracity of the API when you write your API tests, not web server tests...

#### Test Pyramid
  * Server Testing crosses boundaries
    * Units: Server Internal Functions
      * Mock any integrations (like data fetching)
    * Integration: How it connects to other services
      * Really connect to other services (hard dependencies)
    * Acceptance
      * The server might be a dependency of some other test


