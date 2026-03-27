const quiz = [
{
type: "mc",
question: "Waar denk jij dat huizen het duurst zijn?",
answers: [
"In grote steden",
"In dorpen",
"Aan de rand van steden",
"Overal ongeveer hetzelfde"
]
},

{
type: "mc",
question: "Zou jij later een appartement willen?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Hoe belangrijk is een tuin voor jou?",
answers: [
"Heel belangrijk",
"Best belangrijk",
"Niet zo belangrijk",
"Helemaal niet belangrijk"
]
},

{
type: "mc",
question: "Zou je in een klein appartement wonen als het betaalbaar is?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Hoe lang denk je dat jongeren moeten sparen voor een huis?",
answers: [
"1–5 jaar",
"5–10 jaar",
"10–15 jaar",
"Meer dan 15 jaar"
]
},

{
type: "mc",
question: "Zou jij samen met vrienden een huis huren?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Wat vind je belangrijker bij een huis?",
answers: [
"Lage prijs",
"Grootte",
"Locatie",
"Nieuwe woning"
]
},

{
type: "mc",
question: "Denk je dat er genoeg huizen worden gebouwd?",
answers: ["Ja","Nee","Weet ik niet"]
},

{
type: "mc",
question: "Zou je verder van de stad wonen als het goedkoper is?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Denk je dat huizenprijzen blijven stijgen?",
answers: ["Ja","Nee","Weet ik niet"]
},

{
type: "open",
question: "Waarom denk je dat huizen zo duur zijn geworden?"
},

{
type: "open",
question: "Wat zou jij doen als je geen huis kunt vinden?"
},

{
type: "open",
question: "Wat voor huis zou jij het liefst willen hebben?"
},

{
type: "open",
question: "In welke stad of regio zou jij later willen wonen?"
},

{
type: "open",
question: "Wat vind jij het grootste probleem van de huizenmarkt?"
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

