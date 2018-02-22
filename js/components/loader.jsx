import React from "react";


class Loader extends React.Component {

    render() {

        return (
            <div className={"d-flex justify-content-center align-items-center"}>
                 <div className={"loading"}></div>
            </div>
        );
    }
}

export default Loader