//Switch case

const metodoDePago = 'efectivo';

switch (metodoDePago) {
    case 'efectivo':
        pagar();
        console.log(`Has pagado con ${metodoDePago}`);
         break;
    case 'cheque':
        console.log(`Has pagado con ${metodoDePago}`);
        break;
    case 'tarjeta':
        console.log(`Has pagado con ${metodoDePago}`)
        break;
    default:
        console.log(`Metodo de pago no soportado`);
    break;
} 
function pagar(){
    console.log('pagando...');
}