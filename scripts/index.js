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
}

let questions = new QuestionMachine5000(placeholderQuestions);
let newQuestion

newQuestion = questions.questionsByCat("Nature");
console.log(newQuestion);
console.log(placeholderQuestions[1]);