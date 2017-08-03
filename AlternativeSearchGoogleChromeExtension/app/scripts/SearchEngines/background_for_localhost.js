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
    console.log('clickFunction - backgroung_for_localhost');

    var searchInYandexBtn = document.createElement('button');
    searchInYandexBtn.className = "sbico-c searchInYandexBtn";
    searchInYandexBtn.innerHTML = "<span class=\"sbico _wtf _Qtf\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 512 512\" height=\"512px\" id=\"Layer_1\" version=\"1.1\" viewBox=\"0 0 512 512\" width=\"512px\" xml:space=\"preserve\"><g><circle cx=\"255.999\" cy=\"256\" r=\"251.408\"/></g><path d=\"M313.475 105.366h-45.648c-44.854 0-82.892 34.142-82.892 100.427 0 39.765 18.42 69.084 51.25 83.547l-61.262 110.869c-2.005 3.619 0 6.426 3.202 6.426h28.433c2.4 0 4.01-0.801 4.81-2.807l55.659-108.863h20.021v108.863c0 1.197 1.197 2.807 2.799 2.807h24.832c2.4 0 3.203-1.205 3.203-3.205V109.383C317.881 106.571 316.279 105.366 313.475 105.366zM287.047 269.26h-16.818c-26.427 0-52.053-19.281-52.053-67.483 0-50.22 24.024-70.705 48.448-70.705h20.424V269.26z\" fill=\"#FFFFFF\" id=\"path40\"/></svg></span>";

    searchInYandexBtn.onclick = function () {
        var subdomain = '';
        if (document.getElementById('rg_s'))
            subdomain = 'images.';
        var searchString = $('input[class*="gsfi"]').val();

        var url = 'http://' + subdomain + 'yandex.ru/yandsearch?text=' + escape(searchString);
        var win = window.open(url, '_blank');
    }
    $('button[class="sbico-c"]').after(searchInYandexBtn);
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