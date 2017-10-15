package servlets;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import services.database.EmployeesDBService;
import services.database.StrigifiedTableData;
/**
 * Created by apatters on 10/15/2017.
 */
@WebServlet(name = "EmployeesTableDataServlet")
public class EmployeesTableDataServlet extends HttpServlet {

    private EmployeesDBService employeesDBService = new EmployeesDBService();

//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//
//    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        Map<String, String[]> params = request.getParameterMap();

        String tableName = request.getParameter("tableName");

        StrigifiedTableData data = employeesDBService.getTableData(tableName);

        PrintWriter out = response.getWriter();

        for(String colName : data.columnNames){
            out.print(colName);
            out.print("\t\t");
        }
        out.print("\n");

        for(int row = 0; row<data.rowData.size(); row++){
            for(String item : data.rowData.get(row)){
                out.print(item);
                out.print("\t\t");
            }
            out.print("\n");
        }

        out.flush();
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
