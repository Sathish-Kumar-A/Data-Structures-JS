from asyncio.proactor_events import constants


def isPalindrome(x):
    given=x
    num=0
    while(x>0):
        reminder=x%10
        num=num*10+reminder
        x=x//10
    if given==num:
        return True
    else:
        return False
print(isPalindrome(121))