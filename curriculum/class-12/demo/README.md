# Demo: OAuth

Change this --- the demo is tiny. The lab needs to be an integration prior to the research

## Live Coding Demo(s)

### Google Account
* Login to the google developer console and create a new credential for this lab
* Get a new API key
* Enable the Google Plus API
* Head to the docs to highlight the steps our handshaking process will need to take.

### Demo Part 1 -- `demo/oauth`
* Create a static route, with an index.html file to hold the button
* This button gets wired to google to do the pop-up permission window
* The index.js is a very simple express app that has a single route that does the back and forth chatter for OAuth
* Code this up just to the point where you get back a user from Google.

### Demo Part 2 -- `demo/auth-server`
Now that you "can" do OAuth, the next step is to wire that into the server. Ask the class how to do that ... work them into the answer, which is to move this route into your `auth-server` (the easy part) and then to take that user that comes back from Google and create an actual account in your mongo db with it.

This gives you a chance to talk about how you did this to see how things work, and then you can wire/integrate it into the server and add that bit of functionality. It also gives you a chance to code it a second time, cementing the concept.

* The `demo/www-server` folder contains a static express server with an index.html file only.
* Use this to serve up the login button.
* Important to keep this separate from the `auth-server` ...why? Cement the fact that these can be totally separate and usually are.

For the actual OAuth piece ...

* Code from the `demo/auth-server` folder.
* The starts you out with the basic auth-server built in Class 11
* `auth/router.js` - Add a new route for `.get('/oauth')` that will be used to initiate the oauth handshake process.
* Most of this lab will be spent building out the handshakes in the `auth/lib/oauth/google.js` file
  * Take this step by step through each of the handshake steps
* `auth/users-model.js` needs a new static method, called `createFromOAuth()` that creates the mongo user from the data obtained by oauth.
* Lots of opportunity in here to use the debugger to check the progress of all the handshaking.

## What bugs, issues, or surprises have come up in the past for this class?

## General Comments and Notes
