/*
merge 2 sorted linked lists and return it as a new list 
the new list should be made 
by splicing together the nodes of 
the first two lists

input [1,2,4] [1,3,4]
output [1,1,2,3,4,4]

*/

var mergeTwoLists = function (l1, l2) {
    if(l1 === null) {
        return l2;
    }else if(l2 === null){
        return l1
    }

    let l3 = new ListNode();
    let comboList = l3;

    if (l1.val < l2.val) {
        comboList.val = l1.val;
        l1 = l1.next;
    } else {
        comboList.val = l2.val;
        l2 = l2.next;
    }

    while (l1 !== null || l2 !== null) {
        if (l2 === null || (l1 != null && l1.val < l2.val)) {
            comboList.next = l1;
            l1 = l1.next;
        } else {
            comboList.next = l2;
            l2 = l2.next;
        }
        comboList = comboList.next;
    }
    return l3;
};

/*
Validate if a given string can be interpreted as a decimal number
*/

//Regular expression is best for validation

var isNumber = function(s) {
    //remove spaces with trim
    s = s.trim();
    //check if string is emtpy
    if(!isNaN(s)){
        return true
    //use JS isNan to see if it is a number
    }else{
        return false
    }
};