package com.manager_app.servlets;

import com.manager_app.utils.EmployeeData;
import com.manager_app.utils.StringifiedTableData;

import javax.json.Json;
import javax.json.JsonStructure;
import javax.json.JsonWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import org.apache.commons.lang3.exception.ExceptionUtils;

/**
 * Servlet providing access to detailed employee data
 */
public class FullEmployeeDataServlet extends EmployeesDBConnectedServlet {

    /**
     * create a new employee
     * @param request
     * @param response
     * @throws IOException
     */
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
            EmployeeData employeeData = employeesDBService.addEmployee(birth_date,first_name, last_name, gender, hire_date, title, dept_name, salary);
            response.setStatus(HttpServletResponse.SC_OK);
            JsonWriter jsonWriter = Json.createWriter(out);
            jsonWriter.writeObject(employeeData.getJson());
        } catch (Exception e) {
            e.printStackTrace();
            out.print(ExceptionUtils.getStackTrace(e));
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * update an existing employee
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Map params = request.getParameterMap();
        String emp_noStr = request.getParameter("emp_no");
        int emp_no = Integer.parseInt(emp_noStr);
        String[] attrs = request.getParameter("attrs").split(",");
        String[] values = request.getParameter("values").split(",");

        PrintWriter out = response.getWriter();

        if(attrs.length != values.length){
            out.write("Attribute and value count mismatch.");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }else{
            HashMap<String, String> updates = new HashMap<>(attrs.length);
            for(int i=0; i<attrs.length; i++){
                updates.put(attrs[i], values[i]);
            }
            try {
                EmployeeData employeeData = employeesDBService.updateEmployee(emp_no, updates);
                response.setStatus(HttpServletResponse.SC_OK);
                JsonWriter jsonWriter = Json.createWriter(out);
                jsonWriter.writeObject(employeeData.getJson());
            } catch (Exception e) {
                out = response.getWriter();
                out.write(ExceptionUtils.getStackTrace(e));
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
        }
    }

    /**
     * get the detailed employee data
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

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
            out.write(ExceptionUtils.getStackTrace(e));
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
    }
}
