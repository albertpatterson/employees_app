(function(app){

    app.databaseDataService = {
        getTables: function (callback) {
            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", function () {
                callback(oReq.responseText)
            });
            oReq.open("GET", "databaseData");
            oReq.send();
        }
    };
})(window.app);