
import java.util.Scanner;


public class Belajarinputoutput {

   
    public static void main(String[] args) {
       Scanner inputUser = new Scanner(System.in);
       
       System.out.print("inputkan nama anda: ");
       String nama = inputUser.nextLine();
       
       System.out.println("nama yang di input: "+ nama);
       
       System.out.print("berapakah nomor absen anda: ");
      int absen = inputUser.nextInt();
       System.out.println("nomor absen anda: "+ absen);
       
       System.out.print("berapakah uang saku mu: ");
      double uang= inputUser.nextDouble();
       System.out.println("uang sakuku adalah Rp"+ uang);
       
       Scanner masukan = new Scanner(System.in);
         System.out.print("Character apa yang kamu suka: ");
       String simbol = masukan.nextLine();
         System.out.println("Character yang kamu suka: "+ simbol);
         
       
    }
    
}
