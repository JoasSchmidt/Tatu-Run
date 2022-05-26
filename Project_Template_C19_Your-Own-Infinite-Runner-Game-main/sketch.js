var chao,chaoImg;
var tatu,tatuImg;





function preload(){
chaoImg = loadImage("Road.png")
tatuImg = loadAnimation("tatu.png","tatu2.png","tatu3.png","tatu4.png")
}

function setup() {
    createCanvas(1200,300);

//Movendo o chão
    chao=createSprite(100,150)
    chao.addImage(chaoImg);
    chao.velocityX = -5;

//criando o tatu
    tatu=createSprite(70,150)
    tatu.addAnimation("tatuRunning",tatuImg)
    tatu.scale=0.07
}

function draw() {
 background(0);
 drawSprites();
 if(chao.x < 0 ){
    chao.x = width/2;
    
    
    
    edges= createEdgesSprite();
  }
}