const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const opts = { crossDomain: true }

function obtenerPersona(id, callback) { //el callback es para tener un orden en lo datos de los get solicitados
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, callback).fail(function() {
        console.log(`sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}

obtenerPersona(1, function(personaje) { //habria que hacer esto infinitamente conocido como el callback hell
    console.log(`Hola, yo soy ${personaje.name}`)
    obtenerPersona(2, function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)
        obtenerPersona(3, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)
        })
    })
})