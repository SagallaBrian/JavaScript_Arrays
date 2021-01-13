/**
 * Adding elements to arrrays
 * Adding first element to an array (using unshift method) and 
 * adding last element to an array (using the push method) has been
 * covered. what about adding an element at a certain postion to an array? 
 * In this case the spice method is used. 
 * Note this is not the slice method in strings 
 * splice method Structutre 
 * array_name.splice(the_index, number_of_elements_to_be_deleted, item1_add, item2_add)
 */

let arraexam = ["Hp", "Lenovo", "Dell", "Acer"];
arraexam.splice(3, 0, "Samsung", "Asus")
console.log(arraexam);
// Outputs: [ 'Hp', 'Lenovo', 'Dell', 'Samsung', 'Asus', 'Acer' ] 

/**
 * You can also delete elements from an array using the splice 
 * method if you arrange the parameters correctly  
 * consider we can delete element at index 2
*/
arraexam.splice(2, 1)
console.log(arraexam);
// Outputs: [ 'Hp', 'Lenovo', 'Samsung', 'Asus', 'Acer' ]   

/**
 * Merging / Concatenating Arrays
 * The concat() method creates a new array by merging (concatenating) existing arrays
 * The concat() method can take any number of array arguments
*/
let arrconcat1 = ["Jkuat", "Ku"];
let arrconcat2 = ["UoN", "MKU"];
let arrconcat3 = ["Mmust", "Usiu"];
let resconcat1 = arrconcat1.concat(arrconcat2, arrconcat3);
console.log(resconcat1);
// Outputs: [ 'Jkuat', 'Ku', 'UoN', 'MKU', 'Mmust', 'Usiu' ]


// ECMAscript 6 - Spread operator 
let arrconcat4 = ["kakamega", "Starehe"];
let arrconcat5 = ["Lenana", "Maseno"];
let arrconcat6 = ["Kamusinga", "Chavakali"];

let resconcat2 = [...arrconcat4, ...arrconcat5, ...arrconcat6];
console.log(resconcat2);
// Outputs: [ 'kakamega', 'Starehe', 'Lenana', 'Maseno', 'Kamusinga', 'Chavakali' ]


/**
 * Array slice method
 * The slice() method can take two argument.
 * the start argument, and up to (but not including) the end argument.
*/

let arrslice = ['kakamega', 'Starehe', 'Lenana', 'Maseno', 'Kamusinga', 'Chavakali'];
let arrsl1 = arrslice.slice(2, 4)
console.log(arrsl1);
// Outputs: [ 'Lenana', 'Maseno' ]



console.log(arrslice.constructor);
// Outputs: [Function: Array] 

let indarray = ['Ball', 'Shoes', 'Pitch', 'Teams', 'Fans', 'Pitch',]

// Returns the index of the first occurance of the element in brackets
let indofelem = indarray.indexOf("Pitch");
console.log(indofelem);
// Outputs: 2

// Returns the index of the last occurance of the element in brackets
let lasindofel = indarray.lastIndexOf("Pitch");
console.log(lasindofel);
// Outputs: 5

// The includes() method determines whether an array contains a specified element.
// Returns true if the array contains the element, and false if not.

let inclchk = indarray.includes('Teams');
console.log(inclchk);
// Outputs: true


// The copyWithin() method copies array elements to another 
// position in the array, overwriting the existing values
const coparray = ['Samsung', 'Apple', 'Huawei', 'Nokia', 'Oppo', 'Tecno'];
coparray.copyWithin(2, 0, 1);
console.log(coparray);
// Outputs: [ 'Samsung', 'Apple', 'Samsung', 'Nokia', 'Oppo', 'Tecno' ]


// Converting array to string 
let arr2 = ['length', 'name', 'prototype', 'isArray', 'from', 'of'];
console.log(arr2);
// Outputs: [ 'length', 'name', 'prototype', 'isArray', 'from', 'of' ]

// Using toString method 
let arrstr1 = arr2.toString();
console.log(arrstr1);
// Outputs: length,name,prototype,isArray,from,of

// using join method 
let arrstr2 = arr2.join(" ");
console.log(arrstr2);
// Outputs: length name prototype isArray from of


// Converting String to arrays 
let user_string = "How are you doing today";
let userarray = user_string.split(" ");
console.log(userarray);
// Outputs: [ 'How', 'are', 'you', 'doing', 'today' ] 

let user_stringb = "Hoyou";
let myArr = Array.from(user_stringb);
console.log(myArr);
// Outputs: [ 'H', 'o', 'y', 'o', 'u' ]
