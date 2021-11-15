//Establishing Menu Button Variables
let howToButton = document.querySelector("#how-to");
let playGameButton = document.querySelector("#play-game");
let menuFromInstruct = document.querySelector("#main-menu2");
let playFromInstruct = document.querySelector("#play-game2");
let quitButton = document.querySelector("#quit");
let makeCoffeeButton = document.getElementById("lets-start");
let menuFromScore = document.querySelector("#return");
let orderBox = document.getElementById("customer-order");

//Establishing Div Screen Sections
let startScreen = document.querySelector("div.start");
let howToMenu = document.querySelector("div.instructions");
let gameScreen = document.querySelector("div.game");
let scoreScreen = document.querySelector("div.score");

//Establishing Play Buttons
let shotsButton = document.querySelector("#shots");
let pumpsButton = document.querySelector("#pumps");
let milkButton = document.querySelector("#milk");
let sugarButton = document.querySelector("#sugar");
let resetButton = document.querySelector("#reset");
let serveButton = document.querySelector("#serve");
let score = document.getElementById("score");

//Switching Screens

// start on the Main screen
document.onload = function () {
    let result = startScreen.hasAttribute("hidden");
    if (result = true) {
        startScreen.classList.remove('hidden');
    } else {
    }
}

//switching to the How-To from Main Screen
howToButton.onclick = function () {
    let result = howToMenu.hasAttribute("hidden");
    if (result = true) {
        howToMenu.classList.remove('hidden');
        startScreen.classList.add('hidden');
    } else {
    }
}

//switching to the Play Game from Main
playGameButton.onclick = function () {
    let result = gameScreen.hasAttribute("hidden");
    if (result = true) {
        gameScreen.classList.remove('hidden');
        startScreen.classList.add('hidden');
    } else {
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
    }
}

//switching to the Main Menu from the Score Screen
menuFromScore.onclick = function () {
    window.location.reload();
}

//The Timer. Thanks for all the help Avery and Perice!

const timerElement = document.querySelector('#timer');
const startButton = makeCoffeeButton
let timer;
let time;
function countDown() {
    time--;
    timerElement.textContent = time;
    if (time === 0) {
        action();
        timer = clearInterval(timer); // remove from pool
        time = 60;
        timer = setInterval(countDown, 1000); // add to pool
    }
}

function action() {
    gameScreen.classList.add('hidden');
    scoreScreen.classList.remove('hidden');
}

startButton.addEventListener('mouseup', function (e) {
    if (timer === undefined) {
        time = 60;
        timer = setInterval(countDown, 1000);
    }
});


//The Order

//the base of the coffee order
//builds an object that both the Player and Customer Orders will be based from
let coffeeOrder = {
    'shots': [1, 2, 3],
    'milks': [1, 2, 3],
    'sugars': [1, 2, 3],
    'pumps': [1, 2, 3],
    'flavors': ['mocha', 'caramel', 'mint', 'pumpkin spice']
};

//random number generator to generate a number between 0 and 3
function generateRandomNumber() {
    let integer = Math.floor((Math.random() * 4));
    return integer;
};

//a random number generator to generate a number between 1 and 3 for the espresso shots
//This makes sure that espresso shots will always be present in an order!
function generateRandomNumberShots() {
    let integer = Math.ceil((Math.random() * 3));
    return integer;
};

//random flavor generator
function generateRandomFlavor() {
    let i = Math.floor((Math.random() * 4));
    return coffeeOrder.flavors[i];
};

//the customer order variable itself
let customerOrder = {};

//the customers order as an object
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

//Builds the customer order
function buildCustomerOrder() {
    let customerOrder = newCustomerOrder();

    let finalOrderArr = [];

    if (customerOrder.shots > 1) {
        let shotsOrder = customerOrder.shots + " shots!";
        finalOrderArr.push(shotsOrder);
    } else {
        let shotsOrder = customerOrder.shots + " shot!";
        finalOrderArr.push(shotsOrder);
    }
    if (customerOrder.milks > 0) {
        let milksOrder = customerOrder.milks + " milk!,";
        finalOrderArr.push(milksOrder);
    } else if (customerOrder.milks = 1) {
        let milksOrder = customerOrder.milks + " milk!,";
        finalOrderArr.push(milksOrder);
    } else if (customerOrder.milks > 1) {
        let milksOrder = customerOrder.milks + " milks!,";
        finalOrderArr.push(milksOrder);
    }
    if (customerOrder.sugars > 0) {
        let sugarsOrder = customerOrder.sugars + " sugar!,";
        finalOrderArr.push(sugarsOrder);
    } else if (customerOrder.sugars = 1) {
        let milksOrder = customerOrder.sugars + " sugar!,";
        finalOrderArr.push(milksOrder);
    } else if (customerOrder.milks > 1) {
        let milksOrder = customerOrder.milks + " sugars!,";
        finalOrderArr.push(milksOrder);
    }
    if (customerOrder.pumps > 0) {
        let pumpsOrder = customerOrder.pumps + " pump of " + customerOrder.flavors + "!";
        finalOrderArr.push(pumpsOrder);
    } else if (customerOrder.pumps = 1) {
        let milksOrder = customerOrder.milks + " pump of " + customerOrder.flavors + "!";
        finalOrderArr.push(milksOrder);
    } else if (customerOrder.milks > 1) {
        let milksOrder = customerOrder.milks + " pumps of " + customerOrder.flavors + "!";
        finalOrderArr.push(milksOrder);
    }
    orderBox.textContent = finalOrderArr.join(' ');
    return finalOrderArr.join(' ');
};
//The Player Order
/*The Player also has a coffee object similar to the customer order
by pressing the player buttons, it adjusts the players coffee object to match
the customers object*/

