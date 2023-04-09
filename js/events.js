import {
    buttonPlay,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace,
} from "./elements.js";

export function Events({
    timer,
    display,
    sound
}) {
    buttonPlay.addEventListener("click", function() {
        timer.startCounting();
     });

    buttonStop.addEventListener("click", function() {
        timer.stopCounting();
     });

    buttonIncrease.addEventListener("click", function() {
         display.userIncreasedTime();
     });

    buttonDecrease.addEventListener("click", function() {
         display.userDecreasedTime();
     });

    cardForest.addEventListener("click", function() {
         sound.turnOnAmbient(sound.forest);
         display.activatedCard(cardForest);
     });

    cardRain.addEventListener("click", function() {
         sound.turnOnAmbient(sound.rain);
         display.activatedCard(cardRain);
     });

    cardCoffeeShop.addEventListener("click", function() {
         sound.turnOnAmbient(sound.coffeeShop);
         display.activatedCard(cardCoffeeShop);
     });

    cardFireplace.addEventListener("click", function() {
         sound.turnOnAmbient(sound.fireplace);
         display.activatedCard(cardFireplace);
     });
}