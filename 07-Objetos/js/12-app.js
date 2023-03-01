//Object literal
const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas', 4999);
console.log(producto2);

const producto3 = new Producto('Tablet', 2499);
console.log(producto3);