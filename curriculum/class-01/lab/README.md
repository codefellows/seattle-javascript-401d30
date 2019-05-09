# LAB: Node Ecosystem

## Before You Begin

* Create a new git repository

* Copy the contents of this `lab` folder into that repository at the root level

* Initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

* Setup the package.json file to run lint checks and tests against the greet and arithmetic modules

#### Getting Started
In the `start_code` folder, there is a partial implementation of both the arithmetic and greet modules.

In the `root` folder, you'll find a file called `index.js` that wires in the arithmetic module and attempts to run functions imported from them.

In the `__tests__` folder, you'll find a file called `arithmetic.test.js` that wires in the arithmetic module but does no tests.

## Requirements

#### Implementation
* Use the `index.js` file to both "greet" and perform "math" operations using the imported functions from the 2 modules
* `console.log()` the return values


#### Part 1: Arithmetic Module

* Add support for multiply and divide (be careful to not divide by zero!)
* Refactor the add, subtract, multiply to allow for an array of params so that you can do deeper calculations
* DRY the code by externalizing any type checking or argument validation from your methods

***Software Engineering Note!***
*Externalizing type checking and argument validation is a good exersize in refactoring code*

---

### Part 2: Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

## Testing
*Arithmetic Module* 
* Use the faker module to randomize input
* Test each method for proper use (invoked with number arguments)
* Test each method for improper use (invoked with one or more non-number arguments)

*Greet Module*
* Use the faker module to randomize input
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument


### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
