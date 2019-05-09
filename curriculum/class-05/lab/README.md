# Block 1 Project: Bitmap Transformer

For this assignment you will be building a bitmap (`.bmp`) transformer CLI. It will read a bitmap in from disk, run one or more color or raster transforms and then write it out to a new file.

## Before you begin
* Create a new git repository for this lab
* Copy the starter-code contents into it
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Resources
* [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format)
* [Buffer Docs](https://nodejs.org/api/buffer.html)

## Getting Started

In the root folder, there is an `index.js` file that should serve as your starting point.

* The index.js file reads the file and creates a bitmap instance that can `parse()` and `transform()`
* The parsing has been left to you
* A sample (yet non-functional) transformation has been provided.
* No tests have been written, you'll need to implement those

In the `assets` folder, you'll find a file called `baldy.bmp` that is your source file for all transformations

## Requirements
### Part 1
* The entry point to your CLI should be index.js
* Your application should accept at least 2 parameters:
  * The file to transform
  * The transformation to run
  * If you want/need more options from the user, accept those as well
* The CLI should log useful Error messages if used incorrectly
* The CLI should log a success message on completion
* Your application must perform a minimum of 2 unique transformations
  * One of these can be a core color/hue change
  * One of these should be something more challenging
  * See the suggestions below
* This project will require the use of node buffers in order to manipulate binary data.
* Your solution should be composed of small tested modules that solve specific problems.
  * Modularize your code based on functionality
    * File Reader
    * File Writer
    * Transformers

***Software Engineering Note!***
*Documentation is your frienemy*

### Testing
* tests should mock the filesystem
* have plenty of modular units to test independantly
* write functional/integration tests to assert that it all works together.

### Strategy / Notes / Hints
You will want to define a strategy for solving the problem before you begin to code. Once you have a strategy defined, you can break it into steps that can be split into helper modules. Each helper module should solve a small specific problem. The main module should utilize the helper modules to execute your original stratagy.

1. Gather user input (infile and transform)
1. Read the input bitmap file using the fs module
1. Parse the bitmap's buffer into object represeting a bitmap (using a constructor)
1. Using metadata from the parsed bitmap object run a transform on the buffer directly (mutate the color or raster data)
1. Write the mutated buffer to the output file path

#### Transfrom Ideas
* Color Pallet Transforms
  * Invert
  * Randomize
  * Black and White
  * Darken or Lighten
  * Add or Mutiply a Hue
  * Add or Subtract Contrast

* Raster Data Transforms
  * Pixilate
  * Add a border
  * Add a watermark
  * Vertically or Horizontaly Filp
  * Verticaly or Horizontaly Mirror
  * Verticaly or Horizontaly Stretch

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
