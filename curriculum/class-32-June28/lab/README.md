# LAB - Socket.io Client

For this assignment, you will be refactoring a socket.io based chat application to make use of React Hooks and Context APIs

In addition to the raw functionality, you should give careful consideration to the visual layout of your application, color choices, animations, and overall usability.


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


## Requirements
* Begin working with the server running locally.
* Create a `<ChatContext />` that wraps the entire application with chat logic and state
* Create a chat 'hook' that consumes that context with the `useContext()` hook
* Incorporate that hook into the `<Words />` and `<Form />` components for the display of chat messages and the sending of new ones.
* Change the functionality from showing only the last phrase typed to displaying a running view of the **last 15** entries
* Deploy the server to Heroku and validate that you can connect and subscribe to events remotely
  * Listen on `process.env.PORT`
  * Heroku will assign you a port
  
### Stretch Goals
* Integrate with Q instead of straight socket.io
* Allow multiple "rooms" (different named Q's)


## Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
