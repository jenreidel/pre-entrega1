alert("¡Bienvenida a Renatta Nails Spa!");

let comando;

while (comando != "Finalizar") {
    comando = prompt('Ingresá la opción deseada:\n\n· Ver servicios\n· Solicitar turno\n· Contactanos\n· Finalizar');
    switch (comando) {
        case 'Ver servicios': 
            for (let i = 1; i <= 5; i++) { 
            alert('Servicio nº ' + i);
            }
            break;
        case 'Solicitar turno':
            let nombre = prompt("Ingresa tu nombre");
            let dia = prompt("Ingresá el día:\n· Martes\n· Jueves\n· Sabado");
            switch (dia) {
                case "Martes": 
                    alert(nombre + " tu turno quedó programado para el día " + dia + " y es el nº " + cupos);
                    break;
                case "Jueves": 
                    alert(nombre + " tu turno quedó programado para el día " + dia + " y es el nº " + cupos);
                    break;
                case "Sabado": 
                    alert(nombre + " tu turno quedó programado para el día " + dia + " y es el nº " + cupos);
                    break;
                default:
                    alert("El día ingresado es incorrecto. Por favor volvé a ingresar una opción válida.")
                    break;
            }
        break;
        case 'Contactanos':
            let nombre2 = prompt("Ingresa tu nombre");
            let mail = prompt("Ingresa tu mail de contacto");
            prompt("Dejanos tu consulta");
            alert("Gracias por escribirnos " + nombre2 + ". En breve te responderemos a " + mail);
            break;
    }
    if (comando != "Ver Servicios" || "Solicitar turno" || "contactanos") {
        alert('La opción ingresada es incorrecta. Por favor, volvé a intentarlo');
    } else if (comando = "Finalizar"){
        comando = "Finalizar";      
    }      
}