define(
    function () {


        var ChangesetInfo = function() {

        };
        
        var model = {
             buildInfo: (function () {
                function BuildInfo(BuildFinished, Definition, DropLocation, FinishTime, LastChangedBy, LastChangedOn, Number, Project, Reason, RequestedBy, Status) {
                    this.BuildFinished = BuildFinished;
                    this.Definition = Definition;
                    this.DropLocation = DropLocation;
                    this.FinishTime = FinishTime;
                    this.LastChangedBy = LastChangedOn;
                    this.Number = Number;
                    this.Project = Project;
                    this.Reason = Reason;
                    this.RequestedBy = RequestedBy;
                    this.Status = Status;

                }
                return BuildInfo;
             })(),
             changesetInfo: (function () {

                 function ChangesetInfo(Id, Comment, Committer, Details) {
                     this.Id = Id;
                     this.Comment = Comment;
                     this.Committer = Committer,
                     this.Comment = Comment;
                 }

                 return ChangesetInfo;
             }
             )()
        };

        return model;


    });