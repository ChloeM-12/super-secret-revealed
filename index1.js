function memory(num){
    const memorybox = document.getElementById("memorybox");
    memorybox.style.display = "flex";
    const messages = [
        "Movie nights and sleepovers are the coziest times 🎬",
        "Hockey games accompanied with pouring rain or eavesdropping",
        "Rating pretty flowers and watching birdies on a bench",
        "Late night walks on campus where we (ahem, you) get spooked",
        "Studying to look up at your random outbursts in an empty classroom",
        "Going for a drive and having an adventure anywhere with you"
    ];
    const photos = [
        "images/IMG_9243.jpg",
        "images/IMG_0880.jpg",
        "images/IMG_9130.jpg",
        "images/IMG_6047.jpg",
        "images/IMG_9045.jpg",
        "images/IMG_8711.jpg",
    ];

    const message = messages[num-1];
    document.getElementById("memoryimage").src = photos[num-1];
    document.getElementById("memorytext").textContent = message;    
}

const pots = [
    "images/pot1.png",
    "images/pot2.png",
    "images/pot3.png",
    "images/pot4.png",
];
let currentpot = 0;

function previouspot(){
    currentpot = (currentpot - 1 + pots.length) % pots.length;
    potimage.src = pots[currentpot];
}
function nextpot(){
    currentpot = (currentpot + 1) % pots.length;
    document.getElementById("potimage").src = pots[currentpot];
}
const prevpot = document.getElementById("prevpot");
const forwardpot = document.getElementById("nextpot");
const selectpot = document.getElementById("selectpot");
const instructions = document.getElementById("instructions")
const bloom = document.getElementById("bloom");

instructions.textContent = "Choose a vase";
bloom.style.visibility = "hidden";

selectpot.addEventListener("click", function() {
    prevpot.disabled = true;
    prevpot.style.display = "none";
    forwardpot.disabled = true;
    forwardpot.style.display = "none";
    selectpot.disabled = true;
    selectpot.style.visibility = "hidden"
    bloom.style.visibility = "visible"
    instructions.textContent = "Yay! Now let's make a pretty bouquet"
});

const flower1 = document.getElementById("flower1");
const flower2 = document.getElementById("flower2");
const flower3 = document.getElementById("flower3");
const flower4 = document.getElementById("flower4");
const flower5 = document.getElementById("flower5");
const flower6 = document.getElementById("flower6");
const flowers = document.getElementsByClassName("flowers")

flower1.style.visibility = "hidden";
flower2.style.visibility = "hidden";
flower3.style.visibility = "hidden";
flower4.style.visibility = "hidden";
flower5.style.visibility = "hidden";
flower6.style.visibility = "hidden";

const flowermessages = [
    "How odd 🙃",
    "How strange 😒",
    "How peculiar 🤔",
    "Grass grazer 🐐",
    "Om nom nom 😋",
    "Yahoo 🤠"
];

const gif1 = document.getElementById("gif1");
const gif2 = document.getElementById("gif2");
const gif3 = document.getElementById("gif3");

let bloomcount = 0;
const bloommax = 6;
bloom.addEventListener("click", () => {
    bloomcount++;
    if (bloomcount <= bloommax) {
        const element = document.getElementById("flower" + bloomcount);
        if (element) {
        element.style.visibility = "visible"
        instructions.textContent = flowermessages[bloomcount]
        }
        if (bloomcount === bloommax) {
        bloom.style.visibility = "hidden"
        instructions.textContent = "Done! (This looks simple but took the most time coding 😭)"
        gif1.style.visibility = "visible"
        gif2.style.visibility = "visible"
        gif3.style.visibility = "visible"
        }
    }
});

const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
let password;
let attempts = 0;
const hint = document.getElementById("Hint")
const wrongmessages = [
    "Hmph, you don't know? It's only 4 letters long. Try again",
    "Tsk, think about what the seagulls would say in a certain fish movie",
    "Buddy. Because I am yours, you would say...?",
    "You should get better at word games. It's 'Mine' 🙄"
]
function openletter(){
    password = window.prompt("Enter the password 🙃 (What is it I'm always writing on you?)");
    password = password.toLowerCase();
    if(password === "mine"){
        hint.style.visibility = "hidden"
        envelope.classList.toggle("flap")
    }
    else{n
        hint.textContent = wrongmessages[attempts]
        attempts = attempts + 1
    }
}
