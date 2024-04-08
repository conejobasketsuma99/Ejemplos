function ejercicio1() {
    let meses =  ["Enero", "Febero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agusto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
}

function ejercicio2() {
    var valores = [true, 5, false, "hola", "adios", 2];

    if (valores[3].length > valores [4].length){
        console.log("hola es mayor que adios");
        console.log(valores[0])

    }else{
        console.log("adios es mayor que hola");
        console.log(valores[2]);
    }

    console.log(valores[1] + valores[5]);
    console.log(valores[1] - valores[5]);
    console.log(valores[1] * valores[5]);
    console.log(valores[1] / valores[5]);
    console.log(valores[5] / valores[1]);
    console.log(valores[5] - valores[1]);
}

function ejercicio3(){
    var numero1= 5;
    var numero2= 8;
    if(numero1<numero2) {
        console.log("numero1 no es mayor que numero2");
        }
        if(numero2>0) {
        console.log("numero2 es positivo");
        }
        if(numero1 <0) {
        console.log("numero1 es negativo o distinto de cero");
        }
        if(numero1 +1 <numero2) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }
}

function ejercicio4(){
    var DNI=prompt("el mensaje");
    var pos= DNI%23;
    let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

    if(pos>0 && pos<99999999){
        var letrauser=prompt("ingrese letra de su DNI");
        var letra = letrasDNI[letrauser];

        if(letra == letrauser){
            console.log("Las letras son iguales.");
        } 
        else{
            console.log("LA letra introducida es incorrecta.")
        }
        console.log("El numero introducido es valido.");
        console.log("La letra de tu DNI es: "+ letra);
  }
    else{
        console.log("El numero introducido NO es valido");
    }

}

function ejercicio5() {
    let factor = prompt("Ingrese un numero para poder calcular el factorial");

    let producto = 1;
    for (let i = 1; i <= factor; i++){
        producto = producto * i;
    }

    console.log("El factorial de "+ factor+"es: "+producto);
}

function ejercicio6(){
    
    var numero= prompt("Ingrese un número para determinar si es par o impar.");
    var resto= numero%2;

    if(resto == 0){
        console.log("El número es par");
    }
    else if(numero==0){
        console.log("El número introducido es invalido.");
    }

    else{
        console.log("El numero es impar");
    }

}
function ejercicio7(){
   
    let txt = prompt("Ingrese texto.");

    let result = mayumin(txt);

    console.log(result);

}

function mayumin(txt) {
    let may = 0;
    let min = 0;

for (let i = 0; i < txt.length; i++) {
    if (txt.charAt(i) === txt.charAt(i).toUpperCase()) {
        may++;
    } else if (txt.charAt(i) === txt.charAt(i).toLowerCase()) {
        min++;
    }

}
    if(may==0){
        return("El texto sólo contiene minúsculas.");

    }
    else if(min==0){
        return("El texto sólo contiene mayúsculas");
    }
    else{
        return("El texto contiene mayúsculas y minúsculas.");
    }
}
function ejercicio8(){
    var txt= prompt("Ingrese una palabra u oración para determinar si es palíndromo o no.");
    
    var result=(espalindromo(txt));

}
function espalindromo(txt){
    
    var texto= txt.toLowerCase().replace(/[^a-z]/g, '');

    var invertir= texto.split('').reverse().join('');

    if(txt==invertir){
        return "Es palíndromo."
    }  else{
        return "No es palíndromo."
    }
}