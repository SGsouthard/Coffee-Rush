# coffee RUSH 

## How to Play

<br>
Play the Game [Here](https://sgsouthard.github.io/Coffee-Rush/)

You are the only barista on the clock right now.<br>
Take the customers orders and make their coffee as they ask.<br>

Use the WASD, the arrow keys, or click the coresponding buttons to add the correct amount of espresso shots, flavor pumps, milk, and sugar<br>
Press the Serve button or press Space to give the customer their coffee.<br>
If you messed up the order, you can click the Trash button or T to start the order over.<br>
If the order is right, your Tips will go up!<br>
If the order is wrong, you get no tips and move on to the next order.<br>
Complete as many orders as you can in 60 seconds and earn those Tips!

### Code Snippets

This game utilizes button presses to work, so everything came down to functions to properly work. 

**Switching Screens**

Everything is on one index page so I seperated the game screens into Divs and have a hidden class in the CSS that turns the display to none.
((insert screenshot showing the html next to the css))

I had a function to switch screens and adjust the hidden class depending on what screen was currently active. Switching to the Main Menu or Quitting the game resets the page entirely.
<br>

```ruby
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

I wanted the game to randomly generate the customers orders each time so that you couldn't memorize them and they would always be different.

To start with I had to set up a few things.

I made a base coffee order as a template to pull from. Flavors are not selected by the player and are just *"Flavor Text"*

```ruby

let coffeeOrder = {
    'shots': [1, 2, 3],
    'milks': [1, 2, 3],
    'sugars': [1, 2, 3],
    'pumps': [1, 2, 3],
    'flavors': ['mocha', 'caramel', 'mint', 'pumpkin spice']
};
```

I made a set of random number generators, the first to generate a number between 0 and 3 so that some things may not appear in the order if they end up generating at 0, which does not really happen often

```ruby
function generateRandomNumber() {
    let integer = Math.floor((Math.random() * 4));
    return integer;
};
```

This is a random number generator to generate numbers between 1 and 3 for the Espresso Shots so that shots would always be present in an order

```ruby
function generateRandomNumberShots() {
    let integer = Math.ceil((Math.random() * 3));
    return integer;
};
```

And the last generator is the randomly pick
a flavor from the coffee order object so that the flavors will be randomized

```ruby
function generateRandomFlavor() {
    let i = Math.floor((Math.random() * 4));
    // console.log(coffeeOrder.flavors[i]);
    return coffeeOrder.flavors[i];
};
```

Then I made an object to contain the customer order and a function to randomize the customer order each time it's called

```ruby
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


**The Player Order**

I made an object to store the button presses the player makes in the game.

```ruby
let playerOrder = {
    'shots': 0,
    'milks': 0,
    'sugars': 0,
    'pumps': 0,
};
```

Each time the player clicks a button or presses the corresponding key, the object is updated. I also made it that the button can't be pressed more than 3 times since the max amount for each item can only be 3. For example;

```ruby
function addShot() {
    if (playerOrder.shots <= 2) {
        playerOrder.shots = playerOrder.shots + 1;
        shotsButton.textContent = "Shots " + playerOrder.shots;
    };
    console.log(playerOrder);
    return playerOrder, potentialTips;
}
shotsButton.addEventListener('click', addShot);
```

I also added a function to reset the playerOrder object if the player makes an incorrect press that resets the entire object to zero.

```ruby
function resetCoffee(e) {
    playerOrder.shots = 0;
    shotsButton.textContent = "Shots ";
    playerOrder.milks = 0;
    milkButton.textContent = "Milk ";
    playerOrder.sugars = 0;
    sugarButton.textContent = "Sugar ";
    playerOrder.pumps = 0;
    pumpsButton.textContent = "Pump ";
    console.log(playerOrder);
    if (e) {
        e.preventDefault();
    }
    return playerOrder;
}
resetButton.addEventListener('click', resetCoffee);
```

**Comparing the Orders**

I built another algorithm to compare the playerOrder object to the generated customerOrder object and determines if the player got the order correct by comparing each key:value to each other. 
It goes through a series of flags for each key, if the result is true, it resets the playerOrder and generates a new customerOrder. 
If none of the flags are triggered, it means the player was correct and updates the score to reflect the order.
It then resets the playerOrder and generates a new customerOrder to continue the game. This is all tied to the Serve button.

```ruby
function serveCoffee() {
    if (customerOrder.shots !== playerOrder.shots) {
        resetCoffee();
        buildCustomerOrder();
        return;
    } else if (customerOrder.milks !== playerOrder.milks) {
        resetCoffee();
        buildCustomerOrder();
        return;
    } else if (customerOrder.sugars !== playerOrder.sugars) {
        resetCoffee();
        buildCustomerOrder();
        return;
    } else if (customerOrder.pumps !== playerOrder.pumps) {
        resetCoffee();
        buildCustomerOrder();
        return;
    }
    score.textContent = '$' + potentialTips.toFixed(2);
    resetCoffee();
    buildCustomerOrder();
    let finalScore = document.getElementById("final-score");
    finalScore.textContent = '$' + potentialTips.toFixed(2);
};
serveButton.addEventListener('click', serveCoffee);
```

**The Scoring System**

I set the scoring to the button presses. 
The base score is a simple variable

```ruby
let potentialTips = 0;
```

Each time the player presses a key to update the order, it adds 50 cents to the variable so if an order has 3 shots, and you press the shots button 3 times, the variable is updated from 0 to 1.50.

```ruby
potentialTips = potentialTips + 0.50;
```

When the player serves an order, as long as none of the flags are triggered, the game updates the score box to reflect the amount of points earned.
It prints the score into a string in the score box to make it look like a dollar amount. To avoid having the game drop the last zero of the variable, I added a .toFixed(2) to the end of the potentialTips variable, to round it out nicely.

```ruby
score.textContent = '$' + potentialTips.toFixed(2);
```

and then when the game ends, the final score is then updated on the score screen to show how many tips you earned!

```ruby
let finalScore = document.getElementById("final-score");
finalScore.textContent = '$' + potentialTips.toFixed(2);
```

### Blockers and Future Plans
- I wanted to try and implement Booleans in order to change whether a key in the customerOrder object would display at all, like if a value in the Milks key was false, then the order could read;
> 1 shot, 2 sugars, 1 pump of mocha

Unfortunately it didn't work so I eliminated the booleans entirely. I think I could change the number generators to make 0 a stronger possibility. 
- I'd like to implement the posibility of having customers calling actual orders, like a latte or a cappuccino which would affect how it's made, like having steaming milk becoming a step
- I'd also like there to be trick orders to apply to the above idea like if someone asks for a cappuccino with no foam, then it would just be an americano and so on.
- I initially wanted this to be optimized for mobile but it's not quite there yet. Hopefully soon!!

### Final Takeaway
This project was fun!! I'm actually already thinking of new game ideas to try and implement with more of the knowledge I'll get from the rest of the class!

I'm excited to show this project off to everyone I know!
