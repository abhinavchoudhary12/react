import React,{Component} from "react";
import MainCounter  from "./MainCounter";
import Navbar from "./Navbar";


class Homepage extends Component {
    state = { counters:[{id:1,count:1},
        {id:2,count:0},
        {id:3,count:1},
        {id:4,count:2},] }
increment=(counter)=>{
const counters=[...this.state.counters];
const index=counters.indexOf(counter);
counters[index].count=counters[index].count+1;
this.setState(counters)
} 
decrement=(counter)=>{
const counters=[...this.state.counters];
const index=counters.indexOf(counter);
counters[index].count=counters[index].count-1;
this.setState(counters)
} ;
resetAll=()=>{
const c=this.state.counters.map((counter)=>{
counter.count=0;
return counter
}) 
this.setState({c});
}
delete=(counterid)=>{
const counters=this.state.counters.filter((counter)=>
counter.id!==counterid
);
this.setState({counters});

};
add=()=>{

const counter=this.state.counters.push({id:this.state.counters.length+1,count:0});
this.setState({counter})}
reset=(counter)=>{

const counters=[...this.state.counters]
const index=counters.indexOf(counter)
counters[index].count=0;
this.setState(counters)
}
lengthCounter=()=>
{
    let counter= this.state.counters.filter((c)=>c.count>0).length;
    return counter;
}
    render() { 
        return (
        <>
        <Navbar countCounters={this.lengthCounter()}/>
        <MainCounter counters={this.state.counters}
       onIncrement={this.increment}
       onDecrement={this.decrement}
       onDelete={this.delete}
       onReset={this.reset}
       add={this.add}
       resetAll={this.resetAll}

        
        />
        
        </>);
    }
}
 
export default Homepage;