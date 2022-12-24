import React from "react";
import "./Animal.css";

class Animal extends React.Component {
    state = {
        x: this.props.x,
        y: this.props.y,
    };

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };


    render(){
        const { y, x } = this.state;
        return (
            <div className="animal"
                 style={{
                     top: y,
                     left: x,
                     backgroundImage: `url(${this.props.backgroundImage})`,
                     transition: `left ${this.props.delay}s ease-in-out, top ${this.props.delay}s ease-in-out`
                 }}
            ></div>
        )
    }
}

export default Animal