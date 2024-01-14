import React from "react";
import Person from "./Components/Person";
import Button from 'react-bootstrap/Button';

class App extends React.Component{
  constructor(){
    super()
    this.state={

      show : true
    }
  }
  
  render(){
    return(
      <div >
        <div style={{textAlign:'center', marginTop:'30px'}}>
            <Button onClick={()=> this.setState({ show : !this.state.show})} variant="outline-danger">SHOW</Button>
        </div>
        <br/>
        {/* <button onClick={()=> this.setState({ show : !this.state.show})}>SHOW</button> */}
        {this.state.show === true && <Person/>}
      </div>
    )
  }
}
export default App
