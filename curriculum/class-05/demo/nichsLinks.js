const nich = {
  name: 'nicholas',
  color: 'orange'
};

const becky = {
  name: 'Becky',
  color: 'purple',
  pointer: nich
};

const joeseph = {
  name: 'Joeseph',
  color: 'red',
  pointer: becky
};

const melissa = {
  name: 'Melissa',
  color: 'green',
  pointer: joeseph
};

const chris = {
  name: 'chris',
  color: 'Navy Blue',
  pointer: melissa
};

const jennifer = {
  name: 'Jennifer',
  color: 'Royal Blue',
  pointer: chris
};

console.log('jennifer', jennifer);

console.log('chris', jennifer.pointer);

console.log('melissa', jennifer.pointer.pointer);











