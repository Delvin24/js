const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de navegacion');
    nav.style.backgroundColor = 'transparent';
    
})
nav.addEventListener('dblclick', () => {
    console.log('Entrando a navegacion');
    nav.style.backgroundColor = 'white';
})

//mousedown es similar al click
//click
//dblclick = dobleclick
//mouseup = Cuando suelto el click