import { useEffect, useState } from "react/cjs/react.development"
import ReactWeather, { useOpenWeather } from "react-open-weather"
const WeatherWidget = (props) => {
    const [position, setPosition] = useState({
        latitude: 42.5048,
        longitude: 27.4626
    })
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: process.env.REACT_APP_OPENWEATHER_API_KEY,
        lat: `${position.latitude}`,
        lon: `${position.longitude}`,
        lang: 'en',
        unit: 'metric',
    });

    async function succesToGetPos(position) {
        setPosition(prevState => ({ ...prevState, latitude: position.coords.latitude, longitude: position.coords.longitude }))
        console.log(position);
      
    }
    function errorToGetPos(error) {

        setPosition(prevState => ({ ...prevState, latitude: 42.5048, longitude: 27.4626 }))
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(succesToGetPos, errorToGetPos);
    }, [])

    return (
        <span>
            <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />
        </span>
    )
}

export default WeatherWidget