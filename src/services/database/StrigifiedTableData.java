package services.database;

import java.util.ArrayList;

/**
 * Created by apatters on 10/15/2017.
 */
public class StrigifiedTableData{
    public String[] columnNames = null;
    public ArrayList<String[]> rowData = null;

    public StrigifiedTableData(String[] columnNames, ArrayList<String[]> rowData){
        this.columnNames = columnNames;
        this.rowData = rowData;
    }
}
