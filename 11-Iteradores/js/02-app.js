/*for(let i=0; i <= 10; i++) {

    if (i === 5){
    console.log('CINCO');
    continue;
}
    console.log(`Numero: ${i}`);
}
*/
const carrito = [
    {nombre : 'Monitor 27 pulgadas', precio: 1234},
    {nombre : 'Teclado Apple', precio: 700},
    {nombre : 'Televisor 32 pulgadas', precio: 3999, descuento: true},
    {nombre : 'Audifonos', Precio: 699},
    {nombre : 'Microfono Blue', Precio: 1500}
]

for(let i=0; i < carrito.length; i++ ){
    if(carrito[i].descuento){
    console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
    continue;
    }
    console.log(carrito[i].nombre)
}