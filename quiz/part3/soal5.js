// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

// jawaban

let star = 5;
for (let a = star; a > 0; a --) {
    let asterisk = '';
    for (let b = star; b >= a; b--) {
        asterisk += '*';
    }
    console.log(asterisk);
}