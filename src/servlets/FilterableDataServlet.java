package servlets;

import services.database.EmployeesDBService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by apatters on 10/22/2017.
 */
@WebServlet(name = "FilterableDataServlet")
public class FilterableDataServlet extends EmployeesDBConnectedServlet {
//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//
//    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String name = request.getParameter("name");
//        name = name==null?"%":name;

        String maxAge = request.getParameter("maxAge");
//        maxAge = maxAge==null?"100":maxAge;

        String minAge = request.getParameter("minAge");
//        minAge = minAge==null?"18":minAge;

        String gender = request.getParameter("gender");
//        gender = gender==null?"(M, F)":gender;

        String department = request.getParameter("department");
//        department=department==null?"All"

        String title = request.getParameter("title");

        String active = request.getParameter("active");

        String limit = request.getParameter("limit");

//        EmployeesDBService.getMatchingEmployeeData(name, minAge, maxAge, gender, department, title, active)
    }
}
