package utils;

import javax.json.JsonValue;

/**
 * defines an object that can easily be converted to json
 */
public interface JsonConvertible {

    /**
     * convert the object to json
     * @return
     */
    public JsonValue getJson();

}
