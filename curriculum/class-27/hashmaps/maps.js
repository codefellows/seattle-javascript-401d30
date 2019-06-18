'use strict';

const map = new Map();

const object = {};

const set = new Set();


// ----------------------------------------------------------------------
// MAPS
// ----------------------------------------------------------------------
// O(1)
map.set('kali', 'cute'); // Vinicio - in hashmaps keys are related to values
// Vinicio - to get things from a hashmap, you need the key
// O(1)
console.log(map.get('kali'));
// O(1)
console.log(map.has('kali'));
// O(1)
console.log(map.get('gregor'));
map.set(3.1416, 'PI');
map.set(() => 'Pizza', 'PI');
map;


// ----------------------------------------------------------------------
// OBJECTS
// ----------------------------------------------------------------------
object['kali'] = 'cute'; // set -- O(1)
object[3.1416] = 'PI';

console.log(object['kali']); // get -- O(1) time

console.log('kali' in object); // has -- O(1)

object;

// ----------------------------------------------------------------------
// SET
// ----------------------------------------------------------------------
set.add(1); // O(1)
set.add(10); // O(1)
set.add('Gregor');// O(1)

set

console.log(set.has(1));// O(1)

// "aaaaaaaaaaaaaaaaaaaaab" => "a,b"

const uniqueCharactersInString = string => {// O(n)
  // const set = new Set(); // O(1) ; O(U) space where U are the unique characters
  // // O(N) in the worst case
  const map = new Map();
  for(let character of string) { // O(n)
    map.set(character,true); // O(1)
  }
  return map.keys();// O(1)
};


console.log(uniqueCharactersInString("aaaaaaaaaaaaaaaaabccc7`"));



