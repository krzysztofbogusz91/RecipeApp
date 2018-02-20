import React from "react";

class Nav extends React.Component{
    render(){
        return (
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
                <ul className={"navbar-nav d-flex flex-row-reverse"}>

                    <li className={"nav-item active p-2"}>
                        <a href="#" className={"nav-link"}>Search For Recipes</a>
                    </li>
                    <li className={"nav-item p-2"}>
                        <a href="" className={"nav-link"}>Favourites</a>
                    </li>
                    <li className={"nav-item p-2"}>
                        <a href="#" className={"nav-link"}>About</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav