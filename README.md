# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# The point of the game
When you move your mouse the cats stopped (They change their coordinates, but they can't move),\
but when you stop your mouse, the cats go to it.

# Components

## App

 - ### *Check if it has to be one cat or many cats*
 - ### *AnimalList component if many cats*
 - ### *Just Animal component if only one cat*


## AnimalList

- ### *Random count of cats by the state name animalCount*
- ### *range function*
- ### *Random image from the animalsArray in animals.js file*
- ### *Random coordinates*
- ### *Random delay of transition*
- ### *Mapping the new array from the random count of cats array*


## Animal

- ### *Added eventListener when it is mounted*
- ### *remove eventListener when it is unmounted*
- ### *Every update change animal's x and y*
- ### *Use backgroundImage that was sent from upper components*
- ### *Use sent delay to use it in transition of top and left animation (ease-in-out)*