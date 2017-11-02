package services.database;

import utils.JsonConvertible;
import utils.Title;

import javax.lang.model.element.NestingKind;
import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by apatters on 10/15/2017.
 */
public class EmployeesDBService {

    private static final String DATABASEURL = "jdbc:mysql://localhost:3306/employees";
    private static final String USERNANME = "pma";
    private static final String PASSWORD = "";
    public static Connection conn = null;



    private static final String SELECT_DEPARTMENT_DATA  =   "SELECT * "
                                                        +   "FROM departments ";

    private static final String SELECT_LATEST_EMP_DATE =    "SELECT emp_no, from_date, max(to_date) AS to_date "
                                                        +   "FROM dept_emp "
                                                        +   "GROUP BY emp_no ";

    private static final String SELECT_LATEST_EMP_DATE2=    "SELECT latest.emp_no, latest.to_date "
                                                        +   "FROM (" + SELECT_LATEST_EMP_DATE + ") AS latest "
                                                        +   "WHERE latest.to_date <= CURDATE() "
                                                        +   "UNION "
                                                        +   "SELECT latest2.emp_no, CURDATE() AS to_date "
                                                        +   "FROM (" + SELECT_LATEST_EMP_DATE + ") AS latest2 "
                                                        +   "WHERE latest2.to_date > CURDATE() ";


    private static final String SELECT_LATEST_DEPARTMENT =  "SELECT dept_emp.emp_no, dept_emp.dept_no, latest_emp_date.to_date, departments.dept_name "
                                                        +   "FROM dept_emp "
                                                        +   "INNER JOIN (" + SELECT_LATEST_EMP_DATE + ") AS latest_emp_date "
                                                        +   "ON dept_emp.emp_no = latest_emp_date.emp_no AND dept_emp.to_date = latest_emp_date.to_date "
                                                        +   "INNER JOIN departments "
                                                        +   "ON departments.dept_no = dept_emp.dept_no";

    private static final String SELECT_LATEST_TITLE =   "SELECT TITLES.emp_no, latest_emp_date.from_date, latest_emp_date.to_date, titles.title "
                                                    +   "FROM titles "
                                                    +   "INNER JOIN (" + SELECT_LATEST_EMP_DATE + ") AS latest_emp_date "
                                                    +   "ON titles.emp_no = latest_emp_date.emp_no AND titles.to_date = latest_emp_date.to_date ";

    private static final String SELECT_LATEST_SALARY =  "SELECT salaries.emp_no, latest_emp_date.to_date, salaries.salary "
                                                    +   "FROM salaries "
                                                    +   "INNER JOIN (" + SELECT_LATEST_EMP_DATE + ") AS latest_emp_date "
                                                    +   "ON salaries.emp_no = latest_emp_date.emp_no AND salaries.to_date = latest_emp_date.to_date ";

    private static final String SELECT_FULL_EMPLOYEE_DATA = "SELECT employees.*, latest_title.title, latest_dept.to_date, latest_dept.dept_name, latest_salary.salary "
                                                        +   "FROM employees "
                                                        +   "INNER JOIN ("+SELECT_LATEST_DEPARTMENT+") AS latest_dept "
                                                        +   "ON employees.emp_no = latest_dept.emp_no "
                                                        +   "INNER JOIN ("+SELECT_LATEST_TITLE+") AS latest_title "
                                                        +   "ON employees.emp_no = latest_title.emp_no "
                                                        +   "INNER JOIN ("+SELECT_LATEST_SALARY+") AS latest_salary "
                                                        +   "ON employees.emp_no = latest_salary.emp_no ";


