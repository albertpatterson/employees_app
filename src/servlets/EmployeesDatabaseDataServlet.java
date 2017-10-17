package servlets;

import services.database.EmployeesDBService;

import javax.json.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;



/**
 * Created by apatters on 10/15/2017.
 */
@WebServlet(name = "EmployeesDatabaseDataServlet")
public class EmployeesDatabaseDataServlet extends HttpServlet {

    private EmployeesDBService employeesDBService = new EmployeesDBService();

//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//
//    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ArrayList<String> tableNames = employeesDBService.getTableNames();

        PrintWriter out = response.getWriter();
        JsonWriter jsonWriter = Json.createWriter(out);

        JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
        for(String tableName : tableNames){
            jsonArrayBuilder.add(tableName);
        }

        JsonArray jsonArray = jsonArrayBuilder.build();

        jsonWriter.writeArray(jsonArray);
//        for(String name : tableNames){
//            out.println(name);
//        }
//
//        out.flush();
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
