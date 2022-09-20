import React from 'react';

class Beasts extends React.Component {
  render() {
    return (
      <>
        <div class="beasts">
          <h2>{this.props.title}</h2>
          <img id="imgBeasts" src={this.props.src} alt={this.props.alt} title={this.props.title} />
          <p>{this.props.description}</p>
        </div>
      </>
    );
  }
}

export default Beasts;