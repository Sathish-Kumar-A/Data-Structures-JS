class MaxSlidingWindow:
    def __init__(self, arr, k):
        self.arr = arr
        self.k = k
        
    def solve(self):
        arr=self.arr
        k=self.k
        res=[]
        for i in range(0,len(arr)-k+1):
            res.append(max(arr[i:i+k]))
        print(res)
        return res

res=MaxSlidingWindow([1,3,-1,-3,5,3,6,7],3)
res.solve()