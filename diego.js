const quiz = [

{
type: "mc",
question: "Wat zou jij eerder doen als huizen duur zijn?",
answers: [
"Langer bij ouders wonen",
"Huren",
"Samen wonen met anderen",
"Verhuizen naar andere stad"
]
},

{
type: "mc",
question: "Zou jij in een tiny house willen wonen?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Hoe belangrijk is de afstand naar werk of school?",
answers: [
"Heel belangrijk",
"Best belangrijk",
"Niet zo belangrijk",
"Helemaal niet belangrijk"
]
},

{
type: "mc",
question: "Zou jij een oud huis willen kopen en zelf opknappen?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Denk je dat jongeren later minder snel een huis kunnen kopen?",
answers: ["Ja","Nee","Weet ik niet"]
},

{
type: "mc",
question: "Wat vind je belangrijker bij een huis?",
answers: [
"Groot huis",
"Lage prijs",
"Goede locatie",
"Nieuwe woning"
]
},

{
type: "mc",
question: "Zou jij in een andere provincie willen wonen voor een goedkoper huis?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Hoe belangrijk is een balkon voor jou?",
answers: [
"Heel belangrijk",
"Best belangrijk",
"Niet zo belangrijk",
"Helemaal niet belangrijk"
]
},

{
type: "mc",
question: "Zou jij een huis willen kopen met je partner?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Denk je dat jongeren genoeg verdienen om een huis te kopen?",
answers: ["Ja","Nee","Weet ik niet"]
},

{
type: "mc",
question: "Wat zou je eerder doen als je geen huis kan vinden?",
answers: [
"Blijven zoeken",
"Huren",
"Tijdelijk bij ouders wonen",
"Naar andere stad verhuizen"
]
},

{
type: "mc",
question: "Zou jij een huis willen bouwen als dat mogelijk is?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Hoe belangrijk is het dat een huis energiezuinig is?",
answers: [
"Heel belangrijk",
"Best belangrijk",
"Niet zo belangrijk",
"Helemaal niet belangrijk"
]
},

{
type: "mc",
question: "Zou jij later in het buitenland willen wonen als huizen daar goedkoper zijn?",
answers: ["Ja","Nee","Misschien"]
},

{
type: "mc",
question: "Denk je dat de huizenmarkt over 10 jaar beter wordt?",
answers: ["Ja","Nee","Weet ik niet"]
},

// OPEN VRAGEN

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
question: "Hoeveel kamers zou jouw ideale huis hebben?"
},

{
type: "open",
question: "Wat vind jij belangrijker: een groot huis of een goede locatie?"
},

{
type: "open",
question: "Hoe denk je dat jongeren geholpen kunnen worden bij het kopen van een huis?"
},

{
type: "open",
question: "Wat zou de overheid moeten doen aan de huizenmarkt?"
},

{
type: "open",
question: "Zou jij liever huren of kopen? Waarom?"
},

{
type: "open",
question: "Hoe denk je dat de huizenmarkt er over 10 jaar uitziet?"
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

