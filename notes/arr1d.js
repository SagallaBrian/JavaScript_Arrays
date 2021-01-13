let highscl = ['Kakamega', 'Starehe', 'Lenana', 'Maseno', 'Kamusinga', 'Chavakali'];

// looping over an array 

// Using for loop
for (let y = 0; y < highscl.length; y++) {
    console.log(highscl[y]);
}

// Using for of loop 
for (const iterator of highscl) {
    console.log(iterator);
}

// Using forEach Method 
highscl.forEach(function (items, index, highscl) {
    console.log(items + " " + index);
});



highscl.forEach(usedinFoe)
function usedinFoe(items, index, highscl) {
    console.log(items + " " + index)
}


/**
 * The above loops output
    Kakamega 0
    Starehe 1
    Lenana 2
    Maseno 3
    Kamusinga 4
    Chavakali 5
 */





// Special use of for of 
(function () {
    for (const argument of arguments) {
        console.log(argument);
    }
})(1, 2, 3);

// 1
// 2
// 3

// Note: for...in loop should not be used to iterate over an Array where the index order is important.