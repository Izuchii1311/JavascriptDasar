var jumAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
    console.log('Angkot no.' + noAngkot + " berjalan dengan baik");
    noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= jumAngkot; noAngkot++) {
    console.log('Angkot no.' + noAngkot + " sedang tidak beroperasi");
}