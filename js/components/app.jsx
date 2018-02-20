import React from 'react';
import RecipeApp from './recipe-list.jsx';
import Nav from './nav.jsx';
import SearchBar from './search-bar.jsx';
import Footer from './footer.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <SearchBar/>
                <RecipeApp />
                <Footer/>
            </div>
        );
    }
}

export default App