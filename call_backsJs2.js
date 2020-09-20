const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const opts = { crossDomain: true }

function obtenerPersona(id, callback) { //el callback es para tener un orden en lo datos de los get solicitados
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function(persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback) { //tenemos que hacer o retornar para hacer el callback y continuar sino no continua con la busqueda
            callback()
        }
    })
}

obtenerPersona(1, function() { //habria que hacer esto infinitamente conocido como el callback hell
    obtenerPersona(2, function() {
        obtenerPersona(3, function() {})
    })
})