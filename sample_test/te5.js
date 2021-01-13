// Write a JavaScript function to generate an array between two integers of 1 step length.
let emptarr = [];
function genearray(num1, num2) {
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            emptarr.push(i);
        }
    } else if (num2 < num1) {
        for (let i = num1; i >= num2; i--) {
            emptarr.push(i);
        }
    }
    else {
        emptarr.push(num2);
    }
}

genearray(5, 2);
console.log(emptarr);
// Outputs: [ 5, 4, 3, 2 ]


// Write a JavaScript function to generate an array of 
// specified length, filled with integer numbers, 
// increase by one from starting position

let arr2 = [];
function genra2(num3, num4) {
    for (let i = 0; i < num4; i++) {

        arr2.push(num3);
        num3 = num3 + 1

    }
}
genra2(-6, 4)
console.log(arr2);
// Outputs: [ -6, -5, -4, -3 ]



// Write a JavaScript function to create a specified number of 
// elements and pre-filled string value array.

function fillfunction(arrlen, defaultval) {
    let array1 = Array(arrlen);
    console.log(array1);
    // Outputs: [ <4 empty items> ]
    console.log(array1.fill(defaultval));
    // Outputs: [ 53, 53, 53, 53 ] 
}
fillfunction(4, 53);