const objek = {
    nama: "SMKN 2 BUDURAN",
    telp: 1235678,
    buah: ['apel', 'jeruk', 'nanas'],
    coba: function () {
        return "coba function dalam objek";
    },
    boleh: true,
    "tulis aja": 1234,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis aja"]);