// Write a program that capitalizes each elements of an array ;
let arr1  = [ 'sharpener', 'bOoKs', 'pencil', 'eraser', 'chalk' ]  ;

let arrcap =  arr1.map(function (values, indexx) {
    return  values[0].toUpperCase() + values.slice(1).toLowerCase(); 
});

console.log(arrcap);
// Outputs: [ 'Sharpener', 'Books', 'Pencil', 'Eraser', 'Chalk' ]

// javascript Swap the case of each character of a string, 
// upper case to lower and vice versa

let user_string = "How Are You Today";
let arrstring = user_string.split("");

let inverted = arrstring.map(function(values, indexx){
  return values === values.toUpperCase() ? values.toLowerCase(): values.toUpperCase()
});

let inv_usstrin = inverted.join("");
console.log(inv_usstrin);
// Outputs: hOW aRE yOU tODAY 