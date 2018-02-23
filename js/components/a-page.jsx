import React from 'react';


class About extends React.Component {

    render() {

        return (
            <div className={"about text-info d-flex flex-column justify-content-center align-items-center mt-4"}>
                <h1>Recipe Search and Save Favourites App</h1>
                <h2>It is powered by React.js and Bootstrap</h2>
                <h3>As for saving data: Google Firebase on the backend</h3>

            </div>
        );
    }
}

export default About