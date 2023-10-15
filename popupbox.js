// Pop Up Box
// alert("Hello World");
// prompt("Masukkan Nama : ");
// confirm("Are you sure ? ");

var lagi = true;

while (lagi === true ) {
    var nama = prompt("Masukkan Nama : ");
    alert("Hallo, " + nama);

    lagi = confirm('Coba lagi ? ');
}

alert("Terimakasih");