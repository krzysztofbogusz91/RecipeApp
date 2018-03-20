import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'

//Tasks:
// - remove all api calls => to reducers
// - implement new api calls
// - add shoping list option (to print for each recipe)
// - add better names for components and clean up the code

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
