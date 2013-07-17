ko.bindingHandlers.date = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var jsonDate = valueAccessor();
        var value = new Date(parseInt(jsonDate.substr(6)));
        var ret = value.getMonth() + 1 + "/" + value.getDate() + "/" + value.getFullYear();
        element.innerHTML = ret;
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {

    }
};

ko.bindingHandlers.attrIf = {
    update: function (element, valueAccessor, allBindingsAccessor) {
        var h = ko.utils.unwrapObservable(valueAccessor());
        var show = ko.utils.unwrapObservable(h._if);
        if (show) {
            ko.bindingHandlers.attr.update(element, valueAccessor, allBindingsAccessor);
        } else {
            for (var k in h) {
                if (h.hasOwnProperty(k) && k.indexOf("_") !== 0) {
                    $(element).removeAttr(k);
                }
            }
        }
    }
};

define(['durandal/system', 'durandal/plugins/router', 'services/logger'],
    function (system, router, logger) {
        var shell = {
            activate: activate,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            return boot();
        }

        function boot() {
            router.mapNav('home');
             router.mapNav('builds');
            router.mapNav('changesets');
            
           // log('TfsToGo loaded!', null, true);
            return router.activate('home');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });