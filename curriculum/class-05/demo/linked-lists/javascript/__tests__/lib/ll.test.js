'use strict';

let LL = require('../../lib/ll.js');

describe('Linked List', () => {

  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {
    let list = new LL();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Soemthing Else';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);

    let anotherOne = 'Another One';
    list.append(anotherOne);

    console.log(list);
    
  });

});
