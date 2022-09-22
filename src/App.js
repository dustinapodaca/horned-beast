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
      selectedBeast: {},
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
    this.setState({ showModal: true });
    const filteredBeast = data.filter((beast) => {
        return beast._id === key;
      });
      this.setState({ selectedBeast: filteredBeast[0] });
    }

  render() {
    return (
      <>
        <Header />
        <Main 
          data={data}
          handleShow={this.handleShow}
          handleShowBeast={this.handleShowBeast}
        />
        <SelectedBeast 
          show={this.state.showModal}
          handleClose={this.handleClose}
          title={this.state.selectedBeast.title}
          image_url={this.state.selectedBeast.image_url}
          description={this.state.selectedBeast.description}
        />
        <Footer />
      </>
    );
  }
}

export default App;







//   render() {
//     return (
//       <>
//         <Header />
//         <Main />
//         <Footer />
//       </>
//     );
//   }
// }

// export default App;