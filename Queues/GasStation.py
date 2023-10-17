class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        for j in range(len(gas)):
            i=0
            tank=0
            while i<len(gas):
                tank+=gas[i]
                tank-=cost[i]
                if i<len(gas) and tank<0:
                    break
                else:
                    i+=1
            if i==len(gas):
                return j
            gas.append(gas.pop(0))
            cost.append(cost.pop(0))
        return -1
    
res=Solution([])