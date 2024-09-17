// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });



// console.log(placeholderQuestions.category);
// console.log(placeholderQuestions[0]);
// console.log(placeholderQuestions.includes(category, "nature"));
// let cat = placeholderQuestions.filter(() => placeholderQuestions.category === "Nature");
// console.log(cat);

// placeholderQuestions.forEach((e) => {
//     console.log(e.category);
// })

// let q100 = document.getElementById("q100");




//this function stores all the FIRST questions of every catagory into an array
//not sure if this would be usefull
function firstQuestion(placeholderQuestions){
    const firstQuestions = {};

    placeholderQuestions.forEach((e) => {
        if(!firstQuestions[e.category]) {
            firstQuestions[e.category] = e.question;
        }
    });

    return firstQuestions;
}
// let questionsByCategory = firstQuestion(placeholderQuestions);
// console.log(questionsByCategory); 


//hopefully this will give me everything...
//broken at the moment.
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
let newQuestion

newQuestion = questions.questionsByCat("Nature");
console.log(newQuestion);

//====== JUST FOUND OUT THESE DO THE SAME THING =======
console.log(placeholderQuestions[1]);
newQuestion = questions.questionsByCatNum("Nature", 3);
//although it might still be usefull
console.log(newQuestion.question);



// document.querySelectorAll('exampleClassGoesHere').forEach( () => {do something } ) 