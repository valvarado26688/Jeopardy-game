import placeholderQuestions from "./placeholder-questions.js";

//isolating last question
const finalQuestion = placeholderQuestions.pop();

// counter < 5 = first questions; counter > 5 = second questions
//this is the easiest way i can come up with on my own, and understand
let counter = -1;
const firstRoundQuestions = placeholderQuestions.map((e) => {
    counter++;
    if(counter === 10) {
        counter = 0;
    }
    if(counter < 5) {
        return e;
    }
    return null;
}).filter((e) => e !== null);
// console.log(firstRoundQuestions);

counter = -1
const secondRoundQuestions = placeholderQuestions.map((e) => {
    counter++;
    if(counter === 10) {
        counter = 0;
    }
    if(counter >= 5) {
        return e;
    }
    return null;
}).filter((e) => e !== null);
// console.log(secondRoundQuestions);
const questions = {
    firstRoundQuestions: firstRoundQuestions,
    secondRoundQuestions: secondRoundQuestions,
    finalQuestion: finalQuestion
}

export default {questions};