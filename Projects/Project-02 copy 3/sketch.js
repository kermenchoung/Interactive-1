var chaos = true;
var order = false;
var orderGrid = [];
var orderImagesRevealed = 0;
var imgs = [];



function setup(){
    createCanvas(windowWidth, windowHeight);

    //setup for chaos mode
    background(0); //black
    noFill();
    stroke(255); //white
    rectMode(CENTER);
    //center rectangles
    for (var i = 0; i < 30; i++) {
        rect(width/2, height/2, i*10, i*5);
    }
}

function draw(){
    if (chaos){
        chaosDraw();
    } else
    if (order){
        orderDraw();
    }
}

function chaosDraw(){
    //rectangles that follow the mouse
    for (var i = 0; i < 30; i=i+5) {
        rect(mouseX, mouseY, i*10, i*5);
    }
}

function orderSetup(){
    for (var y = 75; y < height + 150; y += 150){
        for (var x = 150; x < width + 300; x += 300){
            orderGrid.push({x: x, y: y, img: false});
        }
    }
}

function orderDraw(){
    //setup for order mode
    background(0); //black
    for (var i=0; i<orderGrid.length; i++){
        var box = orderGrid[i];
        for (var j = 0; j < 30; j+=5) {
            if (box.img){
                image(box.img, box.x-150, box.y-75, 300, 150);
            } else {
                rect(box.x, box.y, j*10, j*5);
            }
        }
    }
}

function mouseClicked(){
    if (chaos){
        chaos = false;
        order = true;
        orderSetup();
    } else
    if (order){
        orderImagesRevealed++;
        //find box that mouseX mouseY is over
        for (var i=0; i<orderGrid.length; i++){
            var box = orderGrid[i];
            if (mouseX > box.x - 150 &&
                mouseX < box.x + 150 &&
                mouseY > box.y - 75 &&
                mouseY < box.y + 75){
                  var rand = Math.floor(Math.random() * imgs.length);
                  var randImg = imgs[rand];
                  box.img = randImg;
                  break;
            }
        }
    }
}


