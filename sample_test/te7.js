// Find the leap years in a given range of years.
let yeararay = [];
function genearray(num1, num2) {
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            yeararay.push(i);
        }
    }
}

genearray(2010, 2020);
console.log(yeararay);
// Outputs: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
let arrleap = [];
for (const elem_year of yeararay) {
    // console.log(elem_year);
    if ((elem_year % 4 === 0 && elem_year % 100 !== 0) || (elem_year % 400 === 0)) {
        arrleap.push(elem_year);
    }
}
console.log(arrleap);
// Outputs: [2012, 2016, 2020]