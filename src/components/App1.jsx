

function App1(props) {
    const name="Abhinav Choudhary";
    const Call=()=>{
      const c=prompt("enter your name");
      alert(`${c} You are hacked!`);
    }
    function Call1(){
      
      console.log(`clicked`);
    }
    return (
      <>
        <h1>Hello World!</h1>
        <p>i am {name} and this is an jsx expression</p>
        <button className='btn btn-success' onClick={Call}>click me</button>
        <h3>i am just printing on console click me and check console</h3>
        <button className='btn btn-success' onClick={Call1}>click me</button>
        <h1>this is props {props.names}</h1>
                
      </>
    );
  }
export default App1;  