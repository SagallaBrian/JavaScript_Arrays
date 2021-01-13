// Consider the array of elements below and answer the questions that follows 

let arrunpro = ["c", "b", "c", "b", "a", "b", "c", "f", "g", "h", "h", "h", "h", "a"];
// let arrunpro = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(arrunpro);
// Outputs: ['c', 'b', 'c', 'b', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'h', 'a']
let objdup = {};


// Wirte a JavaScript program that removes duplicates in the array 
// e.g. if the array is [c, c, a] it returns [c,a]
let nodupliarr = arrunpro.filter((value, index) => {
    return index === arrunpro.indexOf(value);
});
console.log(nodupliarr);
// Outputs: [ 'c', 'b', 'a', 'f', 'g', 'h' ]   




// Write a program that shows how many times each element occurs 
let method2 = (elems, index) => {
    objdup[elems] = (objdup[elems] || 0) + 1;
};

arrunpro.forEach(method2);
console.log(objdup);
// Outputs: { c: 3, b: 3, a: 2, f: 1, g: 1, h: 4 }

// Write a JavaScript program that returns the first most frequent element 
let keymostfr = '';
let valmostfr = 0;
for (const objkeys in objdup) {
    if (Object.hasOwnProperty.call(objdup, objkeys)) { // dont worry about this it is for security
        if (objdup[objkeys] > valmostfr) {
            keymostfr = objkeys;
            valmostfr = objdup[objkeys];
        }
    }
}
console.log(`mf key: ${keymostfr} it appears ${valmostfr} times`);
// Outputs: mf key: h it appears 4 times



// 
// Write a JavaScript program that returns only elements that repeat 
// and how many times they repeat 
let duplonly = {};
for (const objkeys in objdup) {
    if (Object.hasOwnProperty.call(objdup, objkeys)) { // dont worry about this it is for security
        if (objdup[objkeys] > 1) {
            duplonly[objkeys] = objdup[objkeys]
        }
    }
}
console.log(duplonly);
// Outputs: { c: 3, b: 3, a: 2, h: 4 }


// 
// Write a JavaScript program that returns only elements that do not repeat 
let nonrpval = {};
for (const objkeys in objdup) {
    if (Object.hasOwnProperty.call(objdup, objkeys)) { // dont worry about this it is for security
        if (objdup[objkeys] == 1) {
            nonrpval[objkeys] = objdup[objkeys]
        }
    }
}
console.log(nonrpval);
// Outputs: { f: 1, g: 1 }

// Write a JavaScript program that returns the 
// duplicate values and the index in which they occur
let arrdupinwi0 = arrunpro.map(function (values, indexx) {
    if (arrunpro.indexOf(values) !== indexx) {
        return values + " at ind " + indexx;
    }
    else {
        return 0;
    }
})

let arrdupindx = arrdupinwi0.filter(function (values, indexx) {
    return values !== 0;
})

console.log(arrdupindx);
/*
Outputs: 
[
  'c at ind 2',
  'b at ind 3',
  'b at ind 5',
  'c at ind 6',
  'h at ind 10',
  'h at ind 11',
  'h at ind 12',
  'a at ind 13'
]
*/