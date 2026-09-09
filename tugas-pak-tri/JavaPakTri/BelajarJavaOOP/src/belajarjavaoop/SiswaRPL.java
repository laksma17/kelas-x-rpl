package com.mycompany.balajarjavaoop;

public class SiswaRPL {

    void DaftarMurid() {
        System.out.println("Antok");
        System.out.println("Laksma");
        System.out.println("Agus");
    }

    int penjumlahan() {
        int a = 42;
        int b = 44;
        int hasil = a + b;
        return hasil;
    }

    public static void main(String[] args) {
        SiswaRPL obj = new SiswaRPL();

        obj.DaftarMurid();

        int hasil = obj.penjumlahan();
        System.out.println("Hasil: " + hasil);
    }
}
