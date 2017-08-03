// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        console.log("This is a first install!");

        chrome.storage.sync.set({ isFirstRun: true });

    } else if (details.reason == "update") {
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

function test_Backgroung() {
    alert(1);
}


//chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//    chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
//        console.log(response.farewell);
//    });
//});