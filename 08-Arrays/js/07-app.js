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

const producto4 = {
    MagicMouse : 'Bluethooth',
    Precio : 1234
}

carrito.unshift(producto3);
carrito.push(producto);
carrito.push(producto2);



//Eliminar el ultimo elemento del arreglo

//carrito.pop();
//console.table(carrito);

//Eliminar del inicio del carrito
//carrito.shift();
carrito.splice(2, 2);
console.table(carrito);