import OOP.*;

public class Main {
    public static void main(String[] args) {
        //System.out.println("Hello world!");
       //deklarasi();
        oopTest();
        BangunDatar bangunDatar=new Lingkaran(7);
        System.out.println(bangunDatar.printShape());
        System.out.println("Luas Lingkaran : "+bangunDatar.calculateLuas());
        System.out.println("Keliling Lingkaran :"+bangunDatar.calculateKleililing());
        System.out.println(DateImplement.contoh="test");
    }
    public static void oopTest(){
        //child class
        ChildClass childClass=new ChildClass();
        childClass.setTeks("world");
        childClass.setAngka(20);
        childClass.setKalimat("ini kalimat");
        //child Class
        ChildClass childClass1=new ChildClass("super",200,"ok");
        System.out.println(childClass1.getAngka());

        //parent class
        ParentClass parentClass=new ParentClass();
        parentClass.setTeks("Hallo");
        parentClass.setAngka(10);
        System.out.println(parentClass.getTeks()+" "+childClass.getTeks()+" / "+parentClass.getAngka()+" "+childClass.getAngka());
        System.out.println(parentClass.getTeks("hallo"));

        //parent class with contstruc
        parentClass=new ParentClass("world",200);
        System.out.println(parentClass.getTeks()+" "+childClass.getTeks()+" / "+parentClass.getAngka()+" "+childClass.getAngka());
        //override
        parentClass.sapa("hai ");
        childClass.sapa("hai ");
    }
    public static void deklarasi(){
        boolean isActive=true;
        int total=10;
        String titel="Buku ABC";
        System.out.println("Judul buku"+titel);
        System.out.println("Total buku"+total);
        System.out.println("Status buku"+isActive);

    }
}

