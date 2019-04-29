# Lab Submission Instructions

## General Operation
* In the folder for each class in the class repository, you will find a `lab` folder
* The folder for each day in the repo contains:
  * README.md - The instructions for the lab
  * `starter-code` folders - Contains any starter code for your lab
* Create a new github repository for each lab
  * If there is a `starter-code` folder for the lab, **copy it's contents** *(not the folder itself)* into your new repository
* Ensure that your repository/branch is connected to travis-ci.com
* For deployable labs (servers)...
  * Ensure that your repository/branch is connected to a dyno at heroku.com
    * Create a new one for each day that contains a server deployment
    
### Configure your repository
 Configure the root of your code folder with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
 * **README.md** - contains your lab documentation
 * **.env** - contains env variables (should be git ignored)
 * **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
 * **.eslintrc** - contains the course linter configuratoin
 * **.eslintignore** - contains the course linter ignore configuration
 * **.travis.yml** - contains the course linter ignore configuration
 * **package.json** - contains npm package config
   * create a `lint` script for running eslint (eslint **/*.js)
   * create a `test` script for running tests
   * create a `start` script for running your server
   * create a `jsdoc` script for building your JSDoc files
   * create a `styleguidist-build` script for building the styleguide (with your config file)
   * create a `styleguidist-server` script for building the styleguide (with your config file)
   * create a `deploy` script (optionally) to combine any of the above steps
 * **styleguidist.json** - contains settings for styleguide docs (For React Only)
 * **/\_\_tests\_\_/** - contains unit tests
 * **/docs** - Where your documentation will reside
 * **/docs/config**
 * **/docs/config/jsdoc.config.json**
   * JSDOC Config File
   * Edit this for each lab, if your folder structure is different

### Canvas Submission
* Copy the README-template.md file from the reference/submission-instructions folder, rename it to `README.md` and include it in your lab repository in the root folder
* README must include the live (deployed) URLs to your **running server**, **API Documentation**, and **JSDoc**
* README should contain link to open PR on submission branch
* Keep submission branch PR open in case of resubmit
* Do NOT merge to master
* Submit a Link to this README.md 

### Resubmits
* Any commits made to submission branch will be updated in the PR
* In event of assignment resubmission, submit submission branch PR on canvas 
* **Code Sandbox Submissions**
  * Create a folder called `docs` (under `/public` for React apps)
  * Upload your README.md and any supportive images to this folder.
  * Submit a link to your `/docs/README.md` for your canvas submission

---

## Server Applications

### Deployment

 * Your server must be deployed at Heroku
 * If it requires a database, provision it
 * For APIs, your endpoints should all be testable remotely using httpie or postman
 * For Web Servers, your website must be reachable

### Testing
 * Write a complete set of tests for all data models, independent of the server
 * Use `supergoose` to test mongo models
 * For testing the server and routes, use `supergoose` to do end-to-end testing
   * What we're testing is not whether express works, but whether your routes are doing the correct things.
 * For APIs, use Dredd to make assertions about your API using your API Blueprint docs
 * Your tests must be running green on travis.com

###  Documentation

#### Compose a UML or Process/Data Flow Diagram for every application
 [UML Reference](https://www.uml-diagrams.org/index-examples.html)
 
 * This should be the first thing you do when beginning work on a lab assignment.
 * Draw the process/data flow of your application and map it to the code you will need to write or evaluate/fix.

#### JSDoc
[Official Documentation](http://usejsdoc.org/about-getting-started.html) | [Cheat Sheet](https://devhints.io/jsdoc) | [Style Guide](https://github.com/shri/JSDoc-Style-Guide)

* Write proper jsdoc for every function, module, and class.
  * Be descriptive about the functions' purpose
  * Declare data types for params and return values
* Copy a proper jsdoc config file (ref: configs folder, class repo) into the `/docs/config` folder
* Create a `jsdoc` script in your package.json that will use that config file to generate documentation in the `/docs` folder
* Run `npm run jsdoc` to create documentation in the `docs` folder
* Add support for rendering JSDoc Documentation in your server
  * Create a static route in `/api/v1.js` that uses `express.static()` to map `/doc` to the `/docs` folder that will house the generated jsdoc

#### API Documentation

 * Add proper documentation for API Servers
   * API Blueprint: put an updated `api.apib` in the docs/config folder
   * Swagger: put an updated `swagger.json` file in the docs/config folder
   * Create an express route to surface live API docs using the appropriate config file 

---

## React Applications

### Deployment

 * For daily labs, using Codesandbox.io is sufficient for deployment
 * Your block projects (applications) must be deployed at AWS Cloudfront or Netlify
 * Use an automated deployment, connecting your repository to AWS through cloud formation
 
### Testing

  * Create snapshot tests for your applications
  * For components, do functional tests with enzyme mount with assertions on
    * Interactivity
    * Class/CSS Application
    * Visibility
    * State Changes
  * For reducers and hooks, create pure unit tests to assert their baseline functionality

### Documentation
[Styleguidist Documentation](https://react-styleguidist.js.org/)

  * Describe your PropTypes
  * Document your components with Styleguidist
    * Use `<Component>.md` files to describe components and provide examples.
    * Setup your `package.json` to build your styleguide docs in a subfolder of `/build`, after your normal react `build` script runs
    * Ensure that your deployments are properly building your styleguidist docs



## Grading Rubric
Note: Not every lab will require all facets below. In these cases, points application from other (perhaps higher focus areas) will be increased.


| Criteria            | Deductions / Notes                                                                                     | Max Points |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| Feature Completion  | Score based on % of features demonstrably completed                                                    | 2/5        |
| Code Implementation | Efficiency of code // Missing JSDoc // Poor Code Quality // Modularity // Monolithic // Non-Functional | 2/5        |
| Tests               | Targert: 80% Coverage // Running in CI (i.e. Travis)                                                   | 2/5        |
| Deployment          | (When applicable) - Deployed, Running, Testable: AWS, Heroku, Azure, etc.                              | 2/5        |
| Documentation       | Proper README // UML Diagram // JSDoc Coverage                                                         | 2/5        |
|                     |                                                                                                        | 10/25      |
