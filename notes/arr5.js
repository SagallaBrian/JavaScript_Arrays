// Array.every()
// The every() method check if all array values pass a test.

let arrnum = [23, 12, 78, 54, 16, 8];

function checkingfu(value, index, array) {
    return value > 29;
}

const ifpassvar1 = arrnum.every(checkingfu);
console.log(ifpassvar1);
// Outputs: false

// Array.some()
// The some() method check if some array values pass a test.

const ifpassvar2 = arrnum.some(checkingfu);
console.log(ifpassvar2);
// Outputs: true

// Array.find()
// The find() method returns the value of the first array element that passes a test function.

const findone = arrnum.find(checkingfu);
console.log(findone);
// Outputs: 78

// Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
const finiindex = arrnum.findIndex(checkingfu);
console.log(finiindex);
// Outputs: 2