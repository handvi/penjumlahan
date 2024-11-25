function penjumlahanGenap(angkaPertama, angkaKedua) {
    let hasil = 0;
    for (let i = angkaPertama; i < angkaKedua; i++) {
        if(i % 2 === 0) {
            hasil += i;
        }
    }
    return hasil;
}

let angka = penjumlahanGenap(1,10);
console.log(angka);
