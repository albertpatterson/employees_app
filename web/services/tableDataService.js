(function(app){
    app.tableDataService = {
        getTableFields : function(tableName, callback){
            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", function(){callback(oReq.responseText)});
            oReq.open("GET", "tableFields?tableName="+tableName);
            oReq.send();
        },

        getTableData : function(tableName, callback, options){

            var query = "";
            if(!!options){
                for(var s in options){
                    query += "&" + s + "=" + options[s];
                }
            }

            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", function(){callback(oReq.responseText)});
            oReq.open("GET", "tableData?tableName="+tableName+query);
            oReq.send();
        }
    }
})(window.app);