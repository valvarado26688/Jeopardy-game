// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });
console.log(placeholderQuestions.category);
console.log(placeholderQuestions[0]);
// console.log(placeholderQuestions.includes(category, "nature"));
let cat = placeholderQuestions.filter(() => placeholderQuestions.category === "Nature");
console.log(cat);

placeholderQuestions.forEach((e) => {
    if (e.category === "Nature") {
        console.log(e);
    }
})


