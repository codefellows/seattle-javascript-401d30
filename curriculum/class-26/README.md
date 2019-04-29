![cf](http://i.imgur.com/7v5ASc8.png) Component Based UI
========================================================

## Learning Objectives

**Students will be able to ...**
* Desribe in general terms "Component Architecture"
* Describe in general terms application and component "State"
* Begin a React project locally with `create-react-app`
* Use codesandbox.io to work live on a React application
* Create and render `Class` and `Functional` React components to the DOM
* Add event listeners to React components
* Update React component state
* Style React applications/components

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## UI Concept:
* SASS
  * Nesting of selectors
  * Variables

## Main Topic:
Component based UI systems like `React`, `Angular`, `Vue` and the like all operate on similar architectural principles.

* Rather than view an application as an enourmous interconnected codebase, the application is a **composition** of `components` that work together to make the application work.
* The secret sauce is how they work together.
* We use Classes and Functions to classify functionality
* We require what we need
* We render it where we want
* We pay attention to `state` and react as it changes.

#### COMPONENTS!
<img src="components.png" width="400">

#### STATE!
<img src="state.jpg" width="400">


### React
**We will be using React in this course to learn these basic principles**

As a component based system, React does an awful lot for us, principally, it gets out out of the way and makes it EASY to implement your application the way you see it, using familiar tools.

* JSX looks like markup, but it's actually Javascript. If you had to code it out, you wouldn't...

JSX
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
Behind the scenes...
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```



