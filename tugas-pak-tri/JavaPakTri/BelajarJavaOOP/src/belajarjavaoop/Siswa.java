public class Siswa {
    Siswa() {
        System.out.println("Ini adalah constructor 1");
        System.out.println("");
    }
    
    Siswa(String nama) {
        System.out.println("Ini adalah constructor 2");
        System.out.println("Nama saya: " + nama);
        System.out.println("");
    }  
    
    Siswa(String nama, int umur) {
        System.out.println("Ini adalah constructor 3");
        System.out.println("Nama saya: " + nama);
        System.out.println("Umur saya: " + umur);
        System.out.println("");
    }
    
    Siswa(String nama, int umur, String alamat) {
        System.out.println("Ini adalah constructor 4");
        System.out.println("Nama saya: " + nama);
        System.out.println("Umur saya: " + umur);
        System.out.println("Alamat saya: " + alamat);
        System.out.println("");
    }
}
