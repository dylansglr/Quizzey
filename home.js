
const Facts = [
    "Huizenprijzen in Nederland zijn de afgelopen jaren sterk gestegen.",
    "Er is een groot tekort aan woningen in Nederland.",
    "Veel jongeren blijven langer bij hun ouders wonen.",
    "Huren is vaak duurder op lange termijn dan kopen.",
    "Duurzame huizen worden steeds populairder.",
    "De vraag naar woningen in steden is het grootst.",
    "Starters hebben moeite met het krijgen van een hypotheek."
];


function toonFeiten() {
    let html = "";

    feiten.forEach(f => {
        html += "• " + f + "<br>";
    });

    document.getElementById("facts").innerHTML = html;
}

toonFeiten();