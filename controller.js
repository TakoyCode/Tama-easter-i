let tamagochi = model.tamagochi;

setInterval(gameLogic, 2000);

function giveWater() {
    if (tamagochi.water == 10) return;
    tamagochi.water++;
    updateView();
}

function giveFood() {
    if (tamagochi.food == 10) return;
    tamagochi.food++;
    updateView();
}

function getRandomInt() {
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt;
}

function gameLogic() {
    if (tamagochi.food == 10 && tamagochi.water == 10 && tamagochi.stage < 1) {
        tamagochi.food = 0;
        tamagochi.water = 0;
        tamagochi.stage++;
    }

    tamagochi.food = tamagochi.food - getRandomInt();
    tamagochi.water = tamagochi.water - getRandomInt();

    if (tamagochi.food < 0) tamagochi.food = 0;
    if (tamagochi.water < 0) tamagochi.water = 0;
    updateView();
}

