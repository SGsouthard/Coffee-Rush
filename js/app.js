//Establishing Menu Button Variables
let howToButton = document.querySelector("#how-to");
let playGameButton = document.querySelector("#play-game");
let menuFromInstruct = document.querySelector("#main-menu2");
let playFromInstruct = document.querySelector("#play-game2");
let tryAgainButton = document.querySelector("#try-again");
let quitButton = document.querySelector("#quit");
let makeCoffeeButton = document.getElementById("lets-start");
let menuFromScore = document.querySelector("#return");

//Establishing Div Screen Sections
let startScreen = document.querySelector("div.start");
let howToMenu = document.querySelector("div.instructions");
let gameScreen = document.querySelector("div.game");
let scoreScreen = document.querySelector("div.score");

//Establishing Play Buttons
let shotsButton = document.querySelector("#shots");
let flavorButton = document.querySelector("#flavor");
let milkButton = document.querySelector("#milk");
let sugarButton = document.querySelector("#sugar");
let resetButton = document.querySelector("#reset");
let serveButton = document.querySelector("#serve");

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
        clearInterval();
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
        clearInterval();
        gameScreen.classList.remove('hidden');
        startScreen.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

//switching to Main Menu from Play Screen
quitButton.onclick = function () {
    let result = startScreen.hasAttribute("hidden");
    if (result = true) {
        clearInterval();
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

//switching to the Main Menu from Instruction
menuFromInstruct.onclick = function () {
    let result = startScreen.hasAttribute("hidden");
    if (result = true) {
        clearInterval();
        startScreen.classList.remove('hidden');
        howToMenu.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

//switching to the Game Screen from Instructions
playFromInstruct.onclick = function () {
    let result = gameScreen.hasAttribute("hidden");
    if (result = true) {
        clearInterval();
        gameScreen.classList.remove('hidden');
        howToMenu.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

//switching to the Game Screen from Score Screen
tryAgainButton.onclick = function () {
    let result = gameScreen.hasAttribute("hidden");
    if (result = true) {
        clearInterval();
        gameScreen.classList.remove('hidden');
        scoreScreen.classList.add('hidden');
    } else {
        console.log("it's visible")
    }
}

//switching to the Main Menu from the Score Screen
menuFromScore.onclick = function () {
    let result = startScreen.hasAttribute("hidden");
    if (result = true) {
        clearInterval();
        startScreen.classList.remove('hidden');
        scoreScreen.classList.add('hidden');
    } else {
        console.log("it's visible")
    }
}

//The Timer

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
        // timer = setInterval(countDown, 1000); // add to pool
    }
}

function action() {
    gameScreen.classList.add('hidden');
    scoreScreen.classList.remove('hidden');
}

startButton.addEventListener('click', function (e) {
    if (timer === undefined) {
        time = 60;
        timer = setInterval(countDown, 1000);
    }
});

//The Tip Counter



//The Player Order
/*The Player also has a coffee object similar to the customer order
by pressing the player buttons, it adjusts the players coffee object to match
the customers object*/



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
    let integer = Math.floor((Math.random() * 3));
    return integer;
};

//a random number generator to generate a number between 1 and 3 for the espresso shots
//This makes sure that espresso shots will always be present in an order!
function generateRandomNumberShots() {
    let integer = Math.floor((Math.random() * 3) + 1);
    return integer;
};

//random flavor generator
function generateRandomFlavor() {
    let i = Math.floor((Math.random() * 4));
    // console.log(coffeeOrder.flavors[i]);
    return coffeeOrder.flavors[i];
};

//random boolean generator
let randomBoolean = Math.random() < 0.5;

function buildCustomerOrder() {
    //Builds the customer order
    let customerOrder = {
        'shots': [true, generateRandomNumberShots()],
        'milks': [randomBoolean, generateRandomNumber()],
        'sugars': [randomBoolean, generateRandomNumber()],
        'pumps': [randomBoolean, generateRandomNumber()],
        'flavors': [randomBoolean, generateRandomFlavor()],
    };

    let conditionsArr = [
        customerOrder.shots[0],
        customerOrder.milks[0],
        customerOrder.sugars[0],
        customerOrder.pumps[0]
    ];

    let finalOrderArr = [];

    // and 
    if (conditionsArr[0] === true && customerOrder.shots[1] > 1) {
        let shotsOrder = customerOrder.shots[1] + " shots!";
        finalOrderArr.push(shotsOrder);
    } else {
        let shotsOrder = customerOrder.shots[1] + " shot!";
        finalOrderArr.push(shotsOrder);
    }
    if (conditionsArr[1] === true && customerOrder.milks[1] > 0) {
        let milksOrder = customerOrder.milks[1] + " milk!,";
        finalOrderArr.push(milksOrder);
    } else if (customerOrder.milks[1] = 1) {
        let milksOrder = customerOrder.milks[1] + " milk!,";
        finalOrderArr.push(milksOrder);
    } else if (customerOrder.milks[1] > 1) {
        let milksOrder = customerOrder.milks[1] + " milks!,";
        finalOrderArr.push(milksOrder);
    }
    if (conditionsArr[2] === true && customerOrder.sugars[1] > 0) {
        let sugarsOrder = customerOrder.sugars[1] + " sugar!,";
        finalOrderArr.push(sugarsOrder);
    } else if (customerOrder.sugars[1] = 1) {
        let milksOrder = customerOrder.sugars[1] + " sugar!,";
        finalOrderArr.push(milksOrder);
    } else if (customerOrder.milks[1] > 1) {
        let milksOrder = customerOrder.milks[1] + " sugars!,";
        finalOrderArr.push(milksOrder);
    }
    if (conditionsArr[2] === true && customerOrder.pumps[1] > 0) {
        let pumpsOrder = customerOrder.pumps[1] + " pump of " + customerOrder.flavors[1] + "!";
        finalOrderArr.push(pumpsOrder);
    } else if (customerOrder.pumps[1] = 1) {
        let milksOrder = customerOrder.milks[1] + " pump of " + customerOrder.flavors[1] + "!";
        finalOrderArr.push(milksOrder);
    } else if (customerOrder.milks[1] > 1) {
        let milksOrder = customerOrder.milks[1] + " pumps of " + customerOrder.flavors[1] + "!";
        finalOrderArr.push(milksOrder);
    }
    return finalOrderArr.join(' ');
};
console.log(buildCustomerOrder());