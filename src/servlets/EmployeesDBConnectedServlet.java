package servlets;

import services.database.EmployeesDBService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by apatters on 10/21/2017.
 */
@WebServlet(name = "EmployeesDBConnectedServlet")
public class EmployeesDBConnectedServlet extends HttpServlet {

    private static final String DATABASEURL = "jdbc:mysql://localhost:3306/employees";
    private static final String USERNANME = "pma";
    private static final String PASSWORD = "";
    public static Connection conn = null;
    public EmployeesDBService employeesDBService = new EmployeesDBService();

    public void init(){
        EmployeesDBService.init();
    }

    public void destroy(){
        EmployeesDBService.destroy();
    }
}
