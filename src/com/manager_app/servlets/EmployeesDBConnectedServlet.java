package com.manager_app.servlets;

import com.manager_app.services.database.EmployeesDBService;

import javax.servlet.http.HttpServlet;

/**
 * a servlet capable of interacting with the employees database via the JDBC
 */
public class EmployeesDBConnectedServlet extends HttpServlet {

    /**
     * service capable of interacting with the employees database
     */
    public EmployeesDBService employeesDBService;

    /**
     * initialize the database service
     */
    public void init(){
        employeesDBService = new EmployeesDBService();
        EmployeesDBService.init();
    }

    /**
     * close the database service
     */
    public void destroy(){
        employeesDBService = null;
        EmployeesDBService.close();
    }
}
