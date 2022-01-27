var myAtoi = function (s) {
    let trimmedString = s.trim();
    let str = "";
     let sign = 0;
    if (trimmedString[0] == "-" || trimmedString[0] == "+") {
        str += trimmedString[0];
        sign+=1
    }
    for (let i = sign; i < trimmedString.length; i++) {
        if (trimmedString[i] == "-" || trimmedString[i] == "+") {
            break;
        }
        if (sign > 1) {
            return 0;
        }
        if (isDigit(trimmedString[i])) {
            str += trimmedString[i];
        }
        else {
            break;
        }
    }

    if (str.length == 0 || (str.length == 1 && sign > 0)) {
        return 0
    }
    if (sign > 0 && str[1] == 0) {
        let afterSymbol = str.slice(1, str.length);
        return str[0] + parseInt(afterSymbol);

    }
    if (+str > 2147483647) {
        str = 2147483647
    } else if (+str < -2147483647) {
        str = -2147483648
    }
    return str
};

function isDigit(num) {
    if (num == "0" || num == "1" || num == "2" || num == "3" || num == "4" || num == "5" || num == "6" || num == "7" || num == "8" || num == "9") {
        return true;
    }
    else {
        return false;
    }
}