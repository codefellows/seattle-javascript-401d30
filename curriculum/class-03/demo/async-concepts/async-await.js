'use strict';

let request = (url) => {
  return JSON.stringify({foo:'Bar'});
};

async function getData(url) {
  let result = await(request(url));
  console.log(result);
}

console.log( getData('http://www.google.com') ); // does nothing (actually logs the promise object);
getData('http://www.google.com');  // code runs in the function and logs


// You can treat these like promises on the client side ...
async function returnData(url) {
  return await(request(url));
}
returnData('http://www.google.com')
  .then( data => console.log("Got data back", data))
  .catch( console.error );


// Here's an example of looping until we get a good one
let longRequest = (url) => {
  let data = {
    count:2,
    results: ['a','b']
  };

  let rando = Math.floor(Math.random() * 99)+1;
  return (rando < 50) ? data : false;

};

async function fetchRemoteData(url) {
  let result = false;
  while(! result) {
    result = await longRequest(url);
    console.log(result);
  }
}


fetchRemoteData('http://foo.com');
