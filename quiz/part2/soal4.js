// ## Soal 4. Breaking Sentence (yet Again) and Count Each Length
// ```js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


// let word4 = 'wow JavaScript is so cool';
// let exampleFirstWord4 = word4.substring(0, 3);

// let firstWordLength = exampleFirstWord4.length;

// console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
// ```

let word4 = 'wow JavaScript is so cool';

// kata pertama
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

// kata kedua
let exampleSecondWord4 = word4.substring(4, 14);
let secondWordLength = exampleSecondWord4.length;
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);

// kata ketiga
let exampleThirdWord4 = word4.substring(15, 17);
let thirdWordLength = exampleThirdWord4.length;
console.log('Third Word: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength);

// kata keempat
let exampleFourthWord4 = word4.substring(18, 20);
let fourthWordLength = exampleFourthWord4.length;
console.log('Fourth Word: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength);

// kata kelima
let exampleFifthWord4 = word4.substring(21, 25);
let fifthWordLength = exampleFifthWord4.length;
console.log('Fifth Word: ' + exampleFifthWord4 + ', with length: ' + fifthWordLength);

// untuk tau panjang sebuah data, tinggal menggunakan command variabel.length