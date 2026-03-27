const quiz = [
{
type: "mc",
question: "Waar zijn huizen het duurst?",
answers: ["In grote steden","In dorpen","Aan de rand","Overal hetzelfde"],
correct: 0
},
{
type: "mc",
question: "Wat bepaalt vaak de prijs van een huis?",
answers: ["Kleur","Locatie","Aantal ramen","Deur"],
correct: 1
},
{
type: "mc",
question: "Waarom stijgen huizenprijzen?",
answers: ["Meer vraag dan aanbod","Meer regen","Meer auto's","Internet"],
correct: 0
},
{
type: "mc",
question: "Wat is een hypotheek?",
answers: ["Een lening voor een huis","Een baan","Een verzekering","Een contract"],
correct: 0
},
{
type: "mc",
question: "Wat betekent huur?",
answers: ["Je koopt een huis","Je leent een huis tegen betaling","Gratis wonen","Ruilen"],
correct: 1
},
{
type: "mc",
question: "Waarom wonen mensen in steden?",
answers: ["Werk en voorzieningen","Rust","Geen reden","Goedkoper"],
correct: 0
},
{
type: "mc",
question: "Wat is sociale huur?",
answers: ["Dure huur","Goedkope huur via overheid","Koophuis","Vakantiehuis"],
correct: 1
},
{
type: "mc",
question: "Wat is belangrijk bij een huis?",
answers: ["Locatie","Kleur","Dakvorm","Aantal stoelen"],
correct: 0
},
{
type: "mc",
question: "Wat gebeurt bij woningtekort?",
answers: ["Prijs daalt","Prijs stijgt","Niks","Huizen verdwijnen"],
correct: 1
},
{
type: "mc",
question: "Wat is nieuwbouw?",
answers: ["Oude huizen","Nieuwe huizen","Kapotte huizen","Geen idee"],
correct: 1
},

// open vragen
{type:"open",question:"Waarom zijn huizen duur?"},
{type:"open",question:"Wat zou jij doen zonder huis?"},
{type:"open",question:"Wat is jouw droomhuis?"},
{type:"open",question:"Waar wil je wonen later?"},
{type:"open",question:"Wat is het grootste probleem?"}
];

let current = 0;
let answersUser = new Array(quiz.length).fill(null);

const questionBox = document.getElementById("questionBox");
const progressBar = document.getElementById("progress");

// click lock zodat je 2x niet dubbel telt
let clickLocked = false;

function loadQuestion(){
clickLocked = false;
const q = quiz[current];

updateProgress();

let html = `<div class='question'>
<h3>${current+1}. ${q.question}</h3>`;

if(q.type === "mc"){
html += "<div class='answers'>";
q.answers.forEach((a,i)=>{
let selected = answersUser[current] === i ? "selected" : "";
html += `<button class="${selected}" onclick="selectAnswer(${i})">${a}</button>`;
});
html += "</div>";
}

if(q.type === "open"){
let val = answersUser[current] || "";
html += `<textarea id="openAnswer">${val}</textarea>`;
}

html += "</div>";

questionBox.innerHTML = html;
}

function selectAnswer(i){
if(clickLocked) return; // voorkomt dubbele score
clickLocked = true;

answersUser[current] = i;

// automatische doorgang bij 2x click
setTimeout(()=>{
if(current < quiz.length-1){
current++;
loadQuestion();
} else {
showResult();
}
}, 200);
loadQuestion();
}

document.getElementById("next").onclick = () => {
if(quiz[current].type === "open"){
answersUser[current] = document.getElementById("openAnswer").value;
}
if(current < quiz.length-1){
current++;
loadQuestion();
} else {
showResult();
}
};

document.getElementById("prev").onclick = () => {
if(current > 0){
current--;
loadQuestion();
}
};

function updateProgress(){
let percent = ((current+1) / quiz.length) * 100;
progressBar.style.width = percent + "%";
}

function showResult(){
let score = 0;

quiz.forEach((q,i)=>{
if(q.type === "mc" && answersUser[i] === q.correct){
score++;
}
});

let fouten = 10 - score;

questionBox.innerHTML = `
<div class="result">
<h2>Klaar!</h2>
<p>Je hebt ${fouten} van de 15 fout</p>
<p>Score: ${score}/10 goed</p>
</div>`;
}

loadQuestion();