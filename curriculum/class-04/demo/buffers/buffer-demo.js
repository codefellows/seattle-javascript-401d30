'use strict';

// Confirm which endian you are
const os = require('os');
console.log(os.endianness());

// Print out any integer as a byte in binary format
for( let i = 0; i <= 9; i++ ) {
  console.log( i.toString(2).padStart(4,0) );
}

let x = 12;
console.log(x.toString(2).padStart(4,0));

// create a buffer to play with
let buffer = Buffer.from('John is an amazing dude');

// Those numbers are Hex Codes for each char
console.log(buffer);

// Built-In stringify Method
console.log(buffer.toString());

// But we can easily replicate that ourselves.  It's just an array
let stringifyBuffer = buffer => {
  let str = '';
  for(let char of buffer) {
    str += String.fromCharCode(char);
  }
  return str;
};

console.log( stringifyBuffer(buffer) );

// Replace any character by giving a hex code
buffer[0] = 0x41;
console.log(buffer.toString());

// Or an ascii code (node is smart!)
buffer[0] = 74;
console.log(buffer.toString());
console.log(buffer.length);

// How can we read into it, by a given number of bytes?
// This will read 2 bytes (8x2=16), and skip none
console.log(buffer.readInt16LE(0));
// Put in the big number (28490) to the calculator.
// it should return 0x6f4a, which should match the hex codes of first 2 bytes in the buffer, backwards (LE)

// What will happen here?
console.log(buffer.readInt16LE(1));
console.log(buffer.readInt16LE(2));
console.log(buffer.readInt32LE(0));
console.log(buffer.readInt32LE(1));
console.log(buffer.readInt32LE(2));
