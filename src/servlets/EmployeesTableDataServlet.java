package servlets;


import javax.json.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import jdk.nashorn.internal.ir.debug.JSONWriter;
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
        JsonWriter jsonWriter = Json.createWriter(out);

        JsonArrayBuilder tableColumnNamesJsonArrayBuilder = Json.createArrayBuilder();
        for(String columnName : data.columnNames){
            tableColumnNamesJsonArrayBuilder.add(columnName);
        }
        JsonArray tableColumnNamesJsonArray = tableColumnNamesJsonArrayBuilder.build();

        JsonArrayBuilder tableDataJsonArrayBuilder = Json.createArrayBuilder();
        for(String[] row : data.rowData){
            JsonArrayBuilder rowDataJsonArrayBuilder = Json.createArrayBuilder();
            for(String value : row){
                rowDataJsonArrayBuilder.add(value);
            }
            tableDataJsonArrayBuilder.add(rowDataJsonArrayBuilder.build());
        }

        JsonArray tableDataJsonArray = tableDataJsonArrayBuilder.build();

        JsonObjectBuilder tableDataJsonObjectBuilder = Json.createObjectBuilder();
        tableDataJsonObjectBuilder.add("columnNames", tableColumnNamesJsonArray);
        tableDataJsonObjectBuilder.add("data", tableDataJsonArray);

        jsonWriter.writeObject(tableDataJsonObjectBuilder.build());

//        for(String colName : data.columnNames){
//            out.print(colName);
//            out.print("\t\t");
//        }
//        out.print("\n");
//
//        for(int row = 0; row<data.rowData.size(); row++){
//            for(String item : data.rowData.get(row)){
//                out.print(item);
//                out.print("\t\t");
//            }
//            out.print("\n");
//        }

        out.flush();
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
