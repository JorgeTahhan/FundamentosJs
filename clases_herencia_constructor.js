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

    soyAlto() {
        returnthis.estatura > 1.8;
    }
}

class Desarrollador extends Persona {

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, mi estatura es de ${this.estatura}m y soy desarrollador.`);
    }

}

var persona = new Persona('Enrique', 'Nieto', 1.81); // Aquí soy persona
var desarrollador = new Desarrollador('Enrique', 'Nieto', 1.81); // Aquí soy desarrollador


persona.saludar();
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

    soyAlto() {
        returnthis.estatura > 1.8;
    }
}

class Desarrollador extends Persona {

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, mi estatura es de ${this.estatura}m y soy desarrollador.`);
    }

}

var persona = new Persona('Enrique', 'Nieto', 1.81); // Aquí soy persona
var desarrollador = new Desarrollador('Enrique', 'Nieto', 1.81); // Aquí soy desarrollador


persona.saludar();
>>>>>>> a91b2b2b63208de827cd4961a8f762ae7c03c5df
desarrollador.saludar();