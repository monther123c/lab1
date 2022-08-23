import React from 'react';
import Header from './code/Header.js';
import Main from './code/Main.js';
import Footer from './code/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./code/data.json";
import SelectedBeast from "./code/SelectedBeast.js";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      displayModal: false,
      selectedBeast: {}
    }; 
  }
  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({selectedBeast, displayModal:true});
  }
  hideModal = () => {this.setState({displayModal: false});
  }

  render(){
    return (
      <div> 
        <Header/>
        <Main
            showModal={this.showModal}
            beasts={this.state.beastData}
          />
           <SelectedBeast
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast} />
        <Footer/>
      
      </div>

    )
  }
}
export default App;
//re
