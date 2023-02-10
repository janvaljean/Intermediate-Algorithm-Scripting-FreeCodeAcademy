// ! Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let newList = []
  for(let items of arr){
    newList.push(Math.max(...items))
  }
  return newList;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//2.way

        function lgArry (arr) {
            return arr.map(function(group){
                return group.reduce(function(a,b){
                    return a > b ? a : b;

                })
            })
        }