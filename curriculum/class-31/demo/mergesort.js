'use strict';

/**
 * This method assumes sorting in ascending order
 * @param items
 * @returns {Array} : Sorted array ;)
 */
const mergeSort = items => {
  // --------------------------------------------------------------
  // BASE CASES
  // --------------------------------------------------------------
  if (items.length < 2) {
    return items; // Vinicio - already sorted
  }

  if (items.length === 2) {
    return items[0] < items[1] ? items : items.reverse();
  }
  // --------------------------------------------------------------
  //  RECURSIVE CASES
  // --------------------------------------------------------------
  const middlePoint = Math.floor(items.length / 2);

  // Vinicio - going down in the recursive tree
  const leftSide = mergeSort(items.slice(0, middlePoint));
  const rightSide = mergeSort(items.slice(middlePoint));

  // Vinicio - here we assume that left and right have been pre-sorted
  let output = [];
  while(leftSide.length > 0 && rightSide.length > 0) {
    if(leftSide[0] <= rightSide[0]) {
      output.push(leftSide[0]);
      leftSide.shift();
    }
    else {
      output.push(rightSide[0]);
      rightSide.shift();
    }
  }
  // Vinicio - if we are here, one of the arrays must be empty
  if(leftSide.length === 0 && rightSide.length > 0) {
    // Vinicio - we only have values on the right side
    output = output.concat(rightSide); // Vinicio - we might need to find a way to optimize this
  }
  if(rightSide.length === 0 && leftSide.length > 0) {
    // Vinicio - we only have values on the left side
    output = output.concat(leftSide);
  }
  return output;
};


console.log(mergeSort([1]));
console.log(mergeSort([1, 2]));
console.log(mergeSort([2, 1,3,6,4,9,8,7,6]));
