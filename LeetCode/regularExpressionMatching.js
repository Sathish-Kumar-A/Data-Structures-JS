var isMatch = function (s, p) {
    if (p.includes("*")) {
        console.log(p.split(""));
        let index = p.split("").findIndex("*");
        index = index > 0 ? index - 1 : index;
        if (index == 0) {
            return true;
        }
        else {
            return p[index].repeat(s.length)==s || !s.includes(p[index]);
        }

        // if (s === p || !s.includes(p[index])) {
        //     return true;
        // }
    }

};
console.log(isMatch("ab",".*"))
// console.log("a".repeat(7))