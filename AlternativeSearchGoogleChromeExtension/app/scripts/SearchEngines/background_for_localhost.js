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
//document.addEventListener("DOMContentLoaded", ready);

function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    var s = document.getElementsByTagName('script')[0];
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

//// request permission on page load
//document.addEventListener('DOMContentLoaded', function () {
//    if (!Notification) {
//        alert('Desktop notifications not available in your browser. Try Chromium.');
//        return;
//    }

//    if (Notification.permission !== "granted")
//        Notification.requestPermission();
//});

//function notifyMe() {
//    if (Notification.permission !== "granted")
//        Notification.requestPermission();
//    else {
//        var notification = new Notification('Notification title', {
//            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
//            body: "Hey there! You've been notified!",
//        });

//        notification.onclick = function () {
//            window.open("http://stackoverflow.com/a/13328397/1269037");
//        };

//    }

//}

//function injectJs(srcFile) {
//    var scr = document.createElement('script');
//    scr.src = srcFile;
//    document.getElementsByTagName('head')[0].appendChild(scr);
//}


function ready() {
    //var head = document.getElementsByTagName("head")[0];
    //fn = "function closepop(){alert('jj');}";

    //var script = document.createElement('script');
    //script.setAttribute("type", "application/javascript");
    //script.textContent = fn;
    //head.appendChild(script);


    //closepop();
    //notifyMe();
    //var rrr = chrome.extension.getBackgroundPage();
    //var ttt = chrome.extension.getViews;
    //injectJs(chrome.extension.getURL("scripts/SearchEngines/test.js"));

    //testLog();
    //(function (jQuery, $) {
        // Here, you can do anything you want.
        // jQuery and $ refer to the same jQuery object from `js/jquery-min.js`
        addScripts([chrome.extension.getURL("scripts/SearchEngines/test.js")], function () {
            testLog();
        });
    //})(jQuery, jQuery.noConflict(true));

}

function testLog() {
    console.log('test loaded succes. Background_for_localhost');
}

function clickFunction() {
    console.log('clickFunction - backgroung_for_localhost' );
}
//searchCoreObj.clickFunction = testLog();
//ready();



//chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//    console.log(response.farewell);
//});

//chrome.runtime.onMessage.addListener(
//  function (request, sender, sendResponse) {
//      console.log(sender.tab ?
//                  "from a content script:" + sender.tab.url :
//                  "from the extension");
//      if (request.greeting == "hello")
//          sendResponse({ farewell: "goodbye" });
//  });