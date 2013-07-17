 

define(['services/logger', 'services/dataservice'], function (logger, dataservice) {

    var changesets = ko.observableArray();
    var initialized = false;
 
    var vm = {      
        activate: activate,
        changesets: changesets,
        title: 'Changesets',        
    };

    return vm;

    function activate() {
       
        if (initialized) {
            return;
        }
        initialized = true;
        return refresh();
    }

    function refresh() {
        return dataservice.getChangesets(changesets);
    }

    
});











