
// Positive Numbers

// let nums = [-3,-2,10,4];
// function onlyPositive(numbers) {
//     return numbers >= 0;
// }
// console.log(nums.filter(onlyPositive));







// Even Numbers
// function onlyEven(numbers) {
//     return numbers % 2 === 0;
// }
// console.log(nums.filter(onlyEven))







// Square the Numbers

// function squareTheNumbers(array) {
//     return array.map(function (x) {
//         return Math.pow(x,2);
//     });
// }

// console.log(squareTheNumbers([4,6,8]))






// Cities 1

// const cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
// ];

// function printCoolCities(city) {
//     const allTheKeys = Object.keys(city);
//     allTheKeys.forEach(function (x) {
//         if (city[x].temperature <= 70) {
//             let newCity = city[x];
//             console.log(newCity)
//         }
//     })
// }






// Cities 2

// function printCityNames(town) {
//     const allTheKeys = Object.keys(town);
//     allTheKeys.forEach(function (x) {
//         let towns = town[x].name;
//         console.log(towns)
//     })
// }





// Good Job!

const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

// function goodJob(person) {
//     return "Good job " + person + "!";
// }
// console.log(people.map(goodJob));


people.forEach(function (what) {
    console.log("Good job " + what + "!")
});


// const nums = [1, 2, 3, 4, 5];

// nums.forEach(function (what, i, arr) {
//     console.log(i + ': ' + what + " is part of " + arr);
// });