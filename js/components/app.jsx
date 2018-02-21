import React from 'react';
import RecipeApp from './recipe-list.jsx';
import Nav from './nav.jsx';
import SearchBar from './search-bar.jsx';
import Footer from './footer.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            searchTerm: ""
        }
    }


    param = (sea)=>{
        this.setState({
            searchTerm: sea.toLowerCase()
        })}

    render() {
        //asfdconsole.log();
        return (
            <div >
                <Nav/>
                <div className={"container-main"}>
                    <SearchBar param={this.param}/>
                    <RecipeApp searchTerm={this.state.searchTerm}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App