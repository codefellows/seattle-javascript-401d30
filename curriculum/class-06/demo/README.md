# Demos: HTTP and REST

## JSON Server -- `demo/json-server-api`
* Create `routes.json`, `json-server.json` files
* Discuss the modeling of a few related models (like players and teams)
* Create a `db.json` file with objects to reflect that
* Launch `json-server --id=_id --watch db.json --routes routes.json`
* Demonstrate both httpie and postman as ways to access data from the API
* Instill in the students that these are amazing and indepensible tools

## WWW Server -- `demo/www`
Demonstrate how we can run another server that fetches data from our own api. You'll need to run them both at the same time for it to work.

It can be powerful to have 1 student run the www server and you run the api server to show how they work together, yet must be separate.

* Simple express/ejs server with 2 routes
* `/` - Home Page (just say hello world for now)
* `/list` - List Page
  * This route calls an api (the JSON server), manipulates the data, and sends that to EJS
  * Use EJS to throw out a `<ul>` with the things in the database
  
## Swagger
* Login to the [swagger online editor](https://swagger.io/tools/swagger-editor/) and create a basic swagger document for your running json-server.
  * Source found in `json-server/docs/swagger.json`
* Do the GET routes only, with a basic schema and params to show how it all works.
* Students will do POST,PUT,PATCH,DELETE in lab.
