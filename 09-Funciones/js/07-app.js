iniciarApp();
function iniciarApp(){
    console.log('iniciando app...')
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion')
    usuarioAutenticado('Delvin');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario');
    console.log(`'Usuario autenticado exitosamente: ${usuario}'`)
}