const autenticado = true;

if (autenticado){
    console.log('El usuario está autenticado');
}

const puntaje = 350;

function revisarPuntaje(){
    if (puntaje > 400){
        console.log('Felicidades, buen puntaje');
        return;
    }
    if (puntaje > 300){
        console.log('Excelente!!!')
        return;
    }
}

revisarPuntaje();