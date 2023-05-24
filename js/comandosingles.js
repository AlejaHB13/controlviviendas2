var artyom = new Artyom();
var isPatoVisible = false; // Variable para controlar la visibilidad del pato
var intervalID; // Variable para almacenar el ID del intervalo
var directionX = 'derecha'; // Variable de estado para controlar la dirección horizontal del movimiento
var directionY = 'abajo'; // Variable de estado para controlar la dirección vertical del movimiento

document.querySelector("#activar").addEventListener('click', function () {
    artyom.say("sound activated");
});


function mostrarAlerta() {
    var alerta = document.querySelector('.alerta');
    alerta.classList.add('mostrando');
    setTimeout(function () {
        alerta.classList.remove('mostrando');
    }, 30000); // 30000 milisegundos = 30 segundos
}
artyom.addCommands({
    indexes: ["back"],
    action: function () {
        history.back();
    }
});


artyom.addCommands([
    {
        indexes: ["colors"],
        action: function () {
            artyom.say("opening color menu");
            mostrarAlerta();
        }
    },

    /*voice command main room*/
    /* close and turn on */
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
        indexes: ['turn on main room heating'],
        action: function () {
            artyom.say("turning on main room heating");
            document.getElementById('main-room-heating').style.backgroundColor = 'red';
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
        indexes: ['turn on tv main room'],
        action: function () {
            artyom.say("turning on tv master bedroom");
            document.getElementById('"main-room-tv').style.backgroundColor = 'orange';
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
    /*open and to turn off*/

    {
        indexes: ["open main room window"],
        action: function () {
            artyom.say("opening main room window");
            document.getElementById('main-room-window').style.backgroundColor = 'white';
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
        indexes: ['turn off tv main bedroom'],
        action: function () {
            artyom.say("turning off tv main room");
            document.getElementById('main-room-tv').style.backgroundColor = 'white';
        }
    },
    /*voice command room 2*/
    /*close and turn on*/
    {
        indexes: ["close window room 2", "close window room two"],
        action: function () {
            artyom.say("closing window room 2");
            document.getElementById('window-room2').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ["close door room 2", "close door room two"],
        action: function () {
            artyom.say("closing door room 2");
            document.getElementById('room-door2').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ["turn on light room two", "turn on light room two"],
        action: function () {
            artyom.say("turning on light room 2");
            document.getElementById('light-room2').style.backgroundColor = 'yellow';
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
        indexes: ["turn on heating room 2", "turn on heating room two"],
        action: function () {
            artyom.say("turning on heating room 2");
            document.getElementById('healting-room2').style.backgroundColor = 'red';
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
        indexes: ["turn on tv room 2", "turn on tv room two"],
        action: function () {
            artyom.say("turning on tv roomn 2");
            document.getElementById('tv-room2').style.backgroundColor = 'orange';
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
    /*open and to turn off*/

    {
        indexes: ["open window room 2", "open window room two"],
        action: function () {
            artyom.say("opening window room 2");
            document.getElementById('window-room2').style.backgroundColor = 'white';
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
        indexes: ["open door room 2", "open door room two"],
        action: function () {
            artyom.say("opening room door 2");
            document.getElementById('room-door2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ["turn off room light 2", "turn off room light two"],
        action: function () {
            artyom.say("turning off room light 2");
            document.getElementById('light-room2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ["turn off room heating 2", "turn off room heating two"],
        action: function () {
            artyom.say("turning off room heating 2");
            document.getElementById('healting-room2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ["turn off tv room 2", "turn off tv room two"],
        action: function () {
            artyom.say("turning off tv room 2");
            document.getElementById('tv-room2').style.backgroundColor = 'white';
        }
    },
    /*voice command habitación 3*/
    /*close and turn on*/

    {
        indexes: ["close window room 3", "close window room three"],
        action: function () {
            artyom.say("closing window room 3");
            document.getElementById('window-room3').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ["close door room3", "close door room three"],
        action: function () {
            artyom.say("closing door room 3");
            document.getElementById('room-door3').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ["turn on light room 3", "turn on light room three"],
        action: function () {
            artyom.say("turning on light room 3");
            document.getElementById('light-room3').style.backgroundColor = 'yellow';
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
        indexes: ["turn on heating room 3", "turn on heating room three"],
        action: function () {
            artyom.say("turning on heating room 3");
            document.getElementById('healting-room3').style.backgroundColor = 'red';
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
    /*open and to turn off*/

    {
        indexes: ["open window room 3", "open window room three"],
        action: function () {
            artyom.say("opening window room 3");
            document.getElementById('window-room3').style.backgroundColor = 'white';
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
        indexes: ["open door room 3", "open door room three"],
        action: function () {
            artyom.say("opening door room 3");
            document.getElementById('room-door3').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ["turn off room light 3", "turn off room light three"],
        action: function () {
            artyom.say("turning off room light 3");
            document.getElementById('light-room3').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ["turn off room heating 3", "turn off room heating three"],
        action: function () {
            artyom.say("turning off room heating 3");
            document.getElementById('healting-room3').style.backgroundColor = 'white';
        }
    },
    /*voice command Main bathroom*/
    /*close and turn on*/

    {
        indexes: ["close main bathroom window"],
        action: function () {
            artyom.say("closing main bathroom window");
            document.getElementById('main-bath-window').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['close main bathroom door'],
        action: function () {
            artyom.say("closing main bathroom door");
            document.getElementById('main-bath-door').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['turn on main bathroom light'],
        action: function () {
            artyom.say("turning on main bathroom light");
            document.getElementById('main-bath-light').style.backgroundColor = 'yellow';
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
    /*open and to turn off*/

    {
        indexes: ["open main bathroom window"],
        action: function () {
            artyom.say("opening main bathroom window");
            document.getElementById('main-bath-window').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['open main bathroom door'],
        action: function () {
            artyom.say("opening main bathroom door");
            document.getElementById('main-bath-door').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['turn off main bathroom light'],
        action: function () {
            artyom.say("turning off main bathroom light");
            document.getElementById('main-bath-light').style.backgroundColor = 'white';
        }
    },

    /*voice command Bathroom 2*/
    /*close and turn on*/
    {
        indexes: ["close bathroom window 2", "close bathroom window two"],
        action: function () {
            artyom.say("closing bathroom window 2");
            document.getElementById('bath-window2').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ["close bathroom door 2", "close bathroom door two"],
        action: function () {
            artyom.say("closing bathroom door 2");
            document.getElementById('bath-door2').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ["turn on bathroom light 2", "turn on bathroom light two"],
        action: function () {
            artyom.say("turning on luz bathroom light 2");
            document.getElementById('bath-light2').style.backgroundColor = 'yellow';
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
    /*open and to turn off*/
    {
        indexes: ["open window bathroom 2", "open window bathroom two"],
        action: function () {
            artyom.say("opening window bathroom 2s");
            document.getElementById('bath-window2').style.backgroundColor = 'blue';
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
        indexes: ["open door bathroom 2", "open door bathroom two"],
        action: function () {
            artyom.say("opening door bathroom 2");
            document.getElementById('bath-door2').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ["turn off light bathroom 2", "turn off light bathroom two"],
        action: function () {
            artyom.say("turning off light bathroom 2");
            document.getElementById('bath-light2').style.backgroundColor = 'white';
        }
    },
    /*voice command kitchen*/
    /*close and turn on*/
    {
        indexes: ['close kitchen window'],
        action: function () {
            artyom.say("closing kitchen window");
            document.getElementById('kitchen-window').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['turn on kitchen light'],
        action: function () {
            artyom.say("turning on kitchen light");
            document.getElementById('kitchen-light').style.backgroundColor = 'yellow';
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
    /*open and to turn off*/

    {
        indexes: ['open kitchen window'],
        action: function () {
            artyom.say("opening kitchen window");
            document.getElementById('kitchen-window').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['turn off kitchen light'],
        action: function () {
            artyom.say("turning off kitchen light");
            document.getElementById('kitchen-light').style.backgroundColor = 'wwhite';
        }
    },
    /*voice command habitación cupboard*/
    /*close and turn on*/
    {
        indexes: ['close cupboard door'],
        action: function () {
            artyom.say("closing cupboard door");
            document.getElementById('cup-board-door').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['turn on cupboard light'],
        action: function () {
            artyom.say("turning on cupboard light");
            document.getElementById('cup-board-light').style.backgroundColor = 'yellow';
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
    /*open and to turn off*/

    {
        indexes: ['open cupboard door'],
        action: function () {
            artyom.say("opening cupboard door");
            document.getElementById('cup-board-door').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['turn off cupboard light'],
        action: function () {
            artyom.say("turning off cupboard light");
            document.getElementById('cup-board-light').style.backgroundColor = 'white';
        }
    },
    /*voice command living room*/
    /*close and turn on*/
    {
        indexes: ["close living room window"],
        action: function () {
            artyom.say("closing living room window");
            document.getElementById('living-room-window').style.backgroundColor = 'blue';
        }
    },
    {
        indexes: ['close door entrance living room'],
        action: function () {
            artyom.say("closing puerta sala");
            document.getElementById('main-entrance').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['turn on living room light'],
        action: function () {
            artyom.say("turning on living room light");
            document.getElementById('room-light').style.backgroundColor = 'yellow';
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
        indexes: ['turn on living room heating'],
        action: function () {
            artyom.say("turning on living room heating");
            document.getElementById('room-heating').style.backgroundColor = 'red';
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
        indexes: ['turn on vacuum cleaner'],
        action: function () {
            artyom.say("turning vacuum cleaner");
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
    /*open and to turn off*/

    {
        indexes: ["open living room window"],
        action: function () {
            artyom.say("opening living room window");
            document.getElementById('living-room-window').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['open door entrance living room'],
        action: function () {
            artyom.say("opening door entrance living room");
            document.getElementById('main-entrance').style.backgroundColor = 'white';
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
        indexes: ['turn off living room light'],
        action: function () {
            artyom.say("turning off living room light");
            document.getElementById('room-light').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['turn off living room heating'],
        action: function () {
            artyom.say("turning off living room heating");
            document.getElementById('room-heating').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ['turn off vacuum cleaner'],
        action: function () {
            artyom.say("turning off vacuum cleaner");
            document.getElementById('aspiradora').classList.add('hidden');
            clearInterval(intervalID); // Detener el movimiento constante
        }
    },
    /*voice command parking*/
    /*close and turn on*/
    {
        indexes: ['close parking entrance door'],
        action: function () {
            artyom.say("closing parking entrance door");
            document.getElementById('parking-entrance').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['close parking entrance door sala'],
        action: function () {
            artyom.say("closing parking entrance door sala");
            document.getElementById('room-entrance-parking-door').style.backgroundColor = 'green';
        }
    },
    {
        indexes: ['turn on parking light'],
        action: function () {
            artyom.say("turning onparking light");
            document.getElementById('parking-light').style.backgroundColor = 'yellow';
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
    /*open and to turn off*/

    {
        indexes: ['open parking entrance door'],
        action: function () {
            artyom.say("opening parking entrance door");
            document.getElementById('parking-entrance').style.backgroundColor = 'white';
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
        indexes: ['open room entrance parking door'],
        action: function () {
            artyom.say("opening room entrance parking door");
            document.getElementById('room-entrance-parking-door').style.backgroundColor = 'white';
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
        indexes: ['turn off parking light'],
        action: function () {
            artyom.say("turning off parking light");
            document.getElementById('parking-light').style.backgroundColor = 'white';
        }
    },
    /*voice command Sprayer*/
    /*close*/
    {
        indexes: ["turn on sprayer one", "turn on sprayer 1"],
        action: function () {
            artyom.say("turning on sprayer one");
            document.getElementById('Sprayer-1').style.backgroundColor = 'grey';
        }
    },
    {
        indexes: ["turn on sprayer 2", "turn on sprayer two"],
        action: function () {
            artyom.say("turning on sprayer 2");
            document.getElementById('Sprayer-2').style.backgroundColor = 'grey';
        }
    },
    /*turn off*/

    {
        indexes: ["turn off sprayer one", "turn off sprayer 1"],
        action: function () {
            artyom.say("turning off sprayer one");
            document.getElementById('Sprayer-1').style.backgroundColor = 'white';
        }
    },
    {
        indexes: ["turn off on sprayer 2", "turn off sprayer two"],
        action: function () {
            artyom.say("turning off sprayer 2");
            document.getElementById('Sprayer-2').style.backgroundColor = 'white';
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
    lang: "en-GB",
    debug: true,
    listen: true,
    continuous: true,
    speed: 0.9,
    mode: "normal"
});

artyom.redirectRecognizedTextOutput(function (recognized, isFinal) {
    if (isFinal) {
        console.log("Recognized final text:" + recognized);
    } else {
        console.log(recognized);
    }
});