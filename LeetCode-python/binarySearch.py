import math
def binarySearch(array,num):
    left=0
    right=len(array)-1
    while(left<right):
        mid=math.floor((left+right)/2)
        if(num==array[mid]):
            return mid
        if(num<array[mid]):
            right=mid
        if(num>array[mid]):
            left=mid
    return -1

print(binarySearch([1,2,3,4,5,6,10,11],2))
        
    
        