// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });


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
// console.log(questionsByCategory); ????




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
let questionList

questionList = questions.questionsByCat("Nature");
console.log(questionList);

//====== THESE DO THE SAME THING =======
// console.log(placeholderQuestions[1]);
//questionList = questions.questionsByCatNum("Nature", 3);








//====== attempts to put words on the graph ========
let nature = document.querySelectorAll("#nature");
// console.log(test);
nature.forEach((e, i) => { //"i" here is the second argument which represents the index of the array. [0] [1]...
    e = questionList[i];
    // console.log(e);
});
// nature.forEach((e) => {

// })
console.log(nature[0]);

//not sure why this stuff doesnt work 