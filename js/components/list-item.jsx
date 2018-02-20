import React from "react";
import ListItemDetails from './list-item-details.jsx';

class ListItem extends React.Component {
    render() {
        return (
            <li>
               Item
                <ListItemDetails/>
            </li>
        );
    }
}

export default ListItem