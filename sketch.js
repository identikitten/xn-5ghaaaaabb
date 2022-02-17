let font
let curIndex = 0;
let otherCanvas;


function preload() {
  font = loadFont('EBGaramond-VariableFont_wght.ttf');
  echoesLines = loadStrings('agua.txt');
}

function setup() {
  createCanvas(950, 600, WEBGL);

  // video para captar webcam
  //capture = createCapture(VIDEO);

  textFont(font);
  textSize(15);
  fill(0);
//  background(241, 14, 14, 0.5);
  background(9, 223, 44, 0.8);



// video para streaming en vivo
  //myVideo = createCapture(VIDEO, function(stream){
  //  let p5lm = new p5LiveMedia(this, "CAPTURE", stream, "jZQ")
  //  p5lm.on('stream', gotStream);
//  });


}

function draw() {



  let time = millis();
  rotateX(time / 2000);
  //rotateZ(time / 1234);




  for (let i = 0; i < echoesLines.length; i++){
   text(echoesLines[i], -118.8, -150+i*20, 400, 400);
  }


}

function mouseClicked(){
  loop();
}

function gotStream(stream) {
  otherCanvas = stream;
}
