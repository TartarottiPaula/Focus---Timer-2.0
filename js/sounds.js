export function Sounds() {
    const forest = new Audio('./sounds/forest.wav')
    const rain = new Audio('./sounds/rain.wav');
    const coffeeShop = new Audio('./sounds/coffee-shop.wav');
    const fireplace = new Audio('./sounds/fireplace.wav');
    const alert = new Audio('./sounds/alert.mp3');

    function turnOnAmbient(sound) {
        sound.loop = true;
        if(sound.paused){
            sound.play();
        } else {
            sound.pause();
        }
    }

    function turnOnAlert() {
        alert.play();
    }
    return {
        forest,
        rain,
        coffeeShop,
        fireplace,
        turnOnAmbient,
        turnOnAlert
    }
}