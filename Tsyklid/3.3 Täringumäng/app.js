let taringuteArv = Number(prompt("Sisestage täringute arv"));
let visked;

for (let i = 0; i < taringuteArv; i++) {
    visked = Math.floor(Math.random() * 6) + 1;
    console.log(visked);
}