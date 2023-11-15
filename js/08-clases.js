class VideoJuego{
    constructor(tituloParam,generoParam,precioParam,etiquetasParam,anioLanzamientoParam,desarrolladorParam){
        //declaramos la propiedad que tendra un videojuego
        this._titulo = tituloParam;
        this._precio = precioParam;
        this._genero = generoParam;
        this._etiquetas= etiquetasParam;
        this._anioLanzamiento = anioLanzamientoParam;
        this._desarrollador = desarrolladorParam;
        //propiedad por defecto
        this.pueblicado = false;
    }
    //propiedades computadas get y set
    get titulo(){
        return this._titulo;
    }
    get precio(){
        return this._precio;
    }
    set titulo(nuevoTitulo){
        if(nuevoTitulo !== ""){
            this._titulo = nuevoTitulo;
        }else{
            alert("Debe ingresar un nuevo titulo");
        }
    }

    //aqui declaro mis metodos
    mostrarDatos(){
        document.write(`<ul>
        <li>Titulo: ${this.titulo}</li>
        <li>Precio: ${this.precio}</li>
        <li>Genero: ${this.genero}</li>
        <li>Desarrollador: ${this.desarrollador}</li>
        </ul>`)
        
    }
}