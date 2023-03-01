const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true
}

//Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';
//para eliminar una propiedad del objeto
delete producto.disponible;

console.log(producto);