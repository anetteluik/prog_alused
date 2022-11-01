/* 3.2 Jänesevanemate mure */

let ringideArv = Number(prompt('Sisestage ringide arv'));
let ring = 1;
let porgandid = 0

while (ring <= ringideArv) {
    if (ring % 2 == 0) {
        porgandid_ringis = ring
        porgandid = porgandid + porgandid_ringis
    }
    ring ++
}
console.log('Porgandite koguarv on ' + porgandid)
