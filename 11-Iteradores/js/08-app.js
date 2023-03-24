//forIn

//const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

//for( let pendiente in pendientes ) {
//    console.log(pendiente);
//}

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for( let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

for (let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave)
}