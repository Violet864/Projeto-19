var path,bee,flower1,flower2,flower3,flower4,badBee;
var pathImg,beeImg,flower1Img,flower2Img,flower3Img,flower4Img,badBeeImg;
var flower1Grp,flower2Grp,flower3Grp,flower4Grp,badBeeGrp;
var flowerCollection = 0;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
    pathImg = loadImage("Road.png")
    beeImg = loadImage("abeille.png");
    flower1Img = loadImage("fleur1.png");
    flower2Img = loadImage("fleur2.png");
    flower3Img = loadImage("fleur3.png");
    flower4Img = loadImage("fleur4.png");
    endImg =loadAnimation("fimdeJogo.png");

}

function setup() {
    createCanvas(400,600);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

bee = createSprite(70,580,20,20);
bee.addImage("bee",beeImg);
bee.scale=0.08;
    
flower1Grp=new Group();
flower2Grp=new Group();
flower3Grp=new Group();
flower4Grp=new Group();
badBeeGrp=new Group();

}




function draw() {

    if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();
    boy.collide(edges);
    
    //código para reiniciar o fundo
    if(path.y > 400 ){
      path.y = height/2;
    }
    
      createflower1();
      createflower2();
      createflower3();
      createflower4();
      createbadBee();
  
      if (flower1Grp.isTouching(bee)) {
        flower1Grp.destroyEach();
        flowerCollection=flowerCollection+50;
      }
      else if (flower2Grp.isTouching(bee)) {
        flower2Grp.destroyEach();
        flowerCollection=flowerCollection+100;
      
      }else if (flower3Grp.isTouching(bee)){
        flower3Grp.destroyEach();
        flowerCollection=flowerCollection+150;
        
      }else if(flower4Grp.isTouching(bee)) {
        flower4Grp.destroyEach();
        flowerCollection= flowerCollection+200;
        
      }else{
        if(badBeeGrp.isTouching(bee)) {
          gameState=END;
          bee.addImage("bee",endImg);
          
  
          bee.x=200;
          bee.y=300;
          bee.scale=0.6;
          
          flower1Grp.destroyEach();
          flower2Grp.destroyEach();
          flower3Grp.destroyEach();
          flower4Grp.destroyEach();
          badBeeGrp.destroyEach();
          
          
          
          flower1Grp.setVelocityYEach(0);
          flower2Grp.setVelocityYEach(0);
          flower3Img.setVelocityYEach(0);
          flower4Grp.setVelocityYEach(0);
          badBeeGrp.setVelocityYEach(0);
       
      }
    }
    
    drawSprites();
    textSize(20);
    fill(255);
    text("Collect : "+ flowerCollection,10,30);
    }
  
  }
  
  function createFlower1() {
    if (World.frameCount % 200 == 0) {
    var flower1 = createSprite(Math.round(random(50, 350),40, 10, 10));
    flower1.addImage(flower1Img);
    flower1.scale=0.12;
    flower1.velocityY = 3;
    flower1.lifetime = 150;
    flower1Grp.add(flower1);
    }
  }
  
  function createFlower2() {
    if (World.frameCount % 320 == 0) {
    var flower2 = createSprite(Math.round(random(50, 350),40, 10, 10));
    flower2.addImage(flower2Img);
    flower2.scale=0.03;
    flower2.velocityY = 3;
    flower2.lifetime = 150;
    flower2Grp.add(flower2);
  }
  }
  
  function createFlower3(){
    if (World.frameCount % 320 == 0) {
        var flower3 = createSprite(Math.round(random(50, 350),40, 10, 10));
        flower3.addImage(flower3Img);
        flower3.scale=0.03;
        flower3.velocityY = 3;
        flower3.lifetime = 150;
        flower3Grp.add(flower3);
      } 
  }
  
  function createFlower4(){
    if (World.frameCount % 320 == 0) {
        var flower4 = createSprite(Math.round(random(50, 350),40, 10, 10));
        flower4.addImage(flower4Img);
        flower4.scale=0.03;
        flower4.velocityY = 3;
        flower4.lifetime = 150;
        flower4Grp.add(flower4);
      } 
  }
  
  function createBadBee(){
    if (World.frameCount % 320 == 0) {
        var badBee = createSprite(Math.round(random(50, 350),40, 10, 10));
        badBee.addImage(badBeeImg);
        badBee.scale=0.03;
        badBee.velocityY = 3;
        badBee.lifetime = 150;
        badBeeGrp.add(badBee);
      } 
  }
  
  
 