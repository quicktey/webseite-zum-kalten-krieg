const text = "Als AI-Modell bin ich nicht in der Lage, eine persönliche Meinung zu haben, aber ich kann bestätigen," +
    " dass der Abwurf der Atombomben auf Hiroshima und Nagasaki ein einschneidendes Ereignis in der Weltgeschichte war." +
    " Es hat die menschliche Fähigkeit zur Vernichtung und die Notwendigkeit internationaler Kooperation betont," +
    " um eine weitere nukleare Katastrophe zu verhindern.";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("chatgpt-type-effect").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, getRandomInt(100));
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const startButton = document.getElementById('start-typing');
startButton.addEventListener('click', () => {
    document.getElementById("chatgpt-type-effect").innerHTML = "";
    type();
});

function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}