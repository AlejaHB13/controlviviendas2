let video = null;
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;

const videoAction = document.getElementById('videoAction');
const detectionAction = document.getElementById('detectionAction');

document.body.style.cursor = 'wait';

function preload() {
  detector = ml5.objectDetector('cocossd');
}

function setup() {
  createCanvas(120, 120).id('canvas');
  video = createCapture(VIDEO).id('video1');
  video.size(120, 120);

}


function draw() {
  if (!video || !detecting) return;
  image(video, 0, 0);
  for (let i = 0; i < detections.length; i++) {
    drawResult(detections[i]);
  }
}

function drawResult(object) {
  boundingBox(object);
  drawLabel(object);
}

function boundingBox(object) {
  stroke('blue');
  strokeWeight(6);
  noFill();
  rect(object.x, object.y, object.width, object.height);
}
function drawLabel(object) {
  noStroke();
  if (object.label === 'person') {
    fill('white');
  } else if (object.label === 'dog') {
    fill('red');
  }
  textSize(34);
  text(object.label, object.x + 15, object.y + 34);
}

function onDetected(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;

  if (detecting) {
    detect();
  }

  for (let i = 0; i < detections.length; i++) {
    let mensaje = '';
    if (detections[i].label === 'person') {
      mensaje = 'Se ha detectado una persona en la entrada';
    } else if (detections[i].label === 'dog') {
      mensaje = 'Se ha detectado un perro en la entrada';
    }
    if (mensaje) {
      var mensajeVoz = new SpeechSynthesisUtterance(mensaje);
      window.speechSynthesis.speak(mensajeVoz);
    }
    
  }
}

function detect() {
  detector.detect(video, onDetected);
}

function toggleVideo() {
  if (!video) return;
  if (videoVisibility) {
    video.hide();
    videoAction.innerText = 'Activar Video';
  } else {
    video.show();
    videoAction.innerText = 'Desactivar Video';
  }
  videoVisibility = !videoVisibility;
}

function toggleDetecting() {
  if (!video || !detector) return;
  if (!detecting) {
    detect();
    detectionAction.innerText = 'Parar...';
  } else {
    detectionAction.innerText = 'Iniciar detección';
  }
  detecting = !detecting;
}
