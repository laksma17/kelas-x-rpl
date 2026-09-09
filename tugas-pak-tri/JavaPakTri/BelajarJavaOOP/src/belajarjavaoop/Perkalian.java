package com.mycompany.belajarjavaoop;



public class Perkalian {
    
        // method 1
    int perkalian(int a, int b) {
        return a * b;
    }
        // method 2
    int perkalian(int a, int b, int c) {
        return a * b * c;
    }
        // method 3
    double perkalian(double a, double b) {
        return a * b;
    }

    public static void main(String[] args) {
        Perkalian obj = new Perkalian();

        System.out.println(obj.perkalian(4, 5));
        System.out.println(obj.perkalian(2, 3, 4));
        System.out.println(obj.perkalian(2.5, 4.9));
    }
    
}
