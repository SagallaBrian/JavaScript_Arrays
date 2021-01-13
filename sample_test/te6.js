//  Write a JavaScript function to get nth largest element from an unsorted array
let arr1 = [59, 2, 17, 31, 53, 31, 59, 2, 59, 61]


function getnth(arrparam, nthnum) {
    arrparam.sort((a, b) => {
        return b - a
    });
    console.log(arrparam);
    // Outputs: [61, 59, 59, 59, 53, 31, 31, 17, 2, 2]
    let arrparam2 = arrparam.filter(function (item, indexx) {
        return arrparam.indexOf(item) === indexx;
    });
    console.log(arrparam2);
    // Outputs: [61, 59, 53, 31, 17, 2]
    let nthnum2 = nthnum - 1;
    console.log(arrparam2[nthnum2]);
    // Outputs: 31

}

getnth(arr1, 4);

// Write a JavaScript script to empty an array keeping the original
let arr3 = [1, 3, 6, 3, -5];
console.log(arr3);
// Outputs: [ 1, 3, 6, 3, -5 ]  
arr3 = [];
console.log(arr3);
// Outputs: []

// let stringarr= "abcdefghijklmnopqrstuvwxyz";
// for (let y = 0; y < stringarr.length; y+=2) {
//     console.log(stringarr[y]);

// }