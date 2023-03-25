// Definir las variables para los cuadrados
let square1, square2;
let speed = 5; // velocidad de movimiento de los cuadrados

function setup() {
  // Crear el canvas
  createCanvas(600, 400);

  // Inicializar los cuadrados
  square1 = {
    x: 50,
    y: height / 2,
    size: 50,
    color: "red"
  };

  square2 = {
    x: width - 50,
    y: height / 2,
    size: 50,
    color: "blue"
  };
}

function draw() {
  // Limpiar el canvas
  background(255);

  // Dibujar los cuadrados
  fill(square1.color);
  rect(square1.x, square1.y, square1.size, square1.size);
  fill(square2.color);
  rect(square2.x, square2.y, square2.size, square2.size);

  // Mover los cuadrados a la derecha
  square1.x += speed;
  square2.x -= speed;

  // Comprobar si los cuadrados chocan con las paredes laterales
  if (square1.x + square1.size > width) {
    square1.x = width - square1.size;
    speed = -speed;
  } else if (square1.x < 0) {
    square1.x = 0;
    speed = -speed;
  }

  if (square2.x < 0) {
    square2.x = 0;
    speed = -speed;
  } else if (square2.x + square2.size > width) {
    square2.x = width - square2.size;
    speed = -speed;
  }
}


