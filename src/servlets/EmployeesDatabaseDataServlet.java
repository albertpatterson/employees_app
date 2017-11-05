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
import java.sql.SQLException;
import java.util.ArrayList;


/**
 * service requests for database metadata
 */
@WebServlet(name = "EmployeesDatabaseDataServlet")
public class EmployeesDatabaseDataServlet extends EmployeesDBConnectedServlet {


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        PrintWriter out = response.getWriter();

        try {
            ArrayList<String> tableNames = employeesDBService.getTableNames();

            JsonWriter jsonWriter = Json.createWriter(out);

            JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
            for(String tableName : tableNames){
                jsonArrayBuilder.add(tableName);
            }

            JsonArray jsonArray = jsonArrayBuilder.build();

            jsonWriter.writeArray(jsonArray);
            response.setStatus(HttpServletResponse.SC_OK);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.write(e.getStackTrace().toString());
        }
    }
}
