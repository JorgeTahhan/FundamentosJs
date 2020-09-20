function persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

persona.prototype.soyAlto = function() {
    this.altura >= 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
}

var jorge = new persona('jorge', 'tahhan', 1.80)
var lucy = new persona('lucy', 'torres', 1.65)

jorge.soyAlto()
lucy.soyAlto()