// Write a program to check if a value is an array or not 
const anarray = [34, 7, 23, 41, 97];
const astrin = 'I live in Donholm';
const checkarr1 = Array.isArray(anarray);
const checkarr2 = Array.isArray(astrin);

console.log(checkarr1);
// Outputs: true
console.log(checkarr2);
// Outputs: false


// Write a JavaScript function to clone an array.
let anarray2 = [34, 7, 15, 8, 67];
// This will just reference the array index and not creating a new array 
// let anarray3 = anarray2 ;

// This is the correct way of copying new array 
let anarray3 = anarray2.slice(0) ;

anarray2[2] = 98 ;
console.log(anarray2) ;
// Outputs: [ 34, 7, 98, 8, 67 ]
console.log(anarray3) ;
// Outputs: [ 34, 7, 15, 8, 67 ]

// Write a JavaScript program to return the last n elements of an array
// slice(-n)
let anarray4  = anarray2.slice(-3);
console.log(anarray4);
// Outputs: [ 98, 8, 67 ] 