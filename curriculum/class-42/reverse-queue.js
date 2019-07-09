'use strict';

const reverseQueueRecursively = queue => {
  if(queue.length === 0) {
    return;
  } else {
    //---------------------------------------------------------------------
    // GOING UP
    //---------------------------------------------------------------------
    const storedValue = queue.shift();
    // --------------------------------------------------------------------
    // RECURSIVE CALL
    //---------------------------------------------------------------------
    reverseQueueRecursively(queue);
    //---------------------------------------------------------------------
    // GOING DOWN
    //---------------------------------------------------------------------
    queue.push(storedValue);
    //---------------------------------------------------------------------
  }
};






const queue = [1,2,3];
reverseQueueRecursively(queue);
console.log(queue);






const isTreeBSTHelper = (root, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) => {
  if(root === null) {
    // Vinicio - we arrived here, and we didn't find anything wrong
    return true;
  }

  if (root.value > min && root.value < max) {

    return isTreeBSTHelper(root.left, min, root.value) &&
      isTreeBSTHelper(root.right, root.value, max);

    // // Vinicio - Everything on the left has to be smaller than the root
    // const isLeftBST = isTreeBSTHelper(root.left, min, root.value);
    // if(!isLeftBST)...
    //
    // // Vinicio - Everything on the right has to be bigger than the root
    // const isRightBST = isTreeBSTHelper(root.right, root.value, max);
    //
    // return isLeftBST && isRightBST;
  } else {
    return false;
  }
};
