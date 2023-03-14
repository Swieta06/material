package BangunDatar;

import java.util.Scanner;

public class Persegi {
    public int sisiPersegi;
    //cretate methode
    /*
    void:methode yang tidak mengembalikan data
    return:methode yang mengembalikan data
     */

    public void cetakSisi(){
        System.out.println(sisiPersegi);
    }
    public int getSisi(){
        return sisiPersegi;
    }
    public void cetakKeliling(){

        System.out.println("cetak persegi : "+sisiPersegi*4);
    }
    public int getLuasPersegi(){
        return sisiPersegi*sisiPersegi;
    }
    public static void main(String[] args) {


     /**  System.out.println("==========="+namaBangun+"==========");
        System.out.println("Kelising : "+keliling);
        System.out.println("luas : "+luas);
        System.out.println("sisi : "+sisi);**/



inputan();
    }

    public static void inputan(){
        Scanner input=new Scanner(System.in);
        int sisi,keliling,luas;
        String namaBangun="persegi";
        System.out.print("input sisi : ");
        sisi=input.nextInt();
        keliling=4*sisi;
        luas=sisi*sisi;

        System.out.println("==========="+namaBangun+"==========");
        System.out.println("Keliling : "+keliling);
        System.out.println("luas : "+luas);
        System.out.println("sisi : "+sisi);
    }

SecndPersegi second=new SecndPersegi();

}
class SecndPersegi{

}