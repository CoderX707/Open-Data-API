const weatherCurlResult = `
    {
        "coord": {
        "lon": 73.8553,
        "lat": 18.5196
        },
        "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
        ],
        "base": "stations",
        "main": {
            "temp": 22.33,
            "feels_like": 22.99,
            "temp_min": 22.33,
            "temp_max": 22.33,
            "pressure": 1011,
            "humidity": 91,
            "sea_level": 1011,
            "grnd_level": 949
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.58,
            "deg": 280,
            "gust": 3.58
        },
        "clouds": {
            "all": 10
        },
        "dt": 1664721079,
        "sys": {
            "country": "IN",
            "sunrise": 1664672106,
            "sunset": 1664715168
        },
        "timezone": 19800,
        "id": 1259229,
        "name": "Pune",
        "cod": 200
    }`;

const weatherGraphqlQuery = `
    {
        getWeather(city:"pune"){
        base 
        main{
                temp 
                temp_min
                temp_max
                humidity
            }
        }
    }`;

function weatherOprations(menuId, mainId) {
    return (`<p>
    For get ${menuId} exchange rate use following url:<br>
    <span class="method-bold">
        ${menuId} [ <a target="_blank" href="https://open-data.herokuapp.com/${mainId}/v1/${menuId}/pune/">GET</a> ]:<br/> 
        <code class="higlighted break-word">https://open-data.herokuapp.com/${mainId}/v1/${menuId}/cityName</code>
    </span>
</p>`);
}

function weatherGraphQL(menuId, mainId) {
    return (`<p>
    For get ${menuId} exchange rate use following url <a target="_blank" href="https://open-data.herokuapp.com/graphql/v1/${menuId}">playground</a>:<br>
    <span class="method-bold">
       [ GET ]: <codeclass="higlighted break-word">https://open-data.herokuapp.com/${mainId}/v1/${menuId}</code>
    </span>
</p>`);
}