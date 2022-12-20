import React from 'react';
import './App.css'

class App extends React.Component {
  state = {
    x: 0,
    y: 0,
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    const { y, x } = this.state;

    return (
        <div className="square"
            style={{
              top: y,
              left: x,
            }}
        />
    );
  }
}

export default App;
