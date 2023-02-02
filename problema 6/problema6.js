class celular {
    constructor(marca, color, peso, pantalla, camara, ram) {
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.memoria = ram;
        this.encendido = false;
        this.info = `<b>${this.marca}</b><br>Color: ${this.color}<br>Peso: ${this.peso}<br>Pantalla: ${this.pantalla}<br>Resolucion de Camara: ${this.camara}<br>Memoria: ${this.memoria}<br><br>`;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Me estoy encendiendo.");
            this.encendido = true;
        } else {
            alert("El celular esta apagado.");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("El celular se esta reiniciando.");
        } else {
            alert("El celular esta apagado.");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en esta resolucion: ${this.camara}`);
    }
    tomarVideo(){
        alert(`Video tomado en esta resolucion: ${this.camara}`);
    }
    verInfo(){
        document.write(this.info);
    }
}



class altaGama extends celular {
    constructor(marca, color, peso, pantalla, camara, ram, resolucion){
        super(marca, color, peso, pantalla, camara, ram);
        this.resolucion = resolucion;
    }
    faceId(){
        alert("Reconocimiento facial aprobado.");
    }
    camaraLenta(){
        alert("Estas grabando en camara lenta.");
    }
    extraCamara(){
        alert(`Sacaste una foto con esta resolucion: ${this.resolucion}`);
    }
}

const motorola = new celular ("Motorola", "Negro","100Gr",6.7,"48MP","4GB");
const xiaomi = new celular ("Xiaomi", "Azul Marino","150Gr",8,"76MP","8GB");
const huawei = new celular ("Huawei", "Gris plata","180Gr",7,"36MP","2GB");
const apple = new altaGama ("Iphone 14", "Negro","100Gr",6.7,"80MP","4GB","4K");
const apple1 = new altaGama ("Iphone 15", "Negro","100Gr",6.7,"180MP","4GB", "8K");

