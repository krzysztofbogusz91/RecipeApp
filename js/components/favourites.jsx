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
            show: true
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
                for(let i = 0;i<keys.length;i++){
                    let k = keys[i];
                    console.log(k);
                    arr.push([data[k]]);

                }
                //sets saved on db to state to show it
                this.setState({
                    myFavs: arr,
                    show: false
                })

            })
            .catch(err => console.log("err"))

        // const myDb2 = "https://recipe-app-195913.firebaseio.com/hits/-L616n96pvi6z2YYxB1H.json";
        // fetch(myDb2,{
        //     method: 'DELETE'
        // })
        //     .then(response => {
        //         if (response.ok)
        //             return response.json();
        //         else
        //             throw new Error('err not ok');
        //     })
        //     .then(data => {
        //
        //     })
        //     .catch(err => console.log("err"))
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
                <h1 className={"text-info text-center m-4"}>YOUR FAVOURITES:</h1>
                <ul>
                    {this.state.show ? <Loader/> : listNew}
                </ul>
            </div>
        );
    }
}
