//forOf

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    {nombre : 'Monitor 27 pulgadas', precio: 1234},
    {nombre : 'Teclado Apple', precio: 700},
    {nombre : 'Televisor 32 pulgadas', precio: 3999},
    {nombre : 'Audifonos', Precio: 699},
    {nombre : 'Microfono Blue', Precio: 1500}
]

for( let pendiente of pendientes ) {
    console.log(pendiente);
}

for (let producto of carrito){
    console.log(producto);
}