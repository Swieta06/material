import BangunDatar.Persegi;
import BangunDatar.Segitiga;

public class App {
    public static void main(String[] args) {
        System.out.println("belajar java");

        Persegi persegi=new Persegi();
        persegi.sisiPersegi=10;
        persegi.cetakSisi();
        System.out.println( persegi.getSisi());
        persegi.cetakKeliling();
        System.out.println("Luas Persegi : "+persegi.getLuasPersegi());

        Segitiga segitiga=new Segitiga();
        segitiga.setAlas(10);
        segitiga.setTinggi(8);
        segitiga.setSisiMiring(10);
        System.out.println("alas segitiga adalah : "+segitiga.getAlas());
        System.out.println("tinggi segitiga adalah : "+segitiga.getTinggi());
        System.out.println("keliling segitiga adalah : "+segitiga.getKeliling());
        System.out.println("sisi miring segitiga adalah : "+segitiga.getSisiMiring());
        System.out.println("luas segitiga adlah : "+segitiga.getLuas());
        segitiga.cetakSegitiga(4);
        //cetakBintang();
    }
   /* public static void cetakBintang(){
        for (int i=0;i<4;i++){
            for (int j=0;j<i;j++){
               if(i>=j){
                   System.out.print("*");

               }
            }
            System.out.println();
        }

    }**/
}
