'use strict';

const asyncModule = require('./async.js');

asyncModule.doerOfThings('take out the trash', (err,data) => {
  if ( err ) { throw new Error(err); }
  console.log(`Did some stuff with a callback ... ${data}`);
});

asyncModule.promiserOfThings('take out the trash')
  .then( result => {
    console.log(`Did some stuff with a promise ... ${result}`);
  })
  .catch(err => console.error(err));


let asyncTest = async () => {
  try {
    let result = await asyncModule.promiserOfThings('clean the kitchen');
    console.log(`Did some stuff with async/wait ... ${result}`);
  }
  catch(err) { console.error(err); }
};

asyncTest();
