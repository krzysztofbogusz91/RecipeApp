import React from "react";
import ListItemDetails from './list-item-details.jsx';

class ListItem extends React.Component {
    render() {
        console.log(this.props.data)
        return (
        <div className={""}>
            <li className={"list-group-item list-group-item-action d-flex flex-row justify-content-between align-content-center pt-2"}>
                <h4 className={"text-info font-weight-light"}>{this.props.data.recipe.label}</h4>
                <span className={"text-align-left "}>Clik!</span>
            </li>
            <ListItemDetails/>
        </div>
        );
    }
}

export default ListItem