'use strict';

let counter = 0;

const calculatePermutationsTracker = string => {
  calculatePermutationsTrackerHelper(string, new Set(), "")
};

const calculatePermutationsTrackerHelper = (string, tracker, stringSofar) => {
  if(stringSofar.length === string.length) {
    console.log(stringSofar);
    counter++;
    return;
  }
  for(let i = 0; i < string.length; i++) {
    if(!tracker.has(string[i])) {

      tracker.add(string[i]);

      calculatePermutationsTrackerHelper(
        string,
        tracker,
        stringSofar + string[i]
      );
      // Vinicio - once all the recursive calls are done, we need to restore string[i], so it can be used too

      tracker.delete(string[i]);
    }
  }
};

calculatePermutationsTracker("abcde");
console.log(counter);



const swap = (array,a,b) => {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};



const calculatePermutationsSwapping = string => {
  const stringAsArray = [...string];
  const unique = new Set();
  calculatePermutationsSwappingHelper(stringAsArray, 0, unique);
  console.log(unique);
  console.log(unique.size);
};

const calculatePermutationsSwappingHelper = (array, counter, unique) => {
  if(counter > array.length){
    unique.add(array.toString());
  } else {
    for(let i = 0; i < array.length - 1; i++) {
      swap(array, i , i+1);
      unique.add(array.toString());
      calculatePermutationsSwappingHelper(array, counter + 1,unique);
      swap(array, i , i+1);
    }
  }
};

// calculatePermutationsSwapping("abcde");


// Vinicio - Jag's elegant recursive way
function stringPermutations(string) {
  if (string.length < 2) return string;
  let permutations = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) !== i) {
      continue;
    }

    let remainingString = string.slice(0, i) + string.slice(i + 1);
    for (let subPer of stringPermutations(remainingString)) { // 🎤💧
      permutations.push(char + subPer);
    }
  }
  return permutations;
}

// console.log(stringPermutations("abcde"));
// console.log(stringPermutations("abcde").length);
