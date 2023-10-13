from os import *
from sys import *
from collections import *
from math import *

def findRedundantBrackets(s:str):
	# Write your code here.
	stack=[]
	for i in range(len(s)):
		if s[i]!=")":
			stack.append(s[i])
		else:
			isOperatorFound=False
			j=i
			while(j>0):
				popped=stack.pop()
				if popped=="(":
					if isOperatorFound==False:
						return True
					break
				elif(popped in ["+","-","*","/"]):
					isOperatorFound=True
				j-=1
	return True
	# Return boolean True or False.
	# pass

print(findRedundantBrackets("((a+b))"))


