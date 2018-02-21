import React from "react";
import YTSearch from "youtube-api-search"
const API_KEY = "AIzaSyAQ6twlYXicuLXk2m0l9cGOkZpx4eYp6Iw";


class ListItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            id: ""
        }

    }


    componentWillMount() {
        let videoId;

        YTSearch({key: API_KEY , term: this.props.termYT}, function (data) {
            // console.log(data);
            console.log(data[0].id.videoId);
            videoId = data[0].id.videoId;

        });
        //how to wait for server responce it is passing undefind
        console.log(videoId)
        this.setState({
            id: videoId
        });

    }


    render() {



       const url = `https://www.youtube.com/embed/${this.state.id}`;

        console.log(url);
        const liItems = this.props.data.recipe.ingredientLines.map((a,i) => {
            return <li key={a+i+"2"} className={"bg-light list-group-item text-dark "}>{a}</li>
        })

        return (
            <div className={"item-details bg-dark w-100 d-flex flex-row justify-content-between align-content-center"}>
                <div className={""}>
                    <ul className={"list-group list-recipe p-4"}>
                    {liItems}
                    </ul>
                </div> 
                <div className={"d-flex flex-column justify-content-start align-items-start text-light p-4"}>
                    <img className={"mb-4"} src={this.props.data.recipe.image} alt="food.img"/>
                    <p>Details:</p>
                    <p>Portions: {this.props.data.recipe.yield}</p>
                    <p>Calories per portion: {Math.round(this.props.data.recipe.calories / this.props.data.recipe.yield)}</p>
                </div>
                <div className={"d-flex flex-column justify-content-start align-content-center p-4"}>
                    <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url} className="embed-responsive-item"/>
                    </div>
                    <a target="_blank" className={"btn btn-info btn-block mt-4"} role={"button"} href={this.props.data.recipe.url}>Check out recipe!</a>
                </div>

            </div>
        );
    }
}

export default ListItemDetails