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
    public static Connection conn = null;

    private static Connection getConn() throws ClassNotFoundException, SQLException {
        Connection conn = null;
//        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DATABASEURL, USERNANME, PASSWORD);
//        } catch (ClassNotFoundException e) {
//            e.printStackTrace();
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }

        return conn;
    }

    public static void init() throws SQLException, ClassNotFoundException {
        if(conn==null) {
            conn = getConn();
        }
    }

    public static void destroy() throws SQLException {
        if(conn!=null){
            conn.close();
        }
    }

//
//    public EmployeesDB(){
//        try {
//            Class.forName("com.mysql.jdbc.Driver");
//            conn = DriverManager.getConnection(DATABASEURL, USERNANME, PASSWORD);
//        } catch (ClassNotFoundException e) {
//            e.printStackTrace();
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//    }
}
