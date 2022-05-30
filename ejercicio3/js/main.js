function Adivinar() {
    let superior = 100;
    let inferior = 0;
    let noEncontrado =  true;
    while (noEncontrado) {
        let mid = parseInt(inferior + ((superior-inferior)/2));
        console.log(mid);
        console.log(((superior-inferior)/2));
        if (((superior-inferior)/2)<1){
            noEncontrado = False;
            alert ("Tú número es el " + (parseInt(mid)+4));
            break;
        }//if
        let res = confirm ("Tú número es menor o igual a: "+mid);
        if (res) {
            superior = mid;
        } else {
            inferior = mid;
        }//if
        console.log(inferior, superior);
    } //while
}//Adivinar

Adivinar();