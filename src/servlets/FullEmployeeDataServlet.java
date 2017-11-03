package servlets;

import jdk.nashorn.internal.ir.debug.JSONWriter;
import jdk.nashorn.internal.runtime.regexp.joni.exception.InternalException;
import services.database.EmployeesDBService;
import services.database.StringifiedTableData;

import javax.json.Json;
import javax.json.JsonStructure;
import javax.json.JsonWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by apatters on 10/22/2017.
 */
@WebServlet(name = "FilterableDataServlet")
public class FullEmployeeDataServlet extends EmployeesDBConnectedServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String birth_date = request.getParameter("birth_date");
        String first_name = request.getParameter("first_name");
        String last_name = request.getParameter("last_name");
        String gender = request.getParameter("gender");
        String hire_date = request.getParameter("hire_date");
        String title = request.getParameter("title");
        String dept_name = request.getParameter("dept_name");
        String salary = request.getParameter("salary");

        PrintWriter out = response.getWriter();
        try {
            employeesDBService.addEmployee(birth_date,first_name, last_name, gender, hire_date, title, dept_name, salary);
            response.setStatus(HttpServletResponse.SC_OK);
        } catch (Exception e) {
            e.printStackTrace();
            out.print(e.getStackTrace().toString());
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }

    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Map params = request.getParameterMap();
        String emp_noStr = request.getParameter("emp_no");
        int emp_no = Integer.parseInt(emp_noStr);
        String[] attrs = request.getParameter("attrs").split(",");
        String[] values = request.getParameter("values").split(",");

        if(attrs.length != values.length){
            PrintWriter out = response.getWriter();
            out.write("Attribute and value count mismatch.");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }else{
            HashMap<String, String> updates = new HashMap<>(attrs.length);
            for(int i=0; i<attrs.length; i++){
                updates.put(attrs[i], values[i]);
            }
            try {
                employeesDBService.updateEmployee(emp_no, updates);
                response.setStatus(HttpServletResponse.SC_OK);
            } catch (Exception e) {
                PrintWriter out = response.getWriter();
                out.write(e.getStackTrace().toString());
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

//        String name = request.getParameter("name");
////        name = name==null?"%":name;
//
//        String maxAge = request.getParameter("maxAge");
////        maxAge = maxAge==null?"100":maxAge;
//
//        String minAge = request.getParameter("minAge");
////        minAge = minAge==null?"18":minAge;
//
//        String gender = request.getParameter("gender");
////        gender = gender==null?"(M, F)":gender;
//
//        String department = request.getParameter("department");
////        department=department==null?"All"
//
//        String title = request.getParameter("title");
//
//        String active = request.getParameter("active");

        String genderF = request.getParameter("genderF");
        String genderM = request.getParameter("genderM");
        String limit = request.getParameter("limit");

        PrintWriter out = response.getWriter();
        try {
            StringifiedTableData stringifiedTableData = employeesDBService.getFullEmployeeData(limit, genderF, genderM);

            JsonWriter jsonWriter = Json.createWriter(out);
            jsonWriter.write((JsonStructure)stringifiedTableData.getJson());
            response.setStatus(HttpServletResponse.SC_OK);

        } catch (SQLException e) {
            e.printStackTrace();
            out.write(e.getStackTrace().toString());
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }


//        EmployeesDBService.getMatchingEmployeeData(name, minAge, maxAge, gender, department, title, active)
    }
}
