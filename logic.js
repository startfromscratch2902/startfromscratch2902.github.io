
function goto(url, fallback) {
    var script = document.createElement('script'); 

    script.onload = function() { 
        alert(url);
        document.location = url;
    } 
    script.onerror = function() { 
        alert(fallback);
        document.location = fallback;
    } 
    script.setAttribute('src', url); 

    document.getElementsByTagName('head')[0].appendChild(script);
}

function killme() {
    alert("sample alert");
}