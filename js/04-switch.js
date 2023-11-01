// si el usuario presiona 1 consulta el sueldo, 2 extraer dinero, 3 ingresar dinero;

let saldo = 1000;

const opcion = parseInt(prompt("seleccione una opción: 1- Consultar el saldo, 2- Extraer dinero, 3- Ingresar dinero"));

if(opcion === 1){
    //console.log("debo mostrar el saldo");
    console.log("Saldo disponible: "+ saldo);
} else if(opcion  === 2){
    //console.log("extraer dinero");
    const montoAExtraer = parseFloat(prompt("Ingrese el monto a extraer"));
    if(montoAExtraer > 0){
        saldo = saldo - montoAExtraer;
        console.log("EXTRACCIÓN EXITOSA");
        console.log("Saldo disponible: "+ saldo);
    }else{
        console.log("Ingrese un monto mayor a 0 (cero)");
    }
} else if(opcion === 3){
    //console.log("ingresar dinero");
    const montoAIngresar = parseFloat(prompt("Ingrese el monto a agregar"));
    if(montoAIngresar > 0){
        saldo = saldo + montoAIngresar;
        console.log("INGRESO EXITOSO");
        console.log("Saldo disponible: "+ saldo);
    }else{
        console.log("Ingrese un monto mayor a 0 (cero)");
    }
} else {
    console.log("Ingresó una opción inválida");
}