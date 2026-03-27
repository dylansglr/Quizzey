const quiz = [
{
type: "mc",
question: "Wat is het grootste probleem van de woningmarkt?",
answers: ["Te weinig huizen","Te veel huizen","Te goedkoop","Geen vraag"],
correct: 0
},
{
type: "mc",
question: "Wat betekent hypotheekrente?",
answers: ["Kosten voor geleend geld","Prijs van huis","Belasting","Verzekering"],
correct: 0
},
{
type: "mc",
question: "Wat is sociale huur?",
answers: ["Betaalbare huur via overheid","Dure huur","Vakantiehuis","Appartement kopen"],
correct: 0
},
{
type: "mc",
question: "Wat is een vrije sector woning?",
answers: ["Huurwoning zonder prijsplafond","Koophuis","Overheidswoning","Appartement in flat"],
correct: 0
},
{
type: "mc",
question: "Wat is belangrijk bij het kopen van een huis?",
answers: ["Ligging","Aantal ramen","Kleur","Aantal deuren"],
correct: 0
},
{
type: "mc",
question: "Wat is een energielabel?",
answers: ["Hoe energiezuinig het huis is","Hoe groot het huis is","Prijs van huis","Bouwjaar"],
correct: 0
},
{
type: "mc",
question: "Wat doet een makelaar?",
answers: ["Huizen verkopen of verhuren","Schilderen","Bouwen","Verzekeren"],
correct: 0
},
{
type: "mc",
question: "Waarom kiezen mensen voor nieuwbouw?",
answers: ["Modern en energiebesparend","Ouderwets","Duurder","Meer onderhoud nodig"],
correct: 0
},
{
type: "mc",
question: "Wat gebeurt bij woningtekort?",
answers: ["Prijs stijgt","Prijs daalt","Huizen verdwijnen","Niks"],
correct: 0
},
{
type: "mc",
question: "Wat is het voordeel van huren t.o.v kopen?",
answers: ["Flexibiliteit","Goedkoper","Eigen tuin","Geen buren"],
correct: 0
},
{type:"open",question:"Wat is jouw droomhuis?"},
{type:"open",question:"In welke buurt zou jij willen wonen?"},
{type:"open",question:"Wat vind jij belangrijk bij een huis?"},
{type:"open",question:"Zou jij later huren of kopen?"},
{type:"open",question:"Wat vind jij van huizenprijzen vandaag?"}
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