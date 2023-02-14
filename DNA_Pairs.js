// !DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let baseArr = str.split("")
  let emtArr = []
  let lastArr = []
  //console.log(baseArr)
  baseArr.forEach(element => {
    if (element == "G"){
    emtArr.push(element)
    emtArr.push("C")};
    if(element == "C"){
      emtArr.push(element)
      emtArr.push("G")
    }
    if(element == "A"){
      emtArr.push(element)
      emtArr.push("T")
    }
    if(element == "T"){
      emtArr.push(element)
      emtArr.push("A")
    }})
    for (let i = 0; i < emtArr.length; i+=2){
      lastArr.push([emtArr[i],emtArr[i+1]])

    }
//   console.log(emtArr)
//   console.log(lastArr)
  return lastArr;
}

function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

// test here
pairElement("GCG");

pairElement("GCG");