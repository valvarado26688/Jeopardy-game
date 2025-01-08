import menu from "./menu.js";
import round1 from "./round1.js";
import questions from "./questions.js";

window.addEventListener("load", function() {
    this.document.body.style.opacity = 1;
})

//its all js.. js

//game state 
console.log(questions.questions.firstRoundQuestions);
class Game {
    constructor(currentState) {
        this.currentState = currentState;
    }
    updateState(newState) {
        this.currentState = newState;
        return newState
    }
}



//player turn state needs to be handled
//player state needs to be handled

class Player {
    constructor(playerScore) {
        this.playerScore = playerScore;
    }
}





// let player1 = new P
let game = new Game (null);


//===== dom manipulation here ====

const playButton = game.updateState(menu());
playButton.addEventListener("click", () => {
    document.body.style.opacity = 0;

    //setTimout delays code for fade out animation
    setTimeout(() => {
        game.updateState(round1(questions.questions.firstRoundQuestions));
    }, 500);
});
//================================

