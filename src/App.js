import React from 'react';
import './css/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import data from './assets/data/data.json';
import SelectedBeast from './components/SelectedBeast.js';
import BeastForm from './components/BeastForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalBeast: {},
      displayBeasts: data,
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
    this.setState({modalBeast: selectedBeast[0]});
    console.log(this.state.modalBeast);
    }

  handleForm = (event) => {
    event.preventDefault();
    const selectedHorns = parseInt(event.target.value);
    let filteredBeasts
    if (selectedHorns) {
       filteredBeasts = data.filter(beast => beast.horns === selectedHorns);
    } else {
      filteredBeasts = data;
    }
    this.setState({displayBeasts: filteredBeasts});
    console.log(this.state.displayBeasts);
  }

  render() {
    return (
      <>
        <Header />
        <BeastForm handleForm={this.handleForm}/>
        <Main
          data={data}
          handleShowBeast={this.handleShowBeast}
          displayBeasts={this.state.displayBeasts}
          handleForm={this.handleForm}
        />
        <SelectedBeast 
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          modalBeast={this.state.modalBeast}
        />
        <Footer />
      </>
    );
  }
}

export default App;
