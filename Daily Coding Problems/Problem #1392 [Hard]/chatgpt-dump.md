This problem can be solved using a **Breadth-First Search (BFS)** algorithm, which is typically used for finding the shortest path in an unweighted graph. Here, each valid combination of the lock can be seen as a node, and each move is an edge connecting two nodes.

### Problem Breakdown

- You start at the combination `000`.
- Each move consists of turning one of the wheels either clockwise (increment by 1) or counterclockwise (decrement by 1).
- There are dead-end combinations where, if you reach one, you can no longer proceed.
- The goal is to find the minimum number of moves required to reach the target combination from `000` without passing through a dead-end, or determine if it's impossible to do so.

### Key Steps:

1. **Graph Representation**: Each state (combination of three digits) is a node, and there are up to 6 possible moves from each node (turning any one of the three wheels in either direction).
2. **BFS Approach**: Since we want the shortest number of moves, BFS is ideal because it explores all nodes layer by layer, guaranteeing the shortest path to the target.
3. **Dead Ends**: These states are treated as blocked nodes. If you encounter a dead-end, you skip that node.
4. **Visited States**: To avoid cycles and redundant processing, we track visited states.

### Algorithm:

1. Start from `000`.
2. Use a queue to perform BFS, where each element in the queue is a tuple containing the current combination and the number of moves taken to reach it.
3. For each current state, generate its neighbors by turning each wheel either clockwise or counterclockwise.
4. If you reach the target combination, return the number of moves.
5. If no valid path exists, return `None`.

### JavaScript Code:

```javascript
function minMovesToUnlock(deadends, target) {
  const deadSet = new Set(deadends); // Convert deadends to a Set for quick lookup
  const visited = new Set(); // Set to track visited combinations
  const queue = [["000", 0]]; // BFS queue initialized with the start ('000') and 0 moves

  // If the start or target is a deadend, return None immediately
  if (deadSet.has("000")) return null;
  if (target === "000") return 0;

  // Function to generate all possible next moves from a given combination
  const getNeighbors = (combination) => {
    const neighbors = [];
    for (let i = 0; i < 3; i++) {
      let digit = parseInt(combination[i], 10);

      // Turn wheel in both directions (clockwise and counterclockwise)
      const up = (digit + 1) % 10;
      const down = (digit - 1 + 10) % 10;

      // Generate new combinations by turning the ith wheel up or down
      neighbors.push(combination.slice(0, i) + up + combination.slice(i + 1));
      neighbors.push(combination.slice(0, i) + down + combination.slice(i + 1));
    }
    return neighbors;
  };

  while (queue.length > 0) {
    const [current, moves] = queue.shift(); // Dequeue the front element
    if (current === target) return moves; // If target reached, return the number of moves

    // Generate all possible next combinations
    for (const neighbor of getNeighbors(current)) {
      if (!visited.has(neighbor) && !deadSet.has(neighbor)) {
        visited.add(neighbor); // Mark as visited
        queue.push([neighbor, moves + 1]); // Enqueue with incremented move count
      }
    }
  }

  // If we exhaust the BFS and never reach the target, return None
  return null;
}
```

### Explanation:

- **`deadSet`**: A set containing all the dead-end combinations for fast lookup.
- **`visited`**: A set to track the combinations that have already been processed, so we don’t revisit the same state.
- **`queue`**: Each element in the queue is a tuple where the first element is a combination string (e.g., `'000'`), and the second element is the number of moves taken to reach that combination.
- **`getNeighbors`**: This function generates all possible next combinations by turning each wheel either clockwise or counterclockwise by one digit.

### Example Usage:

```javascript
let deadends = ["020", "010", "100"];
let target = "110";

console.log(minMovesToUnlock(deadends, target)); // Output: 3
```

In this example:

- Starting from "000", you would need 3 moves to reach "110" by turning the wheels:
  - Turn the first wheel up to "100" (move 1).
  - Turn the second wheel up to "110" (move 2).
  - No more moves needed (target reached in 3 moves).

### Time Complexity:

- **Time Complexity**: Each state (combination) has up to 6 possible neighbors. There are 1000 possible combinations (since each wheel can be in one of 10 positions). Thus, the overall time complexity is approximately **O(1000)**, or constant time relative to input size. The BFS ensures that each combination is processed at most once.
- **Space Complexity**: The space complexity is **O(1000)** as well, since we store up to 1000 combinations in the queue and the visited set.

This solution efficiently finds the minimum number of moves or returns `None` if the target is unreachable.
