import placeholderQuestions from "./placeholder-questions.js";

//consider making the landing page with js dom manipulation for a smooth user experience
//game might need to be in a loop?

//sort placeholder questions 
//keep in mind that placeholder questions is an array of objects, hence it could be sorted iterativly 
//make two arrays of objects, 5 questions forEach category

//once questions are sorted, use the array to make a dynamic chart containing each question

//isolating last question
console.log(placeholderQuestions);
const finalQuestion = placeholderQuestions.pop();
console.log(finalQuestion);


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
console.log(firstRoundQuestions);

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
console.log(secondRoundQuestions);