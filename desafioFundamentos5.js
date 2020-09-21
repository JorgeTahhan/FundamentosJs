<<<<<<< HEAD
var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())

if (contador < 2) {
    console.log(`Fui a ver si llovía ${contador} vez`);
} else {
    console.log(`Fui a ver si llovía ${contador} veces`);
=======
var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())

if (contador < 2) {
    console.log(`Fui a ver si llovía ${contador} vez`);
} else {
    console.log(`Fui a ver si llovía ${contador} veces`);
>>>>>>> a91b2b2b63208de827cd4961a8f762ae7c03c5df
}