import React from "react";
import ListItemDetails from './list-item-details.jsx';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            removeFav: this.props.removeFav
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
        //handle toggle function on li element
        //pass props to details component, also yt search term for video matching recipe

        return (
            <li className={"list-unstyled  p-0 m-0"}>
                <div onClick={this.toggleShow}
                    className={"list-group-item list-group-item-action col-md-12 d-flex flex-row justify-content-end"}>
                    <h5 className={"text-info font-weight-light mr-auto pt-2"}>{this.props.data.recipe.label}</h5>
                    <span className={"pt-2 text-small"}>Clik to see details!</span>
                </div>
                {this.state.show && <ListItemDetails keyLabel={this.props.keyLabelPairs}  removeFav={this.state.removeFav} data={this.props.data} termYT={this.props.data.recipe.label}/>}
            </li>
        );
    }
}

export default ListItem