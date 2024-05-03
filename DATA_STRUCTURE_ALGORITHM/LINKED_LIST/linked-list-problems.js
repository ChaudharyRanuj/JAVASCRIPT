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
//         current = temp;
//       }

//       if (!set.has(temp.data)) {
//         set.add(temp.data);
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

// var mergeTwoLists = function(list1, list2) {
//   let result  = new ListNode(-1)
//   let dummy = result

//   while(list1 && list2) {
//       if(list1.val <= list2.val) {
//           result.next = new ListNode(list1.val)
//           result = result.next
//           list1 = list1.next
//       }
// if(list1 === null) break;
//       if(list2.val <= list1.val) {
//             result.next = new ListNode(list2.val)
//           result = result.next
//           list2 = list2.next
//       }

//   }

// while(list1) {
//         result.next = new ListNode(list1.val)
//           result = result.next
//           list1 = list1.next
// }
// while(list2) {
//         result.next = new ListNode(list2.val)
//           result = result.next
//           list2 = list2.next
// }

// return dummy.next
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
// let index = 1
// while (index < k) {
//   fast = fast.next;
//   index++
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
var detectCycle = function (head) {
  if (head === null) return null;
  let slow = head;
  let fast = head;
  let isCycleExist = false;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      isCycleExist = true;
      break;
    }
  }

  if (!isCycleExist) {
    return null;
  }

  let start = head;

  while (start !== slow) {
    start = start.next;
    slow = slow.next;
  }
  return slow;
};
