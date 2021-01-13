// The MAP Method 
// The map() method creates a new array by performing a function on each array element.

let arr1 = [43, 6, 8, 65, 93, 15];
console.log(arr1);
// Outputs: [ 43, 6, 8, 65, 93, 15 ]  

let arr2 = arr1.map(function (nums) {
    return nums * 2
});
console.log(arr2);
// Outputs: [ 86, 12, 16, 130, 186, 30 ]


function myfunction1(params) {
    return params * 3
};
let arr3 = arr1.map(myfunction1);
console.log(arr3);
// Outputs: [ 129, 18, 24, 195, 279, 45 ]

// The map function 
let myjson = [
    {
        "seuniqueid2": "1591863187732",
        "sephonenum": "0705161125",
        "sedaobirth": "2020-06-03",
        "seproducts": "Electronics",
        "seshoploca": "Nairobi",
        "sesinfodat": "2020-06-20 14:12:48"
    },
    {
        "seuniqueid2": "5ee32a9909e25",
        "sephonenum": "0705161125",
        "sedaobirth": "2020-06-24",
        "seproducts": "Cosmetics",
        "seshoploca": "Nairobi",
        "sesinfodat": "2020-06-20 14:58:09"
    }
];

let arr4 = myjson.map(function (indeleminar, index, aaray) {
    return indeleminar.seproducts + ' ' + index;
});
console.log(arr4);
// Outputs: [ 'Electronics 0', 'Cosmetics 1' ] 



function myfunction2(annary, index, aaray) {
    return annary.sedaobirth
};
let arr5 = myjson.map(myfunction2);
console.log(arr5);
// Outputs: [ '2020-06-03', '2020-06-24' ] 

// new array without using map function 
let arr6 = [];

for (let ym = 0; ym < myjson.length; ym++) {
    arr6.push(myjson[ym].seuniqueid2);
}
console.log(arr6);
// Outputs: [ '1591863187732', '5ee32a9909e25' ]
