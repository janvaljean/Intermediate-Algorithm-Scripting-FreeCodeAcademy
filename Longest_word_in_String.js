//! Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.
function findLongestWordLength(str) {
  let  newList = []
  for (let item of str.split(" ")){
    newList.push(item.length)

  }

  return Math.max(...newList);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");//6