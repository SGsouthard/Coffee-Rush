//Establishing Menu Button Variables
let howToButton = document.querySelector("#how-to");
let playGameButton = document.querySelector("#play-game");
let menuFromInstruct = document.querySelector("#main-menu2");
let playFromInstruct = document.querySelector("#play-game2");
// let tryAgainButton = document.querySelector("#try-again");
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

// //switching to the Game Screen from Score Screen
// tryAgainButton.onclick = function () {
//     let result = gameScreen.hasAttribute("hidden");
//     if (result = true) {
//         gameScreen.classList.remove('hidden');
//         scoreScreen.classList.add('hidden');
//     } else {
//         console.log("it's visible")
//     }
// }

//switching to the Main Menu from the Score Screen
menuFromScore.onclick = function () {
    window.location.reload();
}

//The Timer

const timerElement = document.querySelector('#timer');
const startButton = makeCoffeeButton
let timer;
let time;
function countDown() {
    time--;
    timerElement.textContent = time;
    // console.log(time); // added in just to keep track of the time // avery :D
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

//The Tip Counter


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
    // console.log(coffeeOrder.flavors[i]);
    return coffeeOrder.flavors[i];
};

//random boolean generator
// let randomBoolean = Math.random() < 0.5; //fix to vary per call

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
    // console.log(customerOrder);

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

/*like the Player Order, this is just an empty vessel to hold the
added value of tips before printing it to the score bar*/
let potentialTips = 0;

/*a series functions mapped to the player buttons to adjust the
*Player Order and the visual buttons to match*/
function addShot() {
    if (playerOrder.shots <= 2) {
        playerOrder.shots = playerOrder.shots + 1;
        shotsButton.textContent = "Shots " + playerOrder.shots;
    };
    console.log(playerOrder);
    return  playerOrder, potentialTips;
}
shotsButton.addEventListener('click', addShot);

function addMilk() {
    if (playerOrder.milks <= 2) {
        playerOrder.milks = playerOrder.milks + 1;
        milkButton.textContent = "Milk " + playerOrder.milks;
        potentialTips = potentialTips + 0.50;
    };
    console.log(playerOrder);
    return  playerOrder, potentialTips;
}
milkButton.addEventListener('click', addMilk);

function addSugar() {
    if (playerOrder.sugars <= 2) {
        playerOrder.sugars = playerOrder.sugars + 1;
        sugarButton.textContent = "Sugar " + playerOrder.sugars;
        potentialTips = potentialTips + 0.50;
    };
    console.log(playerOrder);
    return playerOrder, potentialTips;
}
sugarButton.addEventListener('click', addSugar);

function addPump() {
    if (playerOrder.pumps <= 2) {
        playerOrder.pumps = playerOrder.pumps + 1;
        pumpsButton.textContent = "Pumps " + playerOrder.pumps;
        potentialTips = potentialTips + 0.50;
    };
    console.log(playerOrder);
    return playerOrder, potentialTips;
}
pumpsButton.addEventListener('click', addPump);

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
    if (e){
        e.preventDefault();
    }
    return playerOrder;
}
resetButton.addEventListener('click', resetCoffee);

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

//score screen update
let finalScore = document.getElementById("final-score");
finalScore.textContent = '$' + potentialTips.toFixed(2);

function gameStart() {
    buildCustomerOrder();
}
startButton.addEventListener('click', gameStart);

//start the game
