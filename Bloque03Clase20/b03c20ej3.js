/*
    Este ejercicio debe correr en Node.

    Obtén el promedio de todos los números dentro del arreglo.
*/

const a = [623.549,685.324,528.423,492.587,120.065,983.004,300.470,421.799,101.265,323.650,147.265,200.684];

//tu código va aquí vvv

let suma = 0;

for(let b of a) {
    suma += b;
}

let promedio = suma / a.length;

console.log("El promedio es: "+promedio);

//tu código va aquí ^^^

//eof
