// Where is the car
let x, y;

class carro {
  constructor(alto,ancho,color,name){
  this.alto=alto;
  this.ancho=ancho;
  this.color=color;
this.name=name;
  }
}



function setup() {
  
  createCanvas(400, 200);
  // Starts position
  y = height - height/4;
  x = 0;
let micarro= new carro (10,20,(red),"minave");
console.log("canvas height is"  + this. height);
console.log("canvas width is"  + this. width);
console.log("canvas anho is"  + micarro.ancho);
console.log("canvas height is"  + micarro.alto);
console.log("Nombre de mi carro es:"  + micarro.name);
}

function draw() {
  background(55);  
  display();
  move();
}


function move(){
  // Jiggling randomly
  y = y + random(-1, 1);
  
  if (x > width) {
    // Reset 
    x = 0;
    y = height - height/4;
  } else {
    // Moving up at a constant speed velocidad
    x = x + 3;
  }
}
//abajo es para rect tamañol carro fill color
function display(){
  // Draw a car
  stroke(50);
  fill(155,4,10);
  rect(x, y, 70, 45);
