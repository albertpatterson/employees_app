package servlets;


import javax.json.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import utils.JsonConvertible;

import org.apache.commons.lang3.exception.ExceptionUtils;

/**
 * Created by apatters on 10/15/2017.
 */
@WebServlet(name = "EmployeesTableDataServlet")
public class EmployeesTableDataServlet extends EmployeesDBConnectedServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String tableName = request.getParameter("tableName");
        PrintWriter out = response.getWriter();

        try {
            JsonConvertible data = employeesDBService.getTableData(tableName);

            JsonWriter jsonWriter = Json.createWriter(out);

            jsonWriter.write((JsonStructure)data.getJson());
            out.flush();
            response.setStatus(HttpServletResponse.SC_OK);

        } catch (SQLException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.write(ExceptionUtils.getStackTrace(e));
        }
    }
}
