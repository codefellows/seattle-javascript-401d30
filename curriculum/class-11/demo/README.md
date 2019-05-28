# Demo: Authentication

## Auth Server Demo

While we can make mention of the API server that was built in the previous block, this block is all about authentication (we're going to marry the 2 servers as the Capstone for this week), so beginning with this demo, work in a server that essentially only does authentication.  It'll have a couple of test routes in it, but nothing of consequence.

As Instructor, you'll be building off of this demo server each day

Note -- it won't be all that much different (if at all) from what the students will ultimately build. This Block is much more about concept and wiring than code logic, so be sure and cement the core concepts as you build this out.

### Breaking the demo down

#### Basics
The `index.js`, `app.js`, and `/middleware` folders are essentially carry-overs from the API Block. This is our standard "express server" ... in fact, it's what the class does weekly as part of their "JS Practice Plan" 

As you build this part out, re-cover all of the parts, but treat it as review. In fact, it's a great idea to have a student pair program this with you, or have the class as a group navigate you through coding this out. This is a great example of stacked learning at work.

#### /auth
The focus of this entire block is going to be in building out the code in the `/auth` folder.

This first demo is getting the basics down. There is a LOT of infrastructure here. Understand the steps below and where they map into the demo code. The order given below is a suggestion for building it out in pieces, giving you conversational points and places where you'll get stuck, requiring the next step to move on.  This is only a suggestion, of course, but it does lend itself to making a decent movement through the requirements.

It's good idea to draw this on a whiteboard before you code it out, and then cross things out as you go, so that the students have a sense of direction and completion percentage.

1. We want to implement authentication, generally, with middleware so that you can easily protect any route, like this:  `router.get('/foo', auth, (req,res) => { ... });`
1. Before we can do that, you'll need to first build out a user model (call it `users-model.js` because in a few classes, we'll be adding a new model) that initially serves to let us create a new user.
1. Then, create the `.post('/signup')` route which will let you create a user from httpie or postman, given an object.
1. Shift the conversation to storing the password. Can't do it in plaintext, so we bring in bcrypt to encrypt it, and then save that to the DB.
1. Build a `.post('/siginin')` route that uses auth middleware as shown above.
1. Now, create auth middleware. It will need to:
  1. Break down the authorization header
  1. Split apart the values
  1. Send the username,password to the user model to see if you are ok to login
  1. Given a good result, generate a token (more on that over the next few days) and send it back to the route. Probably a good idea to stuff `user` and `token` onto the request object so that they can be used by the router.
1. Modify the user model to validate the password using bcrypt and create the token.

