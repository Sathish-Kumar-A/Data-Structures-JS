class SubArraySum:
    def __init__(self, arr, k):
        self.arr = arr
        self.k = k
        
    def solve(self):
        arr=self.arr
        k=self.k
        count=0
        sum=0
        hashMap={}
        for i in range(len(arr)):
            sum+=arr[i]
            if sum-k in hashMap:
                count+=hashMap[sum-k]
            if sum in hashMap:
                hashMap[sum]+=1
            else:
                hashMap[sum]=1
        # print(hashMap)
            # hashMap[sum]=hashMap[sum]?hashMap[sum]+1:1
        print(count)
        return count
ans=SubArraySum([1,1,1],2)
print(ans.solve)