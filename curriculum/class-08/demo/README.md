# Demos: Data Modeling

### Express Routing and Middleware -- `demo/routing`
* Build out a base express server, highlighting it's basic parts as you go
* Build 404, 500 middleware and put them into a middleware folder (talk briefly about modularization)
* Build in a logger just to show how to do it inline.
* Add in a few get routes (`/my/stuff` and `/your/stuff`)
* Once it's all wired up, bring up the topic of modularization
  * Paint a picture of a server with 100+ routes
  * Routes often go together
  * Often, routes match models or behaviors
* `express.Router()'
  * Move those 2 routes into separate files
    * Implement express.router() and export them.
  * Import them back into the server
  * For one of them, leave the full get route in the route (`/my/stuff`)
  * For the other, `use` it with a prefix: `app.use('/your', yourStuffRouter)` and then in the route, only declare `/stuff` to prove that you can wire it that way as well.
  
### Modeling -- `demo/models`
* Time to start to get real in terms of data modeling.
* No server -- do a full TDD only on data models
  * Create 2 models that do CRUD operations on a data type
  * Both of them should implement RESTy style method names (get(), put(), etc)
  * One model should remain as an in-memory model
    * Deal with data normalization topics again (this should be a review from Class 07)
  * Create a new one with a mongo schema
    * Don't go too deep. For this class, just introduce a schema and demo how it gets saved into a Mongo Database.
    * Introduce lightly the concept of mongoose middlware and hooks
    * DO NOT get into subclasses or interfaces. That comes in class 09
    
### Assemble it together -- `demo/api-server`
* For the 3rd demo, build out a simple API server that marries the 2 concepts
* Build this with 2 route modules (players and teams, for example)
* Build 2 data models (one memory, one db ... maybe use the ones you build previously)
* Point the routes at these simple data models to do CRUD
  * Only do get and post in class. 
  * For lab, they'll do all the CRUD ops in their own models.
* Focus the demo on the modularity of the server, not how to build out those pieces again
* Re-Iterate how express middleware works, and the roles that each file plays.
* Discuss strategies for breaking up the modules and the route handlers



