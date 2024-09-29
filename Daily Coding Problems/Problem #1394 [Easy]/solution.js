// ListNode is an individual item in linked list
class ListNode {
  constructor(value) {
    this.value = value; // The data stored in the node
    this.next = null; // Pointer to the next node initialized to null
  }
}

// Creating a simple linked list
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

// Linking nodes to form a list 1 -> 2 -> 3
node1.next = node2;
node2.next = node3;

function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

console.log(`Inital list is: `);
printLinkedList(node1);

/* Solution 1: Iterative Approach
The simplest way to reverse a linked list is to iterate over the list and adjust the pointers.
Steps:
    1. Initialize three pointers: prev (set to null initially), current (set to head), and next (to store the next node temporarily).
    2. Iterate through the linked list and at each step:
        * Store the next node in the next pointer.
        * Reverse the current node's pointer to point to prev.
        * Move prev and current one step forward.
    3. Once you’ve processed all nodes, prev will point to the new head of the reversed list.

*/

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
// function reverseLinkedList(head) {
//   let prev = null;
//   let current = head;
//   let next = null;
//   while (current !== null) {
//     next = current.next; // Store the next node
//     current.next = prev; // Reverse the next nodes pointer
//     prev = current; // Move previous and current node forward.
//     current = next;
//   }
//   return prev;
// }

// let reversePointer = reverseLinkedList(node1);

// printLinkedList(reversePointer);

/* Solution 2: Recursive 
    A recursive solution to reverse a linked list works by reversing the sublist starting at the next node, then adjusting the pointers for the current node.

Steps:
    1. Base case: If the list is empty or has only one node, return the head.
    2.Recursive case: Reverse the rest of the list starting from head.next.
    3. Once the sublist is reversed, adjust the pointers so that the current node becomes the tail of the reversed list.
    4. Return the new head after all nodes have been reversed.
*/
//  Time Complexity: O(n)
//  Space Complexity: O(n) (due to recursive stack space)

// function reverseLinkedListRecursive(head) {
//   // Base case: If head is null or only one node, return it
//   if (head === null || head.next === null) {
//     return head;
//   }

//   // Recursively reverse the rest of the list
//   const newHead = reverseLinkedListRecursive(head.next);

//   // Make the next node point to the current node
//   head.next.next = head;
//   head.next = null;

//   return newHead;
// }

// let reversedPointer = reverseLinkedListRecursive(node1);
// printLinkedList(reversedPointer);

//

/*  
Solution 3: Tail Recursion
    This is a variant of the recursive approach where the function keeps track of the 
    previous node and updates it as it recurses through the list.
    Time Complexity: O(n)
    Space Complexity: O(n) (due to recursion stack)
*/
function reverseLinkedListTailRecursive(head, prev = null) {
  if (head === null) {
    return prev; // The new head of the reversed list
  }
  let next = head.next; // Store next node
  head.next = prev; // Reverse current node pointer

  return reverseLinkedListTailRecursive(next, head); // Recurse with next node and current as prev
}

let reversedPointer = reverseLinkedListTailRecursive(node1);
printLinkedList(reversedPointer);
