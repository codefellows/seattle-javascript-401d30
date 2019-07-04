'use strict';

const PriorityQueue = require('js-priority-queue');

module.exports = (graph, startVertex, goalVertex) => {

  const priorityQueue = new PriorityQueue({
    comparator: (a,b) => a.priority - b.priority,
  });

  const visitedVertices = new Set(); // Vinicio - this is still used, but we have to find out a different way
  const paths = new Map();
  const shortestPathSoFar = new Map();

  priorityQueue.queue({
    vertex: startVertex,
    priority: 0, // Vinicio - this is the most important node right now
  });

  shortestPathSoFar.set(startVertex, 0);


  while(priorityQueue.length > 0) {
    const currentVertex = priorityQueue.dequeue().vertex;

    // Many lines o this kind
    if(visitedVertices.has(currentVertex)){
      continue;
    }

    // Only one line of this kind
    visitedVertices.add(currentVertex);

    if(currentVertex === goalVertex) {
      return paths;
    }

    // Dijkstra wants this code to execute to neighbors before we mark them as
    // visited
    const neighbors = graph.getNeighbors(currentVertex);

    for(const neighbor of neighbors) {
      const {weight, vertex: nextVertex} = neighbor;

      if(visitedVertices.has(nextVertex)) {
        continue;
      }

      const pathWeight = shortestPathSoFar.get(currentVertex) + weight;
      // const pathWeight = shortestPathSoFar.get(currentVertex) + weight + heuristic(nextVertex);

      if(!shortestPathSoFar.has(nextVertex) || pathWeight < shortestPathSoFar.get(nextVertex)) {
        shortestPathSoFar.set(nextVertex, pathWeight);
        paths.set(nextVertex, currentVertex);

        priorityQueue.queue({
          vertex: nextVertex,
          priority: shortestPathSoFar.get(nextVertex),
        });
      }
    }

  }
  return null;
};
