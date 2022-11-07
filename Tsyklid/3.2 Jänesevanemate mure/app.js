let ringideArv = Number(prompt("Sisestage ringide arv"));

let ringid = 0;
let porgandid = 0;

while (ringid <= ringideArv) {
    if (ringid % 2 == 0) {
        porgandid = porgandid + ringid;
    }
    ringid++
}

console.log("Porgandite koguarv on " + porgandid + ".")