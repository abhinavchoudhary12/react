import React,{Component} from "react";
import MainCounter  from "./MainCounter";
import Navbar from "./Navbar";


class Homepage extends Component {
    state = {  } 
    render() { 
        return (
        <>
        <Navbar/>
        <MainCounter/>
        
        </>);
    }
}
 
export default Homepage;