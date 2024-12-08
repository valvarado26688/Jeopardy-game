export default function round1(questions) {

    document.body.innerHTML = "";

    console.log("is this working");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "FIRST ROUND";

    //will get around to making this dynamic
    const playerTurn = document.createElement("h2");
    playerTurn.classList.add("playerTurn");
    playerTurn.textContent = "PLAYER TURN";

    document.body.append(title, playerTurn, );

    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categoryContainer");
    document.body.append(categoryContainer);
    for(let i = 0; i < 6; i++) {
        const category = document.createElement("div");
        category.classList.add("category");
        category.textContent = "category";
        // document.body.append(category);
        categoryContainer.appendChild(category);
    }

    let count = 0;
    
    let gameChart = document.createElement("div");
    document.body.append(gameChart);
    gameChart.classList.add("gameChart");

    for(let i = 0; i < 6; i++) {
        let columnContainer = document.createElement("div");
        columnContainer.classList.add("columnContainer");
        // document.body.append(columnContainer);
        gameChart.appendChild(columnContainer);

        for(let i = 0; i < 5; i++) {
            // let e = questions[i]; // keep this in mind
            const column = document.createElement("div");
            column.classList.add("column");
            column.textContent = "test"
            columnContainer.appendChild(column);
        }
    }

    //lets hope this works
}