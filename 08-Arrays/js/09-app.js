const carrito = [
    {nombre : 'Monitor 27 pulgadas', precio: 1234},
    {nombre : 'Teclado Apple', precio: 700},
    {nombre : 'Televisor 32 pulgadas', precio: 3999},
    {nombre : 'Audifonos', Precio: 699},
    {nombre : 'Microfono Blue', Precio: 1500}
]

for (let i = 0; i<carrito.length; i++){
    console.table(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function (producto){
    console.table(`${producto.nombre} - Precio: ${producto.precio}`);
});