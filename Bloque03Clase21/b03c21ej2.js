/*
    Este ejercicio debe correr en Node.

    Realiza una función que calcule el factorial de un número.
    Debes devolver un mensaje de error si el número es menor a cero, mayor a 10 o si no es number.
    La función debe retornar el factorial ya calculado.
*/

//tu código va aquí vvv
function factorial(n) {

    n = Number(n);

    if(n<0 || n>10 || isNaN(n)) {
        console.log("ERROR, mándame un número de 0 a 10");
        return "NO VÁLIDO";
    }

    if(n===0) {return 1;}

    let f = 1; //acumulador, empieza en 1 para que no afecte al resultado
    for(n ; n>0 ; n--) {
        f *= n;
    }

    return f;
}

let n = -10;
let f = factorial(n);

console.log("El factorial de "+n+" es: "+f);

//tu código va aquí ^^^

//eof
