import { Component } from "react";
import "./Footer.css"

class Footer extends Component {

    render() {
        return (
            <footer className='site-footer'>
                <ul>
                    <li>
                    &copy;  GameQuiz 2021
                    </li>

                    <li>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/MTsatsarov/GameQuiz">Github source</a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;