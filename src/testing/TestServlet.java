package testing;

import com.mysql.jdbc.interceptors.ResultSetScannerInterceptor;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;

/**
 * Created by apatters on 10/14/2017.
 */
@WebServlet(name = "TestServlet")
public class TestServlet extends HttpServlet {

    private static final String DATABASEURL = "jdbc:mysql://localhost:3306/employees";
    private static final String USERNANME = "pma";
    private static final String PASSWORD = "";
    private Connection con;

    public void init(ServletConfig congif){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(DATABASEURL, USERNANME, PASSWORD);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        StringBuilder data = new StringBuilder("number\t\tname");
        String no, name;
        try(Statement stmt = con.createStatement()) {
            ResultSet rs = stmt.executeQuery("SELECT * FROM departments");
//            ResultSet rs = stmt.executeQuery("s");
//            rs.
            int x =0;
//            ArrayList<String> fields = rs.fie;
            while(rs.next()){
                no = rs.getString("dept_no");
                name = rs.getString("dept_name");
                data.append(String.format("\n%s\t\t%s", no, name));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }


        try {
            DatabaseMetaData metaData = con.getMetaData();
            ResultSet rs = metaData.getTables(null, null, null, new String[]{"TABLE"});



            ArrayList<String> tableNames = new ArrayList<>();
            while(rs.next()){
                tableNames.add(rs.getString("TABLE_NAME"));
            }

            System.out.print(tableNames);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        response.setStatus(200);
        response.setContentType("Text/Plain");
        PrintWriter out = response.getWriter();
        out.print(data);
    }
}
