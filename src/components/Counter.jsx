import React,{Component} from "react";
class Counter extends Component {
    
    // increment=()=>{
        
    //     this.setState({count:this.state.count+1});
        
    // }

    // decrement=()=>{
        
    //     this.setState({count:this.state.count-1});
        
    // }

    condition=()=>{
        let color=this.props.counter.count>0?"btn btn-success":"btn btn-primary";
        return color;
    }
    condition1=()=>{
        let color=this.props.counter.count<0?"btn btn-danger mx-1":"btn btn-primary mx-1";
        return color;
    }
    countCondition=()=>{
        let color=this.props.counter.count>0?"btn btn-success mx-1":"btn btn-warning mx-1";
        return color;
    }
    // reset=()=>{
    //     this.setState({count:0})
    // }
   conditionZero=()=>{
   const a=this.props.counter.count===0?"Zero":this.props.counter.count;
    return a;   
}
    render() { 
        return (
            <>
            
            <button className={this.condition()} onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
            <span className={this.countCondition()}>{this.conditionZero()}</span>
            <button className={this.condition1()} onClick={()=>this.props.onDecrement(this.props.counter)}>Decrement</button>
            <button className="btn btn-primary mx-4" onClick={()=>this.props.onReset(this.props.counter)}>reset</button>
            <button className="btn btn-danger" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
            <br/>
            <br/>            
                
         
            </>
        );
    }
    
}
 

export default Counter;
