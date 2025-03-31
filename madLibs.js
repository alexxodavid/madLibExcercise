const timeOfDay = 'thunderous night';
const place = "haunted house";
const scarySound = "whisper";
const ghostName = "Genghis Khan"
const glowingColor = "white";
const math = 39 - 0;

const isScary = timeOfDay.includes("midnight");

const person = {
    name: "Alex", 
    age: 26, 
  };

const story = `
On a ${timeOfDay}, I ventured into the ${place}. 
The creaking walls seemed to ${scarySound}, sending chills down my spine. 
Suddenly, a ghost named ${ghostName} appeared, its glowing ${glowingColor} eyes piercing through the darkness. 
My heart raced as it floated silently toward me. 
Did you know ${math} is the result of 39 - 0? Spooky, right?
By the way, my friend ${person.name}, who's ${person.age}, thinks it's ${isScary ? "terrifying" : "not scary at all"}!`;

document.getElementById("madlibs-output").textContent = story;

console.log(story);