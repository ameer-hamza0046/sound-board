const buttons = document.querySelectorAll(".btn");

const audio = [
    "classic-alarm",
    "dog-barking",
    "game-notification",
    "game-over",
    "key-press",
    "meow",
]

buttons.forEach((btn, i) => {
    btn.innerHTML = audio[i];
    btn.addEventListener("click", () => {
        const a = new Audio(`./audio/${audio[i]}.mp3`);
        a.play();
    })
})