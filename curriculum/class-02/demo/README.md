# Demos: Classes, Inheritance, Functional Programming

## Notes
Normally, you do an hour of "lecture" followed by a live demo ...

Because there are so many small demos, mostly related to coding processes and smaller concepts, this is the type of day where the lecture is probably 2 solid hours and mostly arises organically from coding out demos and talking through problem domains.

Have a good plan and understanding of the demos, and use those along with the lab main topics (above) to shape how you move through the day.

### Error Module  (`demo/errors`)
* During the lecture segment on errors, demo some error prone code and ways to trap
  * `try/catch`, `&& &&`, etc.
* Create an error class, and during the rest of the demos (and in fact the whole class), pull this in and use it.
* This might be the first thing to go in the student's permanent "toolkit"

### Context  (`demo/context`)
* There's a few (well commented) files in here that can be used to demonstrate how to pass context around
* Don't spend too much time here beyond calling out the problem domain and how the context functions can help you out of particular situations

### Functional Programming  (`demo/fp`)
* Demo the difference between non-functional and functional functions that appear to do the same thing.
* Highlight areas where functions are doing "too much" and how we can refactor
* Have the students call out when things are pure and impure and why as you go throughout the rest of the demos (throughout the course)

### Classes/Inheritance  (`demo/objects`)
* Use the dog/animal example to show how you can create an inherited object 3 ways.
* Talk pros and cons to each as you go
  * Ice Factories are pretty cool, as they focus on composition and don't create instances, but they do have lots of baggage
* Land on "Class" as the generally preferred method for managing state and behavior
* Highlight that moving between OOP types will be a part of their lab

### List Constructor  (`demo/list`)
* Begin to construct the `list` data type, using a constructor function
* Implement `push()` and `pop()`
* Write Tests (TDD it)
* Refactor it in place into a class.
* This is basically the major part of their lab ... hammer that in
