PFont helvetica;
String quote = "to\nbe\nthe\nwaterto\nbe\nthe\nwaterto\nbe\nthe\nwaterto\nbe\nthe\nwaterto\nbe\nthe\nwaterto\nbe\nthe\nwaterto\nbe\nthe\nwaterto\nbe\nthe\nwater";
char char1 = quote.charAt(8);


void setup() {
  size(900,900);
  helvetica= createFont("HelveticaNeueLTStd-Ex.otf", 1000);
  //textAlign(LEFT, CENTER);
  textFont(helvetica);
}

void draw() {
  background(#f1f1f1);
  fill(0);
  
  
  float fontSize = 260;
  float lineHeight = 0.9;
  
  
  
  textSize(60 - (frameCount*2));
  //textLeading(fontSize*lineHeight);
  float amount = frameCount;
  float step = 360.0 / amount;
  
  
  
  push();
  translate(width/2, height/2);
  
  for (int i = 0; i < amount; i++) {
  float rotation = step*i;
  push();
  rotate(radians(rotation * 100));
  //text(quote, 80, 0);
  String[] poem = loadStrings("naufragio.txt");
  for (int b = 0 ; b < poem.length; b++) {
  text(poem[b], 80, 0);
}
  pop();
  }
  
 pop();

  
}