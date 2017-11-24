package com.manager_app.services.database;

import com.manager_app.utils.StringifiedTableData;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.apache.tomcat.jdbc.pool.PoolProperties;

/**
 * Service providing access to the employees database
 */
public class EmployeesDBService {

    /**
     * url to access the database
     */
    private static final String DATABASEURL = "jdbc:mysql://localhost:3306/employees";

    /**
     * username to connect to the database
     */
    private static final String USERNANME = "pma";

    /**
     * password to connect to the database
     */
    private static final String PASSWORD = "";

    /**
     * connection to the database
     */
    private static DataSource datasource = null;

    /**
     * SQL query to select all data from departments table
     */
    private static final String SELECT_DEPARTMENT_DATA  =   "SELECT * "
                                                        +   "FROM departments ";

    /**
     * SQL query to select the latest employment dates
     */
    private static final String SELECT_LATEST_EMP_DATE =    "SELECT emp_no, from_date, max(to_date) AS to_date "
                                                        +   "FROM dept_emp "
                                                        +   "GROUP BY emp_no ";

    /**
     * SQL query to select the latest departments
     */
    private static final String SELECT_LATEST_DEPARTMENT =  "SELECT dept_emp.emp_no, dept_emp.dept_no, latest_emp_date.to_date, departments.dept_name "
                                                        +   "FROM dept_emp "
                                                        +   "INNER JOIN (" + SELECT_LATEST_EMP_DATE + ") AS latest_emp_date "
                                                        +   "ON dept_emp.emp_no = latest_emp_date.emp_no AND dept_emp.to_date = latest_emp_date.to_date "
                                                        +   "INNER JOIN departments "
                                                        +   "ON departments.dept_no = dept_emp.dept_no";

    /**
     * SQL query to select the latest titles of employees
     */
    private static final String SELECT_LATEST_TITLE =   "SELECT titles.emp_no, latest_emp_date.from_date, latest_emp_date.to_date, titles.title "
                                                    +   "FROM titles "
                                                    +   "INNER JOIN (" + SELECT_LATEST_EMP_DATE + ") AS latest_emp_date "
                                                    +   "ON titles.emp_no = latest_emp_date.emp_no AND titles.to_date = latest_emp_date.to_date ";

    /**
     * SQL query to select the latest salaries
     */
    private static final String SELECT_LATEST_SALARY =  "SELECT salaries.emp_no, latest_emp_date.to_date, salaries.salary "
                                                    +   "FROM salaries "
                                                    +   "INNER JOIN (" + SELECT_LATEST_EMP_DATE + ") AS latest_emp_date "
                                                    +   "ON salaries.emp_no = latest_emp_date.emp_no AND salaries.to_date = latest_emp_date.to_date ";

    /**\
     * SQL query to select the detailed employee data
     */
    private static final String SELECT_FULL_EMPLOYEE_DATA = "SELECT employees.*, latest_title.title, latest_dept.to_date, latest_dept.dept_name, latest_salary.salary "
                                                        +   "FROM employees "
                                                        +   "INNER JOIN ("+SELECT_LATEST_DEPARTMENT+") AS latest_dept "
                                                        +   "ON employees.emp_no = latest_dept.emp_no "
                                                        +   "INNER JOIN ("+SELECT_LATEST_TITLE+") AS latest_title "
                                                        +   "ON employees.emp_no = latest_title.emp_no "
                                                        +   "INNER JOIN ("+SELECT_LATEST_SALARY+") AS latest_salary "
                                                        +   "ON employees.emp_no = latest_salary.emp_no ";


    /**
     * the fields included in the detailed employee data
     */
    private static final String[] fullEmployeeDataFieldNames = new String[]{"emp_no", "birth_date", "first_name", "last_name", "gender","hire_date","title","to_date","dept_name","salary"};

    /**
     * Date in the future, used to indicate an employees current position
     */
    private static final Date FUTURE_DATE_SQL = getFutureDate();

