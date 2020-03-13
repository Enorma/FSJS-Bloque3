/*
    Este ejercicio debe correr en Node.

    En ejercicios anteriores realizaste la tabla de multiplicar de un número.
    Esta vez, envuelve ese código en una función que pida un número como argumento.
    No es necesario que la función devuelva nada.
    Finalmente debe ser posible llamar la función con cualquier valor y obtener su tabla de multiplicar.
*/

//tu código va aquí vvv
let n = Infinity; //aquí pones cualquier valor
function multiplica(n) {
    let i = 0;
    while(i<=10) {
        let resultado = n*i;
        console.log("La multiplicación de "+n+" x "+i+" es igual a: "+resultado);
        i++;
    }
}
multiplica(n);
//tu código va aquí ^^^

//eof
