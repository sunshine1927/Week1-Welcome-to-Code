// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

// let name = "Agus";
// let age = 30;
// let address = "Jln. Malioboro, Yogjakarta";
// let hobby = "gaming";

// let fullSentence = processSentence(name,age,address,hobby);
// console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

// jawaban

function processSentence(name,age,address,hobby) {
    return `nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}

console.log(processSentence("harry",24,"jalanin aja dulu","coding"))