// operator logika


// &&
let a = 5 === 5 && 6 > 3;
console.log('hasil opertaor logika && :' + a); // true

let b = 5 !== 10 && 6 < 10;
console.log('hasil opertaor logika && :' + b); // true

let c = 100 != '10' && 10 == '10';
console.log('hasil opertaor logika && :' + c); // true

// || or
let d = 10 <= 10 || 10 !== '10';
console.log('hasil opertaor logika || :' + d); // true

//! not

let f = 5 < 10;
console.log(!f) // false

// &&

// nilai true && true
let g = 5 <= 10 && 10 > 5;
console.log(g);

// nilai true && false
let h = 5 <= 10 && 10 < 5;
console.log(h);

// nilai false && true
let i = 5 > 10 && 10 > 5;
console.log(i);

// nilai false && false
let j = 5 > 10 && 10 < 5;
console.log(j);

// or

// soal 6: bioskop memberikan diskon tiket jika pengunjung datang pada gari "minggu" atau memiliki kartu member (isMember = true). jika doni datang pada hari minggu dan memiliki kartu member, maka doni akan mendapatkan diskon tiket. jika doni datang pada hari senin dan tidak memiliki kartu member, maka doni tidak akan mendapatkan diskon tiket. jika doni datang pada hari minggu dan tidak memiliki kartu member, maka doni akan mendapatkan diskon tiket. jika doni datang pada hari senin dan memiliki kartu member, maka doni akan mendapatkan diskon tiket. buatlah program untuk menentukan apakah doni mendapatkan diskon tiket atau tidak.

let hari = "minggu";
let isMember = true;

let mendapatkanDiskon = (hari === "minggu" || isMember === true);
console.log("apakah doni mendapatkan diskon: " + mendapatkanDiskon);

let matematika = 90;
let nilaiSains = 80;
let isSkors = false;

let layakMasukcerdascermat = (matematika >= 80 && nilaiSains >= 80);
console.log("apakah doni layak masuk cerdas cermat: " + layakMasukcerdascermat);