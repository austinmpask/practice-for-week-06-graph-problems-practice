function getNeighbors(row, col, graph) {
  let neighbors = [];
  // Check top
  if (row > 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);
  if (row < graph.length - 1 && graph[row + 1][col] === 1)
    neighbors.push([row + 1, col]);
  if (col > 0 && graph[row][col - 1] === 1) neighbors.push([row, col - 1]);
  if (col < graph[row].length - 1 && graph[row][col + 1])
    neighbors.push([row, col + 1]);

  return neighbors;
}

function islandSize(row, col, graph) {
  let size = 0;
  // Create a visited set to store visited nodes
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  // Initialize size to 0
  // While the stack is not empty,
  // Pop the first node
  // DO THE THING (increment size by 1)
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
  // return size
  // Your code here

  let stack = [[row, col]];
  let visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node.join(","))) {
      visited.add(node.join(","));
      if (graph[node[0]][node[1]] === 1) {
        size++;
      }
    }
    const neighbors = getNeighbors(node[0], node[1], graph);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor.join(","))) {
        stack.push(neighbor);
      }
    }
  }

  return size;
}

module.exports = [getNeighbors, islandSize];
