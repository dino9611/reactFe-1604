import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class ModalComp extends Component {
  state = {};
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
      >
        <ModalHeader className="bg-modal text-white" toggle={this.props.toggle}>{this.props.title}</ModalHeader>
        <ModalBody className="bg-modal">{this.props.children}</ModalBody>
        <ModalFooter className="bg-modal" >
          <button className="btn btn-primary" onClick={this.props.saveData}>
            {this.props.Edit ? "Save Data" : "Add Data"}
          </button>
          {this.props.Edit ? (
            <button 
              className="btn btn-secondary"
              onClick={this.props.Cancel}
            >Cancel</button>
          ) : null}
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalComp;