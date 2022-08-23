














































































import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <Row xs={1} md={4} className="g-4">
        {data.map((card) => {
          return (
            <HornedBeast
              title={card.title}
              image={card.image_url}
              descr={card.description}
            />
          );
        })}
      </Row>
    );
  }
}

export default Main;