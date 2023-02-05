function askWeather(){
    let city = document.getElementById("input").innerHTML
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ade61660873363fee0bb92057291f0d`)
        .then(res => {
            if (!res.ok) {
                throw new Error("FAILURE: response not okay");
            }
            return res.json();
        })
        .then(data => {
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            var today = new Date();
            var time = today.getHours();
            fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("FAILURE: response not okay");
                    }
                    return res.json();
                })
                .then(data => {
                    const weatherData = data;
                    console.log(weatherData);
                    for (let i = 0; i <= 23; i++) {
                        document.getElementById("tabelldata").innerHTML += "<tr><td> kl. " + (time + i) + "</td><td>" + "lufttemperatur dag " + i + " er: " + weatherData.properties.timeseries[i].data.instant.details.air_temperature + "</td>" + '<td> <img src="images/' + weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code + '.png" alt="' + weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code + '"/></td> </tr>';
                    }
                })
                .catch(error => console.error("ERROR: " + error.message));
        })
        .catch(error => console.error("ERROR: " + error.message));
}
