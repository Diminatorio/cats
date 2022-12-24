import React from 'react';
import './App.css'
import cat from "./media/icons/cat.svg"
import Animal from "./components/Animal";
import AnimalList from "./components/AnimalList";

class App extends React.Component {

  state = {
    isManyAnimals: false
  }

  onChangeAnimals = () => {
    this.setState({isManyAnimals : !this.state.isManyAnimals})
  }

  render() {
    return (
        <>
          <button className='change-button' onClick={this.onChangeAnimals}>
            {this.state.isManyAnimals ? "Animals": 'Cat'}
          </button>
            {!this.state.isManyAnimals ?
                <Animal backgroundImage={cat} delay={1}
                        x={0}
                        y={0}/>:
                <AnimalList/>}
        </>
    );
  }
}

export default App;
