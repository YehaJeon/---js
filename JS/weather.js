const API_KEY = "ede44ff3564612478f5e2a51a23ebbaf"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;  
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url);
}
function onGeoError() {
    console.log("can't find you");  
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)