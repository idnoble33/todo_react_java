import React, { Component } from 'react'
import Login from './logging/Login'
import Welcome from './logging/Welcome'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListTodos from './todo/ListTodos'
import Header from './header/Header'
import Footer from './header/Footer'
import Logout from './logging/Logout'
import Todo from './todo/Todo'
import AuthenticatedRoute from './logging/AuthenticatedRoute'


 class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <Router>
                    <Header />
                    <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" component={Login} />
                    <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                    <AuthenticatedRoute exact path="/todos" component={ListTodos} />
                    <AuthenticatedRoute path="/logout" component={Logout} />
                    <AuthenticatedRoute exact path="/todos/:id" component={Todo} />
                    <Route component={Error} />
                    </Switch>
                    <Footer />
                </Router>
                {/* <Login />
                <Welcome /> */}
            </div>
        )
    }
}
const Error = () => {
    return <div>Error has occur please contact customer support on 22333444444</div>
}

export default TodoApp;