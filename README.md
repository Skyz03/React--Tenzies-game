# The Tenzies App Created using React.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is the Tenzies Game application challenge which is not compatible with mobile devices but has used some of the react fundamentals such as props, useState, useEffect and conditional rendering and event listners.

### The challenge

These are the 4 main feature added to the notes application.
- Generating 10 random components of dice.
- Mapping Array to Die Components.
- Being able to roll the Dice with the buttons.
- Holding the dice when clicked and Ending game after all held.

### Screenshot

![image](https://user-images.githubusercontent.com/42742924/161430806-d95dcd1b-94cb-4f54-bf5d-c688394c7b05.png)


### Links

- Solution URL: [Code](https://github.com/Skyz03/React--Tenzies-game
- Live Site URL: [Live](https://skyz03.github.io/React--Tenzies-game/)

## My process

First analysed the code base provided by different react packages such as react split, showdownand Reactmde
Then add the features slowly as mentioned above to complete the challenge.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library

### What I learned

I learned a lot about how to implement the fundamentals of react.

Generating a random of 10 dices
```
 function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }
```

Setting the hold dice which are clicked
```
     const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };
```

Checking if you won or not using Tenzies state
```
  let [tenzies, setTenzies] = React.useState(false);

  //A useeffect which runs everytime when dice array changes. Also checks. if dice are held and all matches the same value.
  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);
 ```

### Continued development

Could use ideas provided in the next video.

### Useful resources

Scrimba and Stackoverflow/MDN Docs.

## Author

Skyz03

## Acknowledgments

Bob for free React course from Scrimba.
