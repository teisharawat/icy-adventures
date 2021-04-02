var l1, l1_ice
var l2, l2_ice
var l3, l3_ice
var l4, l4_ice
var l5, l5_ice
var l6, l6_ice
var l7, l7_ice
var l8, l8_ice
var l9, l9_ice
var l10, l10_ice
var l11, l11_ice
var l12, l12_ice
var l13, l13_ice
var l14, l14_ice
var l15, l15_ice

var player, player_std, player_wlk



var gameState="start"



function preload()
{
  l1_ice=loadImage("photo/ice_1.png")
  l2_ice=loadImage("photo/ice_1.png")
  l3_ice=loadImage("photo/ice_1.png")
  l4_ice=loadImage("photo/ice_1.png")
  l5_ice=loadImage("photo/ice_2.png")
  l6_ice=loadImage("photo/ice_2.png")
  l7_ice=loadImage("photo/ice_2.png")
  l8_ice=loadImage("photo/ice_2.png")
  l9_ice=loadImage("photo/ice_3.png")
  l10_ice=loadImage("photo/ice_3.png")
  l11_ice=loadImage("photo/ice_3.png")
  l12_ice=loadImage("photo/ice_3.png")
  l13_ice=loadImage("photo/ice_4.png")
  l14_ice=loadImage("photo/ice_4.png")
  l15_ice=loadImage("photo/ice_4.png")

  player_std=loadImage("photo/pengu_stand.png")
  player_wlk=loadImage("photo/pengu_walk.png")



}

function setup()
{
  createCanvas(1200,800)
  l1=createSprite(800,445,75,100)
  l2=createSprite(1065,600,100,75)
  l3=createSprite(400,250,75,100)
  l4=createSprite(434,690,100,75)
  l5=createSprite(600,160,75,100)
  l6=createSprite(390,500,100,75)
  l7=createSprite(110,341,75,100)
  l8=createSprite(970,155,100,75)
  l9=createSprite(224,549,75,100)
  l10=createSprite(150,72,100,75)
  l11=createSprite(750,249,75,100)
  l12=createSprite(900,760,100,75)
  l13=createSprite(715,575,75,100)
  l14=createSprite(390,41,100,75)
  l15=createSprite(120,640,75,100)
  player=createSprite(l10.x,l10.y-35)

  l1.addImage(l1_ice)
  l2.addImage(l2_ice)
  l3.addImage(l3_ice)
  l4.addImage(l4_ice)
  l5.addImage(l5_ice)
  l6.addImage(l6_ice)
  l7.addImage(l7_ice)
  l8.addImage(l8_ice)
  l9.addImage(l9_ice)
  l10.addImage(l10_ice)
  l11.addImage(l11_ice)
  l12.addImage(l12_ice)
  l13.addImage(l13_ice)
  l14.addImage(l14_ice)
  l15.addImage(l15_ice)
  player.addImage(player_std)

  player.scale=0.029

}

function draw()
{
  background("#00003c")

  

  if (keyDown(LEFT_ARROW))
  {
    player.x=-1
    player.addImage(player_wlk)
  }
  
  if (keyDown(RIGHT_ARROW))
  {
    player.x=1
    player.addImage(player_wlk)
  }

  if (keyDown(UP_ARROW))
  {
    player.y=-1
    player.addImage(player_wlk)
  }

  if (keyDown(DOWN_ARROW))
  {
    player.y=1
    player.addImage(player_wlk)
  }

  if (keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW) || keyWentUp(UP_ARROW) ||keyWentUp(DOWN_ARROW))
  {
    player.velocityX=0
    player.velocityY=0

    player.addImage(player_std)
  }


  

  drawSprites()
}