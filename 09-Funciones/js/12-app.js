const carrito = [
    {nombre : 'Monitor 27 pulgadas', precio: 1234},
    {nombre : 'Teclado Apple', precio: 700},
    {nombre : 'Televisor 32 pulgadas', precio: 3999},
    {nombre : 'Audifonos', Precio: 699},
    {nombre : 'Microfono Blue', Precio: 1500}
]

const nuevoArreglo = carrito.map( producto => (`${producto.nombre} - Precio: ${producto.precio}`));
carrito.forEach( producto => console.log ( `${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);