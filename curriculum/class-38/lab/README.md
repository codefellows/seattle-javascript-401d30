# LAB - Remote APIs

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
### Refactor A Star Wars Lookup App
* Convert the current react component state to use a Redux Store
  * Create a store
  * Connect to it, create it, provide from the index
  * Connect to it from the component
  * Create a reducer that holds the state
  * Create actions that update the store after a fetch
  * Alter your fetch to call those actions instead of doing a `setState()`
  * Have a store for holding all people and a store for holding state of 1 person
  * On each fetch, change the contents of the store.
  * Alter the rendering function to use props instead of state
* Break the app into multiple components
  * A wrapper that has the link
  * A lister that shows the people
  * A detailer that shows the person after being clicked on
* Convert the native `fetch...()` calls from being in the components to instead invoking action methods
  * These should return functions that dispatch the real action
  * You'll need to have `thunk` in place to make this work
* Cache the results in the store
  * Once you're all wired up, alter the stores to hold onto state as you fetch things. This way, when you start clicking on people more than once, you don't end up going out to the API to get their data.

### Styling
* Clearly, this needs a little bit of TLC
* Use your generic design to apply core styling and layout
* Use your creativity ...
  * A pop-up modal for the details instead of a simple list?
  * Accordions?
  * Slide Out?
  * Rotator?

### Testing
* tests that ensure the list module functions correctly with error-check parameters

### Stretch Goals:
* Paginate the results.  The initial calls to the people list will give a total number people, pages, and a link to the next page.
* Create a new component for navigation that will use those links to draw a list of pages to fetch, and then keep re-calling that initial fetch method to update the list based on what page you are "on"
* Implement these functional methods as well ...

### Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
