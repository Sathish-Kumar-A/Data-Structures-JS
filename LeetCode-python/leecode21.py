def mergeTwoLists(list1,list2):
    i=0
    j=0
    result=[]

    while((i<len(list1)) and (j<len(list2))):
        if(list1[i]<list2[j]):
            result.append(list1[i])
            i+=1
        else:
            result.append(list2[j])
            j+=1

    if(j<len(list2)):
        while(j<list2):
            result.append(list2[j])
            j+=1

    if(i<len(list1)):
        result.append(list1[i])
        i+=1
    return result

print(mergeTwoLists([],[7,6,8,8,7]))