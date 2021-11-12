# coffee RUSH 
## A barista simulator
### How to Play
<br>
Play the Game [Here](https://sgsouthard.github.io/)
<br>
You are the only barista on the clock right now.<br>
Take the customers orders and make their coffee as they ask.<br>
<br>
Use the WASD, the arrow keys, or click the coresponding buttons to add the correct amount of espresso shots, flavor pumps, milk, and sugar<br>
Press the Serve button or press Space to give the customer their coffee.<br>
If you messed up the order, you can click the Trash button or T to start the order over.<br>
If the order is right, your Tips will go up!<br>
If the order is wrong, you get no tips and move on to the next order.<br>
Complete as many orders as you can in 60 seconds and earn those Tips!<br>
---
### Screenshots<br>
 (maybe)<br>
---
### Code Snippets <br>
---
This game utilizes button presses to work, so everything came down to functions to properly work. 

**Switching Screens**
<br>
---
Everything is on one index page so I seperated the game screens into Divs and have a hidden class in the CSS that turns the display to none.
((insert screenshot showing the html next to the css))

I had a function to switch screens and adjust the hidden class depending on what screen was currently active. Switching to the Main Menu or Quitting the game resets the page entirely.
<br>
```
//Switching Screens

// start on the Main screen
document.onload = function () {
    let result = startScreen.hasAttribute("hidden");
    if (result = true) {
        startScreen.classList.remove('hidden');
    } else {
        console.log("it's visible");
    }
}

//switching to the How-To from Main Screen
howToButton.onclick = function () {
    let result = howToMenu.hasAttribute("hidden");
    if (result = true) {
        howToMenu.classList.remove('hidden');
        startScreen.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

//switching to the Play Game from Main
playGameButton.onclick = function () {
    let result = gameScreen.hasAttribute("hidden");
    if (result = true) {
        gameScreen.classList.remove('hidden');
        startScreen.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

//switching to Main Menu from Play Screen
quitButton.onclick = function () {
    window.location.reload();
}

//switching to the Main Menu from Instruction
menuFromInstruct.onclick = function () {
    window.location.reload();
}

//switching to the Game Screen from Instructions
playFromInstruct.onclick = function () {
    let result = gameScreen.hasAttribute("hidden");
    if (result = true) {
        gameScreen.classList.remove('hidden');
        howToMenu.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

//switching to the Main Menu from the Score Screen
menuFromScore.onclick = function () {
    window.location.reload();
}
```

**The Customer Algorithm**<br>
---
I wanted the game to randomly generate the customers orders each time so that you couldn't memorize them and they would always be different.

To start with I had to set up a few things.<br>
---
I made a base coffee order as a template to pull from. Flavors are not selected by the player and are just *"Flavor Text"*
```
//the base of the coffee order
//builds an object that both the Player and Customer Orders will be based from
let coffeeOrder = {
    'shots': [1, 2, 3],
    'milks': [1, 2, 3],
    'sugars': [1, 2, 3],
    'pumps': [1, 2, 3],
    'flavors': ['mocha', 'caramel', 'mint', 'pumpkin spice']
};
```
<br>
I made a set of random number generators, the first to generate a number between 0 and 3 so that some things may not appear in the order if they end up generating at 0, which does not really happen often
```
function generateRandomNumber() {
    let integer = Math.floor((Math.random() * 4));
    return integer;
};
```
<br>
This is a random number generator to generate numbers between 1 and 3 for the Espresso Shots so that shots would always be present in an order

```
function generateRandomNumberShots() {
    let integer = Math.ceil((Math.random() * 3));
    return integer;
};
```
<br>
And the last generator is the randomly pick
a flavor from the coffee order object so that the flavors will be randomized

```
function generateRandomFlavor() {
    let i = Math.floor((Math.random() * 4));
    // console.log(coffeeOrder.flavors[i]);
    return coffeeOrder.flavors[i];
};
```
<br>
Then I made an object to contain the customer order and a function to randomize the customer order each time it's called

```
let customerOrder = {};

function newCustomerOrder() {
    customerOrder = {
        'shots': generateRandomNumberShots(),
        'milks': generateRandomNumber(),
        'sugars': generateRandomNumber(),
        'pumps': generateRandomNumber(),
        'flavors': generateRandomFlavor()
    };
    return customerOrder;
};
```
<br>
**The Player Order**
