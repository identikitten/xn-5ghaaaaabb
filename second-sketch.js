let font
let curIndex = 0;
//let fr = 20;

function preload() {
  font = loadFont('/EBGaramond-VariableFont_wght.ttf');
  echoesLines = loadStrings('a mi padre.txt');
}

function setup() {
  createCanvas(900, 900);
   textFont(font);
  textAlign(LEFT, CENTER);

 //frameRate(fr);
  fill(241, 241, 241);


}

function draw() {

  background(255);
  fill(0);
  noStroke();

 // let fontSize = 260;
  //let lineHeight = 0.9;

// funciona framecount*5 si esta en step+i y el texto en 60
  textSize(8);
  let amount = frameCount;
  let step = 360.0 / amount;

  push();
  translate(width/2, height/2);

  for (let i = 0; i < amount; i++){
    let rotation = step*i;
    push();
    rotate(radians(rotation * 100));


    for (let b = 0; b < echoesLines.length; b++){
      text(echoesLines[b], 20*i, 0);
    }
    pop();
  }
  pop();




}
