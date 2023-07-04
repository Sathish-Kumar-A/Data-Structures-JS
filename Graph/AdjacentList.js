class Graph{
    constructor() {
        this.adjacentList={}
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
          this.adjacentList[vertex] = [];
        }
    }
    removeVertex(vertex) {
        let connectedEdges = this.adjacentList[vertex];
        connectedEdges.forEach(edgeVertex => {
            // this.removeEdge(edgeVertex, vertex)
            this.adjacentList[edgeVertex]=this.adjacentList[edgeVertex].filter(ver=>ver!==vertex);
        });
        delete this.adjacentList[vertex]

    }

    addEdgesToVertex(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacentList[vertex2]) {
          this.addVertex(vertex2);
        }
        if (!this.adjacentList[vertex1].includes(vertex2)) {
            this.adjacentList[vertex1].push(vertex2);
        }
        if (!this.adjacentList[vertex2].includes(vertex1)) {
          this.adjacentList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(ver => ver != vertex2);
        this.adjacentList[vertex2] = this.adjacentList[vertex2].filter((ver) => ver != vertex1);
    }

    printGraph() {
        console.log(this.adjacentList);
    }

    DFSTraversalRecursive(startvertex) {
        const visitedNodes = {};
        const nodeValues = [];
        const adjacentList = this.adjacentList;
        function recursiveCall(vertex) {
            if (!adjacentList[vertex].length) {
                return
            }
            if (!visitedNodes[vertex]) { 
                visitedNodes[vertex] = true;
                nodeValues.push(vertex);
            let i = 0;
            while (i < adjacentList[vertex].length) {
                    recursiveCall(adjacentList[vertex][i]);
                    i++;
                }
            }
        }
        recursiveCall(startvertex);
        return nodeValues;
    }
    IterativeDFSTraversal(startvertex) {
        const visitedNodes = {};
        const nodeValues = [];
        const adjacentList = this.adjacentList;

        let stack = [startvertex];
        while (stack.length) {
            const vertex=stack.pop();
            if (!visitedNodes[vertex]) {
               visitedNodes[vertex] = true;
                nodeValues.push(vertex);
                let i = 0;
                while (i < adjacentList[vertex].length) { 
                    stack.push(adjacentList[vertex][i]);
                    i++;
                }
            }
        }
        return nodeValues;
    }
}

const graph = new Graph();
// graph.addVertex("Chennai")
graph.addEdgesToVertex("Chennai", "Trichy")
graph.addEdgesToVertex("Trichy", "Madurai")
// graph.printGraph();
// graph.removeEdge("Chennai", "Trichy");
// graph.removeVertex("Trichy")
console.log(graph.DFSTraversalRecursive("Chennai"));
console.log(graph.IterativeDFSTraversal("Chennai"));

graph.printGraph();