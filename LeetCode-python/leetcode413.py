def numberOfArithmeticSlices(nums):
    pairs=0
    for k in range(len(nums)):
        count=0
        i=k
        if(i+2<=len(nums)-1):
            j=k+1
            diff=nums[j]-nums[i]
            while(j<len(nums)):
                if(nums[j]-nums[i]==diff):
                    count+=1
                else:
                    break
                if(count>=2):
                    pairs+=1
                i+=1
                j+=1
    return pairs
print(numberOfArithmeticSlices([7,7,7,7,7]))