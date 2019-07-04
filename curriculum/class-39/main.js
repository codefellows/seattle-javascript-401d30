'use strict';
const Graph = require('./graph');
const Vertex = require('./vertex');
const BFS = require('./bfs');
const DFS = require('./dfs');
const Dijkstra = require('./dijkstra');

const graph = new Graph();

const vertex5 = new Vertex(5);
const vertex10 = new Vertex(10);
const vertex15 = new Vertex(15);
const vertex20 = new Vertex(20);
const vertex25 = new Vertex(25);
const vertex30 = new Vertex(30);
const vertex35 = new Vertex(35);
const vertex40 = new Vertex(40);
const vertex45 = new Vertex(45);
const vertex50 = new Vertex(50);
const vertex100 = new Vertex(100);

graph.addVertex(vertex5);
graph.addVertex(vertex10);
graph.addVertex(vertex15);
graph.addVertex(vertex20);
graph.addVertex(vertex25);
graph.addVertex(vertex30);
graph.addVertex(vertex35);
graph.addVertex(vertex40);
graph.addVertex(vertex45);
graph.addVertex(vertex50);
graph.addVertex(vertex100);

graph.addEdge(vertex5, vertex45);
graph.addEdge(vertex5, vertex35);
graph.addEdge(vertex5, vertex30, 5);
graph.addEdge(vertex5, vertex20, 10);
graph.addEdge(vertex5, vertex10, 1);


graph.addEdge(vertex10, vertex20, 5);
graph.addEdge(vertex10, vertex15, 1);

graph.addEdge(vertex30, vertex40);
graph.addEdge(vertex30, vertex20, 5);

graph.addEdge(vertex40, vertex50);

graph.addEdge(vertex20, vertex25, 10);
graph.addEdge(vertex15, vertex25, 10000);

let paths = Dijkstra(graph,vertex5, vertex25);
console.log(paths);


// HW 1
// Change arrays to linked lists in:
// Graph class
// BFS & DFS

// HW 2
// Modify Dijkstra to implement A*
// Do not worry about finding the most optimal heuristic, just experiment
