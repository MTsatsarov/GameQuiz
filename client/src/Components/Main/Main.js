import { Component } from "react";
import Welcome from "./Welcome/Welcome";
import All from "./All/All"
import "./Main.css"
import { Switch, Route } from "react-router-dom";
import Create from "./Create/Create";
import Register from "./Register/Register";
import Login from "./Login/Login";
import MyQuizzes from "./My Quizzes/My Quizzes";
import Edit from "./Edit/Edit"

class Main extends Component {
    render() {
        return (
            <main className="main">
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/all" exact component={All} />
                    <Route path="/all/:id" exact component={All} />

                    <Route path="/create" exact component={Create} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/my-quizzes" exact component={MyQuizzes} />
                    <Route path="/edit/:id" exact component={Edit} />


                </Switch>
            </main >
        )
    }
}

export default Main