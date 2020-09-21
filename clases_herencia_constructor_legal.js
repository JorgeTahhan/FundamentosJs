<<<<<<< HEAD
class Persona {

    constructor(nombre, apellido, estatura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estatura = estatura;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y mi estatura es de ${this.estatura}m.`);
    }

    soyAlto() { //metodo de comparación de altura
        returnthis.estatura > 1.8;
    }
}

class Desarrollador extends Persona { //se genera l clase

    constructor(nombre, apellido, estatura) { //se hace del constructor no se vuelve a usar this ya que el padre lo tiene y arroja un error
        super(nombre, apellido, estatura) // se llama a la clase padre
    }

    saludar() { //se genera metodo quitando las funciones que se veian en la clase anterior "26" visible en el archivo de word
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, mi estatura es de ${this.estatura}m y soy desarrollador.`);
    }

}

var Enrique = new Persona('Enrique', 'Nieto', 1.81); // Aquí soy persona
var Enrique1 = new Desarrollador('Enrique1', 'Nieto', 1.81); // Aquí soy desarrollador


Enrique.saludar();
=======
class Persona {

    constructor(nombre, apellido, estatura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estatura = estatura;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y mi estatura es de ${this.estatura}m.`);
    }

    soyAlto() { //metodo de comparación de altura
        returnthis.estatura > 1.8;
    }
}

class Desarrollador extends Persona { //se genera l clase

    constructor(nombre, apellido, estatura) { //se hace del constructor no se vuelve a usar this ya que el padre lo tiene y arroja un error
        super(nombre, apellido, estatura) // se llama a la clase padre
    }

    saludar() { //se genera metodo quitando las funciones que se veian en la clase anterior "26" visible en el archivo de word
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, mi estatura es de ${this.estatura}m y soy desarrollador.`);
    }

}

var Enrique = new Persona('Enrique', 'Nieto', 1.81); // Aquí soy persona
var Enrique1 = new Desarrollador('Enrique1', 'Nieto', 1.81); // Aquí soy desarrollador


Enrique.saludar();
>>>>>>> a91b2b2b63208de827cd4961a8f762ae7c03c5df
Enrique1.saludar();