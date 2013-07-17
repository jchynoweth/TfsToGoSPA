 

define(['services/logger', 'services/dataservice'], function (logger,dataservice) {

    var builds = ko.observableArray();
    var initialized = false;
    
    self.selectedBuild = ko.observable();
    CurrentFilter = ko.observable('All');
    var  filteredBuilds =  ko.dependentObservable(function() {

        switch (CurrentFilter()) {
        case 'All':
            return builds();
        case 'Success':
            return ko.utils.arrayFilter(builds(), function(item) {
                return item.BuildFinished;
            });
            break;
        case 'Failed':
            return ko.utils.arrayFilter(builds(), function(item) {
                return !item.BuildFinished;
            });
            break;
        default:
        }

        return builds;
    });

    var showBuildDetails = function(b) {
        selectedBuild(b);
    };
    
    var showBuildList = function (b) {
        selectedBuild(null);
    };
    
    var vm = {
       
        activate: activate,
        builds: builds,
        title: 'Builds',
         selectedBuild: selectedBuild,
        CurrentFilter: CurrentFilter,
        FilterOptions: ko.observableArray(['All', 'Success', 'Failed']),
        filteredBuilds: filteredBuilds,
        showBuildDetails: showBuildDetails,
        showBuildList: showBuildList
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
        return dataservice.getBuilds(builds);
    }

});


