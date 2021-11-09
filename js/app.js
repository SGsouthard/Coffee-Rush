//Establishing Menu Button Variables
let howToButton = document.querySelector("#how-to");
let playGameButton = document.querySelector("#play-game");
let menuFromInstruct = document.querySelector("#main-menu2");
let playFromInstruct = document.querySelector("#play-game2");
let tryAgainButton = document.querySelector("#try-again");
let quitButton = document.querySelector("#quit");

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
    setInterval(timerCountdown, 1000);
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
    setInterval(timerCountdown, 1000);
}

//The Timer
function timerCountdown () { //declare the function
    //display the timer on the page in the #timer element
    let timeLeft = 60;
    let countdownTimer = setInterval(function(){
        if (timeLeft <= 0){
            clearInterval(countdownTimer);
            clearInterval(timerCountdown);
            document.getElementById("timer").innerText = "Times Up"
        } else {
            document.getElementById("timer").innerText = timeLeft + "s";
        }
        timeLeft -= 1;
    }, 1000);
}
// let timeleft = 60;
// let downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("timer").innerHTML = "Finished";
//   } else {
//     document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
//   }
//   timeleft -= 1;
// }, 1000);

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
