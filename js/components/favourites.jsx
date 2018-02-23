import React from "react";
import ListItem from "./list-item.jsx";
import Loader from "./loader.jsx";

// LEFT TO DO
//Add delete from data base button / switch with add if it is in favs
//Validation to avoid dubbles in db

export default class Favourites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myFavs: [],
            show: true,
            keyLabel: []
        }


        const myDb = "https://recipe-app-195913.firebaseio.com/hits.json";
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
                let keyLabel = []
                for(let i = 0;i<keys.length;i++){
                    let k = keys[i];
                    console.log(k);
                    arr.push([data[k]]);
                    keyLabel.push([data[k].data.data.recipe.label, k])

                }

                //sets saved on db to state to show it
                this.setState({
                    myFavs: arr,
                    show: false,
                    keyLabel: keyLabel
                })

            })
            .catch(err => console.log("err"))


    }


    render() {

        //update my favs list, on click in recipe app component( list item detail "add to favourites" button)

        const favList = this.state.myFavs;

        let listNew = favList.map((a, i) => {
            //pass saved data to list item and create new components
            return <ListItem removeFav={true} key={a + i + "fav"} data={a[0].data.data} keyLabelPairs={this.state.keyLabel}/>
        });

        return (
            <div>
                <h1 className={"text-info text-center m-4"}>YOUR FAVOURITES:</h1>
                <ul>
                    {this.state.show ? <Loader/> : listNew}
                </ul>
            </div>
        );
    }
}
