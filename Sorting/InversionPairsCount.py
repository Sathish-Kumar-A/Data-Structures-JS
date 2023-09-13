class Inversion:
    def __init__(self, arr):
        self.arr = arr
        
    def count(self):
        res=0
        for i in range(len(self.arr)):
            for j in range(i,len(self.arr)):
                if(self.arr[i]>self.arr[j] and i<j):
                    res+=1
        return res

