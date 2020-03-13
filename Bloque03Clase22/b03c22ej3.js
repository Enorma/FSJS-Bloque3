/*
    Este ejercicio debe correr en Node.

    Realiza una función anónima que sume 2 números.
    Guarda una copia de esa función en una variable.
    Guarda otra copia dentro de un arreglo.
    Comprueba que ambas copias funcionen.
*/

//tu código va aquí vvv
const suma = function(num1, num2) {
    return num1+num2;
}
const arr = [];
arr.push(suma);

console.log("suma en variable: "+suma(5, 2));
console.log("suma en arreglo: "+arr[0](5, 2));
//tu código va aquí ^^^

//eof
