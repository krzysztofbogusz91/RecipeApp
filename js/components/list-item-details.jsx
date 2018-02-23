import React from "react";
import YTSearch from "youtube-api-search";
import Loader from "./loader.jsx";

const API_KEY = "AIzaSyAQ6twlYXicuLXk2m0l9cGOkZpx4eYp6Iw";

export default class ListItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            loader: true,
            removeFav: this.props.removeFav,
        }

        //Need to work on better video proposition search mechanism
        //sometimes gets weird propositions

        //feach data from yt api, change state and pass it to url
        YTSearch({key: API_KEY, term: this.props.termYT}, (data) => {
            //pass first youtube search for name of recipe
            this.setState({
                id: data[0].id.videoId,
                loader: false
            });

        });
    }

    //update data base, add element to user fav list;
    addToFavourites = (event) => {
        event.preventDefault();
        //look for doubles (data base viev from favourites list)
        //  this.props.keyLabel.forEach((a)=>{
        //     console.log(a[0].includes(this.props.data.recipe.label));
        // })

        for(let i = 0; i < this.props.keyLabel.length; i++){
             if(this.props.keyLabel[i][0].includes(this.props.data.recipe.label)){
                 console.log("alredy in favourites");
                 return null
             }
        }

        // console.log(this.props.myFavs.contains(this.props.data.label));
        const data = {
            data: {
                data: {
                    recipe: {
                        label: this.props.data.recipe.label,
                        calories: this.props.data.recipe.calories,
                        healthLabels: this.props.data.recipe.healthLabels,
                        image: this.props.data.recipe.image,
                        url: this.props.data.recipe.url,
                        yield: this.props.data.recipe.yield,
                        ingredientLines: this.props.data.recipe.ingredientLines
                    }
                }
            }
        }

        fetch("https://recipe-app-195913.firebaseio.com/hits.json",{
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok)

                return response.json();
                else
                    throw new Error('err not ok');
            })
            .then(data => {

            })
            .catch(err => console.log("err"))


        this.setState({
            removeFav: true
        })
    }

    removeFromFav = (e) => {
        e.preventDefault();
        console.log("remove me");
        //only temporary till fetch working for show
        this.setState({
            removeFav:false
        })

        const dbId = "";

        if(dbId.length > 1){
            //update state so button add to favs shows again
            this.setState({
                removeFav:false
            })

        const myDb2 = `https://recipe-app-195913.firebaseio.com/hits/${dbID}.json`;
        fetch(myDb2,{
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error('err not ok');
            })
            .then(data => {

            })
            .catch(err => console.log("err"))
            console.log("delete:", dbId);
        }else{
            return null
        }

    }

    render() {
        // console.log(this.props.keyLabel);
        // console.log(this.props.data.recipe.label);
        //
        // this.props.keyLabel.forEach((a)=>{
        //     console.log(a[0].includes(this.props.data.recipe.label));
        // })

        //url of yt video
        const url = `https://www.youtube.com/embed/${this.state.id}`;

        //list of ingredients
        const liItems = this.props.data.recipe.ingredientLines.map((a, i) => {
            return <li key={a + i + "2"} className={"bg-light list-group-item text-dark "}>{a}</li>
        })


        //show list of ingredients , img, some recipe data,button to orginal recipe, video proposition
        //add loader while page is not loaded else render list
        if (this.state.loader === true) {
            return (
                <div className={" col-md-12 p-4"}>
                    <Loader/>
                </div>);
        } else {

            return (
                <div className={"bg-secondary col-md-12"}>

                <div className={"item-details row"}>

                    <div className={"p-4 col-md-4"}>
                        <ul className={"list-group list-recipe w-100"}>
                            {liItems}
                        </ul>
                        {this.state.removeFav ? <a href="#" onClick={this.removeFromFav}
                                                   className={"add-to-fav-button btn btn-danger btn-block text-dark mt-4"}>Remove from Favourites</a> :
                        <a href="#" onClick={this.addToFavourites}
                           className={"add-to-fav-button btn btn-warning btn-block text-dark mt-4"}>Add to
                            Favourites!</a>}
                    </div>

                    <div className={"col-md-4 p-4"}>
                        <img className={"rounded img-fluid"} src={this.props.data.recipe.image} alt="food.img"/>

                    </div>

                    <div className={"col-md-4 text-light p-4"}>

                        <p>Details:</p>
                        <p>Portions: {this.props.data.recipe.yield}</p>
                        <p>Calories per
                            portion: {Math.round(this.props.data.recipe.calories / this.props.data.recipe.yield)}</p>
                        <a target="_blank" className={"btn btn-info btn-block mt-4"} role={"button"}
                           href={this.props.data.recipe.url}>Check out recipe!</a>
                    </div>


                </div>
                <div className={"p-4"}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src={url} className="embed-responsive-item"/>
                    </div>
                </div>

            </div>);
        }
    }
}
