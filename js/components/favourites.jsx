import React from "react";
import SearchBar from "./search-bar.jsx";

class Favourites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myFavs: []
        }
    }

    //update my favs list, on click in recipe app component, on list item detail add to favourites button
    //parameter should be an object with all needed data

    updateMyFavs = (fav) => {
        this.setState({
            //add new item using destructuring array function
            myFavs: [fav, ...myFavs]
        })
    }

    render() {
        console.log(favListDb)
        const favList = [];

        return (
            <div >
                <h1 className={"text-info"}>This is an favourites page and it need to get some props!!</h1>
                <ul>
                    {favList}
                </ul>
            </div>
        );
    }
}

export default Favourites