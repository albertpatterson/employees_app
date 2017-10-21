package services.database;

import utils.JsonConvertible;

import java.sql.*;
import java.util.ArrayList;

/**
 * Created by apatters on 10/15/2017.
 */
public class EmployeesDBService {

    private static final String DATABASEURL = "jdbc:mysql://localhost:3306/employees";
    private static final String USERNANME = "pma";
    private static final String PASSWORD = "";
    public static Connection conn = null;

    public static void init(){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DATABASEURL, USERNANME, PASSWORD);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void destroy(){
        if(conn!=null){
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

//    private static final EmployeesDB db = new EmployeesDB();

//    private static final PreparedStatement GET_TABLE_DATA_PSTMT = makeGetTableDataStatement();
//
//    private static PreparedStatement makeGetTableDataStatement(){
//        PreparedStatement stmt = null;
//        try {
////            stmt = db.conn.prepareStatement("SELECT * From ? LIMIT ?");
//            stmt = db.conn.prepareStatement("SELECT * FROM ?;");
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return stmt;
//    }

    public ArrayList<String> getTableNames() throws SQLException {
        ArrayList<String> tableNames = new ArrayList<>();

        DatabaseMetaData metaData = conn.getMetaData();
        ResultSet rs = metaData.getTables(null, null, null, new String[]{"TABLE"});
        while(rs.next()){
            tableNames.add(rs.getString("TABLE_NAME"));
        }

        return tableNames;
    }

    public JsonConvertible getTableData(String tableName) throws SQLException {
        return getTableData(tableName, 50);
    }

    public StrigifiedTableData getTableData(String tableName, int limit) throws SQLException {

        String[] colNames = null;
        ArrayList<String[]> rowData = new ArrayList<>();

            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(String.format("SELECT * FROM %s LIMIT %d;", tableName, limit));

            ResultSetMetaData rsMetaData =  rs.getMetaData();

            int nCols = rsMetaData.getColumnCount();
            colNames = new String[nCols];
            for(int i=1; i<=nCols; i++){
                String name = rsMetaData.getColumnName(i);
                colNames[i-1]=name;
            }

            while(rs.next()){
                String[] stringData = new String[nCols];
                for(int i=0; i<nCols; i++){
                    String colName = colNames[i];
                    stringData[i] = rs.getString(colName);
                }
                rowData.add(stringData);
            }

        return new StrigifiedTableData(colNames, rowData);
    }
}

