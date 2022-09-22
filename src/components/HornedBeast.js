import React from 'react';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Beasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
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
    this.setState({ votes: this.state.votes + '❤️'});
  }

  // render method
  render() {
    return (
      <Card style={{ width: '18rem' }} className="h-100 mx-auto px-3">
        <Card.Img className="py-4" variant="top" src={this.state.image_url} alt={this.state.keyword} title={this.state.title} onClick={this.props.handleShowBeast} />
        <Card.Body className="py-auto">
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text>{this.state.description}</Card.Text>
          <Card.Text>Horns: {this.state.horns}</Card.Text>
          <Card.Text>Favorites: {this.state.votes}</Card.Text>
          <Button className="mb-3" variant="primary" onClick={this.handleClick}>Vote Favorite</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Beasts;




// render() {
//   return (
//     <>
//       <div class="beasts">
//         <h2>{this.props.title}</h2>
//         <img id="imgBeasts" src={this.props.src} alt={this.props.alt} title={this.props.title} />
//         <p>{this.props.description}</p>
//       </div>
//     </>
//   );
// }