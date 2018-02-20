import React from "react";
import ListItem from './list-item.jsx';


class RecipeApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchTerm: "dinner"
        }

        const key = '86e4b9dddc0cb162507bffc60e7830a3';
        const appId = '0824c68c';
        let searchTerm = this.state.searchTerm;
        let myUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${key}&health=vegan`

        fetch(myUrl)
            .then(response =>{
                if (response.ok)

                    return response.json();
                else
                    throw new Error('err');
            })
            .then(data => {
                console.log(data.hits)
                this.setState({
                    data: data.hits
                })
            })
            .catch(err=>console.log("err"))
    }

    render() {

        const list = this.state.data.map(a=>{
            return <li>{a.recipe.label}</li>
        })
        return (
            <div className={"text-info"}>
                <h1 className={"display-3"}>Recipes List:</h1>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
export default RecipeApp;