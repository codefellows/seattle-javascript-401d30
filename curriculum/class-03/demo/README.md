# Demos: Async

## Live Coding Demo(s)
There's a lot of demo code here. The concepts for this lecture/demo are all intertwined, and lend themselves pretty well to building on one another.

Moving from asynchronous callbacks to promises to async/await layers the concept for students. While there's a lot of code here in the demo folder, as an instructor, you don't need to hammer all of this out live.

The `async-app` is actually a pretty succinct demo that brings all of the concepts together in one app that you can build out, layering on each of the concepts. Coupled with the `file-reader-module` (which introduces `fs` and mocking), the students should be well prepared for lab.

The other demos are there so that you have some reference code for diving really deep into a particular topic, or for students to get and see more depth where that app does not provide it.


### App - `demo/async-app`
  * This is a simple application
    * `async.js` exports an asynchronous callback and a promise
    * `index.js` requires `async.js` and runs some async callbacks and promises to show their live use
    * `__tests__` exist to show students how to test async code with jest
    
### Files - `demo/file-reader-module`
  * This demo shows how to mock the fs module for the purposes of tests
  * The demo itself just reads a file and logs it's contents, which isn't terribly interesting
  * The test uses a mock of the node `fs` module.
    * Important to talk about the importance of mocking when hitting FS or a server

### Callbacks  (`demo/async-concepts/callbacks.js`)
  * The first demo shows creating a simple callback function and then another function that's called with that callback as a param.  Might be the first time they're ever seeing a function sent as a param, so this might turn into a rabbit hole
  * The second demo shows the error first pattern (and the use of undefined if there's not an error)
  * The final demo shows some asynchronicity. The order of the console.logs proves that out.

### Promises (`demo/async-concepts/promises.js`)
  * Demonstrate how `resolve()` and `reject()` feed `.then()` and `.catch()`
  * The second demo is a long string that shows how errors are passed to the first  `.catch()` and then the flow can continue or die.
    * change that demo after you run it to not return in that first catch and watch the chain stop there.
  * The final demos shows off Promise.all()

### Promisify (`demo/async-concepts/promisify.js`)
  * Demonstrates how to turn any error first callback into a promise
  * The first demo is done manually to show "how" this works
  * The second one uses the built in node library, which is more robust, to do the same thing
  * Explain that this is for them to sort of bookmark or file away, but they won't really understand why is so cool until after lab...

### Async/Await (`demo/async-concepts/async-await.js`)
  * Function must be of type `async`
  * `await` only works in an `async` function
  * The first demo shows a simple example.
    * Demonstrate that you cannot "return" data from an async function  (you get a promise back)
      * But you can treat it like a promise ;)
    * You can operate in the function, and it looks like sync code, which is cool
  * The last example shows how you keep trying until you get a good response. This is far easier with async/await than promises


