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

// Q3. Delete Node in a Linked List
/*
There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.
Custom testing:

For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
We will build the linked list and pass the node to your function.
The output will be the entire list after calling your function.
*/

// 1st solution
var deleteNode = function (node) {
  let temp = node;
  let current = temp;
  while (temp.next !== null) {
    current = temp;
    temp = temp.next;
    current.val = temp.val;
  }
  current.next = null;
};

// 2nd solution most optimised solution
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// Q4. Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
/*
Input: head = [1,1,2]
Output: [1,2]
*/

// var deleteDuplicates = function (head) {
//   let current = head;
//   while (current && current.next) {
//     if (current.val === current.next.val) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }
//   return head;
// };

// Q5. Remove duplicates from an unsorted linked list

// Given an unsorted linked list of N nodes. The task is to remove duplicate elements from this unsorted Linked List. When a value appears in multiple nodes, the node which appeared first should be kept, all others duplicates are to be removed.

// class Solution {
//   //Function to remove duplicates from unsorted linked list.
//   removeDuplicates(head) {
//     //your code here
//     let set = new Set();
//     let temp = head;
//     let current = head;

//     while (temp != null) {
//       if (set.has(temp.data)) {
//         current.next = temp.next;
//       } else {
//         set.add(temp.data);
//         current = temp;
//       }
//       temp = temp.next;
//     }

//     return head;
//   }
// }

// Q6 Merge Two Sorted Lists

// Easy
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// var mergeTwoLists = function (list1, list2) {
//   let dummy = new ListNode(-1)
//   let result = dummy

//   while (list1 && list2) {
//       if (list1.val <= list2.val) {
//           result.next = list1
//           list1 = list1.next
//       } else {
//           result.next = list2
//           list2 = list2.next
//       }
//       result = result.next
//   }

//  if(list1 != null) result.next = list1
//  if(list2 != null) result.next = list2

//   return dummy.next
// };

// Q7 Remove Nth Node From End of List
//  Given the head of a linked list, remove the nth node from the end of the list and return its head.

// FIRST APPROACH

// var removeNthFromEnd = function (head, n) {
//   function findLenghtOfList(head) {
//     let temp = head;
//     let count = 0;
//     while (temp !== null) {
//       temp = temp.next;
//       count++;
//     }
//     return count;
//   }

//   let length = findLenghtOfList(head);

//   let node = head;
//   let prev = head;
//   let index = length - n;

//   if (index == 0) {
//     head = head.next;
//     return head;
//   }

//   let count = 0;
//   while (count < index) {
//     prev = node;
//     node = node.next;
//     count++;
//   }

//   if (index > 0) {
//     prev.next = node.next;
//   }
//   return head;
// };

// OPTIMISED SOLUTION
// HINT MAKE SLOW FAST POINTER AT GAP OF n (position of node from back)
// var removeNthFromEnd = function(head, n) {
//   let slow = head;
//   let fast = head;
//   while(n--) {
//    fast = fast.next
//   }
//   if(fast === null) {
//    return slow.next;
//   }

// while(fast.next !== null) {
//    slow = slow.next
//    fast = fast.next
// }
// slow.next = slow.next.next

// return head;
// };

//Q8. Swapping Nodes in a Linked List

// Medium

// You are given the head of a linked list, and an integer k.
// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// FIRST BRUTE FORCE APPROACH
// var swapNodes = function (head, k) {
//   if (head.next === null || head === null) return head;
//   let startNode = head;
//   let index = 1;
//   while (index < k) {
//     startNode = startNode.next;
//     index++;
//   }

//   let slow = head;
//   let fast = head;
//   while (k--) {
//     fast = fast.next;
//   }

//   while (fast !== null) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   let startNodeValue = startNode.val;
//   startNode.val = slow.val;
//   slow.val = startNodeValue;
//   return head;
// };

// OPTIMISED APPROACH
// var swapNodes = function(head, k) {
//   if (head.next === null || head === null) return head;
// let slow = head;
// let fast = head;
// while (--k) {
//   fast = fast.next;
// }
// let startNode = fast;
// while (fast.next !== null) {
//   slow = slow.next;
//   fast = fast.next;
// }
// let lastNodeValue = slow.val
// let startNodeValue = startNode.val
// slow.val = startNodeValue
// startNode.val = lastNodeValue
// return head;
// };

