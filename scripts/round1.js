export default function round1(q) {

    document.body.style.opacity = 1;

    document.body.innerHTML = "";

    console.log("is this working");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "FIRST ROUND";

    //will get around to making this dynamic
    const playerTurn = document.createElement("h2");
    playerTurn.classList.add("playerTurn");
    playerTurn.textContent = "PLAYER 1 TURN";
    document.body.append(title, playerTurn, );

    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categoryContainer");
    document.body.append(categoryContainer);
    for(let i = 0; i < 6; i++) {
        const category = document.createElement("div");
        category.classList.add("category");
        category.textContent = "category";
        categoryContainer.appendChild(category);
    }

    //game chart
    //new goal: chart will only display the chart of numbers.
    //once clicked on, box below the chart will display the question
    //wether or not the question is answered correctly; the number will remain blank
    //score must be kept in a variable, function return score to index.js 
    let gameChart = document.createElement("div");
    document.body.append(gameChart);
    gameChart.classList.add("gameChart");

    let questionBox = document.createElement("div");
    questionBox.classList.add("questionBox");
    gameChart.parentElement.appendChild(questionBox);
    questionBox.textContent = "question box";

    let answerInput = document.createElement("input");
    answerInput.classList.add("answerInput");
    answerInput.placeholder = "answer here";

    let submitButton = document.createElement("button");
    submitButton.classList.add("submitButton");
    submitButton.textContent = "submit";

    let playerState = 1;
    let player1Score = 0;
    let player2Score = 0;
    let count = 0;
    for(let i = 0; i < 6; i++) {
        let columnContainer = document.createElement("div");
        columnContainer.classList.add("columnContainer");
        gameChart.appendChild(columnContainer);

        for(let i = 1; i < 6; i++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.textContent = i*100;
            columnContainer.appendChild(column);

            let question = q[count].question; //interesting
            let answer = q[count].answer;
            column.addEventListener("click", () => {
                column.textContent = "";
                questionBox.textContent = question;
                gameChart.parentElement.appendChild(answerInput); //questions should display after click
                gameChart.parentElement.appendChild(submitButton);

                //hold up im cooking
                submitButton.onclick = () => {
                    let userAnswer = answerInput.value.trim().toLowerCase();
                    console.log(userAnswer);

                    //answers are functional, now is time to make this more dynamic
                    console.log(playerState);
                    if(playerState === 1) {
                        if(userAnswer === answer.trim().toLowerCase()) {
                            player1Score += i*100;
                            playerState = 2;
                            playerTurn.textContent = "PLAYER 2 TURN";
                        } else {
                            console.log("incorrect"); //this will be placed somewhere on the question box
                            playerState = 2;
                        }
                    } else if(playerState === 2) {
                        if(userAnswer === answer.trim().toLowerCase()) {
                            player2Score += i*100;
                            playerState = 1;
                            playerTurn.textContent = "PLAYER 1 TURN";
                        } else {
                            console.log("incorrect");
                        }
                    }
                }
            })
            count++;
        }
    }



}