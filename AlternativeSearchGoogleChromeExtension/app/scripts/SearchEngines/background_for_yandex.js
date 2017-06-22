$(document).ready(function() {
    addElem();
});

function addElem(){ 

    var searchStringEnd = document.createElement('div');
    searchStringEnd.className = "search2__button";
    searchStringEnd.innerHTML = "<button class=\"button button_size_ws-head button_theme_websearch websearch-button suggest2-form__button\" role=\"button\" type=\"submit\" tabindex=\"-1\"><div class=\"button__text websearch-button__text\" style=\"font: 16px/32px arial,sans-serif; position: relative; display: block; width: 1px; padding-left: 5px; color: #000; border: solid #ffdb4d; border-width: 2px 0; background-color: #ffdb4d; -moz-box-sizing: border-box; box-sizing: border-box;\">&nbsp;</div></button>";
    $(searchStringEnd).append('<style class="searchStringEnd">.button_size_ws-head .button__text:before{top: -6px;}</style>');
    $('div[class="search2__button"]').find('div[class="websearch-button__text"], span[class="button__text"]').css("margin-right", "0px");
    
    if ($('.search2').parent().hasClass('layout__col')) {
        var newSearchWidth = parseInt($('.search2').css("max-width")) + 88 + "px";
        $('.search2').css("max-width", newSearchWidth);
        $('.search2').parent().css("max-width", newSearchWidth);
        $('.search2').parent().css("width", "100%");
        
    }
    $('div[class="search2__button"]').after(searchStringEnd);
    




	var searchInGoogleBtn = document.createElement('div');
	searchInGoogleBtn.className = "search2__button";
	
	//var button1 = document.createElement('button');
	//button1.className = "button button_size_ws-head button_theme_websearch websearch-button suggest2-form__button";
    //button1.innerHTML = "<div class=\"button__text websearch-button__text\" style=\"font: 16px/32px arial,sans-serif; position: relative; display: block; width: 40px; padding-left: 5px; color: #000; border: solid #ffdb4d; border-width: 2px 0; background-color: #ffdb4d; -moz-box-sizing: border-box; box-sizing: border-box;\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Layer_1\" width=\"12px\" height=\"12px\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" enable-background=\"new 0 0 512 512\"> <style type=\"text/css\">.st0{fill:#1D87F8;} </style> <path class=\"st0\" d=\"M491.4 210.1c-76.8 0-153.6 0-230.5 0 0 31.9 0 63.7 0 95.6 44.5 0 89 0 133.5 0 -5.2 30.5-23.3 58.5-49 75.6 -16.2 10.9-34.8 17.9-53.9 21.3 -19.3 3.3-39.2 3.7-58.4-0.2 -19.6-3.9-38.2-12.1-54.5-23.5 -26-18.3-45.9-45.1-56.1-75.2 -10.4-30.6-10.5-64.8 0-95.4 7.3-21.6 19.5-41.5 35.5-57.7 19.8-20.2 45.5-34.7 73.1-40.6 23.7-5.1 48.7-4.1 71.9 2.9 19.7 6 37.9 16.8 52.8 31 15.1-15 30-30 45.1-45 7.9-8.1 16.2-15.8 23.8-24.1 -22.8-21.1-49.6-38.1-78.8-48.8 -52.6-19.4-112-19.8-165-1.4C121.1 45 70.3 89.6 42.1 146.1c-9.8 19.4-17 40.2-21.3 61.6C10 260.8 17.5 317.5 42.1 366c15.9 31.6 38.8 59.7 66.5 81.8 26.2 20.9 56.7 36.3 89 44.9 40.8 10.9 84.2 10.7 125.3 1.3 37.1-8.5 72.2-26.3 100.3-52.2 29.6-27.2 50.8-63.1 62-101.7C497.3 298.1 499 253.2 491.4 210.1z\"/></svg></div>";
	searchInGoogleBtn.innerHTML = "<button class=\"button button_theme_websearch websearch-button suggest2-form__button\" role=\"button\" type=\"submit\" tabindex=\"-1\"><div style=\"font: 16px/32px arial,sans-serif; position: relative; display: block; width: 40px; padding-left: 5px; color: #000; border: solid #ffdb4d; border-width: 2px 0; background-color: #ffdb4d; -moz-box-sizing: border-box; box-sizing: border-box;\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Layer_1\" width=\"12px\" height=\"12px\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" enable-background=\"new 0 0 512 512\"> <style type=\"text/css\">.st0{fill:#1D87F8;} </style> <path class=\"st0\" d=\"M491.4 210.1c-76.8 0-153.6 0-230.5 0 0 31.9 0 63.7 0 95.6 44.5 0 89 0 133.5 0 -5.2 30.5-23.3 58.5-49 75.6 -16.2 10.9-34.8 17.9-53.9 21.3 -19.3 3.3-39.2 3.7-58.4-0.2 -19.6-3.9-38.2-12.1-54.5-23.5 -26-18.3-45.9-45.1-56.1-75.2 -10.4-30.6-10.5-64.8 0-95.4 7.3-21.6 19.5-41.5 35.5-57.7 19.8-20.2 45.5-34.7 73.1-40.6 23.7-5.1 48.7-4.1 71.9 2.9 19.7 6 37.9 16.8 52.8 31 15.1-15 30-30 45.1-45 7.9-8.1 16.2-15.8 23.8-24.1 -22.8-21.1-49.6-38.1-78.8-48.8 -52.6-19.4-112-19.8-165-1.4C121.1 45 70.3 89.6 42.1 146.1c-9.8 19.4-17 40.2-21.3 61.6C10 260.8 17.5 317.5 42.1 366c15.9 31.6 38.8 59.7 66.5 81.8 26.2 20.9 56.7 36.3 89 44.9 40.8 10.9 84.2 10.7 125.3 1.3 37.1-8.5 72.2-26.3 100.3-52.2 29.6-27.2 50.8-63.1 62-101.7C497.3 298.1 499 253.2 491.4 210.1z\"/></svg></div></button>";
        //"<button class=\"button button_size_ws-head button_theme_websearch websearch-button suggest2-form__button\" role=\"button\" type=\"submit\" tabindex=\"-1\"><div class=\"button__text websearch-button__text\" style=\"font: 16px/32px arial,sans-serif; position: relative; display: block; width: 40px; padding-left: 5px; color: #000; border: solid #ffdb4d; border-width: 2px 0; background-color: #ffdb4d; -moz-box-sizing: border-box; box-sizing: border-box;\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Layer_1\" width=\"12px\" height=\"12px\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" enable-background=\"new 0 0 512 512\"> <style type=\"text/css\">.st0{fill:#1D87F8;} </style> <path class=\"st0\" d=\"M491.4 210.1c-76.8 0-153.6 0-230.5 0 0 31.9 0 63.7 0 95.6 44.5 0 89 0 133.5 0 -5.2 30.5-23.3 58.5-49 75.6 -16.2 10.9-34.8 17.9-53.9 21.3 -19.3 3.3-39.2 3.7-58.4-0.2 -19.6-3.9-38.2-12.1-54.5-23.5 -26-18.3-45.9-45.1-56.1-75.2 -10.4-30.6-10.5-64.8 0-95.4 7.3-21.6 19.5-41.5 35.5-57.7 19.8-20.2 45.5-34.7 73.1-40.6 23.7-5.1 48.7-4.1 71.9 2.9 19.7 6 37.9 16.8 52.8 31 15.1-15 30-30 45.1-45 7.9-8.1 16.2-15.8 23.8-24.1 -22.8-21.1-49.6-38.1-78.8-48.8 -52.6-19.4-112-19.8-165-1.4C121.1 45 70.3 89.6 42.1 146.1c-9.8 19.4-17 40.2-21.3 61.6C10 260.8 17.5 317.5 42.1 366c15.9 31.6 38.8 59.7 66.5 81.8 26.2 20.9 56.7 36.3 89 44.9 40.8 10.9 84.2 10.7 125.3 1.3 37.1-8.5 72.2-26.3 100.3-52.2 29.6-27.2 50.8-63.1 62-101.7C497.3 298.1 499 253.2 491.4 210.1z\"/></svg></div></button>";
	
    searchInGoogleBtn.onclick = function (e) {
        var subdomain = '';
        if (document.getElementById('rg_s'))
            subdomain = 'images.';
		
		var searchString = $('span[class*="input__box"]').find('input[class="input__control"]').val();
		var url = 'https://' + subdomain + 'google.ru/#newwindow=1&q=' + searchString;
        var win = window.open(url, '_blank');
    }
    //searchInGoogleBtn.appendChild(button1);

    

    $($('div[class="search2__button"]')[0]).after(searchInGoogleBtn);
	/*
	$($('div[class="search2__button"]')[0]).after(searchInGoogleBtn);
    var newSearchWidth = parseInt($('.search2').css("max-width")) + 40 + "px";
    $('.search2').css("max-width", newSearchWidth);
    $('.search2').parent().css("max-width", newSearchWidth);
    $('.search2').parent().css("width", "100%");
    */
    //$('form[class="search2 "]').css("max-width", $('form[class="search2 "]').css("max-width") + 400);

	var searchInGoogleBtn1 = document.createElement('div');
	searchInGoogleBtn1.className = "search2__button";

	searchInGoogleBtn1.innerHTML = "<button class=\"button button_theme_websearch websearch-button suggest2-form__button\" role=\"button\" type=\"submit\" tabindex=\"-1\"><div style=\"font: 16px/32px arial,sans-serif; position: relative; display: block; width: 40px; padding-left: 5px; color: #000; border: solid #ffdb4d; border-width: 2px 0; background-color: #ffdb4d; -moz-box-sizing: border-box; box-sizing: border-box;\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Layer_1\" width=\"12px\" height=\"12px\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" enable-background=\"new 0 0 512 512\"> <style type=\"text/css\">.st0{fill:#1D87F8;} </style> <path class=\"st0\" d=\"M491.4 210.1c-76.8 0-153.6 0-230.5 0 0 31.9 0 63.7 0 95.6 44.5 0 89 0 133.5 0 -5.2 30.5-23.3 58.5-49 75.6 -16.2 10.9-34.8 17.9-53.9 21.3 -19.3 3.3-39.2 3.7-58.4-0.2 -19.6-3.9-38.2-12.1-54.5-23.5 -26-18.3-45.9-45.1-56.1-75.2 -10.4-30.6-10.5-64.8 0-95.4 7.3-21.6 19.5-41.5 35.5-57.7 19.8-20.2 45.5-34.7 73.1-40.6 23.7-5.1 48.7-4.1 71.9 2.9 19.7 6 37.9 16.8 52.8 31 15.1-15 30-30 45.1-45 7.9-8.1 16.2-15.8 23.8-24.1 -22.8-21.1-49.6-38.1-78.8-48.8 -52.6-19.4-112-19.8-165-1.4C121.1 45 70.3 89.6 42.1 146.1c-9.8 19.4-17 40.2-21.3 61.6C10 260.8 17.5 317.5 42.1 366c15.9 31.6 38.8 59.7 66.5 81.8 26.2 20.9 56.7 36.3 89 44.9 40.8 10.9 84.2 10.7 125.3 1.3 37.1-8.5 72.2-26.3 100.3-52.2 29.6-27.2 50.8-63.1 62-101.7C497.3 298.1 499 253.2 491.4 210.1z\"/></svg></div></button>";

	searchInGoogleBtn1.onclick = function (e) {
	    var subdomain = '';
	    if (document.getElementById('rg_s'))
	        subdomain = 'images.';

	    var searchString = $('span[class*="input__box"]').find('input[class="input__control"]').val();
	    var url = 'https://' + subdomain + 'google.ru/#newwindow=1&q=' + searchString;
	    var win = window.open(url, '_blank');
	}
    //$($('div[class="search2__button"]')[0]).before(searchInGoogleBtn1);
    /*
	$($('div[class="search2__button"]')[0]).after(searchInGoogleBtn1);
	var newSearchWidth = parseInt($('.search2').css("max-width")) + 40 + "px";
	$('.search2').css("max-width", newSearchWidth);
	$('.search2').parent().css("max-width", newSearchWidth);
	$('.search2').parent().css("width", "100%");
    */

	//var searchInGoogleBtn2 = document.createElement('div');
	//searchInGoogleBtn2.className = "search2__button";

	//searchInGoogleBtn2.innerHTML = "<button class=\"button button_theme_websearch websearch-button suggest2-form__button\" role=\"button\" type=\"submit\" tabindex=\"-1\"><div style=\"font: 16px/32px arial,sans-serif; position: relative; display: block; width: 40px; padding-left: 5px; color: #000; border: solid #ffdb4d; border-width: 2px 0; background-color: #ffdb4d; -moz-box-sizing: border-box; box-sizing: border-box;\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Layer_1\" width=\"12px\" height=\"12px\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" enable-background=\"new 0 0 512 512\"> <style type=\"text/css\">.st0{fill:#1D87F8;} </style> <path class=\"st0\" d=\"M491.4 210.1c-76.8 0-153.6 0-230.5 0 0 31.9 0 63.7 0 95.6 44.5 0 89 0 133.5 0 -5.2 30.5-23.3 58.5-49 75.6 -16.2 10.9-34.8 17.9-53.9 21.3 -19.3 3.3-39.2 3.7-58.4-0.2 -19.6-3.9-38.2-12.1-54.5-23.5 -26-18.3-45.9-45.1-56.1-75.2 -10.4-30.6-10.5-64.8 0-95.4 7.3-21.6 19.5-41.5 35.5-57.7 19.8-20.2 45.5-34.7 73.1-40.6 23.7-5.1 48.7-4.1 71.9 2.9 19.7 6 37.9 16.8 52.8 31 15.1-15 30-30 45.1-45 7.9-8.1 16.2-15.8 23.8-24.1 -22.8-21.1-49.6-38.1-78.8-48.8 -52.6-19.4-112-19.8-165-1.4C121.1 45 70.3 89.6 42.1 146.1c-9.8 19.4-17 40.2-21.3 61.6C10 260.8 17.5 317.5 42.1 366c15.9 31.6 38.8 59.7 66.5 81.8 26.2 20.9 56.7 36.3 89 44.9 40.8 10.9 84.2 10.7 125.3 1.3 37.1-8.5 72.2-26.3 100.3-52.2 29.6-27.2 50.8-63.1 62-101.7C497.3 298.1 499 253.2 491.4 210.1z\"/></svg></div></button>";

	//searchInGoogleBtn2.onclick = function (e) {
	//    var subdomain = '';
	//    if (document.getElementById('rg_s'))
	//        subdomain = 'images.';

	//    var searchString = $('span[class*="input__box"]').find('input[class="input__control"]').val();
	//    var url = 'https://' + subdomain + 'google.ru/#newwindow=1&q=' + searchString;
	//    var win = window.open(url, '_blank');
	//}
    ////$($('div[class="search2__button"]')[0]).before(searchInGoogleBtn1);
	//$($('div[class="search2__button"]')[0]).after(searchInGoogleBtn2);
	//var newSearchWidth = parseInt($('.search2').css("max-width")) + 45 + "px";
	//$('.search2').css("max-width", newSearchWidth);
	//$('.search2').parent().css("max-width", newSearchWidth);
	//$('.search2').parent().css("width", "100%");
    //$('form[class="search2 "]').css("max-width", $('form[class="search2 "]').css("max-width") + 40);
    //$('div[class="search2__button"]').after(searchInGoogleBtn);


    //$($('div[class="search2__button"]')[$('div[class="search2__button"]').length]).after();

}
	
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    
	var regex = new RegExp("([?&]|[?#])" + name + "(=*([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[3].replace(/\+/g, " "));
}