// Q9. Reverse Linked List iteratively and recursively
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// ITERATIVELY
// var reverseList = function(head) {
//   if(head === null || head.next === null) {
//       return head;
//   }

//   let node = head;
//   let next = node;
//   let prev = null

//   while(next !== null) {
//   next = node.next
//   node.next = prev;
//   prev = node;
//   node = next;
//   }
//   return prev;
//   };

// RECURSIVELY

// function reverseLinkedList(head) {
//   let node = head;
//   let next = node;
//   let prev = null;

//   function reverse(node) {
//     if (next === null) {
//       return prev;
//     }
//     next = node.next;
//     node.next = prev;
//     prev = node;
//     node = next;
//     reverse(node);
//   }
//   reverse(node);
//   return prev;
// }

// Q10 Linked List Cycle
// Solved
// Easy

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// SLOW FAST POINTER APPROACH
// var detectCycle = function (head) {
//   if (head === null) return null;
//   let slow = head;
//   let fast = head;
//   let isCycleExist = false;
//   while (fast.next !== null && fast.next.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       isCycleExist = true;
//       break;
//     }
//   }

//   if (!isCycleExist) {
//     return null;
//   }

//   let start = head;

//   while (start !== slow) {
//     start = start.next;
//     slow = slow.next;
//   }
//   return slow;
// };

// 11 Rotate linked list
// Given the head of a linked list, rotate the list to the right by k places.
/*
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]

*/

// FIRST APPRAOACH
// function rotateLinkedList(k, head, length) {
//   let slow = head;
//   let fast = head;
//   // move fast counter ahead by k
//   while(k--) {
//     fast = fast.next
//   }

//   // slow will reach one before kth node
//   while(fast.next && fast){
//     slow = slow.next;
//     fast = fast.next;
//   }
// // detach the listafter
//   let node = slow.next
//   slow.next = null;
//   fast.next = head;
//   return node;

// }

// var rotateRight = function(head, k) {
//     if(head === null || head.next === null) return head;
// let current = head;
// let listLength = 0;

// while(current) {
//     current = current.next
//     listLength++
// }

//  if(k > listLength){
//     k = k % listLength
//  }
// // if k = 0 or k = length of linked list means we will orignal linked list so
// // retun head;
// if(k === listLength || k === 0) {
//     return head;
// } else if(k < listLength){
// // if k modulus lenght of linked list than rotate the string.
// let result = rotateLinkedList(k, head, listLength)
// return result;
// }

// };

// SECOND APPROACH
// DO WITH You Tube HELLO WORLD Prince Sir Approach

// Q12 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// BRUTE FORCE
// var addTwoNumbers = function (l1, l2) {

//   let first = l1
//   let second = l2
//   let result = new ListNode(-1)
//   let dummy = result
//   let sum = 0
//   let carry = 0
//   let value = 0

//   while (first && second) {
//       sum = sum > 9 ? first.val + second.val + carry : first.val + second.val;
//       carry = sum > 9 ? Math.trunc(sum / 10) : 0;
//       value = sum > 9 ? sum % 10 : sum;
//       result.next = new ListNode(value)
//       result = result.next
//       first = first.next
//       second = second.next
//        if (first === null && second === null &&  sum > 9 ) {
//           result.next = new ListNode(carry)
//           result = result.next
//       }
//   }

//   while (first) {
//       sum = sum > 9 ? first.val + carry : first.val;
//       carry = sum > 9 ? Math.trunc(sum / 10) : 0;
//       value = sum > 9 ? sum % 10 : sum;
//       result.next = new ListNode(value)
//       result = result.next
//       first = first.next
//       if (first === null  &&  sum > 9 ) {
//           result.next = new ListNode(carry)
//           result = result.next
//       }
//   }
//   while (second) {
//       sum = sum > 9 ? second.val + carry : second.val;
//       carry = sum > 9 ? Math.trunc(sum / 10) : 0;
//       value = sum > 9 ? sum % 10 : sum;
//       result.next = new ListNode(value)
//       result = result.next
//       second = second.next
//       if (second === null &&  sum > 9 ) {
//           result.next = new ListNode(carry)
//           result = result.next
//       }
//   }
//   return dummy.next
// };

// SECOND APPROACH
// Retry and do in first while loop

// Q13 Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// BRUTE FORCE
// BY CHANGING THE VALUES
// var swapPairs = function (head) {
//   if (head === null || head.next === null) return head;
//   let prev = head
//   let next = prev.next

