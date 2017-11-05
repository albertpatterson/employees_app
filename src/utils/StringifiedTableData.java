package utils;

import utils.JsonConvertible;

import javax.json.*;
import java.util.ArrayList;

/**
 * represents data stored in a table
 */
public class StringifiedTableData implements JsonConvertible {

    /**
     * the column names of the table
     */
    public String[] columnNames = null;

    /**
     * the data in the rows of the table
     */
    public String[][] rowData = null;

    /**
     * create an object representing the data in a table
     * @param columnNames the table's column names
     * @param rowData the table's row data
     */
    public StringifiedTableData(String[] columnNames, String[][] rowData){
        this.columnNames = columnNames;
        this.rowData = rowData;
    }

    /**
     * create a json object representing the data in the table
     * @return json object representing the data in the table
     */
    @Override
    public JsonValue getJson() {

        JsonArrayBuilder tableColumnNamesJsonArrayBuilder = Json.createArrayBuilder();
        for(String columnName : columnNames){
            tableColumnNamesJsonArrayBuilder.add(columnName);
        }
        JsonArray tableColumnNamesJsonArray = tableColumnNamesJsonArrayBuilder.build();

        JsonArrayBuilder tableDataJsonArrayBuilder = Json.createArrayBuilder();
        for(String[] row : rowData){
            JsonArrayBuilder rowDataJsonArrayBuilder = Json.createArrayBuilder();
            for(String value : row){
                rowDataJsonArrayBuilder.add(value);
            }
            tableDataJsonArrayBuilder.add(rowDataJsonArrayBuilder.build());
        }

        JsonArray tableDataJsonArray = tableDataJsonArrayBuilder.build();

        JsonObjectBuilder tableDataJsonObjectBuilder = Json.createObjectBuilder();
        tableDataJsonObjectBuilder.add("columnNames", tableColumnNamesJsonArray);
        tableDataJsonObjectBuilder.add("data", tableDataJsonArray);

        return tableDataJsonObjectBuilder.build();
    }
}
