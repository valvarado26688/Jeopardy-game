import menu from "./menu.js";
import round1 from "./round1.js";
import questions from "./questions.js";
// import questions from "./questions.js";
//consider making the landing page with js dom manipulation for a smooth user experience
//game might need to be in a loop?

//sort placeholder questions 
//keep in mind that placeholder questions is an array of objects, hence it could be sorted iterativly 
//make two arrays of objects, 5 questions forEach category

//once questions are sorted, use the array to make a dynamic chart containing each question

// console.log(questions.firstRoundQuestions);
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
let game = new Game (null);
//===== dom manipulation here ====

const playButton = game.updateState(menu());
playButton.addEventListener("click", () => {
    // alert("button clicked!!!!");
    game.updateState(round1(questions.questions.firstRoundQuestions));
});
//================================

