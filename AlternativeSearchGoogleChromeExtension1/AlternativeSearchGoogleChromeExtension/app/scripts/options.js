$(document).ready(function() {
    $("#versionManifest").text(chrome.runtime.getManifest().version);
    $("#nameManifest").text(chrome.runtime.getManifest().name);



    

    function clientSettingsViewer() {
        this.init();
    }

    clientSettingsViewer.prototype = {
        _value: {
            isOpenNotNewWindow: false
        },
        init: function() {
            var that = this;
            
        },
        load: function() {
            $("#searchSettings_isOpenNotNewWindow").prop("checked", settings._value.isOpenNotNewWindow);
            $("#searchSettings_isOpenNotNewWindow").change(function (e) {
                settings._value.isOpenNotNewWindow = $(this).prop("checked");
                settings.sync();
                
            });

        },
        sync: function() {
            chrome.storage.sync.set({ settings: settings._value });
        }
    }

    var settings = new clientSettingsViewer();

    chrome.storage.sync.get('settings', function (data) {

        if (data.settings !== undefined && data.settings !== null) {
            settings._value = data.settings;
        } else {
            settings.sync();
            //chrome.storage.sync.set({ settings: settings._value });
        }
        settings.load();
    });

    


});