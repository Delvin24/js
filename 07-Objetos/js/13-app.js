//Object literal
const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}
//Solo retorna las llaves del objeto
console.log(Object.keys(producto));
//Retorna los valores del objeto
console.log(Object.values(producto));
//Retorna todo sobre el objeto
console.log(Object.entries(producto));