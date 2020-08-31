var dario = {
    nombre: 'Dario',
    apellido: 'Fernandez',
    edad: 28
}

var sacha = {
    nombre: 'Sacha',
    apellido: 'Torres',
    edad: 24
}

function imprimirNombreYEdad(persona) {
    var { nombre } = persona
    var { apellido } = persona
    var { edad } = persona
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`);
}

imprimirNombreYEdad(dario)
imprimirNombreYEdad(sacha)