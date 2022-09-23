import React from 'react';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
      key: this.props._id,
      image_url: this.props.image_url,
      title: this.props.title,
      description: this.props.description,
      keyword: this.props.keyword,
      horns: this.props.horns,
      votes: '',
    };
  }

  // event handler
  handleClick = () => {
    this.setState({ votes: this.state.votes + '🤍'});
  }

  // render method
  render() {
    return (
      <Card style={{ width: '18rem' }} className="h-100 mx-auto bg-secondary text-light" border="dark">
        <Card.Title id="cardTitle" className="pt-3 pb-3 bg-dark rounded-top text-light p-3">{this.state.title}</Card.Title>
        <Card.Img id="cardImg" className="mx-auto bg-light mt-3 mb-2" variant="top" src={this.state.image_url} alt={this.state.keyword} title={this.state.title} onClick={() => {
          this.props.handleShowBeast(this.props.id)}} />
        <Card.Body className="py-auto">
          <Card.Text className="border-top border-dark pt-3">{this.state.description}</Card.Text>
          <Card.Text className="border-top border-dark pt-3">Number of Horns: <span id="hornText">{this.state.horns}</span></Card.Text>
          <Card.Text className="border-top border-bottom border-dark pt-3 pb-3">Total Votes: {this.state.votes}</Card.Text>
        </Card.Body>
        <div className="d-grid gap-2">
          <Button className="mt-1" variant="dark" size="md" onClick={this.handleClick}>Vote Favorite</Button>
        </div>
      </Card>
    );
  }
}

export default HornedBeast;
