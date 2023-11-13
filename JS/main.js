let tipoDeServicios = [
{'tipo': 'Pelo', 'precio': 1500},
{'tipo': 'Pelo y Barba', 'precio': 2500},
{'tipo': 'Pelo, Barba y Lavado', 'precio': 3300},
{'tipo': 'Pelo, Barba, Lavado y Tintura', 'precio': 5000},
]; 
//un objeto con los servicios que ofrece la barberia

function agendar(){
    let cliente;
    let opcionElegida;
    let corteCliente;
    while( cliente === undefined){
        cliente = prompt('Bienvenido a Toronto Barber, Ingresá tu nombre y consegui tu turno!')
    }

    while(opcionElegida != 0 && opcionElegida!= 1){
        opcionElegida = parseInt(prompt("Bienvenido "+cliente+". \n Ingrese la opción deseada \n ------------------------ \n 0- Agendar turno \n 1- Salir"))
    }
    
    if(opcionElegida == 0){
       
        while(corteCliente != 0 && corteCliente != 1 && corteCliente != 2 && corteCliente != 3){ 
        corteCliente = parseInt(prompt(cliente+" que servicio quieres agendar?: \n 0- Pelo: $1500 \n 1- Pelo y Barba: $2500 \n 2- Pelo, Barba y Lavado: $3300 \n 3- Pelo, Barba, Lavado y Tintura: 5000 \n 4- Salir" ))
        }
    
        if(corteCliente == 0 || corteCliente == 1 || corteCliente == 2 || corteCliente == 3){
            //Si eligio un servicio correctamente se le muestra el recibo para agendar un turno
            let confirmarReserva;
    
            while(confirmarReserva != 'si' && confirmarReserva != 'si'){
                confirmarReserva = prompt("Detalle del turno \n -------------------- \n Confirmar el turno de: \n Servicio Elegido: " +tipoDeServicios[corteCliente].tipo+ " \n Por el valor de : $"+tipoDeServicios[corteCliente].precio + "\n Estas de acuerdo? (si/no)");
            }
    
            if(confirmarReserva == 'si'){
                alert(cliente+", Se confirmó el turno \n detalle del servicioelegido \n --------------- \n servicio: " +tipoDeServicios[corteCliente].tipo+ " \n Por el valor de : $"+tipoDeServicios[corteCliente].precio)
            }else{
                alert("Chau "+cliente+", te esperamos para arreglar ese peluquin")
            }
    
        }else if(corteCliente == 4){
            //si el cliente se arrepiente esta la opcion salir
            alert("Chau "+cliente+", te esperamos para arreglar ese peluquin")
        }
    }else if(opcionElegida == 1){
        //si el cliente se arrepiente esta la opcion salir
        alert("Chau "+cliente+", te esperamos para arreglar ese peluquin")
    }
}
