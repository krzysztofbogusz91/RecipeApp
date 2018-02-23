import React from "react";
import YTSearch from "youtube-api-search";
import Loader from "./loader.jsx";

const API_KEY = "AIzaSyAQ6twlYXicuLXk2m0l9cGOkZpx4eYp6Iw";

export default class ListItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            loader: true
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

    //update data base, add element to user favouries list;
    addToFavourites = (event) => {
        event.preventDefault();

        //get acces to fire base
        const database = firebase.database();

        const ref = database.ref("hits");
        //Create new data object to pass it in props to ListItem
        // CAN NOT send this.props.data (copy from food api) for firebase (it containes empty keys => gives errors)
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
        //save data to firebase
        ref.push(data);

    }


    render() {

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
                <div className={"p-4"}>
                    <Loader/>
                </div>);
        } else {

            return (<div>


                <div
                    className={"item-details bg-dark w-100 d-flex flex-row justify-content-between align-items-center"}>

                    <div className={"d-flex flex-column justify-content-center align-items-center"}>
                        <ul className={"list-group list-recipe p-4"}>
                            {liItems}
                        </ul>
                        <a href="#" onClick={this.addToFavourites}
                           className={"add-to-fav-button btn btn-warning text-dark m-4"}>Add to
                            Favourites!</a>
                    </div>

                    <div>
                        <img className={"align-self-start"} src={this.props.data.recipe.image} alt="food.img"/>

                    </div>

                    <div className={"d-flex flex-column justify-content-start align-items-start text-light p-4"}>

                        <p>Details:</p>
                        <p>Portions: {this.props.data.recipe.yield}</p>
                        <p>Calories per
                            portion: {Math.round(this.props.data.recipe.calories / this.props.data.recipe.yield)}</p>
                        <a target="_blank" className={"btn btn-info btn-block mt-4"} role={"button"}
                           href={this.props.data.recipe.url}>Check out recipe!</a>
                    </div>


                </div>
                <div className={"bg-dark d-flex flex-column justify-content-start align-content-center p-4  w-100"}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src={url} className="embed-responsive-item"/>
                    </div>
                </div>

            </div>);
        }
    }
}
