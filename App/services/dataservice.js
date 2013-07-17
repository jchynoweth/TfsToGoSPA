define(['model','services/logger','durandal/system', 'config'], function(model, logger,system,config) {

    var getBuilds = function(buildsObservable) {
        //reset Observable
        buildsObservable([]);
        
        // set ajax call
        var options = {
            url: config.buildsURL,
            type: 'GET',
            dataType: 'json'
        };
        

        //Make Call
        return $.ajax(options).then(querySucceeded).fail(queryFailed);
        
        //Handle query ajax callback
        function querySucceeded(data) {
            var builds = [];

            var bdata = data.d.results;
            for (var i in bdata) {
                var build = bdata[i];
                var b = new model.buildInfo(
                    build.BuildFinished,
                    build.Definition, build.DropLocation,
                    build.FinishTime,
                    build.LastChangedBy,
                    build.LastChangedOn,
                    build.Number,
                    build.Project,
                    build.Reason,
                    build.RequestedBy,
                    build.Status);

                builds.push(b);
            }
            
            

            buildsObservable(builds);
        }
        
       
    };


    var getChangesets = function (changesetsObservable) {

        //reset Observable
        changesetsObservable([]);

        // set ajax call
        var options = {
            url: config.changesetsURL,
            type: 'GET',
            dataType: 'json'
        };


        //Make Call
        return $.ajax(options).then(queryChangesetsSucceeded).fail(queryFailed);

        //Handle query ajax callback
        function queryChangesetsSucceeded(data) {
            var changesets = [];

            var cdata = data.d.results;
            for (var i in cdata) {
                var changeset = cdata[i];
                var c = new model.changesetInfo(changeset.Id, changeset.Comment, changeset.Committer, changeset.Comment);
                    
                 changesets.push(c);
            }
            changesetsObservable(changesets);
        }
    };
    
    
    var dataservice = {
        getBuilds: getBuilds,
        getChangesets: getChangesets
    };

    return dataservice;
    
   
    

    function queryFailed(jqXHR, txtStatus) {
        var msg = 'Error getting data. ' + txtStatus;
        logger.log(msg, jqXHR, system.getModuleId(dataservice), true);

    }
});
