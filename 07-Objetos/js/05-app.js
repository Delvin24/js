const producto = {
    nombre: 'Monitor 27 pulgadas',
    precio: 1650,
    disponible: true,
    informacion : {
        medidas : {
            peso: '1Kg',
            medida: '1 metro'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}
console.log(producto.informacion.fabricacion.pais);