var x = Number(prompt("N1: "));
var y = Number(prompt("N2: "));
var opcion = Number(prompt("opcion: "));

/* Operaciones:
1. suma
2. resta
3. multiplicacion
4. division
5. raiz cubica
6. factorial 
7. potencia
*/

switch(opcion){
    case 1:
        document.write("Respuesta = " + suma(x,y));
        break;

    case 2:
        document.write("Respuesta = " + resta(x,y));
        break;

    case 3:
        document.write("Respuesta = " + multiplicacion(x,y));
        break;

    case 4:
        document.write("Respuesta = " + division(x,y));
        break;

    case 5:
        document.write("Respuesta = " + raiz(x,y));
        break;

    case 6:
        document.write("Respuesta = " + factorial(x,y));
        break;

    case 7:
        document.write("Respuesta = " + potencia(x,y));
        break;

    default:
        break;
}

function suma(x,y){
    return x+y;
}

function resta(x,y){
    return x-y;
}

function multiplicacion(x,y){
    return x*y;
}

function division(x,y){
    if(y == 0){
        document.write("No se puede dividir entre 0")
    }else{
        return x/y;
    }
}

function raiz(x){
    return Math.sqrt(x);
}

function factorial(x){
    var tot = 1;
    for(i = 1; i<= x; i++){
        tot = tot*i;
    }
    return tot;
}

function potencia(x,y){
    return Math.pow(x,y);
}