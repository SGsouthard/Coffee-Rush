//Establishing Menu Button Variables
let howToButton = document.querySelector("#how-to");
let playGameButton = document.querySelector(".play-game");
let menuFromInstruct = document.querySelector("#main-menu2")
let playFromInstruct = document.querySelector("#play-game2")
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
document.onload = function() {
    
}

//switching to the How-To
howToButton.onclick = function() {
    let result = howToMenu.hasAttribute("hidden")
    console.log(howToMenu);
    if (result = true) {
        howToMenu.classList.remove('hidden');
        // startScreen.classList.add('hidden');
    } else {
        console.log("it's visible");
    }
}

// }

// playGameMenu function() {

// }

// scoreMenu function() {

// }

//The Timer

//The Tip Counter
// tipCounter function() {

// }

//The game Interval (60second round)

//Play Button Counter
// addCoffeeBit function() {

// }

//The Order


// let customerOrder = {
//     const coffeeOrder = {
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
//     //4 elements in an order
//     //but an order can be any combination of the 4
//     //each element can have an amount up to 3

serveButton.onclick = function() {
    console.log("I've been clicked")
}
