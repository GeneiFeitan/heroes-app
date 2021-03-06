import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import {Navbar} from "../Components/ui/Navbar";
import {LoginScreen} from "../Components/login/LoginScreen";
import {MarvelScreen} from "../Components/marvel/MarvelScreen";
import {DashboardRoutes} from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginScreen}/>
                    <Route exact path='/' component={MarvelScreen}/>
                    <Route exact path='/login' component={DashboardRoutes}/>

                </Switch>
            </div>
        </Router>
    );
};
