def dailyTemperatures(temperatures):
        stack = []
        size = len(temperatures)
        ans = [0] * size

        for i in range(size):
            if not stack or temperatures[i] <= stack[-1][0]:
                stack.append((temperatures[i], i))
                continue
            
            while stack and temperatures[i] > stack[-1][0]:
                print(stack)
                temp, idx = stack.pop()
                ans[idx] = abs(i - idx)
            
            stack.append((temperatures[i], i))
        # print(stack)
        return ans

print(dailyTemperatures([73,74,75,71,69,72,76,73]))