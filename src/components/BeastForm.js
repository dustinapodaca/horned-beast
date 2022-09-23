import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

class BeastForm extends React.Component {

  render() {
    return (
      <Container className="py-2">
        <Form.Select onChange={this.props.handleForm} aria-label="Default select example">
          <option>Filter by Number of Horns</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">All the Horns!</option>
        </Form.Select>
      </Container>
    );
  }
}

export default BeastForm;