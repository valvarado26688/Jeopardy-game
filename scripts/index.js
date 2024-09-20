// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";


//this function stores all the FIRST questions of every catagory into an array
//not sure if this would be usefull
function firstQuestion(placeholderQuestions){
    const firstQuestions = {};

    placeholderQuestions.forEach((e, i) => {
        if(!firstQuestions[e.category]) {
            firstQuestions[e.category] = e.question;
        }
    });

    return firstQuestions;
}


//this works
class QuestionMachine5000 {
    constructor(questions) {
        this.questions = questions;
    }
    questionsByCat(category) {
        return this.questions.filter(q => q.category === category);
    }

    //method helps get any specific question easily.
    //filters category uses num as an index number(starting from 0) 
    questionsByCatNum(category, num){
        let question = this.questionsByCat(category);
        return question[num];
    }
}
let questions = new QuestionMachine5000(placeholderQuestions);

// console.log(questionList);

// console.log(nature);


//in order for the game to function in the way that i want it, i would need to put all category questions into 
//one event loop. that means the nature category must be able to be a category variable somehow. 

let questionList = questions.questionsByCat("Nature");
let nature = document.querySelectorAll(".nature");
nature.forEach((e, i) => { 
    e.addEventListener("click", () => {
        e.textContent = questionList[i].question;
    })
});
questionList = questions.questionsByCat("Animals");
let animals = document.querySelectorAll(".animals");
animals.forEach((e, i) => { 
    e.addEventListener("click", () => {
        e.textContent = questionList[i].question;
    })
});
questionList = questions.questionsByCat("Computers");
let computers = document.querySelectorAll(".computers");
computers.forEach((e, i) => { 
    e.addEventListener("click", () => {
        e.textContent = questionList[i].question;
    })
});
questionList = questions.questionsByCat("Mythology");
let mythology = document.querySelectorAll(".mythology");
mythology.forEach((e, i) => { 
    e.addEventListener("click", () => {
        e.textContent = questionList[i].question;
    })
});
questionList = questions.questionsByCat("History");
let history = document.querySelectorAll(".history");
history.forEach((e, i) => { 
    e.addEventListener("click", () => {
        e.textContent = questionList[i].question;
    })
});
questionList = questions.questionsByCat("General");
let general = document.querySelectorAll(".general");
general.forEach((e, i) => { 
    e.addEventListener("click", () => {
        e.textContent = questionList[i].question;
    })
});




console.log(nature);

