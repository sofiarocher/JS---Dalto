class app {
    constructor(nombre, cantidad, puntaje, peso){
        this.nombre = nombre;
        this.descargas = cantidad;
        this.puntaje = puntaje;
        this.peso = peso;
        this.appInstalada = false;
        this.appAbierta = false;
    }
    verInfo(){
        return `<b>${nombre}</b><br>
        Me descargaron: ${this.descargas} veces.<br>
        Tengo un puntaje de: ${this.puntaje} estrellas.<br>
        Ocupo ${this.peso} de memoria.<br><br>
        `
    }
    instalarApp(){
        if(this.appInstalada == false){
            alert("App instalada.");
            this.appInstalada = true;
        } else {
            alert("App desinstalada.");
            this.appInstalada = false;
        }
    }
    abrirApp(){
        if(this.appAbierta == false && this.appInstalada == true){
            this.appAbierta = true;
            alert("App abierta.");
        } 
    }
    cerrarApp(){
        if(this.appAbierta == true && this.appInstalada == true){
            this.appAbierta = false;
            alert("App cerrada.");           
        }
    }
}

const juego1 = new app ("Fortnite", 10000000, 4.5, "32GB");
const juego2 = new app ("Valorant", 3000000, 3.5, "16GB");

