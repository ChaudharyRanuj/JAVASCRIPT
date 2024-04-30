// Q1 Linked List Insertion
// Basic

// Create a link list of size N according to the given input literals. Each integer input is accompanied by an indicator which can either be 0 or 1. If it is 0, insert the integer in the beginning of the link list. If it is 1, insert the integer at the end of the link list. 
// Hint: When inserting at the end, make sure that you handle NULL explicitly.

// Example 1:
// class Solution {
//   //Function to insert a node at the beginning of the linked list.
//   insertAtBegining(head, newData)
//   {
//       //your code here
//    const newNode = new Node(newData)
//      newNode.next = head
//       return newNode
//   }
//   //Function to insert a node at the end of the linked list.
//   insertAtEnd(head, newData)
//   {
//       //your code here
//       const newNode = new Node(newData)
//        if(head === null) {
//           return newNode;
//       }
//       let current = head;
//       while(current.next !== null) {
//           current = current.next
//       }
//       current.next = newNode
//       return head;
//   }
// }