Reversing a singly linked list is a classic problem. I’ll guide you through multiple solutions with explanations and JavaScript code.

### Problem

You are given the head of a singly linked list, and you need to reverse the list **in-place** (i.e., without using extra space for another list).

### Solution 1: Iterative Approach

The simplest way to reverse a linked list is to iterate over the list and adjust the pointers.

#### Steps:

1. Initialize three pointers: `prev` (set to `null` initially), `current` (set to `head`), and `next` (to store the next node temporarily).
2. Iterate through the linked list and at each step:
   - Store the next node in the `next` pointer.
   - Reverse the current node's pointer to point to `prev`.
   - Move `prev` and `current` one step forward.
3. Once you’ve processed all nodes, `prev` will point to the new head of the reversed list.

#### JavaScript Code:

```javascript
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Store the next node
    current.next = prev; // Reverse the current node's pointer
    prev = current; // Move prev and current forward
    current = next;
  }

  return prev; // prev will be the new head
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### Solution 2: Recursive Approach

A recursive solution to reverse a linked list works by reversing the sublist starting at the next node, then adjusting the pointers for the current node.

#### Steps:

1. Base case: If the list is empty or has only one node, return the head.
2. Recursive case: Reverse the rest of the list starting from `head.next`.
3. Once the sublist is reversed, adjust the pointers so that the current node becomes the tail of the reversed list.
4. Return the new head after all nodes have been reversed.

#### JavaScript Code:

```javascript
function reverseLinkedListRecursive(head) {
  // Base case: if head is null or only one node, return it
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively reverse the rest of the list
  const newHead = reverseLinkedListRecursive(head.next);

  // Make the next node point to the current node
  head.next.next = head;
  head.next = null;

  return newHead; // Return the new head of the reversed list
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(n) (due to recursive stack space)

### Solution 3: Tail Recursion

This is a variant of the recursive approach where the function keeps track of the previous node and updates it as it recurses through the list.

#### JavaScript Code:

```javascript
function reverseLinkedListTailRecursive(head, prev = null) {
  if (head === null) {
    return prev; // The new head of the reversed list
  }

  let next = head.next; // Store next node
  head.next = prev; // Reverse current node pointer

  return reverseLinkedListTailRecursive(next, head); // Recurse with next node and current as prev
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(n) (due to recursion stack)

---

These are three different approaches to reverse a singly linked list in JavaScript. The iterative solution is generally more space-efficient because it avoids the extra stack space used in recursion. However, both methods have their advantages depending on the situation.

Certainly! Below is a simple implementation of a singly linked list node in JavaScript.

### Linked List Node Implementation

Each node in the linked list contains two components:

1. **Value**: The data stored in the node.
2. **Next**: A pointer to the next node in the list (or `null` if it's the last node).

Here's how you can define the `Node` class:

```javascript
class ListNode {
  constructor(value) {
    this.value = value; // The data stored in the node
    this.next = null; // Pointer to the next node (initialized to null)
  }
}
```

### Example: Building a Simple Linked List

To demonstrate how you can create and link nodes together:

```javascript
// Creating individual nodes
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

// Linking nodes to form a list: 1 -> 2 -> 3
node1.next = node2;
node2.next = node3;

// Now node1 is the head of the list: 1 -> 2 -> 3
```

This code sets up a simple linked list with three nodes, where the list starts at `node1` and ends at `node3`:

```
node1 (1) -> node2 (2) -> node3 (3) -> null
```

You can now use this structure to test the reverse linked list functions I shared earlier.

To create a function that prints all elements in a linked list starting from the head, you can simply iterate through the list and print the value of each node until you reach the end (where `next` is `null`).

### Print Function for Linked List

Here's how you can implement this in JavaScript:

```javascript
function printLinkedList(head) {
  let current = head; // Start with the head of the list

  while (current !== null) {
    // Traverse until the end of the list
    console.log(current.value); // Print the value of the current node
    current = current.next; // Move to the next node
  }
}
```

### Example: Using the Print Function

Let’s create a simple linked list and use the `printLinkedList` function to print its values.

```javascript
// Creating individual nodes
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

// Linking nodes to form a list: 1 -> 2 -> 3
node1.next = node2;
node2.next = node3;

// Printing the linked list
printLinkedList(node1);
```

### Output:

```
1
2
3
```

### How It Works:

- We start at the `head` node.
- In each iteration of the `while` loop, we print the `value` of the current node.
- We then move to the next node by setting `current` to `current.next`.
- The loop continues until `current` is `null`, indicating the end of the list.
