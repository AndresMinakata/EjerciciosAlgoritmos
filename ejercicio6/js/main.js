alert("Coloca 1 número");

const num1 = parseFloat(prompt("Coloca el número: "));
console.log("El número seleccionado fue: ", num1);
// IF para ver si el número se puede dividir entre 2 y saber si es o no PAR.
let divisor;
const par = 2;
if (num1 % par == 0){
    alert("Tú número es PAR")
    console.log("Tú número es PAR")

} else {
    alert("Tú número NO es PAR")
    console.log("Tú número NO es PAR");
}
