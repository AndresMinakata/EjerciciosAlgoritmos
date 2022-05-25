//  1. Solicitar 3 números entre el 1 y el 100. Y elegir el mayor.
alert("Coloca 3 números del uno al 100");
const num1 = parseFloat(prompt("Coloca el primer número: "));
const num2 = parseFloat(prompt("Coloca el segundo número: "));
const num3 = parseFloat(prompt("Coloca el tercer número: "));
console.log("Los números seleccionados fueron:", num1, num2, num3);

// Condicional, NO puede ser menor o mayor que 100.
if (num1> 100 || num2> 100 || num3 > 100){
alert("El número NO puede ser Mayor de 100!");    
}
else if (num1 <= 0 || num2 <= 0 || num3 <= 0){
    alert("El número  NO puede ser Menor de 100");
}

else { 

// Condiciones para mayor
let Mayor;
if (num1>=num2 && num1 >= num3){
    Mayor = num1;
    alert("El número mayor es: " + num1)
}
else if (num2>=num1 && num2 >= num3){
    Mayor = num2;
    alert("El número mayor es: " + num2)
}
else {
    Mayor = num3;
    alert("El número mayor es: " + num3)
}
console.log ("El número mayor es: " + Mayor);


//  2. Solicitar 3 números entre el 1 y el 100. Y elegir el menor.

// Condiciones para menor.

let Menor;
if (num1<=num2 && num1 <= num3){
    Menor = num1;
    alert("El número menor es: " + num1)
}
else if (num2<=num1 && num2 <= num3){
    Menor = num2;
    alert("El número menor es: " + num2)
}
else {
    Menor = num3;
    alert("El número menor es: " + num3)
}
console.log ("El número menor es: " + Menor);






} 