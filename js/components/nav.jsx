import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class Nav extends React.Component{
    render(){
        return <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
            <ul className={"navbar-nav container pr-0 w-75 justify-content-end"}>
                <li className={"nav-item p-1"}>
                    <NavLink exact to="/" className={"nav-link"} activeClassName={"active"}>About</NavLink>
                </li>
                <li className={"nav-item p-1"}>
                    <NavLink to="/recipe" className={"nav-link"} >Search For Recipes</NavLink>
                </li>
                <li className={"nav-item p-1"}>
                    <NavLink to="/fav" className={"nav-link"}>Favourites</NavLink>
                </li>

            </ul>
        </nav>;
    }
}