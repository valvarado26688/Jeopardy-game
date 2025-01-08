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
    gameChart.parentElement.appendChild(answerInput);

    let submitButton = document.createElement("button");
    submitButton.classList.add("submitButton");
    submitButton.textContent = "submit";
    gameChart.parentElement.appendChild(submitButton);

    let playerState = 1;
    let player1Score = 0;
    let player2Score = 0;

    let scoreContainer = document.createElement("div");
    scoreContainer.classList.add("scoreContainer");
    gameChart.parentElement.appendChild(scoreContainer);

    let displayScore1 = document.createElement("div");
    displayScore1.classList.add("displayScore1");
    scoreContainer.appendChild(displayScore1);
    displayScore1.textContent = "player 1 score: " + player1Score;

    let displayScore2 = document.createElement("div");
    displayScore2.classList.add("displayScore2");
    scoreContainer.appendChild(displayScore2);
    displayScore2.textContent = "player 2 score: " + player2Score;

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

                for(let child of gameChart.children) {
                    child.style.pointerEvents = "none";
                }

                //hold up im cooking
                submitButton.onclick = () => {
                    let userAnswer = answerInput.value.trim().toLowerCase();
                    console.log(userAnswer);

                    console.log(playerState);
                    if(playerState === 1) {
                        if(userAnswer === answer.trim().toLowerCase()) {
                            player1Score += i*100;
                            playerState = 2;
                            playerTurn.textContent = "PLAYER 2 TURN";
                            displayScore1.textContent = "player 1 score: " + player1Score;
                        } else {
                            console.log("incorrect"); //this will be placed somewhere on the question box
                            playerState = 2;
                            playerTurn.textContent = "PLAYER 2 TURN";
                        }
                    } else if(playerState === 2) {
                        if(userAnswer === answer.trim().toLowerCase()) {
                            player2Score += i*100;
                            playerState = 1;
                            playerTurn.textContent = "PLAYER 1 TURN";
                            displayScore2.textContent = "player 2 score: " + player2Score;
                        } else {
                            console.log("incorrect");
                            playerState = 1;
                            playerTurn.textContent = "PLAYER 1 TURN";
                        }
                    }

                    for(let child of gameChart.children) { //worked the first time
                        child.style.pointerEvents = "auto";
                    }
                    //NOTE: am considering making the function return the player scores so they can be used in index.js
                }
            })
            count++;
        }
    }



}