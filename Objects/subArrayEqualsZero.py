class Subarray:
    def __init__(self, arr):
        self.arr = arr
        
    def maxLen(self):
        arr=self.arr
        hash={}
        maxLen=0
        sum=0
        for i in range(0,len(arr)):
            print(hash)
            sum+=arr[i]
            if sum in hash:
                maxLen=max(maxLen,i-hash[sum])
            else:
                hash[sum]=i
        return maxLen
res=Subarray([-1,1,-1,1]);
print(res.maxLen())