package collection;

import java.util.HashMap;
import java.util.Map;

public interface mapImplement {
    public static void main(String[] args) {
        Map<String,Integer>stocks=new HashMap<>();
        stocks.put("pulpen",100);
        stocks.put("penggaris",10);
        System.out.println(stocks);
        System.out.println(stocks.get("pulpen"));
        System.out.println(stocks.replace("penggaris",20));
        
        System.out.println(stocks);
    }
}
