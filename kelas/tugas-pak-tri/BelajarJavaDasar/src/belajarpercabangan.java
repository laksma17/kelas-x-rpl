import java.util.Scanner;


public class belajarpercabangan {
 
    
    public static void main(String[] args) {
        Scanner InputUser= new Scanner(System.in);
        
        System.out.print("Masukan nilai anda : ");
        int nilai= InputUser.nextInt();
        System.out.print("Nilai anda adalah : " +nilai);
                
        if (nilai>100) {
            System.out.println("A");
      } else if (nilai >90) {
          System.out.println("B");
      } else if (nilai >70) {
          System.out.println("C");
      } else if (nilai >60) {
          System.out.println("D");
      } else if (nilai >50) {
          System.out.println("E");
      }
    }
}
    
    

