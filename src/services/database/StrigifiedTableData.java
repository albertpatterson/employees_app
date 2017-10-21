package services.database;

import utils.JsonConvertible;

import javax.json.*;
import java.util.ArrayList;

/**
 * Created by apatters on 10/15/2017.
 */
public class StrigifiedTableData implements JsonConvertible {
    public String[] columnNames = null;
    public ArrayList<String[]> rowData = null;

    public StrigifiedTableData(String[] columnNames, ArrayList<String[]> rowData){
        this.columnNames = columnNames;
        this.rowData = rowData;
    }

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
