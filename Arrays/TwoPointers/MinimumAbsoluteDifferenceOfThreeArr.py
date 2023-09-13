class Minimize:
    def __init__(self, arr1, arr2, arr3):
        self.arr1 = arr1
        self.arr2 = arr2
        self.arr3 = arr3
    def check(self):
        arr1,arr2,arr3=self.arr1,self.arr2,self.arr3
        # maxVal=max(max(arr1),max(arr2),max(arr3))
        # minVal=min(min(arr1),min(arr2),min(arr3))
        # return maxVal-minVal
        i,j,k=0,0,0
        ans=10**7
        # maxVal=-10**7
        # minVal=10**7


        while i<len(arr1) and j<len(arr2) and k<len(arr3):
            ans=min(ans,max(arr1[i],arr2[j],arr3[k])-min(arr1[i],arr2[j],arr3[k]))
            # absMin=min(absMin,abs(arr1[i]-abs(arr2[j]-arr3[k])))
            print(arr1[i],arr2[j],arr3[k])
            if(arr1[i]<arr2[j] and arr1[i]<arr3[k]):
                i+=1
            elif(arr2[j]<arr1[i] and arr2[j]<arr3[k]):
                j+=1
            else:
                k+=1
        return ans
        # return absMin           # else:



res=Minimize([ 5, 8, 10, 15 ],[ 6, 9, 15, 78, 89 ],[ 2, 3, 6, 6, 8, 8, 10 ]);
print(res.check())