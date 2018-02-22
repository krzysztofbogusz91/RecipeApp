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
        const searchTerm = this.props.searchTerm;
        const filtersArr = this.props.filters;
        let myUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${key}&healthLabels=${filtersArr}&to=30&ingr=8`;

        fetch(myUrl)
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error('err responce not ok');
            })
            .then(data => {
                //update RecipeApp state.data - with data from API
                this.setState({
                    data: data.hits
                })
            })
            .catch(err => console.log("err"))
    }

    render() {
        //check if filters are longer than 0 if yes do backup filter on healthLabels => one from api is far from perfect
        let list = this.state.data;

        if (this.props.filters.length > 0) {
            list = this.state.data.filter(a => {
                //set new variable for element api health tags to lower case => match my filters
                let healthLabelsLower = a.recipe.healthLabels.map(a => a.toLowerCase())

                let found = [];
                //check if healthLabelsLower contains all of filters
                this.props.filters.forEach(e => {
                    if (healthLabelsLower.includes(e)) {
                        found.push(true);
                    } else {
                        found.push(false);
                    }
                })
                //if all true return element else discard
                return found.includes(false) ? false : a;
            })
            //print menu list
            list = list.map((a, i) => {
                return <ListItem key={a + i} data={a}/>
            })
        } else {
            //list all hits from data and pass each val to  => list-item
            list = list.map((a, i) => {
                return <ListItem key={a + i} data={a}/>
            })
        }
        //this.getData on click fetch new data from api => new search each time
        return (
            <div className={""}>
                <a className={"btn btn-info btn-block"} role={"button"} onClick={this.getData}>Get Recipe List:</a>
                <ul className={"text-info mt-5 list-group list-recipes"}>
                    {list.length === 0 ? "Write query in search box and hit search button to look for recipes..." : list}
                </ul>
            </div>
        )
    }
}

export default RecipeApp;


