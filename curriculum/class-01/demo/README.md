# Demos: Node Ecosystem

## Environments  (`envs`)
  * Open up the shell and talk about it being a place to run commands
  * Run `code .` and explain that you're running an app called 'code' and telling it what file to do it's work with.  When you close it, you're back at the shell.
  * Open up `bc` and do some math. Again, it's a place to run commands
  * Open up `node` and you can run JS -- it starts up an environment that gets the ENV vars, memory, etc.  This *is* the console, effectively
  * You can use the php shell (`php -a`), or the perl shell (`perl -dei`) and issue commands to those languages, too.
  * Edit a file called `app.pl` that prints out "hello from perl"
    * Run this will perl app.pl
  * Repeat with app.php, app.py, etc
  * Hammer in the point that perl, php, sh, python are all "apps" that:
    * start up an "environment" not unlike your shell
    * read in the file you tell them to open
    * figure out what your code does (compile it)
    * execute that code
    * return you back to where you started
  * Now, do it with a .js file, using node as the runner


## Modules (`hello-world-single-function`, `hello-world-exported-methods`)
* Write a simple app that has an index.js and a lib/hello.js
  * hello.js should export itself as a function
* Refactor that, and have hello.js export an object with functions, and then change index.js to use `hello.functionName()` instead of `hello()`
* You can show that with this pattern, you can export variables/constants as well as functions, and also have functions and variable in the library that are NOT exposed.

## TDD (`hello-world-tested`)
* Start fresh with empty index, library, and __tests__/ files
* TDD the hello module
* You'll need to build out the package.json with dependencies, test scripts
* Bring in .eslintrc.json so that you can do lint tests
* Talk about .travis.yml for doing CI
* TDD requires a bunch of extra plannng and pre-steps!
