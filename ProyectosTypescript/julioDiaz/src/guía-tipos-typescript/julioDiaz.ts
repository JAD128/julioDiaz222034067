interface tipoVehiculo {
    tipo : string,
    marca : string, 
    modelo : string,
    cilindraje : number,
    numPuertas : number,
    arrancarVehiculo: () => void,
    cEspeciales : caractetisticasEspeciales []
}

interface caractetisticasEspeciales {
    velocidad : number,
    suspencion : boolean,
    agregarSuspencion : () => void
}

interface testArray {
    modelos : number [],
    caracteristicasArray : Array<string[]>
}

const miVehiculo : tipoVehiculo = {
    tipo : 'Camioneta',
    marca : 'Renault',
    modelo : 'Capture',
    cilindraje : 2000,
    numPuertas : 4,
    arrancarVehiculo() {
        console.log('El vehiculo arranco con un motor de', this.cilindraje, ' cc')
    },
    cEspeciales : []
}
console.log(miVehiculo)
miVehiculo.arrancarVehiculo()

const miSegundoVehiculo : caractetisticasEspeciales = {
    velocidad : 200,
    suspencion : false,
    agregarSuspencion() {
        if (this.suspencion){
            console.log('Tu vehiculo tiene suspensión')
        }
        else{
            console.log('Tu vehiculo no tiene suspensión')
        }
    },
}
miSegundoVehiculo.agregarSuspencion()
console.log(miSegundoVehiculo)

const miTercerVehiculo : testArray = {
    modelos : [230, 231, 232, 233, 234, 235],
    caracteristicasArray : [
        ['azul', 'verde'],
        ['Rin 15', 'rin 17'],
        ['2 puertas', '4 puertas']
    ]
}
console.log(miTercerVehiculo)
console.log(miTercerVehiculo.caracteristicasArray[0][0])
console.log(miTercerVehiculo.caracteristicasArray[2][1])

let index = 0;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
});

index = 1;
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
});

