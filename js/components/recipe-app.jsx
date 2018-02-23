import React from 'react';
import RecipeApp from './recipe-list.jsx';
import SearchBar from './search-bar.jsx';

class RecipeComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            filters: []
        }
    }

    //toggle fileters on click
    filters = (filers) => {
        //if pased filter is not present in filters add it
        if (this.state.filters.indexOf(filers) === -1) {
            this.setState({
                filters: [filers, ...this.state.filters]
            });
        } else {
            //if filters contain cliked filtr remove it
            const newFilters = this.state.filters.filter(a => a !== filers);
            this.setState({
                filters: newFilters
            });

        }
    }
    //gets search parameter from search input, upadates App state to pass searched value to => RecipeApp
    param = (sea) => {
        this.setState({
            searchTerm: sea.toLowerCase()
        })
    }

    render() {
        return (
            <div className={""}>
                <SearchBar param={this.param} filters={this.filters}/>
                <RecipeApp filters={this.state.filters} searchTerm={this.state.searchTerm}/>
            </div>
        );
    }
}

export default RecipeComponents