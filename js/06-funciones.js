//funciones declarativas
function saludar(){
    //todas las lineas de codigo que quiero para saludar
    document.write("<p>Hola mundo</p>");
}

function saludoNuevo(nombreIngresado, apellidoIngresado){
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado}. Que tengas un buen día</p>`)
}

//invocar o llamar una función
saludar();

const nombre = prompt("Ingrese un nombre");
const apellido = prompt("Ingrese un apellido");

saludoNuevo(nombre,apellido);
saludoNuevo("Peter","Parker");
saludoNuevo("Batman");