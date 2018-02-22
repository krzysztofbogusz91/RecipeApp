import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Nav from './nav.jsx';
import RecipeComponents from './recipe-app.jsx'
import About from './a-page.jsx';
import Favourites from './favourites.jsx';
import Footer from './footer.jsx';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBvTTgmFIQEf1Zof2Htb-7spHzT9OkE2BM",
    authDomain: "recipe-app-195913.firebaseapp.com",
    databaseURL: "https://recipe-app-195913.firebaseio.com",
    projectId: "recipe-app-195913",
    storageBucket: "",
    messagingSenderId: "688700843548"
};
firebase.initializeApp(config);

class App extends React.Component {

    render() {
    //Route set default?? => on refresh/recipe blank page

        return (
            <HashRouter>
                <div>
                    <Nav/>
                    <div className={"container-main"}>
                        <Route exact path="/" component={About}/>
                        <Route path="/recipe" component={RecipeComponents}/>
                        <Route path="/fav" component={Favourites}/>
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

export default App
