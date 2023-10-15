var loop = true;

while(loop) {
    // Menangkap pilihan player
    var p = prompt('Pilih :\n 1.Gajah \n 2.Semut \n 3.Orang');

    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'Gajah';
    } else if (comp > 0.34 && comp < 0.66) {
        comp = 'Semut';
    } else {
        comp = "Orang";
    }

    // Menentukan rules
    var hasil = '';

    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'Gajah') {
        hasil = (comp == 'Orang') ? 'MENANG' : "KALAH";
    } else if (p == 'Orang') {
        hasil = (comp == 'Semut') ? 'MENANG' : "KALAH";
    } else if (comp == 'Semut') {
        hasil = (comp == 'Gajah') ? 'MENANG' : "KALAH";
    } else {
        hasil = "Memasukkan pilihan yang salah";
    }

    // Tampilkan hasilnya
    alert('Kamu memilih : ' + p + "\nKomputer memilih : " + comp + "\nHasilnya : Kamu " + hasil);

    loop = confirm("Ulangi lagi ? ");
}

alert("Terimakasih sudah bermain");