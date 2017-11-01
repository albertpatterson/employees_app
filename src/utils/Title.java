package utils;

import java.sql.Date;

/**
 * Created by apatters on 10/30/2017.
 */
public class Title {

    int emp_no;
    String title;
    Date from_date;
    Date to_date;

    public Title(int emp_no, String title, Date from_date, Date to_date){
        this.emp_no = emp_no;
        this.title = title;
        this.from_date = from_date;
        this.to_date = to_date;
    }
}


