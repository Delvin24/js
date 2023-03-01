//Agregar al final del arreglo
const carrito = [];

//Definir un producto
const producto = {
    Monitor : '32 pulgadas',
    Precio : 7000
}

const producto2 = {
    Celular : 'IP15',
    Precio : 43000
}

const producto3 = {
    Teclado : 'Mecanico',
    Precio : 2345
}

carrito.unshift(producto3);
carrito.push(producto);
carrito.push(producto2);


console.table(carrito);