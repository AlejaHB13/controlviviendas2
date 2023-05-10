var artyom = new Artyom();

document.querySelector("#activar").addEventListener('click', function(){
    artyom.say("sonido activado");
});

      
function mostrarAlerta() {
    var alerta = document.querySelector('.alerta');
    alerta.classList.add('mostrando');
    setTimeout(function () {
      alerta.classList.remove('mostrando');
    }, 60000); // 60000 milisegundos = 1 minuto
  }
  
artyom.addCommands([
          {
            indexes: ["colores"],
            action: function() {
            artyom.say("abriendo menu de colores");
            document.getElementById('colores').mostrarAlerta();
            }
            },
        /*comando voz habitación principal*/  
    {
    indexes: ["cerrar ventana habitación principal"],
    action: function() {
    artyom.say("cerrando ventana habitación principal");
    document.getElementById('ventana-hab-principal').style.backgroundColor = 'blue';
    }
    },
    {
    indexes: ['cerrar puerta habitación principal'],
    action: function() {
    artyom.say("cerrando puerta habitación principal");
    document.getElementById('puerta-hab-principal').style.backgroundColor = 'green';
    }
    },
    {
    indexes: ['encender luz habitación principal'],
    action: function() {
    artyom.say("encendiendo luz habitación principal");
    document.getElementById('bombillo-hab-principal').style.backgroundColor = 'yellow';
    }
    },
    {
        indexes: ['encender calefacción habitación principal'],
        action: function() {
        artyom.say("encendiendo calefacción habitación principal");
        document.getElementById('calefacion-hab-principal').style.backgroundColor = 'red';
        }
        },
    {
    indexes: ['encender televisión habitación principal'],
    action: function() {
    artyom.say("encendiendo relevisión habitación principal");
    document.getElementById('tv-hab-principal').style.backgroundColor = 'orange';
    }
    },

    {
        indexes: ["abrir ventana habitación principal"],
        action: function() {
        artyom.say("abriendo ventana habitación principal");
        document.getElementById('ventana-hab-principal').style.backgroundColor = 'white';
        }
        },
        {
        indexes: ['abrir puerta habitación principal'],
        action: function() {
        artyom.say("abriendo puerta habitación principal");
        document.getElementById('puerta-hab-principal').style.backgroundColor = 'white';
        }
        },
        {
        indexes: ['apagar luz habitación principal'],
        action: function() {
        artyom.say("apagando luz habitación principal");
        document.getElementById('bombillo-hab-principal').style.backgroundColor = 'white';
        }
        },
        {
            indexes: ['apagar calefacción habitación principal'],
            action: function() {
            artyom.say("apagando calefacción habitación principal");
            document.getElementById('calefacion-hab-principal').style.backgroundColor = 'white';
            }
            },
        {
        indexes: ['apagar televisión habitación principal'],
        action: function() {
        artyom.say("apagando relevisión habitación principal");
        document.getElementById('tv-hab-principal').style.backgroundColor = 'white';
        }
        },
      /*comando voz habitación 2*/
    {
        indexes: ["cerrar ventana habitación 2"],
        action: function() {
        artyom.say("cerrando ventana habitación 2");
        document.getElementById('ventana-hab-principal2').style.backgroundColor = 'blue';
        }
        },
        {
        indexes: ['cerrar puerta habitación 2'],
        action: function() {
        artyom.say("cerrando puerta habitación 2");
        document.getElementById('puerta-hab-principal2').style.backgroundColor = 'green';
        }
        },
        {
        indexes: ['encender luz habitación 2'],
        action: function() {
        artyom.say("encendiendo luz habitación 2");
        document.getElementById('bombillo-hab-principal2').style.backgroundColor = 'yellow';
        }
        },
        {
            indexes: ['encender calefacción habitación 2'],
            action: function() {
            artyom.say("encendiendo calefacción habitación 2");
            document.getElementById('calefacion-hab-principal2').style.backgroundColor = 'red';
            }
            },
        {
        indexes: ['encender televisión habitación 2'],
        action: function() {
        artyom.say("encendiendo relevisión habitación 2");
        document.getElementById('tv-hab-principal2').style.backgroundColor = 'orange';
        }
        },

        {
            indexes: ["abrir ventana habitación 2"],
            action: function() {
            artyom.say("abriendo ventana habitación 2");
            document.getElementById('ventana-hab-principal2').style.backgroundColor = 'white';
            }
            },
            {
            indexes: ['abrir puerta habitación 2'],
            action: function() {
            artyom.say("abriendo puerta habitación 2");
            document.getElementById('puerta-hab-principal2').style.backgroundColor = 'white';
            }
            },
            {
            indexes: ['apagar luz habitación 2'],
            action: function() {
            artyom.say("apagando luz habitación 2");
            document.getElementById('bombillo-hab-principal2').style.backgroundColor = 'white';
            }
            },
            {
                indexes: ['apagar calefacción habitación 2'],
                action: function() {
                artyom.say("apagando calefacción habitación 2");
                document.getElementById('calefacion-hab-principal2').style.backgroundColor = 'white';
                }
                },
            {
            indexes: ['apagar televisión habitación 2'],
            action: function() {
            artyom.say("apagando relevisión habitación 2");
            document.getElementById('tv-hab-principal2').style.backgroundColor = 'white';
            }
            },
            /*comando voz habitación 3*/       

            {
                indexes: ["cerrar ventana habitación 3"],
                action: function() {
                artyom.say("cerrando ventana habitación 3");
                document.getElementById('ventana-hab-3').style.backgroundColor = 'blue';
                }
                },
                {
                indexes: ['cerrar puerta habitación 3'],
                action: function() {
                artyom.say("cerrando puerta habitación 3");
                document.getElementById('puerta-hab-3').style.backgroundColor = 'green';
                }
                },
                {
                indexes: ['encender luz habitación 3'],
                action: function() {
                artyom.say("encendiendo luz habitación 3");
                document.getElementById('bombillo-hab-principal2').style.backgroundColor = 'yellow';
                }
                },
                {
                    indexes: ['encender calefacción habitación 3'],
                    action: function() {
                    artyom.say("encendiendo calefacción habitación 3");
                    document.getElementById('calefacion-hab-3').style.backgroundColor = 'red';
                    }
                    },
                {
                indexes: ['encender televisión habitación 3'],
                action: function() {
                artyom.say("encendiendo relevisión habitación 3");
                document.getElementById('tv-hab-3').style.backgroundColor = 'orange';
                }
                },

                {
                    indexes: ["abrir ventana habitación 3"],
                    action: function() {
                    artyom.say("abriendo ventana habitación 3");
                    document.getElementById('ventana-hab-3').style.backgroundColor = 'white';
                    }
                    },
                    {
                    indexes: ['abrir puerta habitación 3'],
                    action: function() {
                    artyom.say("abriendo puerta habitación 3");
                    document.getElementById('puerta-hab-3').style.backgroundColor = 'white';
                    }
                    },
                    {
                    indexes: ['apagar luz habitación 3'],
                    action: function() {
                    artyom.say("apagando luz habitación 3");
                    document.getElementById('bombillo-hab-principal2').style.backgroundColor = 'white';
                    }
                    },
                    {
                        indexes: ['apagar calefacción habitación 3'],
                        action: function() {
                        artyom.say("apagando calefacción habitación 3");
                        document.getElementById('calefacion-hab-3').style.backgroundColor = 'white';
                        }
                        },
                    {
                    indexes: ['apagar televisión habitación 3'],
                    action: function() {
                    artyom.say("apagando relevisión habitación 3");
                    document.getElementById('tv-hab-3').style.backgroundColor = 'white';
                    }
                    },
                   /*comando voz habitación baño principal*/  

                   {
                    indexes: ["cerrar ventana baño principal"],
                    action: function() {
                    artyom.say("cerrando ventana baño principal");
                    document.getElementById('ventana-baño-principal').style.backgroundColor = 'blue';
                    }
                    },
                    {
                    indexes: ['cerrar puerta baño principal'],
                    action: function() {
                    artyom.say("cerrando puerta baño principal");
                    document.getElementById('puerta-baño-principal').style.backgroundColor = 'green';
                    }
                    },
                    {
                    indexes: ['encender luz baño principal'],
                    action: function() {
                    artyom.say("encendiendo luz baño principal");
                    document.getElementById('bombillo-baño-principal').style.backgroundColor = 'yellow';
                    }
                    },
                    
                    {
                        indexes: ["abrir ventana baño principal"],
                        action: function() {
                        artyom.say("abriendo ventana baño principal");
                        document.getElementById('ventana-baño-principal').style.backgroundColor = 'white';
                        }
                        },
                        {
                        indexes: ['abrir puerta baño principal'],
                        action: function() {
                        artyom.say("abriendo puerta baño principal");
                        document.getElementById('puerta-baño-principal').style.backgroundColor = 'white';
                        }
                        },
                        {
                        indexes: ['apagar luz baño principal'],
                        action: function() {
                        artyom.say("apagando luz baño principal");
                        document.getElementById('bombillo-baño-principal').style.backgroundColor = 'white';
                        }
                        },

                    /*comando voz habitación baño 2*/ 
                    {
                        indexes: ["cerrar ventana baño 2"],
                        action: function() {
                        artyom.say("cerrando ventana baño 2");
                        document.getElementById('ventana-baño2').style.backgroundColor = 'blue';
                        }
                        },
                        {
                        indexes: ['cerrar puerta baño 2'],
                        action: function() {
                        artyom.say("cerrando puerta baño 2");
                        document.getElementById('puerta-baño2').style.backgroundColor = 'green';
                        }
                        },
                        {
                        indexes: ['encender luz baño 2'],
                        action: function() {
                        artyom.say("encendiendo luz baño 2");
                        document.getElementById('bombillo-baño2').style.backgroundColor = 'yellow';
                        }
                        },
                             /*comando voz habitación cocina*/ 
                             {
                        indexes: ['cerrar ventana cocina'],
                        action: function() {
                        artyom.say("cerrando ventana cocina");
                        document.getElementById('ventana-cocina').style.backgroundColor = 'blue';
                        }
                        },
                        {
                        indexes: ['encender luz cocina'],
                        action: function() {
                        artyom.say("encendiendo cocina");
                        document.getElementById('bombillo-cocina').style.backgroundColor = 'yellow';
                        }
                        },

                        {
                            indexes: ["abrir ventana baño 2"],
                            action: function() {
                            artyom.say("abriendo ventana baño 2");
                            document.getElementById('ventana-baño2').style.backgroundColor = 'white';
                            }
                            },
                            {
                            indexes: ['abrir puerta baño 2'],
                            action: function() {
                            artyom.say("abriendo puerta baño 2");
                            document.getElementById('puerta-baño2').style.backgroundColor = 'white';
                            }
                            },
                            {
                            indexes: ['apagar luz baño 2'],
                            action: function() {
                            artyom.say("apagando luz baño 2");
                            document.getElementById('bombillo-baño2').style.backgroundColor = 'white';
                            }
                            },
                                 /*comando voz habitación cocina*/ 
                                 {
                            indexes: ['cerrar ventana cocina'],
                            action: function() {
                            artyom.say("cerrando ventana cocina");
                            document.getElementById('ventana-cocina').style.backgroundColor = 'blue';
                            }
                            },
                            {
                            indexes: ['encender luz cocina'],
                            action: function() {
                            artyom.say("encendiendo cocina");
                            document.getElementById('bombillo-cocina').style.backgroundColor = 'yellow';
                            }
                            },

                            {
                                indexes: ['abrir ventana cocina'],
                                action: function() {
                                artyom.say("abriendo ventana cocina");
                                document.getElementById('ventana-cocina').style.backgroundColor = 'white';
                                }
                                },
                                {
                                indexes: ['apagar luz cocina'],
                                action: function() {
                                artyom.say("apagando cocina");
                                document.getElementById('bombillo-cocina').style.backgroundColor = 'wwhite';
                                }
                                },
                        /*comando voz habitación alacena*/ 
                        {
                            indexes: ['cerrar puerta alacena'],
                            action: function() {
                            artyom.say("cerrando puerta alacena");
                            document.getElementById('ventana-alacena').style.backgroundColor = 'green';
                            }
                            },
                            {
                            indexes: ['encender luz alacena'],
                            action: function() {
                            artyom.say("encendiendo luz alacena");
                            document.getElementById('bombillo-alacena').style.backgroundColor = 'yellow';
                            }
                            },

                            {
                                indexes: ['abrir puerta alacena'],
                                action: function() {
                                artyom.say("abriendo puerta alacena");
                                document.getElementById('ventana-alacena').style.backgroundColor = 'white';
                                }
                                },
                                {
                                indexes: ['apagar luz alacena'],
                                action: function() {
                                artyom.say("apagando luz alacena");
                                document.getElementById('bombillo-alacena').style.backgroundColor = 'white';
                                }
                                },
                         /*comando voz sala*/ 
                         {
                            indexes: ["cerrar ventana sala"],
                            action: function() {
                            artyom.say("cerrando ventana sala");
                            document.getElementById('centana-sala').style.backgroundColor = 'blue';
                            }
                            },
                            {
                            indexes: ['cerrar puerta sala'],
                            action: function() {
                            artyom.say("cerrando puerta sala");
                            document.getElementById('puerta-sala').style.backgroundColor = 'green';
                            }
                            },
                            {
                            indexes: ['encender luz sala'],
                            action: function() {
                            artyom.say("encendiendo luz sala");
                            document.getElementById('bombillo-sala').style.backgroundColor = 'yellow';
                            }
                            },
                            {
                                indexes: ['encender calefacción sala'],
                                action: function() {
                                artyom.say("encendiendo calefacción sala");
                                document.getElementById('calefacion-sala').style.backgroundColor = 'red';
                                }
                                },
                            {
                            indexes: ['encender aspiradora'],
                            action: function() {
                            artyom.say("encendiendo aspiradora");
                            document.getElementById('aspiradora').style.backgroundColor = 'purple';
                            }
                            },

                            {
                                indexes: ["abrir ventana sala"],
                                action: function() {
                                artyom.say("abriendo ventana sala");
                                document.getElementById('centana-sala').style.backgroundColor = 'white';
                                }
                                },
                                {
                                indexes: ['abrir puerta sala'],
                                action: function() {
                                artyom.say("abriendo puerta sala");
                                document.getElementById('puerta-sala').style.backgroundColor = 'white';
                                }
                                },
                                {
                                indexes: ['apagar luz sala'],
                                action: function() {
                                artyom.say("apagando luz sala");
                                document.getElementById('bombillo-sala').style.backgroundColor = 'white';
                                }
                                },
                                {
                                    indexes: ['apagar calefacción sala'],
                                    action: function() {
                                    artyom.say("apagando calefacción sala");
                                    document.getElementById('calefacion-sala').style.backgroundColor = 'white';
                                    }
                                    },
                                {
                                indexes: ['apagar aspiradora'],
                                action: function() {
                                artyom.say("apagando aspiradora");
                                document.getElementById('aspiradora').style.backgroundColor = 'white';
                                }
                                },
                        /*comando voz sala*/ 
                        {
                            indexes: ['cerrar puerta entrada parqueadero'],
                            action: function() {
                            artyom.say("cerrando puerta entrada parqueadero");
                            document.getElementById('puerta-entrada-parqueadero').style.backgroundColor = 'green';
                            }
                            },
                        {
                                indexes: ['cerrar puerta entrada parqueadero sala'],
                                action: function() {
                                artyom.say("cerrando puerta entrada parqueadero sala");
                                document.getElementById('puerta-entradasala-parqueadero').style.backgroundColor = 'green';
                                }
                                },
                        {
                                    indexes: ['encender luz parqueadero'],
                                    action: function() {
                                    artyom.say("encendiendo luz parqueadero");
                                    document.getElementById('bombillo-parqueadero').style.backgroundColor = 'yellow';
                                    }
                                    },
                                    
                                    {
                                        indexes: ['abrir puerta entrada parqueadero'],
                                        action: function() {
                                        artyom.say("abriendo puerta entrada parqueadero");
                                        document.getElementById('puerta-entrada-parqueadero').style.backgroundColor = 'white';
                                        }
                                        },
                                    {
                                            indexes: ['abrir puerta entrada parqueadero sala'],
                                            action: function() {
                                            artyom.say("abriendo puerta entrada parqueadero sala");
                                            document.getElementById('puerta-entradasala-parqueadero').style.backgroundColor = 'white';
                                            }
                                            },
                                    {
                                                indexes: ['apagar luz parqueadero'],
                                                action: function() {
                                                artyom.say("apagando luz parqueadero");
                                                document.getElementById('bombillo-parqueadero').style.backgroundColor = 'white';
                                                }
                                                },
                         /*comando voz jardin*/ 
                         {
                            indexes: ['encender roseador 1'],
                            action: function() {
                            artyom.say("encendiendo roseador 1");
                            document.getElementById('roseador-1').style.backgroundColor = 'grey';
                            }
                            },
                            {
                                indexes: ['encender roseador 2'],
                                action: function() {
                                artyom.say("encendiendo roseador 2");
                                document.getElementById('roseador-2').style.backgroundColor = 'grey';
                                }
                                },

                                {
                                    indexes: ['apagar roseador 1'],
                                    action: function() {
                                    artyom.say("apagando roseador 1");
                                    document.getElementById('roseador-1').style.backgroundColor = 'white';
                                    }
                                    },
                                    {
                                        indexes: ['apagar roseador 2'],
                                        action: function() {
                                        artyom.say("apagando roseador 2");
                                        document.getElementById('roseador-2').style.backgroundColor = 'white';
                                        }
                                        }

    ]);

artyom.initialize({
    lang:"es-ES",
    debug:true,
    listen:true,
    continuous: true,
    speed:0.9,
    mode:"normal"
});

artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
    if(isFinal){
        console.log("Texto final reconocido: " + recognized);
    }else{
        console.log(recognized);
    }
});