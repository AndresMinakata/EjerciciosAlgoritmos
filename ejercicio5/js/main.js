// Solicitar 3 número y evaluar si es la suma de los otros dos números.
alert("Coloca 3 números a sumar:");
const num1 = parseFloat(prompt("Coloca el primer número: "));
const num2 = parseFloat(prompt("Coloca el segundo número: "));
const num3 = parseFloat(prompt("Coloca el segundo número: "));
console.log("Los números seleccionados fueron:", num1, num2,num3 );

// Condiciones.
let suma;
if (num2+num3 == num1){
    alert("Felicidades, la suma de: " + num2 + " + " + num3 + " es igual a: " + num1)
    console.log(("Felicidades, la suma de: " + num2 + " + " + num3 + " es igual a: " + num1));
}

else if (num1+num3 == num2){
    alert("Felicidades, la suma de: ", +num1, " + ", +num3, " es igual a: ", num2)
    console.log(("Felicidades, la suma de: ", +num1, " + ", +num3, " es igual a: ", num2));
}
else if (num1+num2 == num3){
    alert("Felicidades, la suma de: " +num1+ " + " +num2+ " es igual a: "+ num3)
    console.log(("Felicidades, la suma de: " +num1+ " + " +num2+ " es igual a: "+ num3));
}
else {
    alert("Lo siento pero la suma de los números no corresponde a ningún número ")
    console.log(("Lo siento pero la suma de los números no corresponde a ningún número "));
}