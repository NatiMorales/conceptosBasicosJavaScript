//length -> cantidad de caracteres de un string
const frase = prompt("Ingrese una frase").toLowerCase();

console.log(frase.length);
console.log(frase);
console.log(frase.charAt(0));


for(let indiceFrase = 0; indiceFrase < frase.length; indiceFrase++){
    if( frase.charAt(indiceFrase) === "a" || 
        frase.charAt(indiceFrase) === "e" || 
        frase.charAt(indiceFrase) === "i" || 
        frase.charAt(indiceFrase) === "o" || 
        frase.charAt(indiceFrase) === "u" ){
            document.write(frase.charAt(indiceFrase));
    }
}