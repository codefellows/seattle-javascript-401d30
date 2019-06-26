# LAB -  `<Login />` and `<Auth />`

Using Login Context, "protect" the To Do application by restricting access to the various application features based on the users' login status and capabilities.

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

## Assignment: Implement Login and Authorization into an existing application

### Requirements

#### Migrate and Modularize
* Refactor the app to make use of the Context API
* Create a `context` for the Application
* Create a separate `<Counter />` component that reads and displays the `count` from Context
* Create separate components for the main To App elements
  * `form` - Adds and updates to do list items
  * `list` - Lists items, manages complete state and form visibility
  
  
#### Login/Auth Features
* Hide the entire interface until the user has logged in.
  * Provide a login and logout option in the main menu
* Implement the following RBAC rules:
    * Logged In Users with 'read' permissions can see the summary/count
    * Logged In Users with 'read' permissions can see the list of To Do Items
    * Logged In Users with 'delete' permissions can click the records to mark them as complete
    * Logged In Users with 'update' permissions can edit existing items
    * Logged In Users with 'create' permissions can create new items

### Notes
* You may not alter the functionality of the existing application
* You may only grant access using RBAC
* You may test with your own API server
* You must either deploy that server and configure your React application to use it, or you may use the official API deployment at https://api-js401.herokuapp.com
* The API server has the following user accounts (username:password) that you can use to login as a user with varying permissions
  * admin:ADMIN (create, read, update, delete)
  * editor:EDITOR (create, read, update)
  * user:USER (read)

### Testing
* Write a suite of UI tests that assert the existence of components based on user login state.
* You will need to create some mocking interface to fake a server/login to simulate.

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
