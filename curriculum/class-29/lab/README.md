# LAB - Routing and Component Composition

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

## Requirements

**For Each of these tasks, implement a router into the application.**

* Wrap your `<App />` component in `<BrowserRouter />` context at the index level
* Implement a simple navigation bar that links to Home and Code
* `/` should render "Hello World" or anything else you choose
* `/code` should render the output of the assignments below ...


## Practice Component Composition
### Assignment 1 - Warmups
* Fork the [Starter Code Sandbox](https://codesandbox.io/s/2zpknvmk0n)
* Create a new component called "Story"
* Render this component from the App component with markup/content inside of the `<div>`
* Create a new component called "Details"
* Have `<Story>` render `<Details>` with the `<span>` tags nested within it
* Refactor to have the `<Details>` component render the div and then the `<span>` tags using the children property

### Assignment 2  - Modularize and Functionalize
* Fork your completed sandbox
* Refactor your work using new modules/files for each component
* Be prepared to discuss/defend file & directory structures chosen
  * Do this will class based components
  * Repeat the process with functional components in different files
    * `<FunctionalStory />` and `<FunctionalDetails />`
  * Your output should repeat, once with each component set

### Assignment 3  - Modal
* Fork the [star wars fetcher sandbox](https://codesandbox.io/s/1o64l8pqm4)
* Create a new component (in its own folder) called `Modal`
* Replace the `<h3>` tag that shows the person with a `<Modal>` with the `<h3>` inside it
* Code out the modal component with the following features:
  * When active, it should render it's `{props.children}`
  * It should draw itself with a close icon/link
  * It should be able to close (i.e. not render)


### Testing
* Complete basic render testing on these components
* Complete logical and render testing on the if components

### Stretch Goals
* Create an NPM account and an organization
* Publish your `<If />` and `<Modal />` components to NPM
* Now, you can use them in any project.
  * Make them great!

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
