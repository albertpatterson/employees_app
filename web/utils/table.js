(function(app){
    app.utils = app.utils || {};
    app.utils.table = app.utils.table || {};
    app.utils.table.create = function(data, labels, parent){
        var table = document.createElement('table');

        if(!(labels instanceof Array)){
            labels = [labels];
        }

        labels.forEach(function(label){
            var header = document.createElement('th');
            header.innerText = label;
            table.appendChild(header);
        })

        data.forEach(function(row){
            var tableRow = document.createElement('tr');

            if(!(row instanceof Array)){
                row = [row];
            }

            row.forEach(function(item){
                var tableData = document.createElement('td');
                tableData.innerText = item;
                tableRow.appendChild(tableData);
            })
            table.appendChild(tableRow);
        })
        parent.appendChild(table);
    };

    app.utils.table.update = function(data, labels, parent, oldChild){
        var frag = document.createDocumentFragment();
        var table = app.utils.table.create(data, labels, frag);
        parent.replaceChild(frag, oldChild);
    };

})(window.app)