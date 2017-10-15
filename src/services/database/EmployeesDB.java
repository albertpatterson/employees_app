package services.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by apatters on 10/15/2017.
 */
public class EmployeesDB {

    private static final String DATABASEURL = "jdbc:mysql://localhost:3306/employees";
    private static final String USERNANME = "pma";
    private static final String PASSWORD = "";
    public Connection conn = null;

    public EmployeesDB(){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DATABASEURL, USERNANME, PASSWORD);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
