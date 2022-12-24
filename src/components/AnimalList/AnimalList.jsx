import React from "react";
import Animal from "../Animal";
import animalsArray from "../../media/animals";


class AnimalList extends React.Component {
    state = {
        animalCount: Math.floor(Math.random() * animalsArray.length)
    }

    range = (size, startAt = 0) => {
        return [...Array(size).keys()];
    }

    takeRandom = () => {
        const idxAnimalsArray = Math.floor(Math.random() * animalsArray.length);
        return animalsArray[idxAnimalsArray]
    }

    randomCoordinates = (size) => {
        return Math.floor(Math.random() * size)
    }

    randomDelay = () => {
        return Math.random().toFixed(2) * 4 +0.5
    }

    render(){
        return (
            <>
                {this.range(this.state.animalCount).map((item) =>
                    <Animal key={item}
                            backgroundImage={this.takeRandom()}
                            delay={this.randomDelay()}
                            x={this.randomCoordinates(window.screen.width)}
                            y={this.randomCoordinates(window.screen.height)}/>
                )}
            </>
        )
    }
}

export default AnimalList