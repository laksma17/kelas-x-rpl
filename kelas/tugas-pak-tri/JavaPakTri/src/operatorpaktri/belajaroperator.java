public class belajaroperator {

    public static void main(String[] args) {
        //operator matematika
        int a=100;
        int b=3;
        
        int perkalian= a*b;
        
            System.out.println("hasil perkalian 2 angka adalah: "+perkalian);
            
        int penjumlahan= a+b;
        
            System.out.println("hasil penjumlahan 2 angka adalah: "+penjumlahan);
        
        int pembagian= a/b;
        
            System.out.println("hasil pembagian 2 angka adalah: "+pembagian);
            
        int pengurangan= a-b;
        
            System.out.println("hasil perkalian 2 angka adalah: "+pengurangan);
            
        int modulus=a%b;
            System.out.println("hasil modulus: "+modulus);
            
            
        //operator penugasan
        //+memberi nilai
        //+=penjumlahan nilai
        //-=pengurangan niali
        
        int c= 20;
        
        c +=5;
        a -=2;
        b*=100;
        
        
        System.out.println("c");
        System.out.println("a");
        System.out.println("b");
        System.out.println("");
        System.out.println("");
        
        //operator pembanding
        
        int d=50;
        int e=10;
        
        boolean hasil1=  d==e;
        boolean hasil2=  d>=e;
        boolean hasil3=  d!=e;
        boolean hasil4=  d<=e;
        
        System.out.println(hasil1);
        System.out.println(hasil2);
        System.out.println(hasil3);
        System.out.println(hasil4);
        
        
        //operator logika
        
        boolean result = true && true;
        boolean result2 = d>e && d==e;
        boolean result3 = true || true;
        boolean result4 = d!=e || d<=e;
        
        System.out.println("logika 1 = "+result);
        System.out.println("logika 2 = "+result2);
        System.out.println("logika 3 = "+result3);
        System.out.println("logika 4 = "+result4);
                    
            
    }
    
}