    /**
     * create the future data
     * @return the future date
     */
    private static Date getFutureDate(){
        try {
            return makeSQLDate("9999-01-01");
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * create an SQL data object
     * @param dateStr the string representing the date
     * @return the SQL date object represending the date
     * @throws ParseException
     */
    private static Date makeSQLDate(String dateStr) throws ParseException {
        java.util.Date date = new SimpleDateFormat("yyyy-MM-dd").parse(dateStr);
        return new Date(date.getTime());
    }

    /**
     * initialize the service
     */
    public static void init(){

        PoolProperties p = new PoolProperties();
        p.setUrl("jdbc:mysql://localhost:3306/employees");
        p.setDriverClassName("com.mysql.jdbc.Driver");
        p.setUsername(USERNANME);
        p.setPassword(PASSWORD);
        p.setJmxEnabled(true);
        p.setTestWhileIdle(false);
        p.setTestOnBorrow(true);
        p.setValidationQuery("SELECT 1");
        p.setTestOnReturn(false);
        p.setValidationInterval(30000);
        p.setTimeBetweenEvictionRunsMillis(30000);
        p.setMaxActive(100);
        p.setInitialSize(10);
        p.setMaxWait(10000);
        p.setRemoveAbandonedTimeout(60);
        p.setMinEvictableIdleTimeMillis(30000);
        p.setMinIdle(10);
        p.setLogAbandoned(true);
        p.setRemoveAbandoned(true);
        p.setJdbcInterceptors(
            "org.apache.tomcat.jdbc.pool.interceptor.ConnectionState;"+
            "org.apache.tomcat.jdbc.pool.interceptor.StatementFinalizer");
        datasource = new DataSource();
        datasource.setPoolProperties(p);
    }

    /**
     * close the datasource
     */
    public static void close(){
        datasource.close();
    }

    /**
     * get the names of the tables in the database
     * @return
     * @throws SQLException
     */
    public ArrayList<String> getTableNames() throws SQLException {
        ArrayList<String> tableNames = new ArrayList<>();

        try(
                Connection conn = datasource.getConnection();
                ResultSet rs = conn.getMetaData().getTables(null, null, null, new String[]{"TABLE"});
        ){
            while(rs.next()){
                tableNames.add(rs.getString("TABLE_NAME"));
            }
            return tableNames;

        }catch (SQLException e){
            throw e;
        }
    }

    /**
     * get raw data contained in a table
     * @param tableName the name of the table whose data is required
     * @return json object representing the data
     * @throws SQLException
     */
    public StringifiedTableData getTableData(String tableName) throws SQLException {
        return getTableData(tableName, 50);
    }

    /**
     * get raw data contained in a table
     * @param tableName the name of the table whose data is required
     * @param limit the maximum number of rows to return
     * @return data within the table
     * @throws SQLException
     */
    public StringifiedTableData getTableData(String tableName, int limit) throws SQLException {

        String query = String.format("SELECT * FROM %s LIMIT %d;", tableName, limit);

        try (   Connection conn = datasource.getConnection();
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery(query)) {

            String[] colNames = getColumnNames(rs);
            String[][] data = getData(rs, colNames);

            return new StringifiedTableData(colNames, data);
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        }
    }


    /**
     * get the detailed employee data
     * @return detailed employee data
     * @throws SQLException
     */
    public StringifiedTableData getFullEmployeeData() throws SQLException {
        return getFullEmployeeData("100", "true", "true");
    }

    /**
     * get the detailed employee data
     * @return detailed employee data
     * @throws SQLException
     */
    public StringifiedTableData getFullEmployeeData(String limit, String genderF, String genderM) throws SQLException {

        String genderPred = makeGenderClause(genderF, genderM);

        String query = makeSelectFullEmployeeDataQueryString(limit, genderPred);

        try(    Connection conn = datasource.getConnection();
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery(query)){

            String[] colNames = fullEmployeeDataFieldNames;
            String[][] data= getData(rs, colNames);

            return new StringifiedTableData(colNames, data);
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * create the clause to filter by gender
     * @param genderF indicates if female should be included
     * @param genderM indicates if male should be included
     * @return clause to filter by gender
     */
    private String makeGenderClause(String genderF, String genderM){

        boolean returnF = genderF.equals("true");
        boolean returnM = genderM.equals("true");

        String clause;

        if(returnF && returnM){
            clause="('F', 'M')";
        }else if(returnF){
            clause="('F')";
        }else if(returnM){
            clause="('M')";
        }else{
            clause="()";
        }
        return clause;
    }

    /**
     * get detailed data for a single employee
     * @param emp_no the employee id number
     * @return detailed data for the employee
     * @throws SQLException
     */
    private EmployeeData getSingleEmployeeFullData(int emp_no) throws SQLException {

        String query = SELECT_FULL_EMPLOYEE_DATA + " WHERE employees.emp_no="+emp_no;

        try(    Connection conn = datasource.getConnection();
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery(query)){

            rs.next();
            return new EmployeeData(
                    rs.getInt("emp_no"),
                    rs.getDate("birth_date"),
                    rs.getString("first_name"),
                    rs.getString("last_name"),
                    rs.getString("gender"),
                    rs.getDate("hire_date"),
                    rs.getString("title"),
                    rs.getDate("to_date"),
                    rs.getString("dept_name"),
                    rs.getInt("salary")
            );
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * create the query to select detailed employee data
     * @param limit the maximum number of rows to return
     * @param gClause clause to filter by gender
     * @return the query to select detailed employee data
     */
    private String makeSelectFullEmployeeDataQueryString(String limit, String gClause){

        String limitClause = (limit==null) ? "" : String.format("LIMIT %d ", Integer.parseInt(limit));
        String genderClause = (gClause==null) ? "" : String.format("WHERE gender IN %s ", gClause);
        String orderClause = "ORDER BY employees.emp_no ";

        String query =  "SELECT employees.*, latest_title.title, latest_dept.to_date, latest_dept.dept_name, latest_salary.salary "
                    +   "FROM employees "
                    +   "INNER JOIN ("+SELECT_LATEST_DEPARTMENT+") AS latest_dept "
                    +   "ON employees.emp_no = latest_dept.emp_no "
                    +   "INNER JOIN ("+SELECT_LATEST_TITLE+") AS latest_title "
                    +   "ON employees.emp_no = latest_title.emp_no "
                    +   "INNER JOIN ("+SELECT_LATEST_SALARY+") AS latest_salary "
                    +   "ON employees.emp_no = latest_salary.emp_no "
                    +   genderClause
                    +   orderClause
                    +   limitClause;

        return query;
    }

    /**
     * add a new employee to the database
     * @param birth_date the employee's birth date
     * @param first_name the employee's first name
     * @param last_name the employee's last name
     * @param gender the employee's gender
     * @param hire_date the employee's hire date
     * @param title the employee's title
     * @param dept_name the employee's dapertment
     * @param salary the employee's salary
     * @return the employee data
     * @throws Exception
     */
    public EmployeeData addEmployee(String birth_date, String first_name, String last_name, String gender,
                            String hire_date, String title, String dept_name, String salary) throws Exception {

        try(Connection conn = datasource.getConnection()){

            int emp_no;
            conn.setAutoCommit(false);
            Savepoint initial = conn.setSavepoint();

            try{
                emp_no = insertEmployee(birth_date, first_name, last_name, gender, hire_date);
                insertIntoHistoricalTable("titles", emp_no,title);
                insertIntoHistoricalTable("dept_emp",emp_no, dept_name);
                insertIntoHistoricalTable("salaries",emp_no, salary);
                conn.commit();

            }catch(Exception e) {
                if (conn != null) {
                    conn.rollback(initial);
                }
                throw e;
            }finally {
                conn.setAutoCommit(true);
            }

            return getSingleEmployeeFullData(emp_no);

        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * get the highest employee number in the database
     * @return
     * @throws SQLException
     */
    private int getMaxEmp_no() throws SQLException {
        String query    =   "SELECT MAX(emp_no) AS maxEmp_no "
                        +   "FROM employees ";

        try(    Connection conn = datasource.getConnection();
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery(query);){
            rs.next();
            return rs.getInt("maxEmp_no");

        }catch (SQLException e){
            throw e;
        }

    }

    /**
     * insert a new employee into the employees table
     * @param birth_date the employee's birth data
     * @param first_name the employee's first name
     * @param last_name the employee's last name
     * @param gender the employee's gender
     * @param hire_date the employee's hire date
     * @return
     * @throws Exception
     */
    private int insertEmployee(String birth_date, String first_name, String last_name, String gender, String hire_date) throws Exception {

        Date birth_date_sql = makeSQLDate(birth_date);
        Date hire_date_sql = makeSQLDate(hire_date);

        if(!(gender.equals("F") || gender.equals("M"))){
            throw new Exception("Gender must be \"F\" or \"M\"");
        }

        int emp_no = getMaxEmp_no()+1;

        String update   =   "INSERT INTO employees "
                        +   "VALUES (?, ?, ?, ?, ?, ?)";

        try( Connection conn = datasource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(update);){

            stmt.setInt(1, emp_no);
            stmt.setDate(2, birth_date_sql);
            stmt.setString(3, first_name);
            stmt.setString(4, last_name);
            stmt.setString(5, gender);
            stmt.setDate(6, hire_date_sql);
            stmt.executeUpdate();

            return emp_no;
        }catch (SQLException e){
            throw e;
        }
    }

    /**
     * update an employee's data in the database
     * @param emp_no the employees id number
     * @param updates the updates to apply
     * @return the updated employee data
     * @throws Exception
     */
    public EmployeeData updateEmployee(int emp_no, HashMap<String, String> updates) throws Exception {

        try(Connection conn = datasource.getConnection();){
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
                            updateSalary(emp_no, value);
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

            return getSingleEmployeeFullData(emp_no);
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    /**
     * update an employee's title in the titles table
     * @param emp_no the employee's id number
     * @param newTitle the new title
     * @throws Exception
     */
    private void updateTitle(int emp_no, String newTitle) throws Exception {
        updateHistoricalTable("titles", emp_no, newTitle);
    }

    /**
     * update an employees salary in the salaries table
     * @param emp_no the employee's id number
     * @param newSalary the new salary
     * @throws Exception
     */
    private void updateSalary(int emp_no, String newSalary) throws Exception {
        updateHistoricalTable("salaries", emp_no, newSalary);
    }

    /**
     * update an employees department in the dept_emp table
     * @param emp_no the employees id number
     * @param newDepartment the new department name
     * @throws Exception
     */
    private void updateDepartment(int emp_no, String newDepartment) throws Exception {
        updateHistoricalTable("dept_emp", emp_no, newDepartment);
    }

    /**
     * update the data in a historical table such as titles or salaries
     * @param tableName the name of the historical table
     * @param emp_no the employees id number
     * @param value the new value to store in the table
     * @throws Exception
     */
    private void updateHistoricalTable(String tableName, int emp_no, String value) throws Exception {
        truncateHistoricalTableHistory(tableName, emp_no);
        insertIntoHistoricalTable(tableName, emp_no, value);;
    }

    /**
     * change the to_date from the future date to the current date for the current item
     * @param tableName the name of the table
     * @param emp_no the employee id number
     * @throws Exception
     */
    private void truncateHistoricalTableHistory(String tableName, int emp_no) throws Exception {

        String update   =   "UPDATE " + tableName + " "
                        +   "SET to_date=? "
                        +   "WHERE emp_no=? AND to_date=?";

        try(Connection conn = datasource.getConnection();
            PreparedStatement stmt = conn.prepareStatement(update)){
            Date todaySql = getTodaySQL();
            stmt.setDate(1, todaySql);
            stmt.setInt(2, emp_no);
            stmt.setDate(3, FUTURE_DATE_SQL);

            switch(tableName){
                case "dept_emp":
                    break;
                case "salaries":
                    break;
                case "titles":
                    break;
                default:
                    throw new Exception("Invalid tableName");
            }
            stmt.executeUpdate();
        }catch (SQLException e){
            throw e;
        }
    }

    /**
     * insert a new item into a historical data table
     * @param tableName the name of the table
     * @param emp_no the employee id number
     * @param value the new value
     * @throws Exception
     */
    private void insertIntoHistoricalTable(String tableName, int emp_no, String value) throws Exception {

        String update   =   "INSERT INTO " + tableName + " "
                        +   "VALUES (?, ?, ?, ?) ";

        try(Connection conn = datasource.getConnection();
            PreparedStatement stmt = conn.prepareStatement(update)){
            stmt.setInt(1, emp_no);
            Date todaySql = getTodaySQL();
            stmt.setDate(3, todaySql);
            stmt.setDate(4, FUTURE_DATE_SQL);

            switch(tableName){
                case "dept_emp":
                    Map<String, String> dept_name_no_map = getDepartmentMap();
                    if(!dept_name_no_map.containsKey(value)){
                        throw new Exception("Invalid department name");
                    }
                    stmt.setString(2, dept_name_no_map.get(value));
                    break;
                case "salaries":
                    int salaryInt = Integer.parseInt(value);
                    stmt.setInt(2, salaryInt);
                    break;
                case "titles":
                    stmt.setString(2, value);
                    break;
                default:
                    throw new Exception("Invalid tableName");
            }
            stmt.executeUpdate();
        }catch(Exception e) {
            throw e;
        }
    }

    /**
     * get a mapping of department names to department numbers
     * @return map of department names to department numbers
     * @throws SQLException
     */
    private HashMap<String, String> getDepartmentMap() throws SQLException {

        try(Connection conn = datasource.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(SELECT_DEPARTMENT_DATA);
        ){

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
        }catch (SQLException e){
            throw e;
        }
    }

    /**
     * get todays date
     * @return todays date
     */
    private Date getTodaySQL(){
        java.util.Date today = new java.util.Date();
        return new Date(today.getTime());
    }


    /**
     * extract table data from a results set
     * @param rs a results set
     * @param names the names of the fiels to extract
     * @return the table data
     * @throws SQLException
     */
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

    /**
     * get the column names from a result set
     * @param rs a results set
     * @return the column names
     * @throws SQLException
     */
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

}

