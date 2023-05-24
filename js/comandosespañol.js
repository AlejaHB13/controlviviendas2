var artyom = new Artyom();
const gif = document.getElementById('gif');
var isPatoVisible = false; // Variable para controlar la visibilidad del pato
var intervalID; // Variable para almacenar el ID del intervalo
var directionX = 'derecha'; // Variable de estado para controlar la dirección horizontal del movimiento
var directionY = 'abajo'; // Variable de estado para controlar la dirección vertical del movimiento

document.querySelector("#activar").addEventListener('click', function () {
    artyom.say("sonido activado");
});


function mostrarAlerta() {
    var alerta = document.querySelector('.alerta');
    alerta.classList.add('mostrando');
    setTimeout(function () {
        alerta.classList.remove('mostrando');
    }, 30000); // 30000 milisegundos = 30 segundos
}
artyom.addCommands({
    indexes: ["volver atrás"],
    action: function () {
        history.back();
    }
});
artyom.addCommands({
    indexes: ["colores"],
    action: function () {
        artyom.say("abriendo menu de colores");
        mostrarAlerta();
    }
});


artyom.addCommands([

    /*comando voz habitación principal*/
    /*cerrar y encender*/
    {
        indexes: ["cerrar ventana habitación principal"],
        action: function () {
            artyom.say("cerrando ventana habitación principal");
            document.getElementById('ventana-hab-principal').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['cerrar puerta habitación principal'],
        action: function () {
            artyom.say("cerrando puerta habitación principal");
            document.getElementById('puerta-hab-principal').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz habitación principal'],
        action: function () {
            artyom.say("encendiendo luz habitación principal");
            document.getElementById('bombillo-hab-principal').style.backgroundColor = 'yellow';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    {
        indexes: ['encender calefacción habitación principal'],
        action: function () {
            artyom.say("encendiendo calefacción habitación principal");
            document.getElementById('calefacion-hab-principal').style.backgroundColor = 'red';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }

        }
    },
    {
        indexes: ['encender televisión habitación principal'],
        action: function () {
            artyom.say("encendiendo televisión habitación principal");
            document.getElementById('tv-hab-principal').style.backgroundColor = 'orange';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }

        }
    },
    /*abrir y apagar*/

    {
        indexes: ["abrir ventana habitación principal"],
        action: function () {
            artyom.say("abriendo ventana habitación principal");
            document.getElementById('ventana-hab-principal').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeventana');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }

        }
    },
    {
        indexes: ['abrir puerta habitación principal'],
        action: function () {
            artyom.say("abriendo puerta habitación principal");
            document.getElementById('puerta-hab-principal').style.backgroundColor = 'white';
        }

    },
    {
        indexes: ['apagar luz habitación principal'],
        action: function () {
            artyom.say("apagando luz habitación principal");
            document.getElementById('bombillo-hab-principal').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar calefacción habitación principal'],
        action: function () {
            artyom.say("apagando calefacción habitación principal");
            document.getElementById('calefacion-hab-principal').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar televisión habitación principal'],
        action: function () {
            artyom.say("apagando television habitación principal");
            document.getElementById('tv-hab-principal').style.backgroundColor = 'white';
        }
    },
    /*comando voz habitación 2*/
    /*cerrar y encender*/
    {
        indexes: ["cerrar ventana habitación dos"],
        action: function () {
            artyom.say("cerrando ventana habitación 2");
            document.getElementById('ventana-hab-principal2').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['cerrar puerta habitación dos'],
        action: function () {
            artyom.say("cerrando puerta habitación dos");
            document.getElementById('puerta-hab-principal2').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz habitación dos'],
        action: function () {
            artyom.say("encendiendo luz habitación dos");
            document.getElementById('bombillo-hab-principal2').style.backgroundColor = 'yellow';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }

        }
    },
    {
        indexes: ['encender calefacción habitación dos'],
        action: function () {
            artyom.say("encendiendo calefacción habitación dos");
            document.getElementById('calefacion-hab-principal2').style.backgroundColor = 'red';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    {
        indexes: ['encender televisión habitación dos'],
        action: function () {
            artyom.say("encendiendo television habitación dos");
            document.getElementById('tv-hab-principal2').style.backgroundColor = 'orange';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    /*abrir y apagar*/

    {
        indexes: ["abrir ventana habitación dos"],
        action: function () {
            artyom.say("abriendo ventana habitación dos");
            document.getElementById('ventana-hab-principal2').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeventana');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    {
        indexes: ['abrir puerta habitación dos'],
        action: function () {
            artyom.say("abriendo puerta habitación dos");
            document.getElementById('puerta-hab-principal2').style.backgroundColor = 'white';
        }

    },
    {
        indexes: ['apagar luz habitación dos'],
        action: function () {
            artyom.say("apagando luz habitación dos");
            document.getElementById('bombillo-hab-principal2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar calefacción habitación dos'],
        action: function () {
            artyom.say("apagando calefacción habitación dos");
            document.getElementById('calefacion-hab-principal2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar televisión habitación dos'],
        action: function () {
            artyom.say("apagando television habitación dos");
            document.getElementById('tv-hab-principal2').style.backgroundColor = 'white';
        }
    },
    /*comando voz habitación 3*/
    /*cerrar y encender*/

    {
        indexes: ["cerrar ventana habitación tres"],
        action: function () {
            artyom.say("cerrando ventana habitación tres");
            document.getElementById('ventana-hab-3').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['cerrar puerta habitación tres'],
        action: function () {
            artyom.say("cerrando puerta habitación tres");
            document.getElementById('puerta-hab-3').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz habitación tres'],
        action: function () {
            artyom.say("encendiendo luz habitación tres");
            document.getElementById('bombillo-hab-3').style.backgroundColor = 'yellow';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    {
        indexes: ['encender calefacción habitación tres'],
        action: function () {
            artyom.say("encendiendo calefacción habitación tres");
            document.getElementById('calefacion-hab-3').style.backgroundColor = 'red';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    /*abrir y apagar*/

    {
        indexes: ["abrir ventana habitación tres"],
        action: function () {
            artyom.say("abriendo ventana habitación tres");
            document.getElementById('ventana-hab-3').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeventana');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }


        }
    },
    {
        indexes: ['abrir puerta habitación tres'],
        action: function () {
            artyom.say("abriendo puerta habitación tres");
            document.getElementById('puerta-hab-3').style.backgroundColor = 'white';

        }
    },
    {
        indexes: ['apagar luz habitación tres'],
        action: function () {
            artyom.say("apagando luz habitación tres");
            document.getElementById('bombillo-hab-3').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar calefacción habitación tres'],
        action: function () {
            artyom.say("apagando calefacción habitación tres");
            document.getElementById('calefacion-hab-3').style.backgroundColor = 'white';
        }
    },

    /*comando voz habitación baño principal*/
    /*cerrar y encender*/

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
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    /*abrir y apagar*/

    {
        indexes: ["abrir ventana baño principal"],
        action: function () {
            artyom.say("abriendo ventana baño principal");
            document.getElementById('ventana-baño-principal').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeventana');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }


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

    /*comando voz habitación baño 2*/
    /*cerrar y encender*/
    {
        indexes: ["cerrar ventana baño dos"],
        action: function () {
            artyom.say("cerrando ventana baño dos");
            document.getElementById('ventana-baño2').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['cerrar puerta baño dos'],
        action: function () {
            artyom.say("cerrando puerta baño dos");
            document.getElementById('puerta-baño2').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz baño dos'],
        action: function () {
            artyom.say("encendiendo luz baño dos");
            document.getElementById('bombillo-baño2').style.backgroundColor = 'yellow';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';
                isPatoVisible = true;
                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    /*abrir y apagar*/
    {
        indexes: ["abrir ventana baño dos"],
        action: function () {
            artyom.say("abriendo ventana baño dos");
            document.getElementById('ventana-baño2').style.backgroundColor = 'blue';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeventana');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';
                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }


        }
    },
    {
        indexes: ['abrir puerta baño dos'],
        action: function () {
            artyom.say("abriendo puerta baño dos");
            document.getElementById('puerta-baño2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['apagar luz baño dos'],
        action: function () {
            artyom.say("apagando luz baño dos");
            document.getElementById('bombillo-baño2').style.backgroundColor = 'white';
        }
    },
    /*comando voz habitación cocina*/
    /*cerrar y encender*/
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
            artyom.say("encendiendo luz cocina");
            document.getElementById('bombillo-cocina').style.backgroundColor = 'yellow';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    /*abrir y apagar*/

    {
        indexes: ['abrir ventana cocina'],
        action: function () {
            artyom.say("abriendo ventana cocina");
            document.getElementById('ventana-cocina').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeventana');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }


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
    /*cerrar y encender*/
    {
        indexes: ['cerrar puerta alacena'],
        action: function () {
            artyom.say("cerrando puerta alacena");
            document.getElementById('puerta-alacena').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['encender luz alacena'],
        action: function () {
            artyom.say("encendiendo luz alacena");
            document.getElementById('bombillo-alacena').style.backgroundColor = 'yellow';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    /*abrir y apagar*/

    {
        indexes: ['abrir puerta alacena'],
        action: function () {
            artyom.say("abriendo puerta alacena");
            document.getElementById('puerta-alacena').style.backgroundColor = 'white';
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
    /*cerrar y encender*/
    {
        indexes: ["cerrar ventana sala"],
        action: function () {
            artyom.say("cerrando ventana sala");
            document.getElementById('ventana-sala').style.backgroundColor = 'blue';
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
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
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
            //document.getElementById('aspiradora').style.backgroundColor = 'purple';
            document.getElementById('aspiradora').classList.remove('hidden')
            intervalID = setInterval(function () {
                moverAspiradora();
            }, 1000); // Intervalo de tiempo en milisegundos para el movimiento constante
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    /*abrir y apagar*/

    {
        indexes: ["abrir ventana sala"],
        action: function () {
            artyom.say("abriendo ventana sala");
            document.getElementById('ventana-sala').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeventana');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }


        }
    },
    {
        indexes: ['abrir puerta sala'],
        action: function () {
            artyom.say("abriendo puerta sala");
            document.getElementById('puerta-sala').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajepuerta');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }

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
            //document.getElementById('aspiradora').style.backgroundColor = 'white';
            document.getElementById('aspiradora').classList.add('hidden');
            clearInterval(intervalID); // Detener el movimiento constante
        }
    },
    /*comando voz parqeuadero*/
    /*cerrar y encender*/
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
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeluz');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }
        }
    },
    /*abrir y apagar*/

    {
        indexes: ['abrir puerta entrada parqueadero'],
        action: function () {
            artyom.say("abriendo puerta entrada parqueadero");
            document.getElementById('puerta-entrada-parqueadero').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajepuerta');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }


        }
    },
    {
        indexes: ['abrir puerta entrada parqueadero sala'],
        action: function () {
            artyom.say("abriendo puerta entrada parqueadero sala");
            document.getElementById('puerta-entradasala-parqueadero').style.backgroundColor = 'white';
            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajepuerta');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';



                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }

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
    /*encender*/
    {
        indexes: ['encender rociador uno', 'encender rociador 1'],
        action: function () {
            artyom.say("encendiendo rociador uno");
            document.getElementById('roseador-2').style.backgroundColor = 'grey';

            //funcion agua

            document.getElementById('agua').classList.remove('hidden')
            intervalID = setInterval(function () {
                moverAgua();
            }, 1000);


            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeagua');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }

        }
    },
    {
        indexes: ['encender rociador dos', 'encender rociador 2'],
        action: function () {
            artyom.say("encendiendo rociador dos");
            document.getElementById('roseador-1').style.backgroundColor = 'grey';

            //funcion agua
            document.getElementById('agua2').classList.remove('hidden')
            intervalID = setInterval(function () {
                moverAgua();
            }, 1000);


            //Funcion pato 
            const patoElement = document.getElementById('patocaminando');
            const mensajeElement = document.getElementById('mensajeagua');
            if (!isPatoVisible) {
                patoElement.style.display = 'inline';

                mensajeElement.style.opacity = 1;
                mensajeElement.style.top = '-1580px';
                mensajeElement.style.left = '-541px';
                mensajeElement.style.transform = 'translateX(0)';

                isPatoVisible = true;

                patoElement.style.animation = 'caminar 5s linear infinite';

                // Desaparecer el pato después de 10 segundos 
                setTimeout(function () {
                    patoElement.style.display = 'none';
                    mensajeElement.style.opacity = 0;
                    mensajeElement.textContent = '';
                    isPatoVisible = false;
                }, 10000);
            }


        }

    },
    /*apagar*/

    {
        indexes: ['apagar rociador uno', 'apagar rociador 1'],
        action: function () {
            artyom.say("apagando rociador uno");
            document.getElementById('roseador-2').style.backgroundColor = 'white';

            document.getElementById('agua').classList.add('hidden');
            clearInterval(intervalID); // Detener el movimiento constante
        }
    },
    {
        indexes: ['apagar rociador dos', 'apagar rociador 2'],
        action: function () {
            artyom.say("apagando rociador dos");
            document.getElementById('roseador-1').style.backgroundColor = 'white';

            document.getElementById('agua2').classList.add('hidden');
            clearInterval(intervalID); // Detener el movimiento constante
        }
    }

]);
function moverAspiradora() {
    var imagen = document.getElementById('aspiradora');
    var topActual = parseInt(imagen.style.top, 10) || 1104; // Utiliza el valor inicial si no hay ningún valor en el estilo en línea
    var leftActual = parseInt(imagen.style.left, 10) || 791; // Utiliza el valor inicial si no hay ningún valor en el estilo en línea
    var paso = 20; // Ajusta el valor de desplazamiento (paso) según tus preferencias

    if (directionX === 'derecha') {
        imagen.style.left = (leftActual + paso) + 'px';
        if (leftActual >= 1000) {
            directionX = 'izquierda';
        }
    } else if (directionX === 'izquierda') {
        imagen.style.left = (leftActual - paso) + 'px';
        if (leftActual <= 791) {
            directionX = 'derecha';
        }
    }

    if (directionY === 'abajo') {
        imagen.style.top = (topActual + paso) + 'px';
        if (topActual >= 1104) {
            directionY = 'arriba';
        }
    } else if (directionY === 'arriba') {
        imagen.style.top = (topActual - paso) + 'px';
        if (topActual <= 904) {
            directionY = 'abajo';
        }
    }
}

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