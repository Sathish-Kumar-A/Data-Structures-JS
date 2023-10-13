class stack:
    def __init__(self):
        self.s=[]
        self.minEle=None


    def push(self,x):
        if self.minEle is None:
            self.minEle=x
        else:
            self.minEle=min(self.minEle,x)
        self.s.append((x,self.minEle))

    def pop(self):
        #CODE HERE
        if len(self.s)>0:
            self.s.pop()

    def getMin(self):
        print(self.s)
        if len(self.s)>0:
           return self.s[-1][1]
        else:
            return -1

st=stack()
st.push(2)
st.push(3)
st.pop()
print(st.getMin())
st.push(1)
print(st.getMin())