// Import the readline-sync module


const readlineSync = require('readline-sync');

class Iron_Man_Suit {
    constructor(name) {
        this.name = name;
    }

    getName = () => {
        return this.name;
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Iron_Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.suit = "";
    }

    getName = () => {
        return this.name;
    }

    getAge = () => {
        return this.age;
    }

    setSuit = () => {
        return this.suit;
    }

    getArmor = () => {
        const suits = [
            { name: "Mark L (50)", year: "2017-2018"},
            { name: "Mark LXXXV (85)", year: "2018-2023"},
            { name: "Mark XLIV (44)", year: "2014-2015"},
            { name: "Mark VII (7)", year: "2012"},
            { name: "Mark XLII (42)", year: "2014-2015"},
            { name: "Mark XLVI (46)", year: "2015-2016"},
            { name: "Mark III (3)", year: "2008"},
            { name: "Mark IV (4)", year: "2008-2010"},
            { name: "Mark VI (6)", year: "2010"},
        ];
        const x = randomIntFromInterval(0, suits.length - 1);
        console.log("CONGRATULATIONS, YOU GOT THE", suits[x].name, "WHICH WAS USED / MADE IN", suits[x].year);
    }
}

// Create an instance of Iron_Man
const ironman = new Iron_Man("Tony Stark", 8);


let validResponse = false;
let normalizedAnswer;

while (!validResponse) {
    const answer = readlineSync.question("Welcome! Would you like to gamble for some Iron Man suits? (HELL YEAH or no) ");
    normalizedAnswer = answer.toLowerCase();

    if (normalizedAnswer === "hell yeah") {
        console.log("Hope you get one you like!")
        ironman.getArmor();
        validResponse = true; 
    } else if (normalizedAnswer === "no") {
        console.log("Then why did you even come here?????");
        validResponse = true;
    } else {
        console.log("Please answer with HELL YEAH or no.");
    }
}


// Loop to keep rolling until the user says "no"
let continueRolling = true;

while (continueRolling && normalizedAnswer === "hell yeah") {
    const answer1 = readlineSync.question("Do you want to roll for another suit? 99% of gamblers quit before they hit big... (yes or no) ");

    // Normalize the answer to lower case
    const normalizedAnswer1 = answer1.toLowerCase();

    if (normalizedAnswer1 === "yes") {
        console.log("Great! Glad to hear that.");
        ironman.getArmor();
    } else if (normalizedAnswer1 === "no") {
        console.log("What if you hit big??? Fine, goodbye... exiting...");
        continueRolling = false; // End the loop and exit
    } else {
        console.log("Please answer with 'yes' or 'no'.");
    }
}

