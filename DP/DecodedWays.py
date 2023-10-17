class Solution:
    def numDecodings(self, s: str) -> int:
        dp=[-1]*len(s)
        return self.helper(s,0,dp)
    def helper(self,s,startingIndex,dp)->int:
        if len(s)==startingIndex:
            return 1
        firstDigit=int(s[startingIndex])
        if firstDigit==0:
            return 0
        if startingIndex==len(s)-1:
            return 1
        if(dp[startingIndex]!=-1):
            return dp[startingIndex]
        ans=self.helper(s,startingIndex+1,dp)
        if(startingIndex<len(s)-1):
            secondDigit=int(s[startingIndex+1])
            res=firstDigit*10+secondDigit
            if res<=26:
                ans+=self.helper(s,startingIndex+2,dp)
        dp[startingIndex]=ans
        return ans

res=Solution()
print(res.numDecodings("11"))