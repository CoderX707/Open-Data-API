var { buildSchema } = require('graphql');
// GraphQL schema
const graphQLWeatherSchema = buildSchema(`

    type Sys { country: String sunrise: Int sunset: Int }

    type Clouds { all: Int }

    type Wind { speed: Float deg: Int gust: Float }

    type Main { temp: Float
    feels_like: Float
    temp_min: Float
    temp_max: Float
    pressure: Int
    humidity: Int
    sea_level: Int
    grnd_level: Int }

    type Weather { id: Int
    main: String
    description: String
    icon: String }

    type Coord { lon: Float lat: Float }

    type WeatherDetails { base: String
    visibility: Int
    dt: Int
    timezone: Int
    id: Int
    name: String
    cod: Int
    sys: Sys
    clouds: Clouds
    wind: Wind
    main: Main
    weather: [Weather ]
    coord: Coord }

    type Query {
        getWeather(city:String):WeatherDetails
    }
`);

module.exports = { graphQLWeatherSchema };
