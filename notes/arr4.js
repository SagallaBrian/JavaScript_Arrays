const arrnum = [89, 7, 65, 785];


let totval = 0;
for (let i = 0; i < arrnum.length; i++) {
    totval += arrnum[i];
}
console.log(totval);
// Outputs: 946


const redu1 = arrnum.reduce(function (total, value, index, array) {
    return total + value
});
console.log(redu1);
// Outputs: 946


function add1(total, value, index, array) {
    return total + value
};
const redu2 = arrnum.reduce(add1);
console.log(redu2)
// Outputs: 946


/* this is our initial value i.e. the starting point*/
const initialValue = 2;

function add2(total, value, index, array) {
    return total + value
};
const redu3 = arrnum.reduce(add2, initialValue);
console.log(redu3);
// Outputs: 948

// Consider you have a gross salary of ksh 75,000
// and the expenses can be expressed as elements in an 
// array e.g. [15,000, 7000, 10,000, 15,000]. 
// The remainder can be calculated using reduce method

const initsal = 75000;
const expnes = [15000, 7000, 10000, 15000];

function sub1(total, value, index, array) {
    return total - value
};
const redu4 = expnes.reduce(sub1, initsal);
console.log("Remainder: " + redu4);
// Outputs: Remainder: 28000

// The difference between reduce and reduceRight 

// consider the arrays of numbers shown below 
let arrnmumbers = [45, 4, 9, 16, 25];

function difredu(total, value, index, array) {
    return total - value
};
// Reduce function 
// Since the initial value is not provided the first
// element of the array is taken as the initial value
const redu5 = arrnmumbers.reduce(difredu);
console.log(redu5);
// Outputs: -9

// ReduceRight function
// Since the initial value is not provided the last
// element of the array is taken as the initial value
// Evaluates from right to left 
const redu6 = arrnmumbers.reduceRight(difredu);
console.log(redu6);
// Outputs: -49