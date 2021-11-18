import { Component } from "react";
import Welcome from "./Welcome/Welcome";
import All from "./All/All"
import "./Main.css"
import { Routes, Route } from "react-router-dom";
import Create from "./Create/Create";
import Register from "./Register/Register";
import Login from "./Login/Login";
import MyQuizzes from "./My Quizzes/My Quizzes";
import Edit from "./Edit/Edit"

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main className="main">
                <Routes>
                    <Route path="/" exat element={<Welcome/>} />
                    <Route path="/all" exact element={<All />} />
                    <Route path="/create" exact element={<Create />} />
                    <Route path="/register" exact element={<Register />} />
                    <Route path="/Login" exact element={ <Login/>} />
                    <Route path="/my-quizzes" exact element={<MyQuizzes/>} />
                    <Route path="/edit/:id" exact element={<Edit/>} />

                </Routes>
            </main >
        )
    }
}

export default Main