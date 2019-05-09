const List = require('../../lib/list.js');

describe('List', () => {

  let testArray = ['V1', 'V2', 'V3'];
  let loadList = () => {
    let thisList = new List();
    for( let i = 0; i <= testArray.length - 1; i++ ) {
      thisList.push(testArray[i]);
    }
    return thisList;
  };

  it('push() increments the .length property', () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
  });

  it('map() requires a callback function', () => {
    let myList = loadList();
    expect( myList.map() ).toBeUndefined();
  });

  it('map() returns a new list', () => {

    let myList = loadList();
    let newList = myList.map( (val,i) => {
      return `${i} -- ${val}`;
    });

    expect( newList.length ).toEqual(myList.length);
    expect( newList[0] ).toEqual( `0 -- ${testArray[0]}` );

  });

});
