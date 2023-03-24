const usuario = false;
const puedePagar = false;

if (usuario && puedePagar){
    console.log('Si puede comprar');
} 
else if (!puedePagar && !usuario){
    console.log ('No puede pagar');
}
else if (!usuario){
    console.log('Inicia sesion o crea una cuenta');
}
else if (!puedePagar){
    console.log('Fondos insuficientes');
}