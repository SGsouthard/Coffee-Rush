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

//The game buttons
let newNumber = 0
function addNumber() {
    //when you click the PlayButtons, a number gets added to end of the word
    newNumber++;
};

shotsButton.addEventListener('click', function (e) {
    console.log(newNumber);
    shotsButton.textContent = shotsButton.textContent + newNumber;
});
//The Order


// function orderUp () {
//     console.log(customerOrder);
// }

//the base of the coffee order
let coffeeOrder = {
    'shots': [1,2,3],
    'milks': [1,2,3],
    'sugars': [1,2,3],
    'pumps': [1,2,3],
    'flavors': ['mocha','caramel','mint','pumpkin spice',]
};

//random number generator
function generateRandomNumber() {
    let integer = Math.floor((Math.random() * 3) + 1);
    console.log(integer);
    return integer;

};
//random flavor generator
function generateRandomFlavor(){
    let i = Math.floor((Math.random() * 4) + 1);
    // console.log(coffeeOrder.flavors[i]);
    return coffeeOrder.flavors[i];
};

function buildCustomOrder() {
    //randomly generates a True or False
    let randomBoolean = Math.random() < 0.5;
    let orderStart = "I want ";
    let orderEnd = ".";
    let customerOrder = {
        'shots': [true, generateRandomNumber()],
        'milks': [randomBoolean, generateRandomNumber()],
        'sugars': [randomBoolean, generateRandomNumber()],
        'pumps': [randomBoolean, generateRandomNumber()],
        'flavors': [randomBoolean, generateRandomFlavor()],
    };
    if (customerOrder.shots[0] === true) {
        let orderShots = customerOrder.shots[1] + " shots, ";
        orderShots;
    }
    if (customerOrder.milks[0] === true) {
        let orderMilks = customerOrder.milks[1] + " milks, ";
        orderMilks;
    }
    if (customerOrder.sugars[0] === true) {
        let orderSugars = customerOrder.sugars[1] + " sugars, ";
        orderSugars;
    }
    if (customerOrder.pumps[0] === true) {
        let orderPumps = customerOrder.pumps[1] + " pumps of " + customerOrder.flavors[1];
        orderPumps;
    };
    let finalOrder = orderStart + toString(orderShots) + toStringorder(Milks) + toString(orderSugars) + toString(orderPumps) + toString(orderEnd);
    console.log(finalOrder);
    // return finalOrder;
};
buildCustomOrder();


// function printCustomOrder() {
//     let completedString = "I want ";
//     // let x = randomBoolean;
//     buildCustomOrder();
//     let result = 
//     // console.log(x);
//     console.log(y);
//     //build something to pick and choose what to print
//     if (this.shots[1] = true) {
//         return customerOrder.shots[2] + " shots";
//     }


//     console.log(completedString);
//     return completedString;
// };
// printCustomOrder();