let vanus = Number(prompt("Sisestage oma vanus"));
let sugu = prompt("Sisestage oma sugu (M või m) või )Nvõi n)");
let treening = prompt("Sisesta treeningu tüüp (1, 2 või 3)");

let maxPulsisagedus;
if (sugu == "m" || sugu == "M") {
    maxPulsisagedus = 220 - vanus;
}
if (sugu == "n" || sugu == "N") {
    maxPulsisagedus = 206 - vanus * 0.88;
}

let maxPulss;
let minPulss;

if (treening == 1) {
    minPulss = maxPulsisagedus * 0.5;
    maxPulss = maxPulsisagedus * 0.7;
}
else if (treening == 2) {
    minPulss = maxPulsisagedus * 0.7;
    maxPulss = maxPulsisagedus * 0.8;
}
else {
    minPulss = maxPulsisagedus * 0.8;
    maxPulss = maxPulsisagedus * 0.87;
}

console.log("Pulsisagedus peaks olema vahemikus " + Math.trunc(Math.round(minPulss)) + " kuni " + Math.trunc(Math.round(maxPulss)));