
function goto(url, fallback) {
    var script = document.createElement('script'); 

    script.onload = function() { 
        document.location = url;
    } 
    script.onerror = function() { 
        document.location = fallback;
    } 
    script.setAttribute('src', url); 

    document.getElementsByTagName('head')[0].appendChild(script);
}