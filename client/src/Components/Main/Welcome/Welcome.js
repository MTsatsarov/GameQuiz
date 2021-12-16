import { Component } from "react";
import welcomePic from "../../../static/659509.svg"
import { Link } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Welcome.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Welcome extends Component {
    render() {
        return (
            <section className='welcome-section'>
                <article className="welcome-image-wrapper">
                    <img src={welcomePic} alt='WelcomeImage' />
                </article>

                <article className="welcome-ul-wrapper">
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} />  You like to learn new things ?</li>
                        <li><FontAwesomeIcon icon={faCheck} />  You like to play games ?</li>
                        <li><FontAwesomeIcon icon={faCheck} />  You are in the right place !</li>
                    </ul>

                    <Link to="/all"> <button className="start-button">Get Started</button></Link>
                </article>
            </section>
        );
    }
}

export default Welcome;