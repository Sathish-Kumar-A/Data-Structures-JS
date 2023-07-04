function printSubsequences(givenArray,requiredSum) {
    const printAllSubsequencesWithCountAsGiven = (index, sequenceArr, sum) => {
      // console.log(sequenceArr, sum,index);

      // console.log({sum});
      if (index === givenArray.length) {
        if (sum === requiredSum) {
          console.log(sequenceArr, sum);
          return true;
        }
        return false;
      }
      sequenceArr.push(givenArray[index]);
      sum += givenArray[index];
      printAllSubsequencesWithCountAsGiven(index + 1, sequenceArr, sum);
      // * If only one subsequence is enough means, The below code works
      // if (printAllSubsequencesWithCountAsGiven(index + 1, sequenceArr, sum)===true) {
      //     return true;
      // }
      sum -= givenArray[index];
      sequenceArr.pop();
      printAllSubsequencesWithCountAsGiven(index + 1, sequenceArr, sum);
      // * If only one subsequence is enough means, The below code works

      // if (printAllSubsequencesWithCountAsGiven(index + 1, sequenceArr, sum)===true) {
      //     return true;
      // }
      return false;
    };
    printAllSubsequencesWithCountAsGiven(0, [], 0);

}

// !Approach -
//     * Take and not Take
//     * if sum===requiredSum // Base Condition
//     * Now add the index value of givenArray to sequenceArr.
//     * Increment the sum by the index value.
//     * call recursive with the sequenceArr with incremented index by 1
//     * Now remove the added value from the sequenceArr
//     * decerement the sum by removedValue
//     * call recursive with the sequenceArr with incremented index by 1


printSubsequences([1, 2, 1], 2);