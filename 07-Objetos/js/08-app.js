"use strict";

const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true
}

Object.freeze( producto );

//producto.disponible = false;
//producto.imagen = imagen.jpg;

console.log(producto);

console.log(Object.isFrozen(producto));