let fungsi = function (nama) {
    console.log("belajar function " + nama);
};

fungsi("joko");

function contoh(nama) {
    console.log("belajar function " + nama);
}

contoh("budi");

let tambah = function (a, b) {
    return a + b;
}
console.log(tambah(5, 4));

let plus = (a, b) => a + b;
console.log(plus(4, 5));

let hasil = (a) => a * 2;
console.log(hasil(4));

let lagi = () => console.log("coba lagi");

lagi();

let belajar = () => {
    console.log("baris satu");
    console.log("baris dua");
    console.log("baris tiga");
    console.log("baris selanjutnyaa");
}
belajar();

let nilai = 9;
let uji = (nilai < 7) ? () => predikat = "gagal" : () => predikat = "lulus";
console.log(uji());