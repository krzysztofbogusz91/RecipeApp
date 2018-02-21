import React from "react";
import ListItemDetails from './list-item-details.jsx';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        }
    }

    toggleShow = () => {
        this.setState({
            show: !(this.state.show) ? true:false
        })
    }

    render() {

        console.log(this.state.show)
        return (
        <div className={""}>
            <li onClick={this.toggleShow} className={"list-group-item list-group-item-action d-flex flex-row justify-content-between align-content-center pt-2 "}>
                <h4 className={"text-info"}>{this.props.data.recipe.label}</h4>
                <span className={"text-align-left "}>Clik!</span>
            </li>
            {this.state.show ? <ListItemDetails data={this.props.data}/> : null }
        </div>
        );
    }
}

export default ListItem