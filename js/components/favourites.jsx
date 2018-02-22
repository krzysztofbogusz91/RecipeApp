import React from "react";
import ListItem from "./list-item.jsx";

// LEFT TO DO
//Add delete from data base button / switch with add if it is in favs
//Validation to avoid dubbles in db

export default class Favourites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myFavs: []
        }


        const myDb = "https://recipe-app-195913.firebaseio.com/hits.json"
        fetch(myDb,{
            method: 'get'
        })
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error('err not ok');
            })
            .then(data => {
                //update RecipeApp state.data - with data from API

                //fire base only way to get data => avoiding weird object names
                const keys = Object.keys(data);

                //saves my data in arr
                let arr = [];
                for(let i = 0;i<keys.length;i++){
                    let k = keys[i];
                    arr.push([data[k]]);

                }
                //sets saved on db to state to show it
                this.setState({
                    myFavs: arr
                })

            })
            .catch(err => console.log("err"))

    }


    render() {

        //update my favs list, on click in recipe app component( list item detail "add to favourites" button)

        const favList = this.state.myFavs;

        let listNew = favList.map((a, i) => {
            //pass saved data to list item and create new components
            return <ListItem key={a + i + "fav"} data={a[0].data.data}/>
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
