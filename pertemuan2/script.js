// string

let myName = "jum'at";
let a = 5 ;
let b = 6;



console.log(myName);
console.log(a + b)

const teks = 'nanti sore gw maw main\nfutsal sama temen gw\tdi lapangan dekat rumah gw';

console.log(teks);

// number
let z = 10.4;
console.log(z);

// boolean
let isTrue = true;
console.log(isTrue);

// null & undefined
let varOne = null;
console.log(typeof (varOne));

let myUndefined;
console.log(typeof (myUndefined));

// array
const array = ['spaghetti', 'pizza', 'burger', 'sushi'];
console.log(array);
array.push('steak');
array.push('salad');
array.pop('pizza');
array.unshift('ramen');
console.log(array);
console.log(array[2]);
console.log(`nama saya ${myName} dan saya suka makan ${array[1]}`);

// tuliskan variabel dengan 5 data disimpan di array dan tampilkan data tersebut seolah olah
// cerita yang berkaitan dari data itu menggunakan document.write()

let myArray = ['buku', 'pensil', 'penghapus', 'kertas', 'ruler'];
console.log(`saya sedang belajar di rumah, saya menulis menggunakan ${myArray[1]} di atas ${myArray[3]} sambil menghapus kesalahan dengan ${myArray[2]}. Setelah itu saya mengukur panjang tulisan saya menggunakan ${myArray[4]} dan mencatatnya di ${myArray[0]}.`);

let buah = ['apel', 'jeruk', 'mangga', 'pisang', 'anggur'];
// menambahkan data baru ke array
buah.push('semangka');
console.log(buah);
// menghapus data dari array
buah.pop('jeruk');
console.log(buah);
// menambahkan data baru ke awal array
buah.unshift('kiwi');
console.log(buah);
// menghapus data dari awal array
buah.shift('mangga');
console.log(buah);
// menampilkan data array menjadi string dengan pemisah -
console.log(buah.join('-'));
// menampilkan data array menjadi string dengan pemisah dan
console.log(buah.join(' dan '));
// menampilkan data array menjadi string dengan pemisah spasi
console.log(buah.join(' '));
//mengambil sebagian elemen array tanpa mengubah array aslinya
console.log(buah.slice(1, 3));
console.log(buah);
// mengubah data array dengan splice
buah.splice(2, 1, 'melon');
console.log(buah);
// menambahkan data array dengan splice
buah.splice(1, 0, "jeruk");
console.log(buah);


//object = > variable = {key : value}
let myData = {
    name : "jum'at",
    address : "Jl. Raya No. 123",
    age : 20,
    food : ['spaghetti', 'pizza', 'burger', 'sushi'],
}
// menambahkan data baru ke object
myData.hobby = ['futsal'];
console.log(myData.food[1]);

// 1 disimpan di object dengan 7 data dan ceritakan data tersebut menggunakan document.write()

let tentang = {
    nama : 'Raqilla',
    umur : 15,
    hobi : 'Ngaji',
    alamat : 'Jl. Raya No. 123',
    sekolah : 'Abu Dzar',
    makananfavorit : 'Nasi goreng',
    citacita : 'Dokter',
}

//document.write(`Nama saya ${tentang.nama}, saya berumur ${tentang.umur} tahun. Hobi saya adalah ${tentang.hobi}. Saya tinggal di ${tentang.alamat} dan sekolah di ${tentang.sekolah}. Makanan favorit saya adalah ${tentang.makananfavorit} dan cita-cita saya adalah menjadi seorang ${tentang.citacita}.`);

//kode NaN (Not a Number)
console.log(5 * undefined);

prompt("Masukkan angka 1 - 10 ");
alert("angka anda adalah " + typeof(angka));





