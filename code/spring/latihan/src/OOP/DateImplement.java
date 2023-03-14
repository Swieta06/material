package OOP;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class DateImplement {
    public static  String contoh;
    public static void main(String[] args) {
        LocalDate localDate=LocalDate.now();
        System.out.println(localDate);
        System.out.println("2 days ago : "+localDate.plusDays(2));
        System.out.println(localDate.atStartOfDay());
        LocalDateTime localDateTime= LocalDateTime.now();
        System.out.println(localDateTime);

    }
}
