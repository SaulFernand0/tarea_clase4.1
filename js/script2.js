function calcular(){

var x = Number(document.getElementById("N1").value); 
var y = Number(document.getElementById("N2").value);  
var operacion = document.getElementById("operacion").value;     

switch(operacion){
    case '1':
        document.getElementById("resultado").value = Number(suma(x,y));
        break;

    case '2':
        document.getElementById("resultado").value = Number(resta(x,y));
        break;

    case '3':
        document.getElementById("resultado").value = Number(multiplicacion(x,y));
        break;

    case '4':
        document.getElementById("resultado").value = Number(division(x,y));
        break;

    case '5':
        document.getElementById("resultado").value = Number(division(x,y));
        break;

    case '6':
        document.getElementById("resultado").value = Number(factorial(x,y));
        break;

    case '7':
        document.getElementById("resultado").value = Number(potencia(x,y));
        break;

    default:
        break;
}
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
