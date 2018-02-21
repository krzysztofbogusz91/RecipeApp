import React from "react";

class ListItemDetails extends React.Component {
    render() {

        const liItems = this.props.data.recipe.ingredientLines.map(a => {
            return <li className={"bg-light list-group-item text-dark "}>{a}</li>
        })

        return (
            <div className={"item-details bg-dark w-100 d-flex flex-row justify-content-between align-content-center"}>
                <div className={""}>
                    <ul className={"list-group list-recipe p-4"}>
                    {liItems}
                    </ul>
                </div> 
                <div className={"d-flex flex-column justify-content-start align-items-start text-light p-4"}>
                    <img className={"mb-4"} src={this.props.data.recipe.image} alt="food.img"/>
                    <p>Details:</p>
                    <p>Portions: {this.props.data.recipe.yield}</p>
                    <p>Calories per portion: {Math.round(this.props.data.recipe.calories / this.props.data.recipe.yield)}</p>
                </div>
                <div className={"d-flex flex-column justify-content-start align-content-center p-4"}>
                    <iframe src={""}/>
                    <a target="_blank" className={"btn btn-info btn-block mt-4"} role={"button"} href={this.props.data.recipe.url}>Check out recipe!</a>
                </div>

            </div>
        );
    }
}

export default ListItemDetails