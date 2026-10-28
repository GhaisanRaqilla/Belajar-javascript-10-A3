// switch

/* let nilai = prompt("Masukkan nilai huruf (A, B, C, atau D):");

switch (nilai) {
    case "A":
        alert("Sangat Baik");
        break;
    case "B":
        alert("Baik");
        break;
    case "C":
        alert("Cukup");
        break;
    case "D":
        alert("Perlu Belajar Lagi");
        break;
    default:
        alert("Nilai tidak valid");
}
 */

// looping

//for

for (let a = 1; a <= 10; a++){
    
    console.log("Hello world" + a)
}

// mobil grab 1 - 10 dalam keadaan baik
for (let b = 1 ; b <= 10; b++) {
    if (b === 9) {
        console.log("Mobil Grab" + b + "Mobil Lagi di Bengkel")
    } else if (b === 2) {
        console.log("Mobil grab" + b + "Dicuri")
    } else {
        console.log("Mobil Grab" + b + "Mobil Dalam Keadaan baik")
    }
}

for (let e = 1; e <= 10; e++) {
    if (e % 2 === 0) {
        console.log(e)
    }
}

let bus = 1 ;

while ( bus <= 10){
    if (bus === 7){
        console.log(" bus" + bus + "dalam keadaan rusak")
    }else{
        console.log(" bus" + bus + "dalam keadaan baik")
    }
    bus++
}

let kapal = 11
do {
    console.log("kapal " + kapal + "dalam keadaan baik" )
    kapal++
}while (kapal <= 10)
