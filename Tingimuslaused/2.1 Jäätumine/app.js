let ohuTemp = Number(prompt("Sisesta õhutemperatuur"));

let eiOleJaatumisoht = "Ei ole jäätumise oht";
let onJaatumisoht = "On jäätumise oht";

console.log("Sisesta õhutemperatuur: " + ohuTemp);

if (ohuTemp > 4.0) {
    console.log(eiOleJaatumisoht);
}
else {
    console.log(onJaatumisoht);
}