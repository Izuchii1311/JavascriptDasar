// Manipulate Array

// 1. Add in to Array
// var arr = [];
// arr[0] = "Izuchii";
// arr[1] = "Ryizu";
// arr[2] = "Izuna";



// 2. Menghapus isi array
// var arr = ["Izuchii", "Ryizu", "Izuna"];
// arr[1] = undefined;



// 3. Menampilkan isi Array
// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];

// for (var i = 0; i < arr.length; i++) {
//     console.log("Mahasiswa Ke-"+ (i + 1) + " " + arr[i]);
// }

// // Show console
// console.log(arr);






// Array Method

// 1. Join
// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];
// console.log(arr.join());


// 2. Push
// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];
// arr.push('Herta', 'Hutao');
// console.log(arr.join());


// 3. Pop
// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];
// arr.pop();
// console.log(arr.join());


// 4. Unshift
// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];
// arr.unshift('Jingliu');
// console.log(arr.join());


// 5. Shift
// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];
// arr.shift();
// console.log(arr.join());


// 6. Splice
// splice(index awal, mauDihapusBerapa, elementbaru1, elementabaru2)
// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];
// arr.splice(1, 0, "Hutao");
// console.log(arr.join());


// 7. Slice
// slice(index awal, akhir)
// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join());           // Ryizu, Izuna


// 8. Foreach
// var angka = [1,2,3,4,5,6,7,8];
// angka.forEach(function(e) {
//     console.log(e);
// });

// var arr = ["Izuchii", "Ryizu", "Izuna", "Luthfi"];
// arr.forEach(function(e, i) {
//     console.log("Mahasiswa ke-" + (i + 1) + " dengan nama " + e);
// });


// 9. Map
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e) {
//     return(e);
// });

// console.log(angka2);


// 10. Sort
// var angka = [1,4,5,3,7,9,0,8,2];
// angka.sort(function(a, b) {
//     return a - b;
// });
// console.log(angka);


// 11. Filter
// var angka = [1,4,5,3,7,9,0,8,2];
// var angka2 = angka.filter(function(e) {
//     // return e == 5;
//     return e > 5;
// });
// console.log(angka2);



// 12. Find
var angka = [1,4,5,3,7,9,0,8,2];
var angka2 = angka.find(function(e) {
    // return e == 5;
    return e > 5;
});
console.log(angka2);