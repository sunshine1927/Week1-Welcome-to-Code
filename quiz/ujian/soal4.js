//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// function xo(str) {
    // you can only write your code here!
// }
  
// TEST CASES
// console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true

// jawaban

function xo(str) {
    // Initialize counters for x and o
    let countX = 0;
    let countO = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Increment the appropriate counter based on the character
        if (char === 'x') {
            countX++;
        } else if (char === 'o') {
            countO++;
        }
    }

    // Return true if counts are equal, false otherwise
    return countX === countO;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

// will come back to this later
