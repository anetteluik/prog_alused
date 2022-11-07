let nimi = prompt("Mis on teie nimi?");
let lubatudKiirus = Number(prompt("Mis oli lubatud kiirus?"));
let tegelikKiirus = Number(prompt("Mis oli tegelik kiirus?"));

let summa = (tegelikKiirus - lubatudKiirus) * 3;
let trahv = Math.min(190, summa)

console.log(nimi + ", kiiruse ületamise eest on teie trahv " + trahv + " eurot.");