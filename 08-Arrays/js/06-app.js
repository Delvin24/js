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

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table(resultado);