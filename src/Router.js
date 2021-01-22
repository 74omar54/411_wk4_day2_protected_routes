import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
}
// Check the cookies for a cookie called "loggedIn"


// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => checkAuth() === true
            ?<Component {...props} /> 
            :<Redirect to={{pathname : "/login", state: {from: props.location}}} />}
        />
    )

}

{/* <Route exact path="/" component={Home} handleChange={} red={} />; */}

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router;