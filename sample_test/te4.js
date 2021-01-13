
// Write a JavaScript function to find the unique elements from two arrays 
// Intersection 
let arr1 = [11, 61, 53, 19, 43, 5, 31];
let arr2 = [59, 2, 17, 31, 53, 41, 19];
// Concatenation using spread operator 
let arr3 = [...arr1, ...arr2];


let arr4 = arr3.filter((items, indexx) => {
    return arr3.indexOf(items) !== indexx
});

console.log(arr4);
// Outputs: [ 31, 53, 19 ]  

// Finding the union of two arrays 
// Consider already concatenated array arr3 
// The union is the array minus the duplicates
let arr5 = arr3.filter((items, indexx) => {
    return arr3.indexOf(items) === indexx
});

console.log(arr5);
// Outputs: [11, 61, 53, 19, 43, 5, 31, 59, 2, 17, 41]