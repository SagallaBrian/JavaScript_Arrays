// The Filter Method 
// The filter() method creates an array filled with all array 
// elements that pass a test (provided as a function).

// Note: filter() does not execute the function for array elements without values.

// Note: filter() does not change the original array.

const jsonarray = require("./dat.json");


let arrnum = [1, 35, 6, 8, 1, 87];

let chekcval = function (num) {
    return num > 7
}
console.log("The 4 is not greater than 7 hence: " + chekcval(4));
// Outputs: The 4 is not greater than 7 hence: false

// Returns  a new array with elements that are larger than 7
let arrnum2 = arrnum.filter(chekcval);
console.log(arrnum2);
// Outputs: [ 35, 8, 87 ]

// Returns  a new array with elements that are larger than 7
let arrnum3 = arrnum.filter(function (arrelem) {
    return arrelem > 7;
});
console.log(arrnum3)
// Outputs: [ 35, 8, 87 ]

// Returns  a new array whose prdbrand property is lancome
let arrjson2 = jsonarray.filter(function (arrelem) {
    return arrelem.prdbrand == 'lancome'
});

console.log(arrjson2.length);
// Outputs: 5

// learning to remove duplicates in an array 
const arrnum4 = [4, 5, 5, 5, 4, 9, 'm', 'm', 'y', 'y'];

// Duplicates occur where the element index and the indexof element is not equal
arrnum4.forEach((items, index) => {
    console.log(`${items}: ${index}: ${arrnum4.indexOf(items)}`);
});
/* 
Outputs: 
4: 0: 0
5: 1: 1
5: 2: 1
5: 3: 1
4: 4: 0
9: 5: 5
m: 6: 6
m: 7: 6
y: 8: 8
y: 9: 8

*/

let dupremoved = arrnum4.filter(function (items, indexs) {
    return arrnum4.indexOf(items) === indexs
})
console.log(dupremoved);
// Outputs: [ 4, 5, 9, 'm', 'y' ]