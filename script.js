
const words = [
    { word: "planet", hint: "Orbits a star" },
    { word: "javascript", hint: "Programming language used on the web" },
    { word: "guitar", hint: "A musical instrument with strings" },
    { word: "elephant", hint: "The largest land animal" },
    { word: "bicycle", hint: "A vehicle with two wheels" },
    { word: "library", hint: "Place to borrow books" },
    { word: "volcano", hint: "Erupts with lava" },
    { word: "computer", hint: "A programmable electronic device" },
    { word: "mountain", hint: "A large natural elevation of the earth" },
    { word: "puzzle", hint: "Something you solve for fun or challenge" },
    { word: "oxygen", hint: "Gas essential for human respiration" },
    { word: "camera", hint: "Used to take photographs" },
    { word: "internet", hint: "Global system of interconnected networks" },
    { word: "robot", hint: "A machine that can perform tasks" },
    { word: "astronaut", hint: "Travels in space" },
    { word: "pyramid", hint: "Ancient Egyptian triangular structure" },
    { word: "mirror", hint: "Reflects your image" },
    { word: "keyboard", hint: "Used to type on a computer" },
    { word: "island", hint: "Land surrounded by water" },
    { word: "battery", hint: "Stores electrical energy" },
    { word: "rainbow", hint: "Colorful arc after rain" },
    { word: "science", hint: "Systematic study of the natural world" },
    { word: "zebra", hint: "Striped African animal" },
    { word: "calendar", hint: "Shows dates and months" },
    { word: "rocket", hint: "Launches into space" }

  
];

let currentWord = "";
let scrambled = "";

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function refreshWord() {
    const randomObj = words[Math.floor(Math.random() * words.length)];
    currentWord = randomObj.word;
    scrambled = scrambleWord(currentWord);
    document.getElementById("scrambledWord").textContent = scrambled;
    document.getElementById("hint").textContent = "Hint: " + randomObj.hint;
    document.getElementById("input").value = "";
    document.getElementById("output").textContent = "Result:";
}

function checkGuess() {
    const guess = document.getElementById("input").value.toLowerCase();
    const result = document.getElementById("output");
    if (guess === currentWord.toLowerCase()) {
        result.textContent = "Result: Correct!";
    } else {
        result.textContent = "Result: Incorrect. Try again!";
    }
}

window.onload = refreshWord;
