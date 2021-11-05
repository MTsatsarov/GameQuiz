import { Component } from "react";
import Welcome from "./Welcome/Welcome";
import "./Main.css"

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main className="main">
            <Welcome />
            </main>
        )
    }
}

export default Main