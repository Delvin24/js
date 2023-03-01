const producto = 'Monitor de 29 pulgadas';

//.repeat te va a permitir repetir una cadena de texto

const texto = ' en Promocion'.repeat(10);

console.log(texto);
console.log(`${producto} ${texto} !!!`)

//Split te permite dividir un string

const actividad = "Estoy aprendiendo JS";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(","));

const tweet = 'Aprendiendo JS #AprendiendoJS';
console.log(tweet.split("#"));
