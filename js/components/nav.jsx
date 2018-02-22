import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
            <ul className={"navbar-nav d-flex flex-row-reverse"}>

                <li className={"nav-item p-2"}>
                    <Link to="/recipe" className={"nav-link"} >Search For Recipes</Link>
                </li>
                <li className={"nav-item p-2"}>
                    <Link to="/fav" className={"nav-link"}>Favourites</Link>
                </li>
                <li className={"nav-item p-2"}>
                    <NavLink exact to="/" className={"nav-link"} activeClassName={"active"}>About</NavLink>
                </li>
            </ul>
        </nav>;
    }
}

export default Nav