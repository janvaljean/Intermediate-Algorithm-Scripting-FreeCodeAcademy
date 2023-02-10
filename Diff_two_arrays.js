// !Diff Two Arrays
// Compare two arrays and return a new array 
// with any items only found in one of the two given arrays, but not both.
//  In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    const newArr = [];
  
    function search(firstArray, secondArray) {
    firstArray.forEach(item => {
        if (!secondArray.includes(item)){
            newArr.push(item);
        }
    })
}
    search(arr1, arr2);
    search(arr2, arr1);
    
    return newArr;
    }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



  
    // arr1.forEach(item => {
    //     if (!arr2.includes(item)){
    //         newArr.push(item);
    //     }
    // })
    // arr2.forEach(item => {
    //     if (!arr1.includes(item)){
    //         newArr.push(item);
    //     }
    // })  
    
    