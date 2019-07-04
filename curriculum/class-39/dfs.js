'use strict';

module.exports = (graph, startVertex, goalVertex) => {
  const stack = []; // Vinicio - HW, make this a real queue - https://www.npmjs.com/package/queue-fifo
  const visitedVertices = new Set();

  const paths = new Map();

  stack.push(startVertex);
  visitedVertices.add(startVertex);


  while(stack.length > 0) {
    // dequeue
    // check for goal
    // loop over all the neighobrs
    const currentVertex = stack.pop();

    if(currentVertex === goalVertex) {
      return paths;
    }

    for (let neighbor of graph.getNeighbors(currentVertex)){
      if(visitedVertices.has(neighbor.vertex)) {
        continue;
      } else {
        visitedVertices.add(neighbor.vertex);
      }
      paths.set(neighbor.vertex, currentVertex);
      stack.push(neighbor.vertex);
    }
  }
  return null;
};
