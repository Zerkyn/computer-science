const perf = require('execution-time')();


function doublerAppend(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 


// Try it with first function
perf.start();                     // Starts timer
// doublerAppend(tinyArray)
// doublerAppend(smallArray)
// doublerAppend(mediumArray)
doublerAppend(largeArray)
// doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
// doublerInsert(tinyArray)
// doublerInsert(smallArray)
// doublerInsert(mediumArray)
doublerInsert(largeArray)
// doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

// console.log('Results for tinyArray')
// console.log('insert', resultsInsert.preciseWords)
// console.log('append', resultsAppend.preciseWords)

// console.log('Results for smallArray')
// console.log('insert', resultsInsert.preciseWords)
// console.log('append', resultsAppend.preciseWords)

// console.log('Results for mediumArray')
// console.log('insert', resultsInsert.preciseWords)
// console.log('append', resultsAppend.preciseWords)

console.log('Results for largeArray')
console.log('insert', resultsInsert.preciseWords)
console.log('append', resultsAppend.preciseWords)

// console.log('Results for the extraLargeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);


const addToZero = (arr) => {
    let result = false
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i] + arr[k] === 0) {
                result = true
            }
        }
    }
    return result
}

// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))