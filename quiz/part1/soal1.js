//## Soal 1:
//```js
//Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
//Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
//yaitu nama dan peran. Variabel peran harus memiliki isi data, 
//bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
//bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
//Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
//Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
//peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

//algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

/*

Jawaban 

Cara mengetahui isi variabel beserta respon yang sesuai

langkah awal
Di ketahui ada 2 variabel awal yaitu nama dan peran,
di dalam variabel "nama" bisa ada isinya, bisa juga tidak ada.
di dalam variabel "peran" bisa ada tiga jenis peran yang berbeda,
3 jenis peran tersebut adalah ksatria, tabib, dan penyihir.
dan bisa juga isi variabel "peran" adalah kosong.

langkah eksekusi
Pertama kita harus membuat variabel "nama" dan "peran",
Jika variabel "nama" itu kosong,
maka akan muncul respon "nama wajib diisi"
Jika variabel "peran" itu kosong,
maka juga akan muncul respon "pilih peranmu untuk memulai game"

langkah akhir
kita harus membuat variabel baru yaitu "responPeran"
variabel ini dibuat untuk menanggapi respon dari isi "peran"
Jika isi dari variabel "responPeran" adalah ksatria,
maka responnya adalah "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
Jika isi dari variabel "responPeran" adalah tabib,
maka responnya adalah "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
Jika isi dari variabel "responPeran" adalah penyihir,
maka responnya adalah "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
Namun jika isi dari variabel "responPeran" adalah kosong,
maka responnya adalah "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"


*/


//let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya

let nama = "harry"; // bisa input value untuk variabel "nama"
let peran = "ksatria"; // bisa input value untuk variabel "peran"

// jika value dari "nama" itu kosong
if (nama < 1) {
    console.log("nama wajib di isi!")
} else {
    console.log("selamat datang di proxytia!") //tambahan improv sendiri
}

// jika value dari "peran" itu kosong
if (peran < 1) {
    console.log("pilih peranmu untuk memulai game")
} else {
    console.log("peran telah di pilih!") //tambahan improv sendiri
}

let responPeran; //buat variabel baru, untuk masing2 respon peran yang berbeda

//jika menggunakan if-else
if (peran == "ksatria") {
    responPeran = `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`;
} else if (peran == "tabib") {
    responPeran = `halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`;
} else if (peran == "penyihir") {
    responPeran = `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`;
} else {
    responPeran = "kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada";
}

//jika menggunakan switch
// switch(peran){
//     case peran = "ksatria":
//         responPeran = `halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`;
//         break;
//     case peran = "tabib":
//         responPeran = `halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`;
//         break;
//     case peran = "penyihir":
//         responPeran = `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`;
//         break;
//     default:
//         responPeran = "kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada";
//         break;
// }   

console.log(responPeran);