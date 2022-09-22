import React from 'react';
import './css/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import data from './assets/data/data.json';
import SelectedBeast from './components/SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      displayBeast: {},
    };
  }
  
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  }

  handleShowBeast = (key) => { 
    const selectedBeast = data.filter(beast => beast._id === key);
    this.setState({showModal: true});
    this.setState({displayBeast: selectedBeast[0]});
    console.log(this.state.displayBeast);
    }

  render() {
    return (
      <>
        <Header />
        <Main 
          data={data}
          handleShowBeast={this.handleShowBeast}
        />
        <SelectedBeast 
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          displayBeast={this.state.displayBeast}
        />
        <Footer />
      </>
    );
  }
}

export default App;
