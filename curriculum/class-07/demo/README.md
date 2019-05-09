# Demos: Express

### Demo Name -- `demo/middleware
* This should be an interactive demo.  As you talk about what middleware is and does during the lecture, each of the principles in the lecture matches up to a bit of middleware in this little server.
* Start to re-order middleware functions & definitions
* Apply app level and route level middleware
* Show an example of curried middleware, which is a simple function that takes normal params, but returns a middleware function that use them. 
* This works because as the route is defined, the curry function executes immediately, returning the actual middleware. Students will find this magical.
```
let smartMW = (person) => {
  return (req,res,next) => {
    req.person = person;
    next();
  };
};

app.get('/foo', smartMW('john'), (req,res) => { ... });
```
  
### Demo Name -- `demo/api-server`
* Build a monolithic API server
* Only code out get and post, but not get one, delete, or put
* Show how you can write tests on the server itself
  * If you can get to it, show the mocking behavior for agent/superagent
  * Talk about why you'd not want to fire up the API server (mock it)
  * Talk about why you don't want to spin up THIS server to test it
  * Welcome -- supertest!
  
