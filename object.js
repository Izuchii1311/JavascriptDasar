// Object

// Object Literal
// var mahasiswa = {
//     nama : "Luthfi Nur Ramadhan",
//     umur : 20,
//     ips  : [3.25, 3.20, 3.35, 2.9, 3.10],
//     alamat : {
//         jalan : "Jalan Madesa",
//         rt  : 005,
//         rw  : 011,
//         no  : 21,
//         kode_pos : 40233,
//     }
// };



// Object - Function Declaration
// function buatObjectMahasiswa(nama, umur, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.umur = umur;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs = buatObjectMahasiswa('Izuchii', 18, "izuchii1311@gmail.com", "Teknik Informatika");
// var mhs2 = buatObjectMahasiswa('Izuna chan no ecchi', 18, "izuchii1311@gmail.com", "Teknik Informatika");



// Object - Constructor Function
// function Mahasiswa(nama, umur, email, jurusan) {
//     this.nama = nama;
//     this.umur = umur;
//     this.email = email;
//     this.jurusan = jurusan;
// }

// var mhs = new Mahasiswa("Luthfi Nur Ramadhan", 21, "luthfiramadhan.lr55@gmail.com", "Teknik Informatika");







// This

// This in Object Literal
// var obj = {};
// obj.halo = function() {
    // console.log(this);
    // console.log('halo');
// }
// obj.halo();



// This in Function Declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }

// halo();



// This in Constructor Function
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj = new Halo();
var obj2 = new Halo();