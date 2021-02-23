var box1,box2,box3,box4,ball;

function setup(){
    createCanvas(700,600);

    box1=createSprite(50,550,100,100);
    box1.shapeColor="blue";

box2=createSprite(250,550,100,100);
box2.shapeColor="red";

ball=createSprite(random(20,750));
ball.shapeColor="white";
ball.velocityY=3;

box3=createSprite(450,550,100,100);
box3.shapeColor="green";

box4=createSprite(630,550,100,100);
box4.shapeColor="yellow";


}



function draw(){
background(0,0,0);

edges=createEdgeSprites(); 
ball.bounceOff(edges);

fill("white")

//Text(mouseX+","+mouseY,100,50)

if(ball.isTouching(box1)&&ball.bounceOff(box1)){
   ball.shapeColor="blue"
    
}

if(ball.isTouching(box2)&&ball.bounceOff(box2)){
    ball.shapeColor="red";
   
}
if(ball.isTouching(box3)&&ball.bounceOff(box3)){
   ball.shapeColor="green"
    
}
if(ball.isTouching(box4)&&ball.bounceOff(box4)){
   ball.shapeColor="yellow"
    
   
}




drawSprites();




}
