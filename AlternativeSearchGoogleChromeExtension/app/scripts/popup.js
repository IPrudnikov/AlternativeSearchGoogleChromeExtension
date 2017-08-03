
$(document).ready(function () {
    if (document.getElementById("altSearch_settings") !== null) {
        document.getElementById("altSearch_settings").addEventListener("click", openSettingsPage);
    }
    if (document.getElementById("altSearchField") !== null) {
        document.getElementById("altSearchField").addEventListener("keydown", searchRun);
    }
    if (document.getElementById("altSearchField_btn") !== null) {
        document.getElementById("altSearchField_btn").addEventListener("click", searchRun);
    }
    if (document.getElementById("btnSearchEngines") !== null) {
        document.getElementById("btnSearchEngines").addEventListener("click", toggleCbSearchEngines);
        //$('div[id="btnSearchEngines"]').toggle();
    }
});


function openSettingsPage() {
    var win = window.open("chrome-extension://" + chrome.runtime.id + "/pages/options.html", '_blank');
}

function searchRun(event) {
    if (event.keyCode === 13) {
        //alert(event.keyCode);
        var searchString = $('input[id="alternativSearchField"]').val(); //$('span[class*="input__box"]').find('input[class="input__control"]').val();
        var url = 'https://google.ru/#newwindow=1&q=' + searchString;
        var win = window.open(url, '_blank');
    }

}

function toggleCbSearchEngines() {
    $('div[id="cbSearchEngines"]').slideToggle("fast");
}

function toggleCbSearchEngines1(event) {
    event.preventDefault();
    if ($(this).hasClass("isDown")) {
        $("#cbSearchEngines").stop().animate({ marginTop: "75px" }, 200);
    } else {
        $("#cbSearchEngines").stop().animate({ marginTop: "175px" }, 200);
    }
    $(this).toggleClass("isDown");
    return false;
}

