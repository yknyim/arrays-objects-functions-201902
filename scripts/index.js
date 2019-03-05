// add your solutions here

// Positive Numbers

let nums = [-3,-2,-1,0,1,2,3,4];
function onlyPositive(numbers) {
    return numbers >= 0
}
console.log(nums.filter(onlyPositive))


// Even Numbers
function onlyEven(numbers) {
    return numbers % 2 === 0
}

console.log(nums.filter(onlyEven))

// Square the Numbers
