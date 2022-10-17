// 1.1 Tervitus
console.log("Tere, Maailm!")

// 1.2 President
let aasta = 2016;
let president = "Kersti Kaljulaid";
let lauseKeskosa = ". aastal valiti Eesti presidendiks ";
let lause = aasta + lauseKeskosa + president;

console.log(lause)

// 1.3 Astendamine
let x = prompt("Sisestage astme alus");
let y = prompt("Sisestage astendaja");
let xy = Math.pow(x,y);

console.log(xy)

// 1.4 Trahv
let nimi = prompt("Sisestage oma nimi");
let speedAllowed = prompt("Sisestage lubatud kiirus");
let speedAct = prompt("Sisestage oma tegelik kiirus");
let lauseKesk = ", kiiruse ületamise eest on teie trahv ";
let total = (speedAct - speedAllowed) * 3;
let sentence = nimi + lauseKesk + Math.min(190, total) + " eurot.";

console.log(sentence)

// 1.5 Nädala ajakulu

let aine = prompt("Sisesta oma EKAP'de arv (täisarvuna)");
let ndl = prompt("Sisestage nädalate arv (täisarvuna)");
let tund = aine * 26;
let ajakulu = tund / ndl;
let l = "Ajakulu " + Math.round(ajakulu) + " tundi nädalas."

console.log(l)