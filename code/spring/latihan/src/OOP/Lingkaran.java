package OOP;

public class Lingkaran implements BangunDatar{
    private int jariJari;

    public Lingkaran() {
    }
    public Lingkaran(int jariJari) {
        this.jariJari = jariJari;
    }
    public int getJariJari() {
        return jariJari;
    }

    public void setJariJari(int jariJari) {
        this.jariJari = jariJari;
    }

    @Override
    public String printShape() {
        String text="Lingkaran ";
        return text;
    }

    @Override
    public int calculateKleililing() {
        int diameter=jariJari*2;
        int hasil=diameter*(22/7);
        return hasil;
    }

    @Override
    public int calculateLuas() {
        int luas=(22/7)*(jariJari^2);
        return luas;
    }
}
