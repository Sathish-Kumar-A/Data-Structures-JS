function duplicates() {
    let obj = {};
    for (let i = 0; i < arguments.length; i++){
        if (obj[arguments[i]]) {
            return true;
        }
        else {
            obj[arguments[i]]=1
        }
    }
    return false;
}
console.log(duplicates(1, 2, 2));