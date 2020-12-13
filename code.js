var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create sofia
var sofia = createSprite(40,40,20,20);
//create cup
var cup = createSprite(369,360,15,25);
//create wall1
var wall1 = createSprite(0,210,40,1000);
//create wall2
var wall2 = createSprite(200,390,1000,25);
//create wall3 
var walll3 = createSprite(220,0,1000,40);
//create wall4
var wall4 = createSprite(399,0,35,1000);
//create wall5
var wall5 = createSprite(70,90,90,20);
// create wall 6
var wall6 = createSprite(60,127,20,55);
//create wall 7
var wall7 = createSprite(310,350,20,55);
//create wall8
var wall8 = createSprite(260,369,80,18);
//create wall9
var wall9 = createSprite(210,350,20,55);
//craete wall10
var wall10 = createSprite(332,240,100,18);
//create wall11
var wall11 = createSprite(169,40,20,170);
//create wall12
var wall12 = createSprite(229,48,100,20);
//create wall13
var wall13 = createSprite(149,181,100,20);
//create wall14
var wall14 = createSprite(232,145,20,100);
//create Wall15
var wall15 = createSprite(64,249,90,20);
//create wall16
var wall16 = createSprite(105,259,22,90);
//create wall17
var wall17 = createSprite(60,340,22,90);
//create wall18
var wall18 = createSprite(200,320,70,18);
//create wall19
var wall19 = createSprite(234,287,23,50);
//create wall20
var wall20 = createSprite(295,182,95,20);
//create wal21
var wall21 = createSprite(351,136,60,20);
//create wall22
var wall22 = createSprite(310,264,20,30);


//give colors to sofia
sofia.shapeColor="orange";
//give colors to cup
cup.shapeColor="red";
//give colors to wall1
wall1.shapeColor="brown";
//give colors to wall4
wall4.shapeColor="brown";
//give color to wall5
wall5.shapeColor="blue";
//give colors to wall6
wall6.shapeColor="tan";
//give colors to wall7
wall7.shapeColor="crimson";
//give colors to wall8
wall8.shapeColor="teal";
//give colors to wall9
wall9.shapeColor="crimson";
//give colors to wall10
wall10.shapeColor="aquamarine";
//give colors to wall11
wall11.shapeColor="rgb(2,200,200)";
//give colors to wall12
wall12.shapeColor="rgb(456,10,05)";
//give colors to wall13
wall13.shapeColor="rgb(90,255,100)";
//give colors to wall14
wall14.shapeColor="rgb(59,220,255)";
//give colors to wall15
wall15.shapeColor="green";
//give colors to wall16
wall16.shapeColor="rgb(125,255,179)";
//give colors to wall17
wall17.shapeColor="rgb(69,94,69)";
//give colors to wall18
wall18.shapeColor="rgb(255,76,76)";
//give colors to wall 19
wall19.shapeColor="green";
//give colours to wall20
wall20.shapeColor="rgb(255,128,0)";
//give colors to wall21
wall21.shapeColor="rgb(128,128,0)";
//give colors to wall22
wall22.shapeColor="crimson";

//have a text size
textSize(26);
  
function draw() {
//have a background
background("yellow");

//text for sofia and cup
text("Sofia",49,40);
text("cup",340,340);

//order to computer
drawSprites();

//up arrow
if (keyDown("UP_ARROW")) {
sofia.velocityX=0;
sofia.velocityY=-2;
}

//down arrow
if (keyDown("DOWN_ARROW")) {
sofia.velocityX=0;
sofia.velocityY=2;
}

//left arrow
if (keyDown("LEFT_ARROW")) {
sofia.velocityX=-2;
sofia.velocityY=0;
}

//right arrow
if (keyDown("RIGHT_ARROW")) {
sofia.velocityX=2;
sofia.velocityY=0;
}

//pause
if (keyDown("space")) {
sofia.velocityY=0;
sofia.velocityX=0;
}

//preventSofia 
if (sofia.isTouching(wall1)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall2)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall13)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall4)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall5)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall6)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall7)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall8)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall9)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall10)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall11)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall12)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall13)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall14)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall15)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall16)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall17)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall18)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall19)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall20)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall21)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall21)) {
  sofia.x=40;
  sofia.y=40;
}
if (sofia.isTouching(wall22)) {
  sofia.x=40;
  sofia.y=40;
}

textSize(40);

if (sofia.collide(cup)) {
text("YOU WIN",200,200);
}
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
