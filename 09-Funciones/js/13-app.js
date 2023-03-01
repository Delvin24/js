const reproductorMusica = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id: ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`borrando cancion: ${id}`),
    crearPlaylist: nombre => console.log(`Creando la nueva playslit de: ${nombre}`),
    reproducirPlaylist: nombrePlaylist => console.log(`Reproducir Playlist ${nombrePlaylist}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}
//Utilizando sets y gets
reproductorMusica.nuevaCancion = 'Swithcfoot';
reproductorMusica.obtenerCancion;

reproductorMusica.reproducir(30);
reproductorMusica.pausar();
reproductorMusica.borrar(123);
reproductorMusica.crearPlaylist('Rock cristiano');
reproductorMusica.reproducirPlaylist('Epic music');