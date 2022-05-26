alert("Coloca 1 número entre el 100 y 200");

const num1 = parseInt(prompt("Coloca el número: "));
console.log("Los números seleccionados fueron:", num1);

let divisor;
const dividendo = 3;
// IF para limitar número entre 100 y 200

if (num1 < 100 || num1 > 200){
    alert("Lo siento, tu número debe de ser entre el 100 y 200")
    console.log("Lo siento, tu número debe de ser entre el 100 y 200");
}
else{ // IF para ver si el número se puede dividir entre 3.
if (num1 % dividendo == 0){
    alert("Tú número " + num1 +" SI es múltiplo de 3")
    console.log("Tú número " + num1 +" SI es múltiplo de 3");
} else {
    alert("Tú número " + num1 +" NO es múltiplo de 3")
    console.log("Tú número " + num1 +" NO es múltiplo de 3");
}   
}
