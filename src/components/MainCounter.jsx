import React,{Component} from 'react';
import Counter from './Counter';
class MainCounter extends Component {
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
    render() { 
        return (
            <>
            <button className='btn btn-primary' onClick={this.resetAll}>Reset all</button>
            
            <button className='btn btn-success mx-3' onClick={this.add}>Add Counter</button>
            <br/>
            <br/>
            {this.state.counters.map((counter)=>(<Counter
            onIncrement={this.increment}
            onDecrement={this.decrement}
            counter={counter}
            key={counter.id}
            onDelete={this.delete}
            onReset={this.reset}
            />
            ))}
            
            </>
        );
    }
}
 
export default MainCounter;