import java.util.Scanner;

public class belajarperunglangan {

    
    public static void main(String[] args) {
//        Scanner input = new Scanner (System.in);
//        System.out.print("masukkan nama: ");
//        String nama  = input.nextLine();
//        
//       for (int i = 1; i <= 5; i++) {
//        System.out.println(i + "." + nama);
//        }

          Scanner input = new Scanner(System.in);
         System.out.print("Masukkan tinggi segitiga: ");
        int tinggiB = input.nextInt();

        System.out.println("Segitiga Kiri Atas:");
        for (int a = tinggiB; a >= 1; a--) {
            for (int b = 1; b <= a; b++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        System.out.println("Segitiga Kiri Bawah:");
        for (int a = 1; a <= tinggiB; a++) {
            for (int b = 1; b <= a; b++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        System.out.println("Segitiga Kanan Atas:");
        for (int a = tinggiB; a >= 1; a--) {
            for (int b = 1; b <= tinggiB - a; b++) {
                System.out.print("  ");
            }
            for (int b = 1; b <= a; b++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        System.out.println("Segitiga Kanan Bawah:");
        for (int a = 1; a <= tinggiB; a++) {
            for (int b = 1; b <= tinggiB - a; b++) {
                System.out.print("  ");
            }
            for (int b = 1; b <= a; b++) {
                System.out.print("* ");
            }
            System.out.println();
        }

//        System.out.println("segitiga siku-siku");
//        int tinggiB = 5;
//        
//        for (int a = tinggiB; a >= 1; a--) {
//         for (int b = a; b >= 1; b--) {
//          System.out.print("* ");
//         }
//         System.out.println();
//        }

        
       
    }
    
}
