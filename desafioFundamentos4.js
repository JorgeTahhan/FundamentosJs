var dario = {
    nombre: 'Dario',
    apellido: 'Fernandez',
    edad: 18
}

var sacha = {
    nombre: 'Sacha',
    apellido: 'Torres',
    edad: 14
}

const imprimirSiEsMayorDeEdad = (persona) => {
    var { nombre } = persona
    var { apellido } = persona
    var edad = persona.edad

    if (edad < 18) {
        return false;
    }

}

imprimirSiEsMayorDeEdad(dario)
imprimirSiEsMayorDeEdad(sacha)