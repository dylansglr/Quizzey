const quiz = [
{
type: "mc",
question: "Hoe denk jij over de huizenmarkt in Nederland?",
answers: [
"Goed",
"Best goed",
"Moeilijk",
"Heel moeilijk"
]
},

{
type: "mc",
question: "Zou jij later een appartement willen?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Wat denk je dat het grootste probleem is op de huizenmarkt?",
answers: [
"Huizen zijn te duur",
"Te weinig huizen",
"Hypotheek krijgen is moeilijk",
"Anders"
]
},

{
type: "mc",
question: "Zou jij binnen 5 jaar liever een huis kopen of huren? ",
answers: ["Kopen","Huren","Maakt mij niet uit"]
},

{
type: "mc",
question: "Vanaf welke leeftijd denk je dat mensen een huis kunnen kopen?",
answers: [
"18–21 jaar",
"22–25 jaar",
"26–30 jaar",
"30+"
]
},

{
type: "mc",
question: "Zou jij samen met vrienden een huis huren?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Waar zou jij later het liefst wonen? ",
answers: [
"Grote Stad",
"Middelgrote stad",
"Dorp",
"Maakt mij niet uit"
]
},

{
type: "mc",
question: "Zou je samen met iemand een huis kopen? ",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Denk je dat sparen voor een huis moeilijk is voor jongeren? ",
answers: ["Ja","Nee","Een beetje"]
},

{
type: "mc",
question: "Hoe belangrijk vind jij het om later een eigen huis te hebben?",
answers: ["Heel belangrijk","Best belangrijk","Niet zo belangrijk", "Helemaal niet belangrijk"]
},

{
type: "open",
question: "Wat vind jij het grootste probleem op de huizenmarkt voor jongeren?"
},

{
type: "open",
question: "Denk je dat jongeren genoeg informatie krijgen over het kopen van een huis?"
},

{
type: "open",
question: "Hoeveel geld denk je dat een huis gemiddeld kost in Nederland?"
},

{
type: "open",
question: "Zou je liever in een stad of dorp wonen? Waarom?"
},

{
type: "open",
question: "Wat denk je dat er in de toekomst gaat gebeuren met de huizenprijzen?"
}

];

let current = 0;

const questionBox = document.getElementById("questionBox");

function loadQuestion(){

const q = quiz[current];

let html = "<div class='question'><h3>"+(current+1)+". "+q.question+"</h3>";

if(q.type === "mc"){

html += "<div class='answers'>";

q.answers.forEach(a => {

html += "<button>"+a+"</button>";

});

html += "</div>";

}

if(q.type === "open"){

html += "<textarea placeholder='Typ hier je antwoord'></textarea>";

}

html += "</div>";

questionBox.innerHTML = html;

}

document.getElementById("next").onclick = () => {

if(current < quiz.length-1){

current++;

loadQuestion();

}

};

document.getElementById("prev").onclick = () => {

if(current > 0){

current--;

loadQuestion();

}

};

loadQuestion();

