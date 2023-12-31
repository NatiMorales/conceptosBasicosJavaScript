//declarar un array
const productos = [];

const juegos = ["counter-strike", "Minecraft", 2023, true, "valorant", "half-life", "lol"];

function mostrarJuegos(titulo){
    document.write(`<h2>${titulo}</h2>`);
    document.write(`<ul>`);
    for(let i=0; i<juegos.length; i++){
        document.write(`<li>${juegos[i]}</li>`);
    }
    document.write(`</ul>`);
}

const mostrarArray = (arreglo, titulo) => {
    document.write(`<h2>${titulo}</h2>`);
    document.write(`<ul>`);
    arreglo.map((item => document.write(`<li>${item}</li>`)))
    document.write(`</ul>`);
}

//cantidad de elementos en el array
console.log(juegos.length);

//mostrar un array
document.write(juegos);
console.log(juegos);

document.write(`<p>El primer juego es ${juegos[0]}</p>`);
document.write(`<p>El ultimo juego es ${juegos[juegos.length-1]}</p>`);

document.write(`<p>Juego en la posicion 20: ${juegos[20]}</p>`);

mostrarJuegos("Lista de juegos");

//agregar elementos al array
//agregar un elemento al comienzo del array con el método "unshift"
juegos.unshift("God of war", "Street fighter");
mostrarJuegos("Lista de juegos + 2 juegos extras");

//agregar un elemento en el medio del array con el método "splice"
juegos.splice(6,0,"Dark Souls");
mostrarJuegos(`Lista de juegos + 1, cantidad ${juegos.length}`);

//agregar un elemento al final del array con el métod "push"
juegos.push("Mortal Kombat");
mostrarJuegos(`Lista de juegos + 1, cantidad ${juegos.length}`);

//modificamos los elementos de un array
juegos[5] = "Stardew valley";
mostrarJuegos(`Lista de jugos, modificamos un elemento del array ${juegos.length}`);

//eliminar elementos del array
juegos.shift();
mostrarJuegos(`Lista de jugos -1 un elemento del array ${juegos.length}`);

juegos.splice(3, 1);
mostrarJuegos(`Lista de jugos -1 un elemento del array ${juegos.length}`);
//juegos.splice(3, 3);
//juegos.splice(3);

juegos.pop();//borra el ultimo elemento del array
mostrarJuegos(`Lista de jugos -1 un elemento del array ${juegos.length}`);

//juegos[3] = ["p1", "p2", [35,36,37]];

juegos.push("Mortal Kombat 1", "Mortal Kombat 2", "Mortal Kombat 3");
mostrarJuegos("Agregamos nuevos jueguitos");

console.log(juegos[8]);
console.log(juegos[8].includes("Kombat")); //devuelve true o false
console.log(juegos[8].includes("kombat"));

//const juegosMKT = juegos.filter((juego) => condicion logica)
//const juegosMKT = juegos.filter((juego) => juego === "Mortal Kombat 4");
const juegosMKT = juegos.filter((juego) => juego.includes("Kombat"));
console.log(juegosMKT);
mostrarArray(juegosMKT,"Familia de juegos de MKT");

const juegoBuscado = juegos.find( itemJuego => itemJuego.includes("Minecraft"));
const juegoBuscado2 = juegos.find( itemJuego => itemJuego.includes("PES"));

document.write(`<p>Juego buscado: ${juegoBuscado}</p>`);
/*
if(juegoBuscado2 !== undefined){
    document.write(`<p>Juego buscado: ${juegoBuscado2}</p>`);
}else{
    document.write(`<p>Juego buscado: No se encontro el juego buscado</p>`);
}
*/

// Operador ternario
// (condicion logica)? todo la logica si se cumple la condicion : la logica si no se cumple la condicion
const respuesta = (juegoBuscado2 !== undefined)? juegoBuscado2 : "No se encontro el termino buscado";
document.write(`<p>Juego buscado: ${respuesta}</p>`);