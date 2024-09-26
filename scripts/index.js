// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";


//==========tests====================
//this function stores all the FIRST questions of every catagory into an array
//not sure if this would be usefull
// function firstQuestion(placeholderQuestions){
//     const firstQuestions = {};

//     placeholderQuestions.forEach((e, i) => {
//         if(!firstQuestions[e.category]) {
//             firstQuestions[e.category] = e.question;
//         }
//     });

//     return firstQuestions;
// }
// class QuestionMachine5000 {
//     constructor(questions) {
//         this.questions = questions;
//     }
//     questionsByCat(category) {//doesnt seem like this is usefull but its neat 
//         return this.questions.filter(q => q.category === category); 
//     }

//     //method helps get any specific question easily.
//     //filters category uses num as an index number(starting from 0) 
//     questionsByCatNum(category, num){
//         let question = this.questionsByCat(category);
//         return question[num];
//     }
//     // firstFiveQuestions(){
//     //    let questions = {};

//     //    for(const e of this.questions) {

//     //    }
//     // }
// }
// let sortedQuestions = new QuestionMachine5000(placeholderQuestions);
//==========================================================







let questionPoints = 100
let gridContainer = document.getElementById("gridContainer");
let index = 0
//code to make parent elements 
for(let i = 0; i < 6; i++) {
    let parentColumn = document.createElement("div");
    gridContainer.append(parentColumn);
    parentColumn.className = "parentColumn";


    //creates and assign elements with point, then appends them as a child to parentColumn
    for(let i = 0; i < 5; i++){
        let div = document.createElement("div");
        div.textContent = questionPoints;
        div.className = "divColumn";
        parentColumn.appendChild(div);
        questionPoints = questionPoints + 100;
        if(questionPoints === 600) {
            questionPoints = 100;
        }

        //this is where the fun begins
        div.addEventListener("click", () => {
            div.textContent = firstQuestionIndex(index);
            index++;
        })
        //this almosts does its job, it only however questions are put down in the exact order that you click the cells
        //in fact if you keep clicking the same box, it goes through all the questions??????
    }
}

//lots of work to do, lots of things to learn. 



//function creates an array of the first five questions of every category 
//I chose to have the function to hopefully improve readability of my code above. 
//I plan to use "index" as a way to easily return questions iteratively. 
function firstQuestionIndex(index){
    
    let questions = {};//object to hold my categories



    placeholderQuestions.forEach((e) => {

        //creates a new key for every category. 
        let category = e.category;
        if(!questions[category]) {//does the key NOT exist?
            questions[category] = [];//make one 
        }

        if(questions[category].length < 5 ) { 
            questions[category].push(e);
        }
    })
    console.log(questions);
    let indexQuestions = Object.values(questions).flat();//it just works
    console.log(indexQuestions);
    // console.log(indexQuestions[0].question);

    return indexQuestions[index].question;
}

// console.log(firstQuestionIndex(5));