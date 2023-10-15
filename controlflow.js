// while
// Contoh 1

// var ulang = true;

// while (ulang == true) {
//     console.log("Hello World");
//     ulang = confirm("Test Lagi?");
// }


// Contoh 2

// var nilaiAwal = 1;

// while(nilaiAwal <= 10){
//     console.log("Hello World " + nilaiAwal +"x");
//     nilaiAwal++;
// }




// for
// Contoh 1

// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal ++) {
//     console.log("Hello world " + nilaiAwal + "x");
// }




// if
// Contoh 1

// var loop = true;

// while (loop) {
//     var angka = prompt('Masukkan angka');
//     if (angka % 2 == 0){
//         alert(angka + ' Angka tersebut adalah bilangan GENAP');
//     } else {
//         alert(angka + ' Angka tersebut adalah bilangan GANJIL');
//     }

//     loop = confirm('lagi ?');
// }





// else if
// Contoh 1

// var loop = true;

// while (loop) {
//     var angka = prompt('Masukkan angka');
//     if (angka % 2 == 0){
//         alert("'" + angka + "'" + ' Angka tersebut adalah bilangan GENAP');
//     } else if (angka % 2 == 1){
//         alert("'" + angka + "'" + ' Angka tersebut adalah bilangan GANJIL');
//     } else {
//         alert("'" + angka + "'" + ' Yang anda masukkan bukan ANGKA');
//     }

//     loop = confirm('lagi ?');
// }




// Switch
// Contoh 1

// var angka = prompt('Masukkan Angka');

// switch(angka) {
//     case '1':
//         alert('anda memilih no 1');
//         break;
//     case '2':
//         alert('anda memilih no 2');
//         break;
//     case '3':
//         alert('anda memilih no 3');
//         break;
//     default:
//         alert('angka yang anda masukkan salah');
//         break;
// }


// Contoh 2
var loop = true;

while(loop) {
    var item = prompt("1. Makanan Berat : Nasi Goreng, Mie Kuah, Ayam Geprek \n 2. Makanan Ringan : Snack, Chiki \n 3. Minuman : Teh Pucuk, Mizone, Sprite \n\n masukkan angkanya saja");

    switch(item) {
        case '1':
            while(loop) {
                var pilih = prompt("Pilih menu makanan berat \n 1. Nasi Goreng \n 2. Mie Kuah \n 3. Ayam Geprek \n\n masukkan angkanya saja");
                switch(pilih) {
                    case '1':
                        alert('Anda berhasil memesan Nasi Goreng Rp.15.000');
                        break;
                    case '2':
                        alert('Anda berhasil memesan Mie Kuah Rp.10.000');
                        break;
                    case '3':
                        alert('Anda berhasil memesan Ayam Geprek Rp.17.000');
                        break;
                    default:
                        alert('Menu yang anda pilih tidak ada');
                        break;
                }

                loop = confirm("Apakah ingin memilih lagi?");
            }
            break;
        case '2':
            while(loop) {
                var pilih = prompt("Pilih menu makanan ringan \n 1. Snack \n 2. Chiki \n\n masukkan angkanya saja");
                switch(pilih) {
                    case '1':
                        alert('Anda berhasil memesan Snack Rp.5.000');
                        break;
                    case '2':
                        alert('Anda berhasil memesan Chiki Rp.10.000');
                        break;
                    default:
                        alert('Menu yang anda pilih tidak ada');
                        break;
                }

                loop = confirm("Apakah ingin memilih lagi?");
            }
            break;
        case '3':
            while(loop) {
                var pilih = prompt("Pilih menu minuman \n 1. Teh Pucuk \n 2. Mizone \n 3. Sprite \n\n masukkan angkanya saja");
                switch(pilih) {
                    case '1':
                        alert('Anda berhasil memesan Teh Pucuk Rp.5.000');
                        break;
                    case '2':
                        alert('Anda berhasil memesan Mizone Rp.10.000');
                        break;
                    case '3':
                        alert('Anda berhasil memesan Sprite Rp.7.000');
                        break;
                    default:
                        alert('Menu yang anda pilih tidak ada');
                        break;
                }

                loop = confirm("Apakah ingin memilih lagi?");
            }
            break;
        default:
            alert('angka yang anda masukkan salah');
            break;
    }

    loop = confirm("Apakah anda ingin memesan menu lain?");
}