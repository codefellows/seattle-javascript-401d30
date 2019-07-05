# LAB - Remote CRUD

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

Open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to today's starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.

Fire up your API Server locally or connect your app to our remote API
* https://api-js401.herokuapp.com

## Assignment
Conver the forms lab into using remote APIs to source the schema and save the record data

### Requirements
* Remove the code that requires the `.json` file in  your react app for the schema and adds it to state
* Pull the schema from the remote server via the resource path `/api/v1/players/schema` (or whichever model you choose)
* On your first pull from the server of the database records, save them in the store for faster retrieval
* Instead of saving straight to the Redux Store, use an async action creator function to send data to the server (using post or put) and then update the local store
* When rendering the forms and lists, use the store as a cache, and update it after you save to the server.

### Testing
* tests that ensure the list module functions correctly with error-check parameters

### Stretch Goals:
* Style it!

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
