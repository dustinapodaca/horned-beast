import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Container>
          <Modal className="border border-dark" show={this.props.showModal} onHide={this.props.handleClose} >
            <Modal.Header className="bg-dark text-light" closeButton closeVariant="white">
              <Modal.Title className="px-2">{this.props.modalBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="mx-auto bg-secondary">
              <img src={this.props.modalBeast.image_url} alt={this.props.modalBeast.title} className="w-75 m-auto" id="modalImg"/>
              <p id="modalText" className="border-top border-bottom border-dark pt-3 pb-3"> {this.props.modalBeast.description}</p>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light">
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer >
          </Modal>
        </Container>
      </>
    );
  }
}

export default SelectedBeast;