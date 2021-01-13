// Write a JavaScript function to get a random item from an array.
let arritems = [19, 11, 13, 29, 31, 37, 41, 23, 17];

let randitfu = function (arrayparm) {
    let randindex = Math.floor(Math.random() * arrayparm.length);
    return arrayparm[randindex];
};

console.log(randitfu(arritems));
// Outputs: ** Any random number in the array 




// Write a JavaScript function to move an array element from one position to another.
let artswp = [2, 7, 11, 19, 13, 5, 3];
function functswap1(ind1, ind2, arrayparm) {
    let arin1 = arrayparm[ind1];
    let arin2 = arrayparm[ind2];
    arrayparm[ind1] = arin2;
    arrayparm[ind2] = arin1;

    return arrayparm;

}


// Original arrangement: [2, 7, 11, 19, 13, 5, 3];
let swappedarr = functswap1(0, 3, artswp);
console.log(swappedarr);
// Outputs: [19, 7, 11, 2, 13, 5, 3]
console.log(artswp);
// The orginal array is changed because array are usually referenced
// Outputs: [19, 7, 11, 2, 13, 5, 3] 


// Write a JavaScript program to shuffle an array.
let arr1 = [167, 821, 43, 593, 31];
function swapval(arrayparm) {
    for (let y = 0; y < arrayparm.length + 2; y++) {

        let randindex1 = Math.floor(Math.random() * arrayparm.length);
        let randindex2 = Math.floor(Math.random() * arrayparm.length);
        let valatind1 = arrayparm[randindex1];
        let valatind2 = arrayparm[randindex2];
        arrayparm[randindex1] = valatind2;
        arrayparm[randindex2] = valatind1;



    }
    return arrayparm;


}


let arrtoswap = arr1.slice(0);
let swamppedarr = swapval(arrtoswap);

console.log(arr1);
// original array 
// Outputs: [ 167, 821, 43, 593, 31 ]
console.log(swamppedarr);
// Outputs: ** Any random order