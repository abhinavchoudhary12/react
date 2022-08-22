import React,{Component} from "react";
class Navbar extends Component {
    state = {  } 
    conditionClr=()=>{
        let clr=this.props.countCounters<1?"red":"white";
        return clr;
    }
    render() { 
        return (
        <>
        <div className="navbar navbar-expand-lg navbar-light bg-secondary" >
            <h3 style={{color:this.conditionClr()}}>Total Counters:{this.props.countCounters}</h3>
        </div>
        <br/>
        </>
        );
    }
}
 
export default Navbar;