//   if (next === null) {
//       let prevVal = prev.val
//       prev.val = next.val
//       next.val = prevVal
//       return head;
//   }
//   let nextIndex = 2;
//   while (next) {
//       if (nextIndex % 2 == 0) {
//           let prevVal = prev.val
//           prev.val = next.val
//           next.val = prevVal
//       }

//       prev = prev.next
//       next = next.next
//       nextIndex++
//   }
//   return head;
// };

// BY CHANGING THE NODEPOINTER

// var swapPairs = function (head) {
//   let dummy = new ListNode(0)
//   dummy.next = head;
//   let pointer = dummy
//   let pre
//   let next
//   while (pointer.next !== null && pointer.next.next !== null) {
//       //initilise prev and next node
//       prev = pointer.next
//       next = pointer.next.next

//       // swap prev and next
//       prev.next = next.next
//       next.next = prev

//       // change ponter.next to next and move pointer to prev
//       pointer.next = next;
//       pointer = prev
//   }
//   return dummy.next;
// };

// Q14 Palindrome Linked List
// FIRST APPROACH
// var isPalindrome = function(head) {
//   let stringLeftToRight = ''
//   let stringFromRightToLeft = ''

//   let current = head;
//   while(current){
//       stringLeftToRight = stringLeftToRight + current.val
//       stringFromRightToLeft = current.val + stringFromRightToLeft

//       current = current.next
//   }

//   if(stringLeftToRight === stringFromRightToLeft){
//       return true;
//   } else {
//       return false;
//   }

// };

// SECOND APPROACH
// var isPalindrome = function (head) {
//   let current = new ListNode(head.val)
//   let temp = head.next;

//   while (temp) {
//       let newNode = new ListNode(temp.val)
//       newNode.next = current
//       current = newNode;
//       temp = temp.next
//   }

//   let newHead = head;
//   while (current) {
//       if (current.val !== newHead.val) {
//       return false;
//       }
//       current = current.next
//       newHead = newHead.next
//   }

//   return true;
// };

//

// // Q15 Sort linked list using Merge Sort
// function midNode(node) {
//   let slow = node;
//   let fast = node;
//   while (fast.next != null && fast.next.next != null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// }

// function mergeSortedList(leftList, rightList) {
//   if (leftList == null || rightList == null) {
//     return leftList == null ? rightList : leftList;
//   }
//   let dummy = new ListNode(-1);
//   let result = dummy;
//   while (leftList && rightList) {
//     if (leftList.val <= rightList.val) {
//       result.next = leftList;
//       leftList = leftList.next;
//     } else {
//       result.next = rightList;
//       rightList = rightList.next;
//     }
//     result = result.next;
//   }
//   if (leftList == null || rightList == null) {
//     result.next = leftList == null ? rightList : leftList;
//   }
//   return dummy.next;
// }

// var sortList = function (head) {
//   if (head == null || head.next == null) return head;
//   let mid = midNode(head);
//   let newHead = mid.next;
//   mid.next = null;

//   let leftHalf = sortList(head);
//   let rightHalf = sortList(newHead);

//   return mergeSortedList(leftHalf, rightHalf);
// };

// // Q16 Intersection of Two Linked Lists

// BRUTE FORCE
// var getIntersectionNode = function(headA, headB) {
//   let set = new Set()
//   let firstList = headA;
//   while(firstList){
//       set.add(firstList)
//       firstList =  firstList.next
//   }

// let secondList = headB
// while(secondList) {
//   if(set.has(secondList)){
//       return secondList
//   }
//   secondList = secondList.next
// }

// return null;

// };

// // OPTIMISED SOLUTION
// var getIntersectionNode = function (headA, headB) {
//   let a = 0;
//   let b = 0;
//   let firstList = headA;
//   while (firstList) {
//     firstList = firstList.next;
//     a++;
//   }
//   let secondList = headB;
//   while (secondList) {
//     secondList = secondList.next;
//     b++;
//   }
//   let diffInListLength = Math.abs(a - b);
//   if (a < b) {
//     while (diffInListLength--) {
//       headB = headB.next;
//     }
//   } else {
//     while (diffInListLength--) {
//       headA = headA.next;
//     }
//   }

//   while (headA && headB) {
//     if (headA === headB) {
//       return headA;
//     }

//     headA = headA.next;
//     headB = headB.next;
//   }

//   return null;
// };
