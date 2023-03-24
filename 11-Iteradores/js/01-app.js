//for(let i=0; i <= 10; i++) {
//     console.log(`Numero: ${i}`);
//}

for (let i=0; i<=20; i++){
    if( i%2 === 0){
        console.log(`El numero: ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
}

const carrito = [
    {nombre : 'Monitor 27 pulgadas', precio: 1234},
    {nombre : 'Teclado Apple', precio: 700},
    {nombre : 'Televisor 32 pulgadas', precio: 3999},
    {nombre : 'Audifonos', Precio: 699},
    {nombre : 'Microfono Blue', Precio: 1500}
]

console.log(carrito.length);

for(let i=0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}