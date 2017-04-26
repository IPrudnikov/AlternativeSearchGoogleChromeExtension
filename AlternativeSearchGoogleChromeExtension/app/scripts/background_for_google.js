$(document).ready(function () {
    addElem();
});

function addElem(){

	var searchInYandexBtn = document.createElement('button');
	searchInYandexBtn.className = "sbico-c";
	searchInYandexBtn.innerHTML = "<span class=\"sbico _wtf _Qtf\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 512 512\" height=\"512px\" id=\"Layer_1\" version=\"1.1\" viewBox=\"0 0 512 512\" width=\"512px\" xml:space=\"preserve\"><g><circle cx=\"255.999\" cy=\"256\" r=\"251.408\"/></g><path d=\"M313.475 105.366h-45.648c-44.854 0-82.892 34.142-82.892 100.427 0 39.765 18.42 69.084 51.25 83.547l-61.262 110.869c-2.005 3.619 0 6.426 3.202 6.426h28.433c2.4 0 4.01-0.801 4.81-2.807l55.659-108.863h20.021v108.863c0 1.197 1.197 2.807 2.799 2.807h24.832c2.4 0 3.203-1.205 3.203-3.205V109.383C317.881 106.571 316.279 105.366 313.475 105.366zM287.047 269.26h-16.818c-26.427 0-52.053-19.281-52.053-67.483 0-50.22 24.024-70.705 48.448-70.705h20.424V269.26z\" fill=\"#FFFFFF\" id=\"path40\"/></svg></span>";
	
	searchInYandexBtn.onclick = function () {
        var subdomain = '';
        if (document.getElementById('rg_s'))
            subdomain = 'images.';
		var searchString = $('input[class*="gsfi"]').val();
        
		var url = 'http://' + subdomain + 'yandex.ru/yandsearch?text=' + searchString;
        var win = window.open(url, '_blank');
    }
	$('button[class="sbico-c"]').after(searchInYandexBtn);
	

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