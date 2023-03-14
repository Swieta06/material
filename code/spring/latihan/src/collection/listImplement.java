package collection;

import java.util.ArrayList;
import java.util.List;

public class listImplement {
    public static void main(String[] args) {
        List<String>todo=new ArrayList<>();
        todo.add("Belajar");
        todo.add("ngoding");
        todo.add("makan");
        todo.add("makan");
        //get data
        System.out.println(todo.get(0));
        //update
       // System.out.println(todo.set(3,"minum"));
        //remove
        todo.remove(0);
        System.out.println(todo.equals("ngoding"));
        System.out.println(todo);
    }
}
