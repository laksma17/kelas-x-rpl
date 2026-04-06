package com.mycompany.balajarjavaoop;
public class SepuluhRPL {

    public static void main(String[] args) {
        MuridRPL objek = new MuridRPL();
        System.out.println(objek.nama);
        System.out.println("Nama Anda Adalah: "+ objek.nama);
        objek.nama="Yasir";
        System.out.println(objek.nama);
        System.out.println(objek.absen=20);
        System.out.println("");
        System.out.println("");
        
        objek.DataSiswa();
        
        int tampilanluas = objek.menghitungluaspersegi();
        
        System.out.println("Luas Persegi : "+ tampilanluas);
    
        SiswaRPL object = new SiswaRPL();
        
        object.DaftarMurid();
        
        int tampilanpenjumlahan = object.penjumlahan();
        
            System.out.println("Hasil Penjumlahan : "+ tampilanpenjumlahan);
    }
    
}
