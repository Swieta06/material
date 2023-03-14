package collection;

import java.util.HashSet;
import java.util.Set;

public class setImplement {
    public static void main(String[] args) {
        Set<String>months=new HashSet<>();
        Set<Integer>number=new HashSet<>();
        months.add("januari");
        months.add("febuari");
        months.add("januari");
        months.add("maret");
        months.add("april");
        System.out.println(months);

        //hapus data
        months.remove("januari");
        months.add("juli");

        System.out.println(months);
        System.out.println(number);

    }
}
