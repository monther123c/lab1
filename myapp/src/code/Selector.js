import React from "react";
import Form from "react-bootstrap/Form";
import Main from "./Main";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      returnedValue: "2",
    };
  }

  handleSelect = (e) => {
    console.log("Selected");
    e.preventDefault();
    this.setState({
      returnedValue: e.target.value,
    });
  };

  onClickCompile = () => {
    this.props.first();
    console.log(this.state.returnedValue);
  };

  Sender1(e) {
    this.setState({
      returnedValue: e.target.value,
    });
  }
  Sender2(e) {
    this.setState({
      returnedValue: e.target.value,
    });
  }
  Sender3(e) {
    this.setState({
      returnedValue: e.target.value,
    });
  }
  Sender4(e) {
    this.setState({
      returnedValue: e.target.value,
    });
  }

  render() {
    let myMain;
    if (this.state.returnedValue == "1") {
      myMain = (
        <Main Number={this.state.returnedValue} JsonData={this.props.Data1} />
      );
    } else if (this.state.returnedValue == "2") {
      myMain = (
        <Main Number={this.state.returnedValue} JsonData={this.props.Data2} />
      );
    } else if (this.state.returnedValue == "3") {
      myMain = (
        <Main Number={this.state.returnedValue} JsonData={this.props.Data3} />
      );
    } else {
      myMain = (
        <Main Number={this.state.returnedValue} JsonData={this.props.Data4} />
      );
    }

    return (
      <>
        <Form.Select
          aria-label="Default select example"
          onChange={this.handleSelect}
        >
          <option onClick={this.Sender1} value="0">
            Default
          </option>
          <option onClick={this.Sender2} value="1">
            One
          </option>
          <option onClick={this.Sender3} value="2">
            Two
          </option>
          <option onClick={this.Sender4} value="3">
            Three
          </option>
        </Form.Select>

        {myMain}
      </>
    );
  }
}

export default Selector;