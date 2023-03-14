package OOP;

public class ParentClass {
    private String teks;
    private int angka;

    public ParentClass() {

    }

    public ParentClass(String teks, int angka) {
        this.teks = teks;
        this.angka = angka;
    }


    public String getTeks() {
        return teks;
    }
    //overload
    public String getTeks(String teks) {
        return teks+" ini teks dengan parameter ";
    }
    public void setTeks(String teks) {
        this.teks = teks;
    }
public void sapa(String isi){
    System.out.println(isi+"ini berasal dari kelas parent");
}
    public int getAngka() {
        return angka;
    }

    public void setAngka(int angka) {
        this.angka = angka;
    }
}
