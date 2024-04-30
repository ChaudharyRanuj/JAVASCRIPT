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

// Q2: Identical Linked Lists
/*
Given two Singly Linked List of N and M nodes respectively. The task is to check whether two linked lists are identical or not. 
Two Linked Lists are identical when they have same data and with same arrangement too.

Example 1:

Input:
LinkedList1: 1->2->3->4->5->6
LinkedList2: 99->59->42->20
Output: Not identical 
*/
// class Solution {
//   //Function to check whether two linked lists are identical or not.
//   areIdentical(head1, head2) {
//     while (head1 !== null) {
//       if (head1.data != head2.data) {
//         return false;
//       }
//       head1 = head1.next;
//       if (head1 === null && head2.next) {
//         return false;
//       }
//       head2 = head2.next;
//     }

//     return true;
//     //your code here
//   }
// }

