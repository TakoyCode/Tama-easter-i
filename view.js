// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    
    <div class="container">
        <div class="background">
            ${model.tamagochi.stage >= 1 ? createRabbitLeaveHtml() : createSaveRabbitHtml()}
        </div>
    </div>

    `;
    app.innerHTML = html;
}

function createRabbitLeaveHtml() {
    return /*HTML*/ `
    <div class="text">
        Takk for at du reddet meg, 
        <br/> 
        her ha noen påske-egg
    </div>
    <img class="img" src="img/chocolateEgg.png">
    `;
}

function createSaveRabbitHtml() {
    return /*HTML*/ `
    <div class="text">
        Vær så snill red meg, 
        <br/> 
        jeg trenger litt mat og drikke,
        <br/>
        før jeg kan starte påsken
    </div>

    <div>
        ${createBarHtml()}
        <div class="tomogachi">${giveCorrectEmoji()}</div>
    </div>

    <div class="infoContainer">
            <button onclick="giveFood()">Gi mat</button>
            <button onclick="giveWater()">Gi vann</button>
    </div>
`;
}

function giveCorrectEmoji() {
    if (model.tamagochi.stage >= 1) {
        return `🍫`;
    }
    else if (model.tamagochi.stage == 0) {
        return `🐇`;
    }
}

function createBarHtml() {
    return /*HTML*/ `
        <div class="bar">
            <div class="barText">mat ${model.tamagochi.food}/10</div>
            <div style="width:${model.tamagochi.food * 3}vh" class="insidebarFood"></div>
        </div>
        <div class="bar">
        <div class="barText">vann ${model.tamagochi.water}/10</div>
            <div style="width:${model.tamagochi.water * 3}vh" class="insidebarWater"></div>
        </div>
    `;
}