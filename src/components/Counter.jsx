import React,{Component} from "react";
class Counter extends Component {
    count=0;
    state = { count:this.count};
    increment=()=>{
        
        this.setState({count:this.state.count+1});
        
    }

    decrement=()=>{
        
        this.setState({count:this.state.count-1});
        
    }
    condition=()=>{
        let color=this.state.count>0?"btn btn-success":"btn btn-primary";
        return color;
    }
    condition1=()=>{
        let color=this.state.count<0?"btn btn-danger":"btn btn-primary";
        return color;
    }
    countCondition=()=>{
        let color=this.state.count>0?"btn btn-success":"btn btn-warning";
        return color;
    }
    render() { 
        return (
            <>
            <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}} >This is counter </h1>
            <button className={this.condition()} onClick={this.increment}>Increment</button>
            <span className={this.countCondition()}>{this.state.count}</span>
            <button className={this.condition1()} onClick={this.decrement}>Decrement</button>
            </>
        );
    }
    
}
 
export default Counter;
