var artyom = new Artyom();

document.querySelector("#activar").addEventListener('click', function () {
    artyom.say("sound activated");
});


function mostrarAlerta() {
    var alerta = document.querySelector('.alerta');
    alerta.classList.add('showing');
    setTimeout(function () {
        alerta.classList.remove('showing');
    }, 60000); // 60000 milisegundos = 1 minuto
}

artyom.addCommands([
    {
        indexes: ["colors"],
        action: function () {
            artyom.say("opening color menu");
            document.getElementById('colors').mostrarAlerta();
        }
    },
    /*comando voz main room*/
    {
        indexes: ["close main room window"],
        action: function () {
            artyom.say("closing main room window");
            document.getElementById('main-room-window').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['close main room door'],
        action: function () {
            artyom.say("closing main room door");
            document.getElementById('main-room-door').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['turn on main room light'],
        action: function () {
            artyom.say("turning on main room light");
            document.getElementById('main-room-lightbulb').style.backgroundColor = 'yellow';
        }
    },
    {
        indexes: ['turn on main room heating'],
        action: function () {
            artyom.say("turning on main room heating");
            document.getElementById('main-room-heating').style.backgroundColor = 'red';
        }
    },
    {
        indexes: ['turn on tv master bedroom'],
        action: function () {
            artyom.say("turning on tv master bedroom");
            document.getElementById('"main-room-tv').style.backgroundColor = 'orange';
        }
    },

    {
        indexes: ["open main room window"],
        action: function () {
            artyom.say("opening main room window");
            document.getElementById('main-room-window').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['open main room door'],
        action: function () {
            artyom.say("opening main room door");
            document.getElementById('main-room-door').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['turn off main room light'],
        action: function () {
            artyom.say("turning off main room light");
            document.getElementById('main-room-lightbulb').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['turn off main room heating'],
        action: function () {
            artyom.say("turning off main room heating");
            document.getElementById('main-room-heating').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['turn off tv master bedroom'],
        action: function () {
            artyom.say("turning off tv main room");
            document.getElementById('main-room-tv').style.backgroundColor = 'white';
        }
    },
    /*comando voz room two*/
    {
        indexes: ["close window room two"],
        action: function () {
            artyom.say("closing window room two");
            document.getElementById('window-room2').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['close room door two'],
        action: function () {
            artyom.say("closing door room two");
            document.getElementById('room-door2').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['turn on light room two '],
        action: function () {
            artyom.say("turning on light room two");
            document.getElementById('light-room2').style.backgroundColor = 'yellow';
        }
    },
    {
        indexes: ['turn on heating room two'],
        action: function () {
            artyom.say("turning on heating room two");
            document.getElementById('healting-room2').style.backgroundColor = 'red';
        }
    },
    {
        indexes: ['turn on tv room two'],
        action: function () {
            artyom.say("turning on tv roomn two");
            document.getElementById('tv-room2').style.backgroundColor = 'orange';
        }
    },

    {
        indexes: ["open window room two"],
        action: function () {
            artyom.say("opening window room two");
            document.getElementById('window-room2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['open room door two'],
        action: function () {
            artyom.say("abriendo puerta habitación two");
            document.getElementById('room-door2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz habitación two'],
        action: function () {
            artyom.say("apagando luz habitación two");
            document.getElementById('main-room-lightbulbtwo').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar calefacción habitación two'],
        action: function () {
            artyom.say("apagando calefacción habitación two");
            document.getElementById('main-room-heatingtwo').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar televisión habitación two'],
        action: function () {
            artyom.say("apagando relevisión habitación two");
            document.getElementById('main-room-tvtwo').style.backgroundColor = 'white';
        }
    },
    /*comando voz habitación 3*/

    {
        indexes: ["cerrar ventana habitación 3"],
        action: function () {
            artyom.say("cerrando ventana habitación 3");
            document.getElementById('ventana-hab-3').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['cerrar puerta habitación 3'],
        action: function () {
            artyom.say("cerrando puerta habitación 3");
            document.getElementById('puerta-hab-3').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz habitación 3'],
        action: function () {
            artyom.say("encendiendo luz habitación 3");
            document.getElementById('main-room-lightbulbtwo').style.backgroundColor = 'yellow';
        }
    },
    {
        indexes: ['encender calefacción habitación 3'],
        action: function () {
            artyom.say("encendiendo calefacción habitación 3");
            document.getElementById('calefacion-hab-3').style.backgroundColor = 'red';
        }
    },
    {
        indexes: ['encender televisión habitación 3'],
        action: function () {
            artyom.say("encendiendo relevisión habitación 3");
            document.getElementById('tv-hab-3').style.backgroundColor = 'orange';
        }
    },

    {
        indexes: ["abrir ventana habitación 3"],
        action: function () {
            artyom.say("abriendo ventana habitación 3");
            document.getElementById('ventana-hab-3').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['abrir puerta habitación 3'],
        action: function () {
            artyom.say("abriendo puerta habitación 3");
            document.getElementById('puerta-hab-3').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz habitación 3'],
        action: function () {
            artyom.say("apagando luz habitación 3");
            document.getElementById('main-room-lightbulbtwo').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar calefacción habitación 3'],
        action: function () {
            artyom.say("apagando calefacción habitación 3");
            document.getElementById('calefacion-hab-3').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar televisión habitación 3'],
        action: function () {
            artyom.say("apagando relevisión habitación 3");
            document.getElementById('tv-hab-3').style.backgroundColor = 'white';
        }
    },
    /*comando voz habitación baño principal*/

    {
        indexes: ["cerrar ventana baño principal"],
        action: function () {
            artyom.say("cerrando ventana baño principal");
            document.getElementById('ventana-baño-principal').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['cerrar puerta baño principal'],
        action: function () {
            artyom.say("cerrando puerta baño principal");
            document.getElementById('puerta-baño-principal').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz baño principal'],
        action: function () {
            artyom.say("encendiendo luz baño principal");
            document.getElementById('bombillo-baño-principal').style.backgroundColor = 'yellow';
        }
    },

    {
        indexes: ["abrir ventana baño principal"],
        action: function () {
            artyom.say("abriendo ventana baño principal");
            document.getElementById('ventana-baño-principal').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['abrir puerta baño principal'],
        action: function () {
            artyom.say("abriendo puerta baño principal");
            document.getElementById('puerta-baño-principal').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz baño principal'],
        action: function () {
            artyom.say("apagando luz baño principal");
            document.getElementById('bombillo-baño-principal').style.backgroundColor = 'white';
        }
    },

    /*comando voz habitación baño two*/
    {
        indexes: ["cerrar ventana baño two"],
        action: function () {
            artyom.say("cerrando ventana baño two");
            document.getElementById('ventana-bañotwo').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['cerrar puerta baño two'],
        action: function () {
            artyom.say("cerrando puerta baño two");
            document.getElementById('puerta-bañotwo').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz baño two'],
        action: function () {
            artyom.say("encendiendo luz baño two");
            document.getElementById('bombillo-bañotwo').style.backgroundColor = 'yellow';
        }
    },
    /*comando voz habitación cocina*/
    {
        indexes: ['cerrar ventana cocina'],
        action: function () {
            artyom.say("cerrando ventana cocina");
            document.getElementById('ventana-cocina').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['encender luz cocina'],
        action: function () {
            artyom.say("encendiendo cocina");
            document.getElementById('bombillo-cocina').style.backgroundColor = 'yellow';
        }
    },

    {
        indexes: ["abrir ventana baño two"],
        action: function () {
            artyom.say("abriendo ventana baño two");
            document.getElementById('ventana-bañotwo').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['abrir puerta baño two'],
        action: function () {
            artyom.say("abriendo puerta baño two");
            document.getElementById('puerta-bañotwo').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz baño two'],
        action: function () {
            artyom.say("apagando luz baño two");
            document.getElementById('bombillo-bañotwo').style.backgroundColor = 'white';
        }
    },
    /*comando voz habitación cocina*/
    {
        indexes: ['cerrar ventana cocina'],
        action: function () {
            artyom.say("cerrando ventana cocina");
            document.getElementById('ventana-cocina').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['encender luz cocina'],
        action: function () {
            artyom.say("encendiendo cocina");
            document.getElementById('bombillo-cocina').style.backgroundColor = 'yellow';
        }
    },

    {
        indexes: ['abrir ventana cocina'],
        action: function () {
            artyom.say("abriendo ventana cocina");
            document.getElementById('ventana-cocina').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz cocina'],
        action: function () {
            artyom.say("apagando cocina");
            document.getElementById('bombillo-cocina').style.backgroundColor = 'wwhite';
        }
    },
    /*comando voz habitación alacena*/
    {
        indexes: ['cerrar puerta alacena'],
        action: function () {
            artyom.say("cerrando puerta alacena");
            document.getElementById('ventana-alacena').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz alacena'],
        action: function () {
            artyom.say("encendiendo luz alacena");
            document.getElementById('bombillo-alacena').style.backgroundColor = 'yellow';
        }
    },

    {
        indexes: ['abrir puerta alacena'],
        action: function () {
            artyom.say("abriendo puerta alacena");
            document.getElementById('ventana-alacena').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz alacena'],
        action: function () {
            artyom.say("apagando luz alacena");
            document.getElementById('bombillo-alacena').style.backgroundColor = 'white';
        }
    },
    /*comando voz sala*/
    {
        indexes: ["cerrar ventana sala"],
        action: function () {
            artyom.say("cerrando ventana sala");
            document.getElementById('centana-sala').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['cerrar puerta sala'],
        action: function () {
            artyom.say("cerrando puerta sala");
            document.getElementById('puerta-sala').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz sala'],
        action: function () {
            artyom.say("encendiendo luz sala");
            document.getElementById('bombillo-sala').style.backgroundColor = 'yellow';
        }
    },
    {
        indexes: ['encender calefacción sala'],
        action: function () {
            artyom.say("encendiendo calefacción sala");
            document.getElementById('calefacion-sala').style.backgroundColor = 'red';
        }
    },
    {
        indexes: ['encender aspiradora'],
        action: function () {
            artyom.say("encendiendo aspiradora");
            document.getElementById('aspiradora').style.backgroundColor = 'purple';
        }
    },

    {
        indexes: ["abrir ventana sala"],
        action: function () {
            artyom.say("abriendo ventana sala");
            document.getElementById('centana-sala').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['abrir puerta sala'],
        action: function () {
            artyom.say("abriendo puerta sala");
            document.getElementById('puerta-sala').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz sala'],
        action: function () {
            artyom.say("apagando luz sala");
            document.getElementById('bombillo-sala').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar calefacción sala'],
        action: function () {
            artyom.say("apagando calefacción sala");
            document.getElementById('calefacion-sala').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar aspiradora'],
        action: function () {
            artyom.say("apagando aspiradora");
            document.getElementById('aspiradora').style.backgroundColor = 'white';
        }
    },
    /*comando voz sala*/
    {
        indexes: ['cerrar puerta entrada parqueadero'],
        action: function () {
            artyom.say("cerrando puerta entrada parqueadero");
            document.getElementById('puerta-entrada-parqueadero').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['cerrar puerta entrada parqueadero sala'],
        action: function () {
            artyom.say("cerrando puerta entrada parqueadero sala");
            document.getElementById('puerta-entradasala-parqueadero').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz parqueadero'],
        action: function () {
            artyom.say("encendiendo luz parqueadero");
            document.getElementById('bombillo-parqueadero').style.backgroundColor = 'yellow';
        }
    },

    {
        indexes: ['abrir puerta entrada parqueadero'],
        action: function () {
            artyom.say("abriendo puerta entrada parqueadero");
            document.getElementById('puerta-entrada-parqueadero').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['abrir puerta entrada parqueadero sala'],
        action: function () {
            artyom.say("abriendo puerta entrada parqueadero sala");
            document.getElementById('puerta-entradasala-parqueadero').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz parqueadero'],
        action: function () {
            artyom.say("apagando luz parqueadero");
            document.getElementById('bombillo-parqueadero').style.backgroundColor = 'white';
        }
    },
    /*comando voz jardin*/
    {
        indexes: ['encender roseador 1'],
        action: function () {
            artyom.say("encendiendo roseador 1");
            document.getElementById('roseador-1').style.backgroundColor = 'grey';
        }
    },
    {
        indexes: ['encender roseador two'],
        action: function () {
            artyom.say("encendiendo roseador two");
            document.getElementById('roseador-two').style.backgroundColor = 'grey';
        }
    },

    {
        indexes: ['apagar roseador 1'],
        action: function () {
            artyom.say("apagando roseador 1");
            document.getElementById('roseador-1').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar roseador two'],
        action: function () {
            artyom.say("apagando roseador two");
            document.getElementById('roseador-two').style.backgroundColor = 'white';
        }
    }

]);

artyom.initialize({
    lang: "es-ES",
    debug: true,
    listen: true,
    continuous: true,
    speed: 0.9,
    mode: "normal"
});

artyom.redirectRecognizedTextOutput(function (recognized, isFinal) {
    if (isFinal) {
        console.log("Texto final reconocido: " + recognized);
    } else {
        console.log(recognized);
    }
});