const reproductorMusica = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id: ${id}`)
    },
    pausar: function(){
        console.log('pausando...')
    },
    borrar:function borrar(id){
        console.log(`borrando cancion: ${id}`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la nueva playslit de: ${nombre}`)
    },
    reproducirPlaylist: function(nombrePlaylist){
        console.log(`Reproducir Playlist ${nombrePlaylist}`)
    }
}

reproductorMusica.reproducir(30);
reproductorMusica.pausar();
reproductorMusica.borrar(123);
reproductorMusica.crearPlaylist('Rock cristiano');
reproductorMusica.reproducirPlaylist('Epic music');