//$(document).ready(function() {
//    console.log("background_for_localhost is ready");
//    //$.getScript("/test.js", function (data, textStatus, jqxhr) { console.log("script loaded"); });

//    include("chrome-extension://jodngkmcnigleammhedlaodpebpnhddf/scripts/SearchEngines/test.js");
//});

//function include(url) {
//    var script = document.createElement('script');
//    script.src = url;
//    document.getElementsByTagName('head')[0].appendChild(script);
//}

//$.get(chrome.extension.getURL("scripts/SearchEngines/test.js"),
//	function (data) {
//        //alert(1);
//	}
//);
//$(document).ready(function() {
//    alert(1);
//});
document.addEventListener("DOMContentLoaded", ready);

function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(script, s);
    return script;
}

function addScripts(scripts, callback) {
    var loaded = {}; // Для загруженных файлов loaded[i] = true
    var counter = 0;

    function onload(i) {
        if (loaded[i]) return; // лишний вызов onload/onreadystatechange
        loaded[i] = true;
        counter++;
        if (counter == scripts.length) callback();
    }

    for (var i = 0; i < scripts.length; i++) (function (i) {
        var script = addScript(scripts[i]);

        script.onload = function () {
            onload(i);
        };

        script.onreadystatechange = function () { // IE8-
            if (this.readyState == 'loaded' || this.readyState == 'complete') {
                setTimeout(this.onload, 0); // возможны повторные вызовы onload
            }
        };

    }(i));

}

function ready() {
    addScripts([chrome.extension.getURL("scripts/SearchEngines/test.js")], function () {
        testLog();
    });
}