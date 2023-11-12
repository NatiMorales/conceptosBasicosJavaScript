//declarar un array
const productos = [];

const juegos = ["counter-strike", "Minecraft", 2023, true, "valorant", "half-life", "lol"];

function mostrarJuegos(){
    document.write("<h2>Lista de juegos</h2>");
    document.write(`<ul>`);
    for(let i=0; i<juegos.length; i++){
        document.write(`<li>${juegos[i]}</li>`);
    }
    document.write(`</ul>`);
}

mostrarJuegos();

//cantidad de elementos en el array
console.log(juegos.length);

//mostrar un array
document.write(juegos);
console.log(juegos);

document.write(`<p>El primer juego es ${juegos[0]}</p>`);
document.write(`<p>El ultimo juego es ${juegos[juegos.length-1]}</p>`);

document.write(`<p>Juego en la posicion 20: ${juegos[20]}</p>`);

document.write("<h2>Lista de juegos</h2>");
document.write(`<ul>`);
for(let i=0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//agregar elementos al array
//agregar un elemento al comienzo del array con el método "unshift"
juegos.unshift("God of war", "Street fighter");
document.write("<h2>Lista de juegos + 2 juegos extras</h2>");
document.write(`<ul>`);
for(let i=0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//agregar un elemento en el medio del array con el método "splice"
juegos.splice(6,0,"Dark Souls");
document.write(`<h2>Lista de juegos + 1, cantidad ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//agregar un elemento al final del array con el métod "push"
juegos.push("Mortal Kombat");
document.write(`<h2>Lista de juegos + 1, cantidad ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//modificamos los elementos de un array
juegos[5] = "Stardew valley";
document.write(`<h2>Lista de jugos, modificamos un elemento del array ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//eliminar elementos del array
juegos.shift();
document.write(`<h2>Lista de jugos -1 un elemento del array ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

juegos.splice(3, 1);
//juegos.splice(3, 3);
//juegos.splice(3);
document.write(`<h2>Lista de jugos -1 un elemento del array ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

juegos.pop();//borra el ultimo elemento del array
document.write(`<h2>Lista de jugos -1 un elemento del array ${juegos.length}</h2>`);
document.write(`<ul>`);
for(let i=0; i<juegos.length; i++){
    document.write(`<li>${juegos[i]}</li>`);
}
document.write(`</ul>`);

//juegos[3] = ["p1", "p2", [35,36,37]];

