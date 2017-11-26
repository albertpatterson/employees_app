package com.manager_app.utils;

import com.manager_app.utils.JsonConvertible;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Represents the data about an employee
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

    /**
     * Instantiates a new Employee data.
     *
     * @param emp_no     the employee's id number
     * @param birth_date the employee's birth date
     * @param first_name the employee's first name
     * @param last_name  the lemployee's ast name
     * @param gender     the employee's gender
     * @param hire_date  the employee's hire date
     * @param title      the employee's title
     * @param to_date    the employee's to date
     * @param dept_name  the employee's dept name
     * @param salary     the employee's salary
     */
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


    /**
     * create a json object representing the employee data
     * @return json object representing the employee data
     */
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
