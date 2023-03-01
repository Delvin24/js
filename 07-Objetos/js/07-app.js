const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true
}

//Los objetos a pesar de tener const
//Si permiten que sus propiedades sean modificadas o eliminadas

producto.disponible = false;

delete producto.precio;

console.log(producto);