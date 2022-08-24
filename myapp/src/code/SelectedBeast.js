import React from "react";
import { ModalBody } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Modal
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          show={this.state.show}
          handleClose={this.hideModal}
        >
          <p> {this.props.title} </p>
          <img src={this.props.url} />
          <p> {this.props.dis}</p>

          <Modal.Footer>
            <Button
              style={{ width: "50px", height: "50px" }}
              onClick={this.handleClose}
              variant="secondary"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <button
          style={{
            width: "200px",
            height: "200px",
            overflow: "hidden",
            backgroundColor: "Transparent",
            backgroundRepeat: "no-repeat",
            border: "none",
          }}
          type="image"
          onClick={this.showModal}
        ></button>
      </>
    );
  }
}

export default SelectedBeast;





//re












