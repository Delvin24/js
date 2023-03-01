"use strict";

const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true
}

const medidas = {
    peso : "1kg",
    medida : "1 metro"
}

console.log(producto);
console.log(medidas);

//COPIANDO DOS OBJETOS

//Spread operator o rest operator
const resultado2 = {...producto, ...medidas};

const resultado = Object.assign(producto, medidas);
console.log(resultado);
console.log(resultado2);
