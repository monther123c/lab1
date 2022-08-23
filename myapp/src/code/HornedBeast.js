import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "",
    };
  }

  increamentFavHeart = () => {
    this.setState({
      counter: this.state.counter + "😍",
    });
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Body>
            <Card.Img
              variant="top"
              src={this.props.image}
              title={this.props.title}
              onClick={this.increamentFavHeart}
            />
            <Card.Text>
              <p>{this.props.descr}</p>
              <h3>Favorites: {this.state.counter}</h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;