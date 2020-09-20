var nombre;
var ultimaLetra;
var longitud;

nombre = prompt('ingrese su nombre');
longitud = nombre.length - 1;
ultimaLetra = nombre.charAt(longitud);
console.log(`la ultima letra de tu nombre es ${ultimaLetra}`);