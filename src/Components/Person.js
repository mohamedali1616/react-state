import React from "react";

import Card from 'react-bootstrap/Card';

class Person extends React.Component{
  constructor(){
    super()
    this.state={
      person : { fullName: "Shakira",
      bio: "Shakira, de son nom complet Shakira Isabel Mebarak Ripoll, née le 2 février 1977 à Barranquilla, est une auteure-compositrice-interprète colombienne", 
      imgSrc : "https://famuse.co/wp-content/uploads/2022/01/What-is-Shakiras-nationality.jpg", 
      profession: "Chanteuse"}, 
      count : 0

    }
  }
  componentDidMount(){
    setInterval(()=> this.setState({count : this.state.count + 1}), 1000);
  }
  render(){
    return(
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>{this.state.count}</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.person.imgSrc} alt="Not found" />
          <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Card.Title>{this.state.person.fullName}</Card.Title>
            <Card.Text >
                <h6>{this.state.person.profession}</h6>
                <p style={{textAlign:'justify'}}>{this.state.person.bio}</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
        
      

      </div>
    )
  }
}
export default Person