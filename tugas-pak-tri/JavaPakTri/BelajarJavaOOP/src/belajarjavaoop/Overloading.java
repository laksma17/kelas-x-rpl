package com.mycompany.belajarjavaoop;

public class Overloading {

    // class Contoh
    static class Contoh {

        // method 1
        void sapa() {
            System.out.println("Halo!");
        }

        // method 2 (overloading)
        void sapa(String nama) {
            System.out.println("Halo " + nama);
        }

        // method 3 (overloading)
        void sapa(String nama, int umur) {
            System.out.println("Halo " + nama + ", umur " + umur);
        }
    }

    public static void main(String[] args) {
        Contoh c = new Contoh();

        c.sapa();
        c.sapa("Laksma");
        c.sapa("Laksma", 16);
    }
}