# Socket.io Client

## Learning Objectives

**Students will be able to ...**

* Create and deploy a Socket.io server
* Create and deploy a Socket.io client
* Wire up events and listeners (Pub/Sub) on both ends
* Connect a react application to a realtime server using socket.io
* Subscribe to remote events
* Emit events and data back to the server

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## Main Topic: Socket.io
* What is Socket.io?
  * Keeps a pipe open between client and server
  * Keeps communication pathway open
  * Responds to events that one side or the other `emits`
  * Publish an Event `socket.emit('run', tellEveryoneToRun)`
  * Respond to an Event `socket.on('run', doTheRunningMan)`
* On the React side, you can respond to an event and add it's payload to state, or use a state change to trigger an `emit`
