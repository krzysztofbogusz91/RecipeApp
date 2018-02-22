import React from "react";
import ListItem from "./list-item.jsx";

class Favourites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myFavs: favListDb.favs
        }


        const myDb = "https://recipe-app-195913.firebaseio.com/hits.json"
        fetch(myDb,{
            method: 'get'
        })
            .then(response => {
                console.log(response);
                if (response.ok)
                    return response.json();
                else
                    throw new Error('err responce not ok');
            })
            .then(data => {
                //update RecipeApp state.data - with data from API
                console.log(data[2])

            })
            .catch(err => console.log("err"))

    }


    render() {

        //update my favs list, on click in recipe app component( list item detail "add to favourites" button)
        //same mechanism using AJAX POST on real time app

        const favList = this.state.myFavs;

        let listNew = favList.map((a, i) => {
            return <ListItem key={a + i + "fav"} data={a.data}/>
        });

        return (
            <div>
                <h1 className={"text-info text-center"}>FAVOURITES</h1>
                <ul>
                    {listNew}
                </ul>
            </div>
        );
    }
}

export default Favourites