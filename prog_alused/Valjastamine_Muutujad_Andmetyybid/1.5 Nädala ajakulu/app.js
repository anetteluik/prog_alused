let ainePunktideArv = Number(prompt("Sisestage ainepunktide arv"));
let nadalateArv = Number(prompt("Sisestage nädalate arv"));

let EKAP = 26 * ainePunktideArv;
let ajakulu = Math.round(EKAP / nadalateArv);

console.log("Ajakulu " + Math.trunc(ajakulu) + " tundi nädalas.");