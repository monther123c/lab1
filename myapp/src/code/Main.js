import React from "react";
import Animal from "./HornedBeast";
import ModelBeast from "./SelectedBeast"

import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  getInfoToMain(title, url,  dis) {
   
 <ModelBeast title = {title} img ={url}  dis = {dis}/>
  }

  render() {
    return (
      <div
        style={{
          display: "grid",
          column: "50px",
          

          paddingBottom: "100px",
          padding: "30px",
          margin: "50px",
        }}
      >
        <Row xs={1} md={3} className="g-4">
        {this.props.JsonData.map((element, key) => (
          <Animal
            key={key}
            imgURL={element.image_url}
            title={element.title}
           
            dis={element.description}
            onClick={this.getInfo}
          />
        ))}
        </Row>
      </div>
    );
  }
}

export default Main;


























































//