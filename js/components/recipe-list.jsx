import React from "react";
import ListItem from './list-item.jsx';



class RecipeApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        //this.props.searchTerm
        const key = '5b315f7bf33cf8394db9196b3f6e7a88';
        const appId = '0824c68c';
        let searchTerm = "vegan";
        let myUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${key}`;
       // this.getData(searchTerm, myUrl);

    }

    getData = () =>{

        const key = '5b315f7bf33cf8394db9196b3f6e7a88';
        const appId = '0824c68c';
        let searchTerm = this.props.searchTerm;
        let myUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${key}`;

        fetch(myUrl)
            .then(response =>{
                if (response.ok)

                    return response.json();
                else
                    throw new Error('err responce not ok');
            })
            .then(data => {
                console.log(data.hits)
                this.setState({
                    data: data.hits
                })
            })
            .catch(err=>console.log("err"))

    }


    render() {


        const list = this.state.data.map(a=>{
            return <ListItem data={a}/>
        })
        return (
            <div >
                <a className={"btn btn-info btn-block"} role={"button"} onClick={this.getData}>Get Recipe List:</a>
                <ul className={"text-info mt-5 list-group"}>
                    {list}
                </ul>
            </div>
        )
    }
}
export default RecipeApp;


