var jumAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for(noAngkot = noAngkot; noAngkot <= jumAngkot; noAngkot++){
    if(noAngkot <= 6 && noAngkot !== 5){
        console.log('Angkot no.' + noAngkot + " berjalan dengan baik");
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('Angkot no.' + noAngkot + " sedang melakukan Lembur");
    } else {
        console.log('Angkot no.' + noAngkot + " sedang tidak beroperasi");
    }
}
