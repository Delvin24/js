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

const {nombre, informacion, informacion: {fabricacion, fabricacion: {pais}}} = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);