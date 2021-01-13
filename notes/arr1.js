let arr1 = ["books", "pens", "eraser", "chalk"];
console.log(arr1);
// Outputs: [ 'books', 'pens', 'eraser', 'chalk' ]

let arrproperites = Object.getOwnPropertyNames(Array);
console.log(arrproperites);
// Outputs: [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]

let arr1len = arr1.length;
console.log(arr1len);
// Outputs: 4

// First Element of an Array 
console.log(arr1[0]);
// Outputs: books

// Accessing the nth element of an array e.g. 2 
console.log(arr1[2]);
// Outputs: eraser

// The last element of an array 
console.log(arr1[arr1len - 1])
// Outputs: chalk


// Changing an element in an array. Get 
// The index of the array and reasign a new value 
arr1[1] = "pencil"
console.log(arr1);
// Outputs: [ 'books', 'pencil', 'eraser', 'chalk' ]

// Adding an element at the end of an array
// The push() method adds a new element to an array (at the end):
arr1.push("Ink");
console.log(arr1);
// Outputs:[ 'books', 'pencil', 'eraser', 'chalk', 'Ink' ]

// Adding an element at the beginning of an array
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
arr1.unshift("Sharpener");
console.log(arr1);
// Outputs: [ 'Sharpener', 'books', 'pencil', 'eraser', 'chalk', 'Ink' ]


// Removing the last element of an array
arr1.pop();
console.log(arr1);
// Outputs: [ 'Sharpener', 'books', 'pencil', 'eraser', 'chalk' ]  

// Removing the first element of an array
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
arr1.shift();
console.log(arr1);
// Outputs: [ 'books', 'pencil', 'eraser', 'chalk' ]


// Check if it an array 
let checkarr = Array.isArray(arr1);
console.log(checkarr);
// Outputs: true

// Initalizing an empty array 
let emptarray = [];
console.log(emptarray);
// Outputs: []