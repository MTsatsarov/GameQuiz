import { Component } from "react";
import welcomePic from "../../../static/QuizSysWelcomePicture.png"
import { Link } from "react-router-dom";
import "./Welcome.css"

class Welcome extends Component {
    render() {
        return (
            <section className='welcome-section'>
                <article className="welcome-image-wrapper">
                    <img src={welcomePic} alt='WelcomeImage' />
                </article>

                <article className="welcome-ul-wrapper">
                    <ul>
                        <li>You like to learn new things ?</li>
                        <li>You like to play games ?</li>
                        <li>You are in the right place !</li>
                    </ul>
                    <Link  to="/all">Get Started</Link>
                </article>
            </section>
        );
    }
}

export default Welcome;