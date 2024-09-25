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
let sortedQuestions = new QuestionMachine5000(placeholderQuestions);

//query selectors are used to iterate event listeners on cells of each category. 
// let questionList = questions.questionsByCat("Nature");
// let nature = document.querySelectorAll(".nature");
// nature.forEach((e, i) => { 
//     e.addEventListener("click", () => {
//         e.textContent = questionList[i].question;
//     })
// });






//attempt to make one COLUMN in js and just loop it for all me categories 

let questionPoints = 100
// let column = document.getElementById("column1");
// const questionBox = Array(5);

// let graph = document.querySelectorAll(".column");

let gridContainer = document.getElementById("gridContainer");


//logic to make parent elements 
for(let i = 0; i < 6; i++) {
    let parentColumn = document.createElement("div");
    gridContainer.append(parentColumn);
    parentColumn.className = "parentColumn";
    for(let i = 0; i < 5; i++){
        let div = document.createElement("div");
        div.textContent = questionPoints;
        div.className = "divColumn";
        parentColumn.appendChild(div); //this was confusing
        questionPoints = questionPoints + 100;
        if(questionPoints === 600) {
            questionPoints = 100;
        }
    }
}







  
