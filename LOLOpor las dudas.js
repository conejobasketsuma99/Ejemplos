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

function ejercicio5() {
    let factor = prompt("Ingrese un numero para poder calcular el factorial");

    let producto = 1;
    for (let i = 1; i <= factor; i++){
        producto = producto * i;
    }

    console.log("El factorial de "+ factor+"es: "+producto);
}