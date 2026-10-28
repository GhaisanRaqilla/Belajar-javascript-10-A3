//konversi tipe data

let angka = 100;
let angkaString = String(angka);

console.log(angkaString + angkaString);
console.log(typeof angkaString);

let tahun = '2026';
let konversiTahun = Number(tahun);

console.log(typeof konversiTahun + 4);

// nilai falsy

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

// nilai truthy

console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// operator logika

let a = 10;
let b = 5;

// pertambahan
console.log("Penjumlahan: " + (a + b)); // 15
// pengurangan
console.log("Pengurangan: " + (a - b)); // 5
// perkalian
console.log("Perkalian: " + (a * b)); // 50
// pembagian
console.log("Pembagian: " + (a / b)); // 2
// modulus
console.log("Modulus: " + (a % b)); // 0
// pangkat
console.log("Pangkat: " + (a ** b)); // 100000


// operator penugasan

let x = 10;
console.log("Nilai awal x: " + x); // 10

x += 10; // x = x + 10
console.log("Nilai x setelah penugasan: " + x); // 20

x -= 5; // x = x - 5
console.log("Nilai x setelah penugasan: " + x); // 15

x *= 2; // x = x * 2
console.log("Nilai x setelah penugasan: " + x); // 30

x /= 3; // x = x / 3
console.log("Nilai x setelah penugasan: " + x); // 10

x %= 4; // x = x % 4
console.log("Nilai x setelah penugasan: " + x); // 2

// operator perbandingan

let c = 10;
let d = 5;
let e = '10';

// lebih besar dari
console.log("Apakah c lebih besar dari d? " + (c > d));
// lebih kecil dari
console.log("Apakah c lebih kecil dari d? " + (c < d));
// lebih besar dari atau sama dengan
console.log("Apakah c lebih besar dari atau sama dengan d? " + (c >= d));

// == operator perbandingan kesamaan     
console.log("sama dengan == " + (c == e)); // true, karena nilai sama meskipun tipe berbeda
// === operator perbandingan identitas
console.log("sama dengan ===  " + (c === e)); // false, karena tipe berbeda   


let op = 1 != 1;
console.log(op); // true
