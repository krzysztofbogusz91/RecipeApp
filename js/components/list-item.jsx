import React from "react";
import ListItemDetails from './list-item-details.jsx';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.data !== nextProps.data){
            this.setState({
                show:false
            })
        }
    }
    toggleShow = () => {

     this.setState({
         show: this.state.show ? false : true
     })

    }

    render() {

        return (
        <div className={""}>
            <li onClick={this.toggleShow} className={"list-group-item list-group-item-action d-flex flex-row justify-content-between align-content-center pt-2 "}>
                <h4 className={"text-info"}>{this.props.data.recipe.label}</h4>
                <span className={"text-align-left "}>Clik!</span>
            </li>
            {this.state.show && <ListItemDetails data={this.props.data}/>}
        </div>
        );
    }
}

export default ListItem