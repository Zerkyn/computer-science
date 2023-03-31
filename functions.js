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

const hasUniqueChars = (str) => {
    let result = true
    for (let i = 0; i < str.length; i++) {
        for (let k = i + 1; k < str.length; k++) {
            if (str[i] === str[k]) {
                result = false
            }
        }
    }
    return result
}

// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))

const isPangram = (str) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

const findLongestWord = (arr) => {
    let longestWord = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord) {
            longestWord = arr[i].length
        }
    }
    return longestWord
}

console.log(findLongestWord(["hi", "hello"]))