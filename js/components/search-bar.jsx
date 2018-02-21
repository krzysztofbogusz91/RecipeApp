import React from "react";

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    changeInput = (event)=>{
        this.setState({
            [event.target.id] : event.target.value
        }, () =>{this.props.param(this.state.search)})
    }

    render(){
        return (
            <div>
                <div className={"form-group row mt-4 mb-1"}>
                    <div className="col-md-4">
                        <label htmlFor="search" className={"lead"}>Search for recipe,item or diet:</label>
                    </div>
                   <div className="col-md-8">
                       <input onChange={this.changeInput} className={"form-control"} id="search" type="text" value={this.state.search}/>
                   </div>
                </div>
                <div className={"list-group d-flex flex-row mt-4 mb-4"}>
                            <a href="#" className={"list-group-item p-2 list-group-item-action"}>Low Calories</a>
                            <a href="#" className={"list-group-item p-2 list-group-item-action"}>Gluten Free</a>
                            <a href="#" className={"list-group-item p-2 list-group-item-action"}>Vegan</a>
                            <a href="#" className={"list-group-item p-2 list-group-item-action"}>Vegeterian</a>
                            <a href="#" className={"list-group-item p-2 list-group-item-action"}>Lactose Free</a>
                            <a href="#" className={"list-group-item p-2 list-group-item-action"}>High Calories</a>
                </div>
            </div>
        );
    }
}

export default SearchBar