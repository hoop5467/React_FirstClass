import {Component} from "react";

class Control extends Component{
    render(){

        return(
                <ul>
                    <li><a href={"/create"}
                        onClick={function (e){
                            e.preventDefault();
                            this.props.onChangeMode('create');
                        }.bind(this)}
                    >create</a></li>
                    <li><a href={"/update"}
                           onClick={function (e){
                               e.preventDefault();
                               this.props.onChangeMode('update');
                           }.bind(this)}
                    >update</a></li>
                    <li><button value={"delete"}
                                onClick={function (e){
                                    e.preventDefault();
                                    this.props.onChangeMode('delete');
                                }.bind(this)}
                    >delete</button></li>
                </ul>
        )
    }
}
export default Control;
