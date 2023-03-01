const producto = 'Monitor de 29 pulgadas ';
const precio = '30USD';

console.log(producto.concat(precio));
console.log(producto.concat(precio.concat(' en descuento')));

console.log(producto + "con un precio de: " + precio);

console.log("El producto" + producto + "tiene un precio de: " + precio);
console.log("El producto" , producto , "tiene un precio de: " , precio);

console.log(`El producto${producto}tiene un precio de $${precio}`);