class Solution:
    def minimumJumps(self, forbidden, a: int, b: int, x: int) -> int:
        fdSet=set(forbidden)
        dp=[[-1,-1]]*4000
        ans=self.helper(fdSet,a,b,x,1,0)
        return -1 if ans==(2**31)-1 else ans
        
    def helper(self,fdSet,a,b,dest,jump,currPos):
        # print(currPos)
        if currPos==dest:
            return 0
        if (currPos in fdSet) or currPos<0 or currPos>4000:
            return (2**31) -1
        ans=self.helper(fdSet,a,b,dest,1,currPos+a)
        if jump==1:
            ans=min(ans,self.helper(fdSet,a,b,dest,0,currPos-b))
        return ans if ans==(2**31) -1 else ans+1
    
ins=Solution()
print(ins.minimumJumps([8,3,16,6,12,20],15,13,11))