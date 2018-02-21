import React from "react";
import ListItem from './list-item.jsx';


class RecipeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    getData = () => {

        const key = '5b315f7bf33cf8394db9196b3f6e7a88';
        const appId = '0824c68c';
        //gets search value from search-bar => app => here
        let searchTerm = this.props.searchTerm;
        let myUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${key}`;

        fetch(myUrl)
            .then(response => {
                if (response.ok)

                    return response.json();
                else
                    throw new Error('err responce not ok');
            })
            .then(data => {
                //update RecipeApp state.data - with data from API
                console.log(data.hits)
                this.setState({
                    data: data.hits
                })
            })
            .catch(err => console.log("err"))
    }


    render() {

        //list all hits from data and pass each val to  => list-item
        //set ListItem state.show to false every new search query
        const list = this.state.data.map(a => {
            return <ListItem data={a}/>
        })

        //this.getData on click fetch new data from api => new search each time
        return (
            <div className={""}>
                <a className={"btn btn-info btn-block"} role={"button"} onClick={this.getData}>Get Recipe List:</a>

                <ul className={"text-info mt-5 list-group list-recipes"}>
                    {list.length === 0 ? "Write query in search box to look for recipes" : list}
                </ul>

            </div>
        )
    }
}

export default RecipeApp;


