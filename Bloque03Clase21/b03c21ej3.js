/*
    Este ejercicio debe correr en Node.

    Realiza una función que reciba una palabra que sólo tenga letras y un boolean.
    Si el boolean es true, la función debe devolver cuántas vocales hay en el string.
    Si el boolean es false, debe devolver cuántas consonantes hay.

    Al declarar la función, guárdala en una variable.
*/

//tu código va aquí vvv
const tipoDeLetra = function letras(un_str, un_bool) {

    un_str = un_str.toUpperCase();
    let v = 0;
    if(un_bool) {
        for(let i of un_str) {
            if(i==="A" || i==="E" || i==="I" || i==="O" || i==="U") {
                v++;
            }
        }
    }else {
        for(let i of un_str) {
            if(i!=="A" && i!=="E" && i!=="I" && i!=="O" && i!=="U") {
                v++;
            }
        }
    }
    return v;
}

let l = tipoDeLetra("hola", false); //true cuenta vocales, false cuenta consonantes
console.log("letras: "+l);
//tu código va aquí ^^^

//eof
