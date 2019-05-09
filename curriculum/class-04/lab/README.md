# LAB: Buffers - File Transformers

## Before you begin
* Create a new git repository for this lab
* Copy the starter-code contents into it
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Getting Started
Refer to *Getting Started* in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup instructions

#### Resources  
* [Buffer Docs](https://nodejs.org/api/buffer.html)

## Requirements
### Part 1 - Code that writes code
* With `fs`, create a file in the `files` folder called loop.js
* Using only buffers and bit manipulation, write valid JS code to this file
* The code should:
  * Initiate an array with 3 people's names
  * Iterate them with a forEach loop
  * `console.log()` each name
* You may not use `Buffer.from()` to simply create a buffer `from` chunks of your target code. Rather, you will need to work character by character.
* Verify your work by running `node loop.js` from within the `files` folder and seeing the array items printed out

### Part 2: Create an `<article>`
* Using only buffers and bit manipulation, read the file `pair-programming.txt` from the `files` folder and make the following transformations:
  * Wrap all of the content within `<article>` tags
  * Wrap each section title in an `<h2>`
  * Convert each sentence in each paragraph into a list item.
  * Convert each of the numbered sections in the bottom of the document to `<h3>` tags.
* You may not use .toString()
* Save the file as `index.html` in the `files` folder
* Verify your work by rendering it in a browser (use live-server)

### Testing
* test all your units 
  * break down the challenges into small, focused functions
* mock the fs so that you can fudge the file contents for your tests 
  * should let you control what is in the buffers and the output

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
