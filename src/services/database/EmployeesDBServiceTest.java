package services.database;

import org.junit.After;
import org.junit.Before;

import static org.junit.Assert.*;

/**
 * Created by apatters on 10/23/2017.
 */
public class EmployeesDBServiceTest {


    @Before
    public void connect(){
        EmployeesDBService.init();
    }

    @After
    public void destroy(){
        EmployeesDBService.destroy();
    }

    @org.junit.Test
    public void getTableNames() throws Exception {

    }

    @org.junit.Test
    public void getTableData() throws Exception {

    }

    @org.junit.Test
    public void getTableData1() throws Exception {

    }

    @org.junit.Test
    public void getAllEmployeeData() throws Exception {

        EmployeesDBService employeesDBService = new EmployeesDBService();


        employeesDBService.getAllEmployeeData();
    }

}