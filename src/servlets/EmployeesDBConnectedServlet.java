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
 * a servlet capable of interacting with the employees databse via the JDBC
 */
@WebServlet(name = "EmployeesDBConnectedServlet")
public class EmployeesDBConnectedServlet extends HttpServlet {

    /**
     * service capable of interacting with the employees database
     */
    public EmployeesDBService employeesDBService;

    public void init(){
        employeesDBService = new EmployeesDBService();
        EmployeesDBService.init();
    }

    public void destroy(){
        employeesDBService = null;
        EmployeesDBService.close();
    }
}
