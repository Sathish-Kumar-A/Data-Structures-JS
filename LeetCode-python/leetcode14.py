# from json.encoder import INFINITY


def longestCommonPrefix(strs):
    result=""
    minlength=100
    minString=""
    for i in strs:
        if(len(i)<minlength):
            minlength=min(minlength,len(i))
            minString=i
    j=0
    for i in minString:
        count=0
        for k in strs:
            if(i==k[j]):
                count+=1
            else:
                break
        if(count==len(strs)):
            result+=minString[j]
            j+=1
        else:
            break
    return result

print(longestCommonPrefix(["dog","racecar","car"]))
        