let playerOrder = {
    'shots': 0,
    'milks': 0,
    'sugars': 0,
    'pumps': 0,
};

/*this is just an empty vessel to hold the
added value of tips before printing it to the score bar*/
let potentialTips = 0;

/*a series of functions mapped to the player buttons to adjust the
*Player Order and the visual buttons to match*/

/*
adds a shot to the player object, and updates the button
to reflect how many shots are in the order.
Each button press adds $0.50 to the tips score.
*/
function addShot() {
    if (playerOrder.shots <= 2) {
        playerOrder.shots = playerOrder.shots + 1;
        shotsButton.textContent = "Shots " + playerOrder.shots;
    };
    return playerOrder, potentialTips;
}
shotsButton.addEventListener('click', addShot);

/*
adds a milk to the player object, and updates the button
to reflect how many milks are in the order
Each button press adds $0.50 to the tips score.
*/
function addMilk() {
    if (playerOrder.milks <= 2) {
        playerOrder.milks = playerOrder.milks + 1;
        milkButton.textContent = "Milk " + playerOrder.milks;
        potentialTips = potentialTips + 0.50;
    };
    return playerOrder, potentialTips;
}
milkButton.addEventListener('click', addMilk);

/*
adds a sugar to the player object, and updates the button
to reflect how many sugars are in the order
Each button press adds $0.50 to the tips score.
*/
function addSugar() {
    if (playerOrder.sugars <= 2) {
        playerOrder.sugars = playerOrder.sugars + 1;
        sugarButton.textContent = "Sugar " + playerOrder.sugars;
        potentialTips = potentialTips + 0.50;
    };
    return playerOrder, potentialTips;
}
sugarButton.addEventListener('click', addSugar);

/*
adds a pump of flavor to the player object, and updates the button
to reflect how many pumps of flavor are in the order
Each button press adds $0.50 to the tips score.
*/
function addPump() {
    if (playerOrder.pumps <= 2) {
        playerOrder.pumps = playerOrder.pumps + 1;
        pumpsButton.textContent = "Pumps " + playerOrder.pumps;
        potentialTips = potentialTips + 0.50;
    };
    return playerOrder, potentialTips;
}
pumpsButton.addEventListener('click', addPump);

/*
Resets the player order object back to zero
*/
function resetCoffee(e) {
    playerOrder.shots = 0;
    shotsButton.textContent = "Shots ";
    playerOrder.milks = 0;
    milkButton.textContent = "Milk ";
    playerOrder.sugars = 0;
    sugarButton.textContent = "Sugar ";
    playerOrder.pumps = 0;
    pumpsButton.textContent = "Pump ";
    if (e) {
        e.preventDefault();
    }
    return playerOrder;
}
resetButton.addEventListener('click', resetCoffee);

/*
Compares the player order to the customer order.
If any of the flags are triggered, it resets the
Player order to zero, and generates a new customer order
If none of the flags are triggered, it adds the 
total tip score accumulated to the score box 
and updates the final score
*/
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

//setting up the buttons to be activated by key presses
//as well as clicking the buttons
document.addEventListener('keydown', buttonPresses);

function buttonPresses(e) {

    switch (e.key) {
        case 'w':
            //add espresso shot
            addShot();
            break;
        case 'ArrowUp':
            //add espresso shot
            addShot();
            break;
        case 'a':
            //add milks
            addMilk();
            break;
        case 'ArrowLeft':
            //add milks
            addMilk();
            break;
        case 'd':
            //add sugar
            addSugar();
            break;
        case 'ArrowRight':
            //add sugar
            addSugar();
            break;
        case 's':
            //add pumps
            addPump();
            break;
        case 'ArrowDown':
            //add pumps
            addPump();
            break;
        // case 'Space':
        //     //serve coffee
        //     serveCoffee();
        //     break;
        // case 't':
        //     //trash the order
        //     resetCoffee();
        //     break;
    }
}

//Final score screen update after the game is over
let finalScore = document.getElementById("final-score");
finalScore.textContent = '$' + potentialTips.toFixed(2);

/*This starts the game when the "Let's make some coffee"
*button is clicked, randomizing the first order.
*the same button is hooked to the timer but using the 
*'mouseup' listener so it only activates when the 
*button is let go*/
function gameStart() {
    buildCustomerOrder();
}
startButton.addEventListener('click', gameStart);

//start the game
