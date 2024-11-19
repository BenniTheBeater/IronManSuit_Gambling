// Import the readline-sync module
const readlineSync = require('readline-sync');

// parent class
class Superheroes {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        
    }
}

class Iron_Man_Suit {
    constructor(name) {
        this.name = name;
    }

    getName = () => {
        return this.name;
    }
}
// Generates a random integer within a specific range, brings the randomdomness into the project
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Child class that inherits from Superheroes
class Iron_Man extends Superheroes {
    constructor(name, age) {
        super(name, age, "Iron man");
        this.unlockedSuits = [];
        this.allSuits = [
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
        
    }
// gives you the name of the suit
    getName = () => {
        return this.name;
    }
// gives you the age of the suit
    getAge = () => {
        return this.age;
    }

    getArmor = () => {
        if (this.unlockedSuits.length >= this.allSuits.length) {
            console.log("You've unlocked all the suits! Congratulations!");
            return; // Stop further rolling if all suits are unlocked
        }

        let suit;
        do {
            const x = randomIntFromInterval(0, this.allSuits.length - 1);
            suit = this.allSuits[x];
        } while (this.unlockedSuits.includes(suit.name)); // Ensure the suit isn't already unlocked

        console.log("CONGRATULATIONS, YOU GOT THE", suit.name, "WHICH WAS USED / MADE IN", suit.year);
        this.unlockedSuits.push(suit.name);
    }
// while in the index, it tells you how many suits you have unlocked and how many are missing. 
    showIndex = () => {
        const totalSuits = this.allSuits.length;
        const unlockedCount = this.unlockedSuits.length;
        const missingCount = totalSuits - unlockedCount;
        
        console.log(`You have unlocked ${unlockedCount} out of ${totalSuits} suits.`);
        console.log(`You are missing ${missingCount} suits.`);
    }
}

// Create an instance of Iron_Man
const ironman = new Iron_Man("Tony Stark", 8);

// Used as a flag to control the while loop under that handles the user inputs
let validResponse = false;
let normalizedAnswer;

// while loop that asks you the same question until you enter with a correct input
while (!validResponse) {
    const answer = readlineSync.question("Welcome! Would you like to gamble for some Iron Man suits? (HELL YEAH or no) ");
    normalizedAnswer = answer.toLowerCase();

    if (normalizedAnswer === "hell yeah") {
        console.log("Hope you get one you like!");
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
            // Gives the user options for what the want to do
while (continueRolling && normalizedAnswer === "hell yeah") {
    const answer1 = readlineSync.question("Do you want to roll for another suit, or check your index? (roll/index/no) ");

    // Normalize the answer to lower case
    const normalizedAnswer1 = answer1.toLowerCase();

    if (normalizedAnswer1 === "roll") {
        console.log("Great! Attaboy!")
        ironman.getArmor();
    } else if (normalizedAnswer1 === "index") { // Takes you to the index
        ironman.showIndex();
    } else if (normalizedAnswer1 === "no") {
        console.log("What if you hit big??? Fine, goodbye... exiting...");
        continueRolling = false; // End the loop and exit
    } else {
        console.log("Please answer with 'roll', 'index', or 'no'."); // Checks that the input is correkt
    }
}