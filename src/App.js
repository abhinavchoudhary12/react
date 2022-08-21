import React,{Component} from 'react';
import App1 from './/components/App1.jsx';
import Test from './/components/Test.jsx';
import Test2 from './/components/Test2.jsx';
import MainCounter from ".//components/MainCounter.jsx";
import List from ".//components/List.jsx";
import ParticlesFirst from './/components/ParticlesFirst.jsx';
class App extends Component {
  state = {  } 
  render() { 
    
    return (
      <>
      <App1 name={"Abhinav"} />
      <Test/>
     <Test2/>
     <List/>
     <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}} >This is counter </h1>
     <MainCounter/>
     <ParticlesFirst/>
       </>
    );
    }
    
  }

 
export default App;