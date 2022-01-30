const API_KEY = "ede44ff3564612478f5e2a51a23ebbaf"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;  
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = `  🌏︎ ${data.name} |`;
        weather.innerText = `| ☁︎ ${data.weather[0].main} |🌡${data.main.temp} |  `
    })
}
function onGeoError() {
    console.log("can't find you");  
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)