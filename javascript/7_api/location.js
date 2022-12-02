const loc = document.getElementById("display");



function getLocation(){
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showPosition);
       // navigator.geolocation.watchPosition(showPosition);
     
    
    }else{
        loc.innerHTML="Location not supported."    
    }

 
    
}

function showPosition(p){
   
    loc.innerHTML = "Latitude: " + p.coords.latitude + 
    "<br>Longitude: " + p.coords.longitude;
}




