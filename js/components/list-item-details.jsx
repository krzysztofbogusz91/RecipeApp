import React from "react";
import YTSearch from "youtube-api-search";
import Loader from "./loader.jsx";
const API_KEY = "AIzaSyAQ6twlYXicuLXk2m0l9cGOkZpx4eYp6Iw";

class ListItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            loader:true
        }

        //Need to work on better video proposition search mechanism
        //sometimes gets weird propositions

        //feach data from yt api, change state and pass it to url
        YTSearch({key: API_KEY, term: this.props.termYT}, (data) => {
            //pass first youtube search for name of recipe
            this.setState({
                id: data[0].id.videoId,
                loader:false
            });

        });
    }
    //update data base, add element to user favouries list;
    addToFavourites = (event) => {
        event.preventDefault();
        const favItem ={};
        favItem.data = this.props.data;
        favListDb.favs.push(favItem);



        const myDb = "https://recipe-app-195913.firebaseio.com/hits/.json"

        const database = firebase.database();

        const ref = database.ref("hits");
        const data = {
            data: "some_data"
        }

        ref.push(data);

        // fetch(myDb,{
        //     method: 'POST',
        //     name:"my name",
        //     body:({favItem})
        // })
        //     .then(response => {
        //         if (response.ok)
        //             return response.json();
        //         else
        //             throw new Error('err responce not ok');
        //     })
        //     .then(data => {
        //         //update RecipeApp state.data - with data from API
        //        // console.log(data)
        //         console.log(data[0].start)
        //
        //     })
        //     .catch(err => console.log("err"))
    }


    render() {

        //url of yt video
        const url = `https://www.youtube.com/embed/${this.state.id}`;

        //list of ingredients
        const liItems = this.props.data.recipe.ingredientLines.map((a, i) => {
            return <li key={a + i + "2"} className={"bg-light list-group-item text-dark "}>{a}</li>
        })


        //show list of ingredients , img, some recipe data,button to orginal recipe, video proposition
        if(this.state.loader===true){
            return (
                <div className={"p-4"}>
                    <Loader/>
                </div>    );
        }else{

        return (<div>


            <div className={"item-details bg-dark w-100 d-flex flex-row justify-content-between align-content-center"}>

                <div className={""}>
                    <ul className={"list-group list-recipe p-4"}>
                        {liItems}
                    </ul>
                    <a href="#" onClick={this.addToFavourites} className={"btn btn-warning text-dark btn-block m-4"}>Add to
                        Favourites!</a>
                </div>
                <div className={"d-flex flex-column justify-content-start align-items-start text-light p-4"}>
                    <img className={"mb-4"} src={this.props.data.recipe.image} alt="food.img"/>
                    <p>Details:</p>
                    <p>Portions: {this.props.data.recipe.yield}</p>
                    <p>Calories per
                        portion: {Math.round(this.props.data.recipe.calories / this.props.data.recipe.yield)}</p>
                    <a target="_blank" className={"btn btn-info btn-block mt-4"} role={"button"}
                       href={this.props.data.recipe.url}>Check out recipe!</a>
                </div>


            </div>
            <div className={"bg-dark d-flex flex-column justify-content-start align-content-center p-4  "}>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url} className="embed-responsive-item"/>
                </div>
            </div>

        </div>);
    }
    }
}

export default ListItemDetails