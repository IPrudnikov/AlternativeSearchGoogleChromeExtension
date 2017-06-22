function SearchCore() { }

SearchCore.prototype = {
    firstRun : function() {
        return null;
    },
    addElement: function() {
        return null;
    },
    clickFunction: function() {
        return null;
    }
}

var searchCore = new SearchCore();
var DynamicSearchCore = new Interface('DynamicSearchCore', ['firstRun', 'addElement', 'clickFunction']);

function route(searchCoreInstance) {
    Interface.ensureImplements(searchCoreInstance, DynamicSearchCore);
}

route(searchCore);