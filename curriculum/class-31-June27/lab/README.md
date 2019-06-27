# LAB - Hooks API

Using the React "Hooks" API, refactor a functioning application, upgrading the implementation from a class-based component state driven system in a more modern functional hooks-based state system.

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

## Assignment
Refactor the provided To Do application using the Hooks API.

Note that the application should be configured to use the deployed API, with the proper "Secret". Create a `.env` file with the following values

```javascript
REACT_APP_API=https://api-js401.herokuapp.com
REACT_APP_SECRET=supersecret
```

### Login/Auth System
* Convert the `<Login />` and `<Auth />` components from classes to functional components
  * Implement the `useContext()` hook to tap into the Login Context
  * Use the `useState()` hook in the `<Login />` component to manage form state as the user types.

### To Do Component
Note that this component is protected by the `<Auth />` system, so make sure that this functionality remains intact.

* Convert from class to a function component
* Use the `useReducer()` hook to manage the To Do List items list
* Use the `useState()` hook to manage the form

### Testing
* Tests should assert all functionality

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
