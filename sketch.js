
var lana,lana1;
var bgimage;
var gameState = 1;
var button1, greeting, input;
function preload()
{
	bgimage = loadImage("IMAGES/bg4.jpg");
}

function setup() {
	createCanvas(1024,768);
  lana = createSprite(135,123,10,10);
 // lana.visible = false;
  lana1 = createSprite(135,442,10,10);
  input = createInput();
  input.hide();
  //lana1.visible = false;

}


function draw() {
  background('white');

 if(gameState == 1){
   background(bgimage);
   lana.visible = true;
   lana1.visible = true;
  
   input.show();
    input.position(365, 565);
  
    button1 = createButton('Submit');
    button1.position(input.x + input.width, 565);
    
   
  
    greeting = createElement('h2', 'What is your name?');
    greeting.position(365, 505);
    
    
  
  fill(255, 153, 0);
  textSize(30);
  textFont('Georgia');
  text('Hi! Im Lana!, Ill be leading you on your journey of eye testing!', 170, 130);
 
  fill(255, 153, 0);
  textSize(30);
  textFont('Georgia');
  text('Please enter your username so we know what to call you.', 170, 250);
   
 }

 if(button1.mousePressed)()=>{
  gameState = 2;
}

 if(gameState == 2){
  textSize(30);
  text('This is the second gamestate',200,200);
  text('Please stay away 5 steps from your phone and keep your device leaned against a wall as given in the picture below.',200,250);
  
   lana1.visible = false;
   lana.visible = false;
  
   button1.hide();
   greeting.hide();
   input.hide();
 }
  
  drawSprites();
 
}