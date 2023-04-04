window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top< 784){
        console.log('El elemento ya esta visible');
    }else{
        console.log('Aun no, da mas sxroll');
    }
})