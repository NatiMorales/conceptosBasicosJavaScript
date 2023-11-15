//notacion literal

const usuario = {
    //propiedades clave:valor
    edad:25,
    nombre:"Natalia",
    apellido:"Morales",
    correo:"natalia@gmail.com",
    password:"123456Aa@",
    //metodos
    login: function(){
        document.write(`<p>El usuario inicio sesión</p>`)
    },
    logout: () => {
        document.write(`<p>El usuario cerro sesión</p>`)
    }
}

//mostrar un objeto
console.log(usuario);
document.write(usuario);
document.write(`<h1>Usuario:${usuario.nombre}, ${usuario.apellido}</h1>`);
document.write(`<p>Correo: ${usuario["correo"]}</p>`);

//modificar la propiedad de un objeto
usuario.edad = usuario.edad + 1; //usuario.edad++
document.write(`<p>Edad: ${usuario.edad}</p>`);

usuario.perfil = "alguna foto";
document.write(`<p>Perfil: ${usuario.perfil}</p>`);
console.log(usuario);

//cuidado con las propiedades mal escritas o que no existen
document.write(`<p>Tel: ${usuario.Nombre}</p>`);

