import React from 'react';
import RecipeApp from './recipe-list.jsx';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Nav from './nav.jsx';
import SearchBar from './search-bar.jsx';
import About from './a-page.jsx';
import Favourites from './favourites.jsx';
import Footer from './footer.jsx';


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
        console.log("przekazano : " + filers)
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
        //Route set default?? => on refresh/recipe blank page
        return (

            <BrowserRouter>
                <div>
                    <Nav/>
                    <div className={"container-main"}>
                        <SearchBar param={this.param} filters={this.filters}/>
                        <Route exact path="/" component={About}/>
                        <Route path="/recipe" render={() =>
                            <RecipeApp filters={this.state.filters} searchTerm={this.state.searchTerm}/>
                        }/>
                        <Route path="/fav" component={Favourites}/>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default App