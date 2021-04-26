var canvas;
var music;
var block1,block2,block3,block4
var ball,edges 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30)
    block1.shapeColor = "purple"
    block2 = createSprite(295,580,200,30)
    block2.shapeColor = "lime"
    block3 = createSprite(515,580,200,30)
    block3.shapeColor = "aqua"
    block4 = createSprite(740,580,220,30)
    block4.shapeColor = "pink"



    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,40,40)
    ball.shapeColor = "white"
    ball.velocityX = 4
    ball.velocityY = 9

}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites()
    ball.bounceOff(edges)
    
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
    ball.shapeColor = "purple"
    music.play () ;  
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor = "lime"
        music.play();    
        }
        if(block3.isTouching(ball)&&ball.bounceOff(block3)){
            ball.shapeColor = "aqua" 
            music.play() ;  
            }
            if(block4.isTouching(ball)&&ball.bounceOff(block4)){
                ball.shapeColor = "pink"
                music.play() ;   
                }
    drawSprites()



    //add condition to check if box touching surface and make it box
}
