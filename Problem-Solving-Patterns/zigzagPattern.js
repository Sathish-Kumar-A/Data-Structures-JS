// leetcode -6 zigzag pattern

function zigzagPattern(string, rows) {
    let count = 0;
    let array = new Array(rows).fill(""); 
    let isGoingDown = true;
    if (rows <= 0) {
        return string;
    }
    for (let i = 0; i < string.length; i++){
        array[count] += string[i];
        if (count === 0) isGoingDown = true;
        if (count === rows - 1) {
            isGoingDown = false;
        }
        isGoingDown ? count++ : count--;
    }
    return array.join('');
}
console.log(zigzagPattern("paypalishiring", 4));