# Demos: HTTP and REST

## JSON Server -- `demo/json-server-api`
* Create `routes.json`, `json-server.json` files
* Discuss the modeling of a few related models (like players and teams)
* Create a `db.json` file with objects to reflect that
* Launch `json-server --id=_id --watch db.json --routes routes.json`
* Demonstrate using httpie, RESTy, and postman as ways to access data from the API
* Instill in the students that these are amazing and indispensable tools

## Swagger
* Head to http://www.swagger.io
* Walk through the docs and show the petstore example to explain what swagger doc is and does
* Use the Inspector and hit your json-server routes to show it working
* Generate doc with the online tools, using your history.
  * [Inspector](https://inspector.swagger.io/)
  * Show the doc working in real time

## REST Clients Server -- `demo/www`

### React Client
Open this [Sandbox](https://codesandbox.io/s/w638oyk7o8) to show a running react app that already knows how to connect to http://localhost:3000 and use the json-server routes you made in the first demo. This is cool to see their API being used by an external app.

### Express Client

If you want to get deeper, build our a full express application server to demonstrate how we can run another server that fetches data from our own api. You'll need to run them both at the same time for it to work.

It can be powerful to have 1 student run the www server and you run the api server to show how they work together, yet must be separate.

* Simple express/ejs server with 2 routes
* `/` - Home Page (just say hello world for now)
* `/list` - List Page
  * This route calls an api (the JSON server), manipulates the data, and sends that to EJS
  * Use EJS to throw out a `<ul>` with the things in the database
