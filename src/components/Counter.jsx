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
        let color=this.state.count<0?"btn btn-danger mx-1":"btn btn-primary mx-1";
        return color;
    }
    countCondition=()=>{
        let color=this.state.count>0?"btn btn-success mx-1":"btn btn-warning mx-1";
        return color;
    }
    reset=()=>{
        this.setState({count:0})
    }
  
    render() { 
        return (
            <>
            
            <button className={this.condition()} onClick={this.increment}>Increment</button>
            <span className={this.countCondition()}>{this.state.count}</span>
            <button className={this.condition1()} onClick={this.decrement}>Decrement</button>
            <button className="btn btn-primary mx-4" onClick={this.reset}>reset</button>
            <br/>
            <br/>            
                
         
            </>
        );
    }
    
}
 

export default Counter;
