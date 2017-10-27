package servlets;

import jdk.nashorn.internal.ir.debug.JSONWriter;
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

/**
 * Created by apatters on 10/22/2017.
 */
@WebServlet(name = "FilterableDataServlet")
public class FullEmployeeDataServlet extends EmployeesDBConnectedServlet {
//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//
//    }

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
