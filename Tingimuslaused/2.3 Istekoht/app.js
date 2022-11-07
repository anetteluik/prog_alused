let valik = prompt("Kas soovite istekohta ise valida ('ise') või loosida ('loos')?");

console.log("Kas soovite istekohta ise valida ('ise') või loosida ('loos')?  " + valik);

let istekoht;
let random;

if (valik == "ise") {
    istekoht = prompt("Kas soovite istuda akna ääres ('aken') või mitte ('muu')?");

    if (istekoht == "aken") {
        console.log("Kas soovite istuda akna ääres ('aken') või mitte ('muu')?  " + istekoht);
        console.log("Valisite ise. Aknakoht");
    }
    else {
        console.log("Kas soovite istuda akna ääres ('aken') või mitte ('muu')?  " + istekoht);
        console.log("Valisite ise. Vahekäigukoht");
    }
}
else {
    random = Math.floor(Math.random() * 3);
    if (random == 0) {
        console.log("Istekoht loositi. Aknakoht");
    }
    else {
        console.log("Istekoht loositi. Vahekäigukoht")
    }
}

