function askWeather(){
    //byen til openweathermap api
    let city = prompt("Skriv inn en by (ikke enkelte byggninger som drømtorp, men skriv heller Ski.):");
    //finner by-koordinater fra openweathermap api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ade61660873363fee0bb92057291f0d`)
        .then(res => {
            if (!res.ok) {
                throw new Error("FAILURE: response not okay");
            }
            return res.json();
        })
        .then(data => {
            //koordinater til MET api
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            // klokkeslett
            var today = new Date();
            var time = today.getHours();
            //henter værdata fra MET
            fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("FAILURE: response not okay");
                    }
                    return res.json();
                })
                .then(data => {
                    //usortert data.
                    const weatherData = data;
                    console.log(weatherData);
                    //loop som lar programmet vise data framover i tid
                    for (let i = 0; i <= 23; i++) {
                        if(time > 24) {
                            time = 1
                        }
                        // ubeskrivelig blokk med kode
                        document.getElementById("tabelldata").innerHTML += "<tr><td> kl. " + (time ++) + "</td><td>" + weatherData.properties.timeseries[i].data.instant.details.air_temperature +"°" + "</td>" + '<td> <img src="images/' + weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code + '.png" alt="' + weatherData.properties.timeseries[i].data.next_1_hours.summary.symbol_code + '"/></td> </tr>';
                    }
                })
                //sier ifra om noe går galt
                .catch(error => console.error("ERROR: " + error.message));
        })
        //sier ifra om noe går galt
        .catch(error => console.error("ERROR: " + error.message));
}
