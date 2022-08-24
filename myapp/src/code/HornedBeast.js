import React from "react";

import Card from "react-bootstrap/Card";
import ModelBeast from "./SelectedBeast";
import Col from 'react-bootstrap/Col';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numofhearts: "",
      counter: 0,
      
      title:this.props.title,
      url:this.props.imgURL,
      dis:this.props.dis
    };
  }
  increaseNumberOfHearts = () => {
    this.setState({
      counter: this.state.counter + 1,
      numofhearts: this.state.numofhearts + "😍",
    });
    
  };

  getInfo = () =>{

 

    

  }


  render() {
    return (
      <> 
      <Col>
      <Card onClick={this.increaseNumberOfHearts}  className = "container"
        style={{
          width: "18rem",
          border: "4px solid rgba(106,147,240,255)",
          width: "250px",
          height: "500px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "30px",
          borderRadius: "20px",
          backgroundColor: "black",
        }}
      >
        <h2 style={{ color: "rgba(140,45,226,255)" }}> {this.props.title}</h2>
        <Card.Img className= "container-img "
          style={{
            border: "2px solid rgba(140,45,226,255)",
            width: "200px",
            height: "200px",
            borderRadius: "20px",
          }}
          variant=""
          src={this.props.imgURL}
          
        />
        <Card.Body>
          <Card.Title style={{ color: "rgba(140,45,226,255)" }}>
            {this.props.name}
          </Card.Title>
          <Card.Text style={{ color: "rgba(140,45,226,255)" }}>
            {this.props.dis}{" "}
          </Card.Text>
          <Card.Text
            style={{
              color: "red",
              fontSize: "20px",
              fontWeight: "bold",
              FormText: "Times New Roman, Times, serif",
            }}
          >
            Favorties: {this.state.counter}
            <br></br> {this.state.numofhearts}
          </Card.Text>
        </Card.Body>
      
      <div   className = "container-btn">
      <  ModelBeast   name = {this.props.name} url = {this.props.imgURL} dis = {this.props.dis} title = {this.props.title} />
      </div>
      </Card>
      </Col>
      
     
       </>
 
    );
  }
}

export default HornedBeast;



















































//