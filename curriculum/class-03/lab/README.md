# LAB: Async

## Getting Started
Refer to *Getting Started* in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup instructions

## Requirements
### Part 1 - Read and Write to a File
Write a node application, called `edit-file.js` in the root of your project that will modify a file on your computer;

#### Getting Started
In the `files` folder, there is a file called `test.txt`

#### Requirements
* Use the node `fs` module
* Accepts a file name as a command line parameter
* Reads in the contents of the file specified with the CLI (test it out with that test.txt file)
* Creates a random value (using Math.random() or maybe faker()
* Puts that random value into the file
* Save the file
* Re-Open and read the file contents
* Emit a `console.log()` that shows the contents before and after the operations are completed.

***Software Engineering Note!***
*Working with command line arguments is an essential part of writing server side code, which often starts with options. Learn to read and use them*

### Part 2 - Reading Multiple Files
Using Node, read in a number of files, specified on the command line as arguments, **in order** and print their contents.

#### Getting Started
In your lab folder, you'll find an `index.js` file that calls on a library file: `lib/reader.js`
In the files folder, you'll see 3 files: `1.txt`, `2.txt`, `3.txt`

#### Requirements
* The index.file should accept filenames as parameters from the command line and then invoke the reader function with an error first callback to read in the 3 files, and `console.log()` their contents (the `data`)
* The reader library should be reading in the files given to it in order and returning back an array of contents from those files.
* You should also be able to run npm test and have the reader test file run against that same library to make the same assertion.

#### Task 1: Fix the broken code
* None of the above actually works.
* Make a copy of the reader.js library called `reader-broken.js`
* (Keep this, and use it for reference)
* Fix `reader.js` so that the files are read in the order specified on the command line AND returns an array of their contents in that same order.
* Once you do this, index.js should give you the right content and your tests should pass!

#### Task 2: Use promises to read 3 files
* Make a copy of the reader.js library called `reader-promises.js`
* Make a copy of the reader.test.js library called `reader-promises.test.js`
* In this new file, convert the code you fixed in task 1 to use promises to read in 3 files instead of callbacks
  * HINT: Use util.promisify() to make fs.readFile work like a promise ...
* Do you need to nest?
* You'll need to change the tests to work with promises instead of callbacks.

#### Task 3: Use async/await to read 3 files
* Make a copy of the reader.js library called `reader-async.js`
* Make a copy of the reader.test.js library called `reader-async.test.js`
* In this new file, convert the code you fixed in task 1 to use the async/await to read in 3 files instead of callbacks
  * HINT: Use util.promisify() to make fs.readFile work like a promise so that you can await it ...
* Do you need to nest?
* You'll need to change the tests to work with async instead of callbacks/promises

#### Testing
* valid input params from the cli
* handle errors (i.e. file not found) in a consistent way
* check for proper ordering of the output

#### Stretch Goals
##### Use `Promise.all()` to read an array files
* Make a copy of the reader.js library called `reader-promise-all.js`
* Make a copy of the reader.test.js library called `reader-promise-all.test.js`
* In this new file, convert the code you fixed in task 2 to use an array promises to read in any number of files
* You'll need to change the tests to have more wide assertions

##### Use callbacks to read an array of files
* Make a copy of the reader.js library called `reader-callbacks-array.js`
* Make a copy of the reader.test.js library called `reader-callbacks-array.test.js`
* In this new file, convert the code you fixed in task 1 to run with any number of files.
* You'll need to change the tests to assert on 1, 2, 3, + files


### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

