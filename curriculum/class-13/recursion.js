'use strict';


const array = [1,2,3,4];
let totalValue = 0;

// Vincio - non-recursive approaches always look at the entire problem at once
for(let element of array) {
  totalValue += element;
}

console.log(totalValue);

// const recursiveTraversal = (array, index) => {
//   // ------------------------------------------------------------------------
//   // BASE CASE
//   // ------------------------------------------------------------------------
//   // Vinicio - When do we stop the recursion?
//   if (index >= array.length) {
//     return;
//   }
//   // ------------------------------------------------------------------------
//   // RECURSIVE CASE
//   // ------------------------------------------------------------------------
//   // Vinicio - we call ourselves
//   console.log(array[index]);
//   recursiveTraversal(array, index + 1);
// };

// recursiveTraversalecursiveTraversal(array,0);

const recursiveAdd1 = (array, index, totalSoFar) => {
  // ------------------------------------------------------------------------
  // BASE CASE
  // ------------------------------------------------------------------------
  if (index >= array.length) {
    return totalSoFar;
  }
  // ------------------------------------------------------------------------
  // RECURSIVE CASE
  // ------------------------------------------------------------------------
  let currentValue = array[index];
  return recursiveAdd1(array, index + 1, totalSoFar + currentValue);
};

console.log(recursiveAdd1(array,0,0));

const recursiveAdd2 = (array, index) => {
  // ------------------------------------------------------------------------
  // BASE CASE
  // ------------------------------------------------------------------------
  if (index >= array.length) {
    return 0;
  }
  // ------------------------------------------------------------------------
  // RECURSIVE CASE
  // ------------------------------------------------------------------------
  let currentValue = array[index];
  return currentValue + recursiveAdd2(array, index + 1);
};

console.log(recursiveAdd2(array,0,0));


const add = (a, b) => a + b;

const recursiveAdd = (a, b) => {
  if(b === 0) {
    return a;
  }
  return recursiveAdd(a + 1, b-1);
};

console.log(recursiveAdd(100,50));


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);


one.left = two;
one.right = three;

three.left = four;
three.right = five;

const tree = new BinaryTree(one);

console.log(tree);


const preOrder = (root) => {
  if (root === null) {
    return;
  }
  // root,left,right
  // Root: do any operation that involves root as the main focal point
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
};

const postOrder = (root) => {
  if (root === null) {
    return;
  }
  // left,right, root
  postOrder(root.left);
  postOrder(root.right);
  // Root: do any operation that involves root as the main focal point
  console.log(root.value);
};

postOrder(tree.root);
