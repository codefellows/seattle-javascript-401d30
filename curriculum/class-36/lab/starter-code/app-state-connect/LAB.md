Connect to a store
For this assignment, you're going to take an existing component which puts out some random numbers when a div is clicked, and refactor it to use a Redux store instead of local state.

Fork this sandbox: starter code: app-state - connect
Connect index.js to the redux store and pass it down to the App component
Remove the state declaration in the constructor
Do you still need a constructor?
Bring in the actions to app.js
Map state and dispatch to props in app.js
use stuff as your state keyword.
Export the connected App component
Render this.props.stuff.foo instead of this.state.foo
Remove the handleChange() method in app.js
Re-Implement the click event on the <div> using the action method that you mapped earlier
