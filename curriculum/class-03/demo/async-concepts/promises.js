'use strict';

// Promises DECLARE functionality
// Think of it as though you're telling a method to go do it's work and when it's done, give you the data

let longTask = (foo) => new Promise( (resolve,reject) => {
  if( foo ) { resolve('1'); }
  else { reject('Bad'); }
});

longTask(true)
  .then(task => console.log('Task', task))
  .catch(console.error);


// Running many async things in a series
longTask(true)
  .then( data => { console.log(data); return longTask(data); } )
  .then( data => { console.log(data); return longTask(data); } )
  .then( data => { console.log(data); return longTask(data); } )
  .then( data => { console.log(data); return longTask(false); } )
  .then( data => { console.log(data); return longTask(data); } )
  .then( data => { console.log(data); return longTask(data); } )
  .then( data => { console.log(data); return longTask(data); } )
  .then( data => { console.log(data); return longTask(data); } )
  .catch(err => { console.error('catch', err); return true; } )
  .then( data => { console.log(data); return longTask(data); } )
  .then( data => { console.log(data); return longTask(false); } )
  .then( data => { console.log(data); return longTask(data); } )
  .catch(err => console.error('quit', err))

// Running Many Async Things Simultaneously ...
let stuffToDo = [];
for( let i = 1; i <= 10; i++ ) {
  stuffToDo.push(longTask(true));
}
Promise.all(stuffToDo)
  .then(things => console.log('Things', things))
  .catch(console.error);


