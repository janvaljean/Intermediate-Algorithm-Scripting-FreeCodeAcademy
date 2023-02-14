//!Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].

function destroyer(arr) {
  let newArr = arguments[0]
  //console.log(newArr)
  let items = arguments
  
  
  for (let i = Object.keys(items).length-1; i>0; i--){
    //console.log(items[i])
    newArr = newArr.filter(function(item) {
    return item !== items[i]
})
    //console.log(newArr)
  }
    
  
  
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);