function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
}
// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente

let colidiu = false;
 
// placar do jogo 
let meuspontos = 0;
let pontosDoOponente = 0;

