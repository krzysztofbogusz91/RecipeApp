import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filters: []
        }
    }
    //change input value and pass search parameter to App
    changeInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        }, () => {
            this.props.param(this.state.search)
        })
    }
    //set and pass filter id to App - to add - or to remove from filters.state array
    setFilters = (event) => {
        event.preventDefault();
        document.getElementById(event.target.id).classList.toggle("active")
        this.props.filters(event.target.id);
    }

    render() {
        return (
            <div>
                <div className={"form-group row mt-4 mb-1"}>
                    <div className="col-md-4">
                        <label htmlFor="search" className={"lead"}>Search for recipe,item or diet:</label>
                    </div>
                    <div className="col-md-8">
                        <input onChange={this.changeInput} className={"form-control"} id="search" type="text"
                               value={this.state.search}/>
                    </div>
                </div>
                <div className={"list-group d-flex flex-row mt-4 mb-4"}>
                    <a id={"alcohol-free"} onClick={this.setFilters} href="#"
                       className={"list-group-item p-2 list-group-item-action"}>Alcohol Free</a>
                    <a id={"sugar-conscious"} onClick={this.setFilters} href="#" className={"list-group-item p-2 list-group-item-action"}>Low Sugar</a>
                    <a id={"vegan"} onClick={this.setFilters} href="#" className={"list-group-item p-2 list-group-item-action"}>Vegan</a>
                    <a id={"vegetarian"} onClick={this.setFilters} href="#" className={"list-group-item p-2 list-group-item-action"}>Vegeterian</a>
                    <a id={"tree-nut-free"} onClick={this.setFilters} href="#" className={"list-group-item p-2 list-group-item-action"}>Tree Nuts Free</a>
                    <a id={"peanut-free"} onClick={this.setFilters} href="#" className={"list-group-item p-2 list-group-item-action"}>Peanut-free</a>
                </div>
            </div>
        );
    }
}

export default SearchBar