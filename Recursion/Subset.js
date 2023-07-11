const subset = (arr) => {
    const result = [];
    SubsetFindings(0, 0, result,arr);
    return [...new Set(result.sort((a, b) => a - b))];
}

const SubsetFindings = (index,sum,result,arr) => {
    result.push(sum);
    if (index >= arr.length) {
        return;
    }
    // *Picking the index Sum
    SubsetFindings(index + 1, sum + arr[index], result, arr);
    // * Not picking the sum
    SubsetFindings(index + 1, sum, result, arr);
}


console.log(subset([3,1,2]));