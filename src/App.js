import React,{Component} from 'react';
import App1 from './/components/App1.jsx';
import Test from './/components/Test.jsx';
import Test2 from './/components/Test2.jsx';
import Counter from ".//components/Counter.jsx";

class App extends Component {
  state = {  } 
  render() { 
    
    return (
      <>
      <App1 name={"Abhinav"} />
      <Test/>
     <Test2/>
     <Counter/>
       </>
    );
    }
    
  }

 
export default App;