    private static final Date FUTURE_DATE_SQL = getFutureDate();
    private static final Date getFutureDate(){
        try {
            java.util.Date futureDate = new SimpleDateFormat("yyyy/MM/dd").parse("9999/01/01");
            return new Date(futureDate.getTime());
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

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

    public StringifiedTableData getTableData(String tableName) throws SQLException {
        return getTableData(tableName, 50);
    }

    public StringifiedTableData getTableData(String tableName, int limit) throws SQLException {

        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(String.format("SELECT * FROM %s LIMIT %d;", tableName, limit));

        String[] colNames = getColumnNames(rs);
        return new StringifiedTableData(colNames, getData(rs, colNames));
    }


    public StringifiedTableData getFullEmployeeData() throws SQLException {
        String query = SELECT_FULL_EMPLOYEE_DATA + " LIMIT 100";
        try(    Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery(query)){

            String[] colNames = getColumnNames(rs);
            return new StringifiedTableData(colNames, getData(rs, colNames));

        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        }
    }


    public StringifiedTableData getFullEmployeeData(String limit, String genderF, String genderM) throws SQLException {

        String genderPred = makeGenderPred(genderF, genderM);

        String query = makeSelectFullEmployeeDataQueryString(limit, genderPred);

        try(    Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery(query)){

            String[] colNames = getColumnNames(rs);
            return new StringifiedTableData(colNames, getData(rs, colNames));

        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        }
    }

    private String makeGenderPred(String genderF, String genderM){

        boolean returnF = genderF.equals("true");
        boolean returnM = genderM.equals("true");

        String pred;

        if(returnF && returnM){
            pred="('F', 'M')";
        }else if(returnF){
            pred="('F')";
        }else if(returnM){
            pred="('M')";
        }else{
            pred="()";
        }
        return pred;
    }

    private String makeSelectFullEmployeeDataQueryString(String limit, String genderPred){

        String limitClause = (limit==null) ? "" : String.format("LIMIT %d ", Integer.parseInt(limit));
        String genderClause = (genderPred==null) ? "" : String.format("WHERE gender IN %s ", genderPred);

        String query =  "SELECT employees.*, latest_title.title, latest_dept.to_date, latest_dept.dept_name, latest_salary.salary "
                    +   "FROM employees "
                    +   "INNER JOIN ("+SELECT_LATEST_DEPARTMENT+") AS latest_dept "
                    +   "ON employees.emp_no = latest_dept.emp_no "
                    +   "INNER JOIN ("+SELECT_LATEST_TITLE+") AS latest_title "
                    +   "ON employees.emp_no = latest_title.emp_no "
                    +   "INNER JOIN ("+SELECT_LATEST_SALARY+") AS latest_salary "
                    +   "ON employees.emp_no = latest_salary.emp_no "
                    +   genderClause
                    +   limitClause;

        return query;
    }

    public void updateEmployee(int emp_no, HashMap<String, String> updates) throws Exception {

        conn.setAutoCommit(false);
        Savepoint initial = conn.setSavepoint();

        try {
            for (Map.Entry<String, String> update : updates.entrySet()) {
                String key = update.getKey();
                String value = update.getValue();
                switch (key) {
                    case "title":
                        String newTitle = value;
                        updateTitle(emp_no, newTitle);
                        break;

                    case "salary":
                        int newSalary = Integer.parseInt(value);
                        updateSalary(emp_no, newSalary);
                        break;

                    case "dept_name":
                        String newDepartment = value;
                        updateDepartment(emp_no, newDepartment);
                        break;

                    default:
                        throw new Exception("Invalid attribute " + key);
                }
            }
            conn.commit();
        } catch (Exception e) {
            if(conn!=null){
                conn.rollback(initial);
            }
            e.printStackTrace();
            throw e;
        } finally {
            conn.setAutoCommit(true);
        }
    }

    private void updateTitle(int emp_no, String newTitle) throws SQLException {

        Date todaySql = getTodaySQL();

        PreparedStatement stmt;
        stmt = conn.prepareStatement(
                            "UPDATE titles "
                        +   "SET to_date=? "
                        +   "WHERE emp_no=? AND to_date=?");
        stmt.setDate(1, todaySql);
        stmt.setInt(2, emp_no);
        stmt.setDate(3, FUTURE_DATE_SQL);
        stmt.executeUpdate();

        stmt = conn.prepareStatement(
                            "INSERT INTO titles "
                        +   "VALUES (?, ?, ?, ?) ");
        stmt.setInt(1, emp_no);
        stmt.setString(2, newTitle);
        stmt.setDate(3, todaySql);
        stmt.setDate(4, FUTURE_DATE_SQL);
        stmt.executeUpdate();

        stmt.close();
    }

    private void updateSalary(int emp_no, int newSalary) throws SQLException {

        Date todaySql = getTodaySQL();

        PreparedStatement stmt;

        stmt = conn.prepareStatement(
                            "UPDATE salaries "
                        +   "SET to_date=? "
                        +   "WHERE emp_no=? AND to_date=?");
        stmt.setDate(1, todaySql);
        stmt.setInt(2, emp_no);
        stmt.setDate(3, FUTURE_DATE_SQL);
        stmt.executeUpdate();

        stmt = conn.prepareStatement(
                            "INSERT INTO salaries "
                        +   "VALUES (?, ?, ?, ?) ");
        stmt.setInt(1, emp_no);
        stmt.setInt(2, newSalary);
        stmt.setDate(3, todaySql);
        stmt.setDate(4, FUTURE_DATE_SQL);
        stmt.executeUpdate();

        stmt.close();
    }

    private void updateDepartment(int emp_no, String newDepartment) throws Exception {

        Date todaySql = getTodaySQL();

        PreparedStatement stmt;

        HashMap<String, String> dept_name_no_map = getDepartmentMap();

        if(dept_name_no_map.containsKey(newDepartment)) {

            String new_dept_no = dept_name_no_map.get(newDepartment);

            stmt = conn.prepareStatement(
                                "UPDATE dept_emp "
                            +   "SET to_date=? "
                            +   "WHERE emp_no=? AND to_date=?");
            stmt.setDate(1, todaySql);
            stmt.setInt(2, emp_no);
            stmt.setDate(3, FUTURE_DATE_SQL);
            stmt.executeUpdate();

            stmt = conn.prepareStatement(
                                "INSERT INTO dept_emp "
                            +   "VALUES (?, ?, ?, ?) ");
            stmt.setInt(1, emp_no);
            stmt.setString(2, new_dept_no);
            stmt.setDate(3, todaySql);
            stmt.setDate(4, FUTURE_DATE_SQL);
            stmt.executeUpdate();

            stmt.close();
        }else{
            throw new Exception("No department with name " + newDepartment);
        }
    }


    private HashMap<String, String> getDepartmentMap() throws SQLException {
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(SELECT_DEPARTMENT_DATA);
        rs.last();
        int nResults = rs.getRow();

        HashMap<String, String> map = new HashMap<>(nResults);

        int idx = 0;
        rs.beforeFirst();
        while(rs.next()){
            String name = rs.getString("dept_name");
            String number = rs.getString("dept_no");
            map.put(name, number);
        }

        return map;
    }

    private Title getLatestTitle(int emp_no) throws SQLException {
        String query = String.format("%s WHERE emp_no = %d" , this.SELECT_LATEST_TITLE, emp_no);
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(query);

        rs.next();
        String title = rs.getString("title");
        Date from_date = rs.getDate("from_date");
        Date to_date = rs.getDate("to_date");
        Title latestTitle = new Title(emp_no, title, from_date, to_date);
        return latestTitle;
    }


    private Date getTodaySQL(){
        java.util.Date today = new java.util.Date();
        return new Date(today.getTime());
    }
//    public void getAllEmployeeData(){
//        try (Statement stmt = conn.createStatement()) {
//
//            String q0 = SELECT_LATEST_EMP_DATE2 + "ORDER BY emp_no LIMIT 100";
//            ResultSet rs0 = stmt.executeQuery(q0);
//            String[][] data0 = getData(rs0, new String[]{"emp_no", "to_date"});
//
//
////            String q = SELECT_LATEST_DEPARTMENT + " LIMIT 100";
////            ResultSet rs = stmt.executeQuery(q);
////            String[][] data = getStrings(rs, new String[]{"emp_no", "to_date", "dept_name"});
////
////            String q2 = SELECT_LATEST_TITLE+ " LIMIT 100";
////            ResultSet rs2 = stmt.executeQuery(q2);
////            String[][] data2 = getStrings(rs2, new String[]{"emp_no", "to_date", "title"});
////
////            String q3 = SELECT_LATEST_SALARY+ " LIMIT 100";
////            ResultSet rs3 = stmt.executeQuery(q3);
////            String[][] data3 = getStrings(rs3, new String[]{"emp_no", "to_date", "salary"});
////
//            String q4 = SELECT_LATEST_DATA+ " LIMIT 100";
//            ResultSet rs4 = stmt.executeQuery(q4);
//            String[][] data4 = getData(rs4, new String[]{"emp_no", "birth_date", "first_name", "last_name", "gender", "hire_date", "to_date", "title", "dept_name", "salary"});
//
////            while(rs.next()){
////                System.out.println(String.format("%s, %s",rs.getString("emp_no"), rs.getString("dept_name")));
////            }
//            System.out.println(data0);
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//    }

    private String[][] getData(ResultSet rs, String[] names) throws SQLException {
        ResultSetMetaData rsMetaData =  rs.getMetaData();
        int nCols = names.length;
        rs.last();
        int nRows = rs.getRow();
        rs.beforeFirst();
        String[][] data = new String[nRows][nCols];
        int rowIdx=0;
        while(rs.next()){
            for(int colIdx=0; colIdx<nCols; colIdx++){
                data[rowIdx][colIdx] = rs.getString(names[colIdx]);
            }
            rowIdx++;
        }
        return data;
    }

    private String[] getColumnNames(ResultSet rs) throws SQLException {
        ResultSetMetaData rsMetaData =  rs.getMetaData();
        int nCols = rsMetaData.getColumnCount();

        String[] colNames = new String[nCols];
        for(int i=1; i<=nCols; i++){
            String name = rsMetaData.getColumnName(i);
            colNames[i-1]=name;
        }

        return colNames;
    }

//    public StringifiedTableData getMatchingEmployeeData(
//            String name,
//            String minAge,
//            String maxAge,
//            String gender,
//            String department,
//            String title,
//            String active){
//
//        StringBuilder querybuilder = new StringBuilder(
//                "SELECT employees.first_name, employees.last_name, employees.gender, dept_names.dept_name")
//
//
//
//    }
}

