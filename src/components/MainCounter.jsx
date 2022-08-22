import React,{Component} from 'react';
import Counter from './Counter';
class MainCounter extends Component {
    
    render() { 
        return (
            <>
            <button className='btn btn-primary' onClick={this.props.resetAll}>Reset all</button>
            
            <button className='btn btn-success mx-3' onClick={this.props.add}>Add Counter</button>
            <br/>
            <br/>
            {this.props.counters.map((counter)=>(<Counter
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
            key={counter.id}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
            add={this.props.add}
            />
            ))}
            
            </>
        );
    }
}
 
export default MainCounter;