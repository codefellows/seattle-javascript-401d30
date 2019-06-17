# LAB - Component Based UI

Create and style a counter application using React components.

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

* Move the `Header` and `Footer` components to separate files
* Properly `export` them as defaults
* Import them into the `App` Component using ES6 `import` statement
* Convert the `Header` component to an ES6 Class
* Rename the `Main` component to `Counter` and render it properly
* Change the state declaration to track a `counter` instead of `stuff`
* Change the button handler to increment the counter instead of returning a random number.
* Add a second button that, when clicked, would decrement the counter
* Convert the buttons to links


### Design Implementation
* Create a file called `app.scss` and `import` that into the `App` component
* Add some creatove styling for the header, making use of SASS nesting
* Alter the `app.scss` as follows:
  * Alter your css rules to use a variable (i.e. $backgroundColor)
  * Start getting creative about styling the basic layout of the app
    * Might things change when the counter is > 0 or < 0?
    * Where would the buttons look best?
    * Can you make the number "pop"

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
