# LAB - Props and State

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

Starter code has been provided for you in the `/lab/starter-code` folder. There are 3 separate assignments, each with it's own folder.

Open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to the correct starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.

## Requirements

### Assignment 1 - Props Practice
Begin with: `/lab/starter-code/props`

**Challenge Instructions (Part 1)**

* Complete all tasks in this same index.js file
* Complete the challenge below and submit the URL to your fork
* Create a new component called "Message"
* Render the Message component
* In this componenet, create a state property named "text"
* Set it's value to "Hello World"
* The Message component should render a "div" displaying the contents of the text property from this component's state

**Challenge Instructions (Part 2)**

* Fork your completed sandbox
* Refactor your work using new modules for each component
* Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

* Send multiple properties to the message component
* Create a 3rd component and have the message property render that one, with some props (maybe even the ones that it received)
* Create a 4th component and send props there as well


### Assignment 2 - Internal State Practice

Begin with: `/lab/starter-code/internal-state`

**Challenge Instructions (Part 1)**

* Leave these instructions in place
* Fork this sandbox
* Complete all tasks in this same index.js file
* Complete the challenge below and submit the URL to your fork
* Add a constructor and declare a state object
* "state" should have "count" and "name" properties
* Add a form with a single field
* As the user types in the field, change the "name" property in state and update the display
* When the user "submits" the form, increase the counter by 1 and update the display
* The output section below should update as state changes

**Challenge Instructions (Part 2)**

* Fork your completed sandbox
* Refactor your work using new modules for each component
* Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

* Instead of updating the count on submit, create a link that updates the count on demand
* Use multiple fields in your form to update multiple state properties
* Make evaluations on the state of your state to dynamically render things. For example, if the name is empty, show an error or if there are 2 names given (first and last), reverse and comma separate them.

### Assignment 3 - External State Practice

Begin with: `/lab/starter-code/external-state`

**Challenge Instructions (Part 1)**

* Leave these instructions in place
* Fork this sandbox
* Complete the challenge below and submit the URL to your fork
* Add a constructor and declare a state object
* "state" should have "count" and "name" properties
* Create a "handler" method that will take name as a parameter and updates the state with the given name and an increased count
* Import a new "Form" component (created in the steps below later)
* Render the "Form" component with a reference to the update method created above, via property
* Create a new "Form" Component
* Add a form element with a single field
* As the user types in the field, change the "name" property in state
* When the user "submits" the form invoke handler method in the parent component, sending the updated name
* The output section below should update as state changes

**Challenge Instructions (Part 2)**

* Fork your completed sandbox
* Refactor your work using new modules for each component
* Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

* Instead of updating the count on submit, create a link that updates the count on demand
* Use multiple fields in your form to update multiple state properties
* Make evaluations on the state of your state to dynamically render things. For example, if the name is empty, show an error or if there are 2 names given (first and last), reverse and comma separate them.

### Tests

Write mount/enzyme tests for each component/assignment

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
