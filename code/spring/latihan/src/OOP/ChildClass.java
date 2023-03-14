package OOP;
/*
* 1. extends: class - class atau interface lke interface
* 2. implement: interface - class
* */
public class ChildClass extends ParentClass {
 private String kalimat;


    public ChildClass(String tulisan, int number, String kalimat) {
      super(tulisan,number);
      this.kalimat=tulisan;
      super.setTeks(kalimat);
    }
    public  ChildClass(){

    }

    public String getKalimat() {
        return kalimat;
    }

    public void setKalimat(String kalimat) {
        this.kalimat = kalimat;
    }
    public void sapa(String isi){
        System.out.println(isi+"ini berasal dari kelas child");
    }
}
