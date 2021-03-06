import React from 'react';
import {Navbar} from "../Components/ui/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink
} from "react-router-dom";
import {MarvelScreen} from "../Components/marvel/MarvelScreen";
import {HeroScreen} from "../Components/heroes/HeroScreen";
import {DcScreen} from "../Components/dc/DcScreen";
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path='./marvel' component={MarvelScreen}></Route>
                    <Route exact path='./heroe/:heroeId' component={HeroScreen}></Route>
                    <Route exact path='./dc' component={DcScreen}></Route>

                    <Redirect to='./marvel'/>

                </Switch>
            </div>

        </>
    );
};
