// fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58")
// .then(res => {
     
//     if (res.ok){
//         console.log("SUCCESS")
//     } else {
//         console.log("FAILURE")
//     }
//     res.json()
// })

// .then(data => console.log(data))    
// .catch(error => console.log("ERROR"))'
function askWeather(){
fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.715948&lon=10.867377")
.then(res => {
    if (!res.ok) {
        throw new Error("FAILURE: response not okay");
    }
    return res.json();
})
.then(data => {
    const weatherData = data;
    console.log(weatherData);
    document.getElementById("lufttrykk").innerHTML="lufttrykket er: " + weatherData.properties.timeseries[0].data.instant.details.air_pressure_at_sea_level
})
.catch(error => console.error("ERROR: " + error.message));
}