/**
 * p5js boilerplate
 * 
 * 
 */

var fundo, musica, estrelaV, estrelaA, bonecoPos, eu, vento, somVento, floco1, floco2, floco3, floco4, flocoPos;
var contador = 0;
var voltar = false;
var voar = false;
function preload() {
    fundo = loadImage("img/fundo.jpg");
    estrelaV = loadImage("img/estrelaV.png");
    estrelaA = loadImage("img/estrelaA.png");
    musica = loadSound("musica.mp3");
    boneco = loadImage("img/alisson.png");
    eu = loadImage("img/eu.png");
    floco1 = loadImage("img/floco1.png");
    floco2 = loadImage("img/floco2.png");
    floco3 = loadImage("img/floco3.png");
    floco4 = loadImage("img/floco4.png");
   // vento = loadSound("vento2.mp3");
}

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(800, 600);
    musica.loop();
    bonecoPos = createVector(300, 300);
    euPos = createVector(-400, 50);
    flocoPos = createVector(0, 0);
    
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(fundo);
    
    chamarContador();
    
    chamarBoneco();
    
    chamarEuVoando();
    image(floco1, 0, flocoPos.y, 100, 100);
    image(floco2, 100, flocoPos.y, 100, 100);
    image(floco3, 200, flocoPos.y, 100, 100);
    image(floco4, 300, flocoPos.y, 100, 100);
    image(floco1, 400, flocoPos.y, 100, 100);
    image(floco2, 500, flocoPos.y, 100, 100);
    image(floco3, 600, flocoPos.y, 100, 100);
    image(floco4, 700, flocoPos.y, 100, 100);
    
    flocoPos.y++;
    
    if(flocoPos.y >= 610){
        flocoPos.y = -100
    }
}
function chamarContador(){
    if(contador < 60){
        image(estrelaA, 58, 40, 80, 76);
    }
    if(contador >= 60){
        image(estrelaV, 58, 40, 80, 76);
    }
    
    if(contador == 120){
        contador = 0;
    }
    contador++;
}
function chamarBoneco(){
    image(boneco, 10, 300, bonecoPos.x, bonecoPos.x);
    
    if(bonecoPos.x >= 355){
        voltar = true;
    }
    if(voltar == true){
        bonecoPos.x -= 0.8;
        bonecoPos.y -= 0,8;   
    }
    
    if(bonecoPos.x <= 300){
        voltar = false;
    }
    
    bonecoPos.x += 0.4;
    bonecoPos.y += 0,4; 
}

function chamarEuVoando(){
    if(voar == true){
        image(eu, euPos.x, euPos.y, 400, 82);  
        euPos.x = euPos.x + 5;
    }
    
    if(euPos.x >= 825){
        voar = false;
        euPos.x = -400;
    }
}

function mousePressed(){
    voar = true;
}