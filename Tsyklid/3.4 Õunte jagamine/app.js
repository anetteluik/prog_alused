let poialpoisteArv = Number(prompt("Mitu pöialpoissi tahab õunu?"));
let oun = 14;
let jagatudOun;

for (let i = 0; i < poialpoisteArv; i++) {
    jagatudOun = Math.floor(Math.random() * 2) + 1;
    console.log(jagatudOun);
    oun = oun - jagatudOun;
}

console.log("Lumivalgekesele jäi " + oun)