// The sort() method sorts an array alphabetically
// Hence it is not accurate when sorting numerical elements

// Correct for Alphabetical elements note letters starting 
// with an uppercase will be sorted first before those with 
// lowercase 
let highscl = ['Kakamega', 'Starehe', 'Lenana', 'Maseno', 'Kamusinga', 'Chavakali'];
highscl.sort();
console.log(highscl);
// Outputs: [ 'Chavakali', 'Kakamega', 'Kamusinga', 'Lenana', 'Maseno', 'Starehe' ]

// The reverse() method  sorts an array in descending order
highscl.reverse();
console.log(highscl);
// Outputs: [ 'Starehe', 'Maseno', 'Lenana', 'Kamusinga', 'Kakamega', 'Chavakali' ]

// For numeric sort we use the compare function 
let arrnum = [41, 28, 73, 69, 110, -2];
arrnum.sort(function (a, b) {
    return a - b;
})
console.log(arrnum);
// Outputs: [ -2, 28, 41, 69, 73, 110 ]

// Finding the largest number in an array 
let arrnu2 = [41, 28, 73, 69, 110, -2];
let findlargnum = function (arrparam) {
    return Math.max.apply(null, arrparam);
}
console.log(findlargnum(arrnu2));
// Outputs: 110

// Finding the smallest number in an array 
let findsmalnum = function (arrparam) {
    return Math.min.apply(null, arrparam);
}
console.log(findsmalnum(arrnu2));
// Outputs: -2