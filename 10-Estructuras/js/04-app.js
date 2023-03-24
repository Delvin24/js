const dinero = 1000;
const totalPagar = 600;
const tarjeta = false ;
const cheque = true;

if (dinero >= totalPagar){ 
    console.log('Si puede pagar en efectivo');
} else if(tarjeta){
    console.log('Si puede pagar, pero con tarjeta');
} else if(cheque){
    console.log('Si, tiene un cheque para pagar') ;
    }
   else {  
    console.log('Fondos insuficientes');
}