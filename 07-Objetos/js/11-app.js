const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const producto2 = {
    nombre: 'Monitor 24 pulgadas',
    precio: 5000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
