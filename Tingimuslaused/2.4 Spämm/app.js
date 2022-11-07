let kirjaSuurus = Number(prompt("Sisestage kirja suurus"));
let pealkiri = prompt("Sisestage kirja teema pealkiri");
let fail = prompt("Kas kirjaga on kaasas fail (jah/ei)?");


if (pealkiri == "") {
    console.log("Kiri on spamm");
}
else if (fail == "jah" && kirjaSuurus > 1) {
    console.log("Kiri on spamm");
}
else {
    console.log("Kiri ei ole spamm");
}