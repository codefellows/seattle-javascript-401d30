# Demo: API Server

#### Demo Name -- `demo/api-server`
* Alter the API server (starting with the previous day's solution)
  * Move to a single router (v1) instead of a different router for each model.
    * Have the students suggest ways to make the code more dry
      * "Where do we see duplication?"
      * Take notes, but lead them here ...
        * All of the models and all of the routes are essentially the same
        * Get to a common model.js that actual models can extend
        * Wouldn't it be great if here was only one routes file that could load any model?
    * This is a great opportunity to do some pair programming. The students led the conversation to get us to a "to do" list, and everything we need to do, they've done already in different labs ... bring a student up and let them drive while you talk them through it.
      * Create a new model class that the model interfaces can inherit from
      * Write models that inherit from that class
        * Make the point that the interface now is alwas the same!
        * Demonstrate extension of classes as a tool
      * Get a parameterized `/:model` in the api to pull the right model dynamically.
      * There's lots of duplication in the routes we have, this is going to be really efficient.
  
#### Modeling Demo -- `demo/api-server`
* ... still in the api server
* now that the new model system is all hooked up, you can use postman or httpie to create records and demonstrate how it all works.
* Alter the players and teams models to be a full document
  * Demonstrate as sub-documents
  * Demonstrate with references and populate
  * Demonstrate as a virtual join
  * Lots of pros and cons for each. Talk about those as you code it out.
  * Play around with the players and teams models middleware hooks
    * Let the class make suggestions on this to test things out

