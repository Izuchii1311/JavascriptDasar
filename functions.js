// Program Menghitung luas Volume Kubus

// Without Function
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);



// With Function
// function hitung(a, b) {
//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;
//     return total;
// }

// console.log(hitung(8, 3));




// Arguments
// function tambah() {
//     var hasil = 0 ;
//     for (var i = 0; i < arguments.length; i++) {
//         hasil = arguments[i];
//     }
//     return hasil;
// }

// var coba = tambah(1,2,3,4);
// console.log(coba);





// Refactoring
// function hitung(a, b) {
//     return a * a * a + b * b * b;
// }

// console.log(hitung(8, 3));




// Rekursif
// function cetakAngka(n) {
//     // BaseCase
//     if(n === 0) {
//         return;
//     }

//     console.log(n);
//     cetakAngka(n-1);
// }

// cetakAngka(10);


// Rekursif Faktorial
function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));