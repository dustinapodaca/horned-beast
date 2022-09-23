import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container } from 'react-bootstrap';

class BeastForm extends React.Component {

  render() {
    return (
      <Container className="py-4">
        <FloatingLabel controlId="floatingSelect" label="Click an image below or vote for your favorite.">
          <Form.Select onChange={this.props.handleForm} aria-label="Default select example">
            <option>Filter by Number of Horns 🤘🏼</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Way to Many Horns!</option>
          </Form.Select>
        </FloatingLabel>
      </Container>
    );
  }
}

export default BeastForm;