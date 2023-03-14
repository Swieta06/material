package BangunDatar;

public class Segitiga {
    /*Modifier
    * 1. public: semua atribut, class methode
    * 2. default: hanya bisa dipanggil dalam class dan package yang sama
    * 3. private : hanya bisa diakses di class yang sama
    * 4. protected: bisa dipanggil dalam class, package, dan subclass yg sama*/
    private int alas,tinggi, sisiMiring;

    public int getSisiMiring() {
        return sisiMiring;
    }

    public void setSisiMiring(int sisiMiring) {
        this.sisiMiring = sisiMiring;
    }

    public int getAlas() {
        return alas;
    }

    public void setAlas(int alas) {
        this.alas = alas;
    }

    public int getTinggi() {
        return tinggi;
    }

    public void setTinggi(int tinggi) {
        this.tinggi = tinggi;
    }
    public int getKeliling(){
        return sisiMiring+alas+tinggi;


    }
    public float getLuas(){
        return (alas*tinggi)/2;

    }
    public void cetakSegitiga(int sisi){
        for (int i=0;i<sisi;i++){
            for (int j=0;j<i;j++){
                if(i>=j){
                    System.out.print("*");

                }
            }
            System.out.println();
        }

    }
}
