import WeatherWidget from "./WeatherWidget/WeatherWidget"
import "./LeftAside.css"
const LeftAside = () => {

    return (
        <aside className="leftAside">
        <WeatherWidget/>
        </aside>
    )
}

export default LeftAside