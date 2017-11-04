package services.database;

import utils.JsonConvertible;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonValue;
import java.sql.DatabaseMetaData;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by apatters on 11/4/2017.
 */
public class EmployeeData implements JsonConvertible{

    public int emp_no;
    public Date birth_date;
    public String first_name;
    public String last_name;
    public String gender;
    public Date hire_date;
    public String title;
    public Date to_date;
    public String dept_name;
    public int salary;

    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd");

    public EmployeeData(int emp_no, Date birth_date, String first_name, String last_name,
                        String gender, Date hire_date, String title, Date to_date, String dept_name,
                        int salary){
        this.emp_no = emp_no;
        this.birth_date=birth_date;
        this.first_name=first_name;
        this.last_name=last_name;
        this.gender=gender;
        this.hire_date=hire_date;
        this.title=title;
        this.to_date=to_date;
        this.dept_name=dept_name;
        this.salary = salary;
    }


    @Override
    public JsonObject getJson() {

        JsonObjectBuilder employeeBuilder = Json.createObjectBuilder();
        employeeBuilder.add("emp_no", emp_no);
        employeeBuilder.add("birth_date", sdf.format(birth_date));
        employeeBuilder.add("first_name", first_name);
        employeeBuilder.add("last_name", last_name);
        employeeBuilder.add("gender", gender);
        employeeBuilder.add("hire_date", sdf.format(hire_date));
        employeeBuilder.add("title", title);
        employeeBuilder.add("to_date", sdf.format(to_date));
        employeeBuilder.add("dept_name", dept_name);
        employeeBuilder.add("salary", salary);

        return employeeBuilder.build();
    }
}
