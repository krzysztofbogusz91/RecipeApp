import React from "react";
import ListItemDetails from './list-item-details.jsx';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    //solves show problem after feach new data => all li details are hidden now on new search
    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.setState({
                show: false
            })
        }
    }

    toggleShow = () => {
        //toggle details component on click
        this.setState({
            show: this.state.show ? false : true
        })
    }

    render() {
        //handle toggle funcion on li element
        //pass props to details component, also yt search term for video matching recipe

        return (
            <div className={""}>
                <li onClick={this.toggleShow}
                    className={"list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center "}>
                    <h5 className={"text-info font-weight-light"}>{this.props.data.recipe.label}</h5>
                    <span className={"text-align-left text-small"}>Clik to see details!</span>
                </li>
                {this.state.show && <ListItemDetails data={this.props.data} termYT={this.props.data.recipe.label}/>}
            </div>
        );
    }
}

export default ListItem