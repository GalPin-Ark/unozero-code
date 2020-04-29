
 function readCookie(name) {var nameEQ = name + "="; var ca = document.cookie.split(';');for(var i=0;i < ca.length;i++) {var c = ca[i];while (c.charAt(0)==' ') c = c.substring(1,c.length);if (c.indexOf(nameEQ) == 0) {return decodeURIComponent( c.substring(nameEQ.length,c.length) );}}return null;} 

function low(){ 

         var miCookie = readCookie( "Lang" );
        if (miCookie != "ENG-AZTdx9Q7fo37n1oydGVG"){
           
            $.ajax({url:"https://geolocation-db.com/jsonp",jsonpCallback:"callback",dataType:"jsonp",success:function(location){getCode(location.country_code);}})
        }
}
function getCode(data){
    
    code=data;
    console.log(code);
    if((code==='MX'||code==='mx')){
        document.cookie = "Lang=" + encodeURIComponent( "ENG-AZTdx9Q7fo37n1oydGVG" );
        location.href = "es";
    }

}
(function(){
    low();
})();


