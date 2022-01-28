
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude; 
    console.log("You live in", lat, lng);
}
function onGeoError() {
    console.log("can't find you");  
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)