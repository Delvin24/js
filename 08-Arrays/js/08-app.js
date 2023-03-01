const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(producto.nombre);

const { nombre } = producto;
//console.log(nombre);
//console.log(precio);
//console.log(disponible);

//Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];

const [primero, ...tercero] = numeros;

console.log(tercero);
console.log(primero);