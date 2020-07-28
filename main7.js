/*
linked list cycle

given a linked list determine if it has a cycle in it
to represent a cycle in the linkedlist we use a integer "pos" which represents
the position 0 indexed in the linked list where the tail connects to

if pos is -1 then there is no cycle in the linked list
if pos is positive there is a cycle

example:

input: head = [3,2,0,-4], pos = 1
output: true
*/

var hasCycle = function(head) {
    //use the Floyd method for slow and fast pointers
    if(head === null || head.next === null ){
        return false
    }
    //slow will be the container for slow walker 
    //fast will be the fast runner
    let slow = head;
    let fast = head.next;
    
    //if slow and fast are never equal means no loop
    while (slow != fast) {
        if (slow === null || fast === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

/*

merge k sorted lists and return it as a one sorted list
analyze and describe the complexity

*/