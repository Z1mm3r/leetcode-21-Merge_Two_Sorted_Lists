var mergeTwoLists = function(list1, list2) {
    let head;
    let curr;

    //Note: Using || gives whatever value is valid.

    //if one is empty, return the other
    if(!list1 || !list2){
        
        return list1 || list2;
    }
    
    //Starting values
    if(list1.val <= list2.val){
        head = list1;
        list1 = list1.next;
    }

    else{
        head = list2;
        list2 = list2.next;
    }

    curr = head;

    //Merge lists
    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1;
            list1 = list1.next;
        }
        else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    //When one list is finished, add the rest of the other, if any remain.
    curr.next = list1 || list2;

    return head;
};
