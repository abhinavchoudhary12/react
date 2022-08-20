import React,{Component} from "react";
class List extends Component {
    state = {  }
     
    names=['abhinav','akshay','dagar','shashank']
    render() { 

        return (
        <>
        <h1>this is a list</h1>
        <ul className={"list-group"}>
             
               {this.names.map(index=>
                <li className={"list-group-item"} key={index} >
                    {index}
                     
                </li>
                            )} 
                  
            </ul>
        </>
        );  }
}
 
export default List;
