const quiz = [
{
type: "mc",
question: "Wat is een starterswoning?",
answers: ["Eerste huis voor jongeren","Vakantiehuis","Duur huis voor ouderen","Appartement met tuin"],
correct: 0
},
{
type: "mc",
question: "Hoeveel procent van hun inkomen moeten jongeren sparen voor een huis?",
answers: ["20–30%","5–10%","50–60%","1–5%"],
correct: 0
},
{
type: "mc",
question: "Wat kan helpen om sneller een huis te kopen?",
answers: ["Spaargeld","Vakantie","Auto kopen","Huis schilderen"],
correct: 0
},
{
type: "mc",
question: "Wat is het nadeel van samenwonen met vrienden?",
answers: ["Conflicten en regels","Goedkoper","Gezelligheid","Minder huur"],
correct: 0
},
{
type: "mc",
question: "Waarom kiezen jongeren soms voor een klein appartement?",
answers: ["Goedkoper en centraal gelegen","Groter huis","Tuin","Duurder"],
correct: 0
},
{
type: "mc",
question: "Wat is woningcorporatie?",
answers: ["Organisatie die betaalbare woningen verhuurt","Makelaarsbedrijf","Bouwbedrijf","Verzekeraar"],
correct: 0
},
{
type: "mc",
question: "Wat kan een huis duur maken?",
answers: ["Locatie in stad","Aantal ramen","Kleur muren","Aantal deuren"],
correct: 0
},
{
type: "mc",
question: "Wat is tijdelijk huren?",
answers: ["Woning huren voor korte periode","Koophuis","Vakantiehuis","Appartement kopen"],
correct: 0
},
{
type: "mc",
question: "Wat is een gemeubileerd huis?",
answers: ["Huis met meubels","Huis zonder meubels","Appartement","Vakantiehuis"],
correct: 0
},
{
type: "mc",
question: "Wat betekent energiebesparing in een huis?",
answers: ["Minder verbruik van stroom en gas","Meer verbruik","Schoonmaken","Meer ramen"],
correct: 0
},
{type:"open",question:"Zou jij later een huis kopen of huren?"},
{type:"open",question:"Wat vind jij moeilijk aan de huizenmarkt?"},
{type:"open",question:"Zou je liever in stad of dorp wonen?"},
{type:"open",question:"Hoeveel zou jij sparen voor een huis?"},
{type:"open",question:"Wat zou je doen als huizen te duur zijn?"}
];

let current = 0;
let answersUser = new Array(quiz.length).fill(null);

const questionBox = document.getElementById("questionBox");
const progressBar = document.getElementById("progress");

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
if(clickLocked) return;
clickLocked = true;

answersUser[current] = i;

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