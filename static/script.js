document.getElementById("startButton").addEventListener("click", function(){
    document.getElementById("introduction").style.display = "none";
    document.getElementById("game").style.display = "block";
});

// Перемещение карты
function moveCard(cardId, targetRowId) {
    const card = document.getElementById(cardId);
    const targetRow = document.getElementById(targetRowId);
    targetRow.appendChild(card);
}

// Обработчик клика по карте
function handleCardClick(cardId, targetRowId) {
    moveCard(cardId, targetRowId);
}

// Устанавливаем обработчики кликов на карты
document.addEventListener("DOMContentLoaded", function () {
    const playerCards = document.querySelectorAll("#player-row-1 .card, #player-row-2 .card");
    const opponentCards = document.querySelectorAll("#opponent-row-1 .card, #opponent-row-2 .card");
    const opponentDeck = document.querySelector("#opponent-deck");

    playerCards.forEach(card => {
        card.addEventListener("click", function () {
            handleCardClick(card.id, "opponent-row-1");
        });
    });

    opponentCards.forEach(card => {
        card.addEventListener("click", function () {
            handleCardClick(card.id, "player-row-2");
        });
    });

    opponentDeck.addEventListener("click", function () {
        // Действия при клике на колоду противника
        console.log("Opponent deck clicked!");
    });
});



// Генерация уникального ID для карты
function generateCardId() {
    return "card-" + Math.floor(Math.random() * 1000);
}

// Раздача карты
function dealCard(rowId) {
    const row = document.getElementById(rowId);
    const card = document.createElement("div");
    const cardId = generateCardId();

    card.classList.add("card");
    card.id = cardId;
    card.addEventListener("click", function () {
        handleCardClick(cardId, "opponent-row-1");
    });

    row.appendChild(card);
}

// Обработчик клика по карте
function handleCardClick(cardId, targetRowId) {
    moveCard(cardId, targetRowId);
}

// Перемещение карты
function moveCard(cardId, targetRowId) {
    const card = document.getElementById(cardId);
    const targetRow = document.getElementById(targetRowId);
    targetRow.appendChild(card);
}

// Раздача карт при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    const playerRowIds = ["player-row-1", "player-row-2"];
    const opponentRowIds = ["opponent-row-1", "opponent-row-2"];

    playerRowIds.forEach(rowId => {
        for (let i = 0; i < 5; i++) {
            dealCard(rowId);
        }
    });

    opponentRowIds.forEach(rowId => {
        for (let i = 0; i < 5; i++) {
            dealCard(rowId);
        }
    });
});