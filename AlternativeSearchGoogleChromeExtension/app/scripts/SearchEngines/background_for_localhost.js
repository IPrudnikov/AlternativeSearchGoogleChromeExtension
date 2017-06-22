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

$.get(chrome.extension.getURL("scripts/SearchEngines/test.js"),
	function (data) {
	    alert(1);
	}
);
//$(document).ready(function() {
//    alert(1);
//});
