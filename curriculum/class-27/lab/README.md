# LAB - React Testing and Deployment

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started
Starter code has been provided for you in the `/lab/starter-code` folder. 

For this assignment, work locally instead of at Code Sandbox, as you'll need to create testing snapshots, build your docs and view the production build files.

Create a new repository for this assignment, copy the starter-code folder contents into it, and run an npm install to get started.

## Requirements

### Write Tests
* Write tests to cover the counter component
  * For Up and Down events
    * Assert state changes properly
    * Assert that state is being transferred to the DOM
    * Assert DOM stability via snapshot testing.
      * i.e. take a snapshot, change the markup/jsx, assert failure.  Put it back to make it all good.
* Add some sleek and amazing styling, different from the previous lab.

### Deploy the application
* Create a new repository for your application at Github and connect your sandbox to it.
* Clone the repo to your local machine
* Perform an `npm install`
* Perform an `npm run build`
  * You should now have a fully functional static build in the builds folder
* Do a manual deployment of the `build` folder contents to a new Bucket and Cloud at AWS
* Setup Netlify to deploy from your master branch
* Prepare an automated deployment through Cloud Formation
* Make sure that 'aws.yml' and 'build' are in your .gitignore, and then commit your code back to github
* Your App should auto-deploy to both Netlify and AWS Cloudfront.

Submit all 3 deployed URLs as well as your Travis tests and documentation links.

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
* Submit links to both deployments at AWS
