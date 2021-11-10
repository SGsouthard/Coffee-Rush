//Establishing Menu Button Variables
let howToButton = document.querySelector("#how-to");
let playGameButton = document.querySelector("#play-game");
let menuFromInstruct = document.querySelector("#main-menu2");
let playFromInstruct = document.querySelector("#play-game2");
let tryAgainButton = document.querySelector("#try-again");
let quitButton = document.querySelector("#quit");
let makeCoffeeButton = document.getElementById("lets-start");

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

//start on the Main screen
// document.onload = function () {
//     let result = startScreen.hasAttribute("hidden");
//     if (result = true) {
//         startScreen.classList.remove('hidden');
//     } else {
//         console.log("it's visible");
//     }
// }

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
    let result = startScreen.hasAttribute("hidden");
    if (result = true) {
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
        gameScreen.classList.remove('hidden');
        howToMenu.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

//The Timer

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds + 's';

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

makeCoffeeButton.onclick = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};
//The Tip Counter

//The game Interval (60second round)

//The Order


// serveButton.onclick = function () {
//     console.log(customerOrder);
// }

// let customerOrder = {
//     let coffeeOrder = {
//         "shots":[1,2,3],
//         "milks":[1,2,3],
//         "sugars":[1,2,3],
//         "flavors":["mocha","caramel","mint"],
//         "pumps":[1,2,3]
//     }
//     //randomly generate an order
//     // return coffeeOrder;
//     console.log(coffeeOrder);
// }
// //     //4 elements in an order
// //     //but an order can be any combination of the 4
// //     //each element can have an amount up to 3
