var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
}
//
miAuto.marca 


//propiedad, metodo objeto


var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}` )
    }
};