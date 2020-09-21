<<<<<<< HEAD
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

$.get(lukeURL, opts, function(luke) {
        console.log(`hola yo soy,${luke.name}`)
=======
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

$.get(lukeURL, opts, function(luke) {
        console.log(`hola yo soy,${luke.name}`)
>>>>>>> a91b2b2b63208de827cd4961a8f762ae7c03c5df
    }) //request a realizar, hacia donde