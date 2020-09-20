const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

$.get(lukeURL, opts, function(luke) {
        console.log(`hola yo soy,${luke.name}`)
    }) //request a realizar, hacia donde