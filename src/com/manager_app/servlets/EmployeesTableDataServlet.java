package com.manager_app.servlets;


import javax.json.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import com.manager_app.utils.JsonConvertible;

import org.apache.commons.lang3.exception.ExceptionUtils;

/**
 * service requests for the raw data contained in a table from the employees database
 */
@WebServlet(name = "EmployeesTableDataServlet")
public class EmployeesTableDataServlet extends EmployeesDBConnectedServlet {

    /**
     * get the raw data contained in a table from the employees database
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
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
