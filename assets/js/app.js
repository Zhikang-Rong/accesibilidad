window.onload = function(){
    document.getElementById("submit").addEventListener("click",function(){

        if(document.getElementById("politicas").checked){
            document.getElementById("sel").innerHTML = "";
        }
        else{
            document.getElementById("sel").innerHTML = "Lea los términos y condiciones";
            
        }
    })
    
    let pleg = document.getElementById("pleg");
    
    pleg.addEventListener("click", function() {
        var content = document.getElementById('menu');
        if (content.style.display === "block") {
            content.className = "none";
        } else {
            content.className = "block";
        }
    });

    

    document.getElementById("simple-cookie-consent").style.display = "none"; 
    let myCookie = getCookie("cookie");
    console.log(myCookie);
    if (myCookie == null) {
        document.getElementById("simple-cookie-consent").style.display = "block";
        document.getElementsByClassName("cookie-consent-allow")[0].addEventListener("click",function(){
            document.cookie = "cookie=Hello;expires=Wed, 05 Aug 2030 23:00:00 UTC;path=/";
            location.reload();
        });
        document.getElementsByClassName("cookie-consent-deny")[0].addEventListener("click",function(){
            document.cookie = "cookie=Hello;expires=Wed, 05 Aug 2030 23:00:00 UTC;path=/";
            location.reload();
        });
    }
    else{
        document.getElementById("simple-cookie-consent").style.display = "none"; 
    }



    document.getElementById('logo').onclick = function() {
        document.getElementById('logo').className = 'logo';
        setTimeout(function(){
            document.getElementById('logo').className = 'no';
        }, 1100);
    }
}
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }

    return decodeURI(dc.substring(begin + prefix.length, end));
}
