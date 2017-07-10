//проверка jquert
//if (window.jQuery) {}

//проверка загрузки скриптов
//https://learn.javascript.ru/onload-onerror
//function addScript(src) {
//    var script = document.createElement('script');
//    script.src = src;
//    var s = document.getElementsByTagName('script')[0];
//    s.parentNode.insertBefore(script, s);
//    return script;
//}

//function addScripts(scripts, callback) {
//    var loaded = {}; // Для загруженных файлов loaded[i] = true
//    var counter = 0;

//    function onload(i) {
//        if (loaded[i]) return; // лишний вызов onload/onreadystatechange
//        loaded[i] = true;
//        counter++;
//        if (counter == scripts.length) callback();
//    }

//    for (var i = 0; i < scripts.length; i++) (function (i) {
//        var script = addScript(scripts[i]);

//        script.onload = function () {
//            onload(i);
//        };

//        script.onreadystatechange = function () { // IE8-
//            if (this.readyState == 'loaded' || this.readyState == 'complete') {
//                setTimeout(this.onload, 0); // возможны повторные вызовы onload
//            }
//        };

//    }(i));

//}

//addScripts([chrome.extension.getURL("scripts/SearchEngines/test.js")])
//addScripts(["a.js", "b.js", "c.js"], function () {
//    a()
//});

//в каждом скрипте для поисковиков (реализации методов) [после проверки загрузки скрипта -> проверка наличия реализаций]
function SearchCore() { }

SearchCore.prototype = {
    firstRun: function () {
        return null;
    },
    addElement: function () {
        return null;
    },
    clickFunction: function () {
        clickFunction();
    }
};


//после загрузки JsInterface
var searchCoreObj = new SearchCore();
var DynamicSearchCore = new Interface('DynamicSearchCore', ['firstRun', 'addElement', 'clickFunction']);

function route(searchCoreInstance) {
    Interface.ensureImplements(searchCoreInstance, DynamicSearchCore);
}

route(searchCoreObj);

$(document).ready(function () {

    setTimeout(searchCoreObj.clickFunction(), 100);
    setInterval(searchCoreObj.clickFunction(), 100);
    
});

