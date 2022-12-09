
var wwidth;
var colwidth;
var images = [];
var img;
var w, h, tow, toh;
var x, y, tox, toy;
var zoom = .01; //zoom step per mouse tick 
var hold = 0;
var ipos = 0;


function preload() {
    for (var i = 0; i <= 85; ++i) {
        images[i] = loadImage(`img/${i}.jpg`);
    }

  }

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("window");
    background(220);
    // imageMode(CENTER);
    w = tow = images[0].width;
    h = toh = images[0].height;
    x = tox = w / 2;
    y = toy = h / 2;
  }


function windowResized() {
    wwidth = windowWidth
    resizeCanvas(windowWidth, windowHeight);
  }
  
function draw() {
    // scale(sf);
       // console.log(mouseX)
       console.log(hold)
       background(0)
       x = lerp(x, tox, .1);
       y = lerp(y, toy, .1);
       w = lerp(w, tow, .1); 
       h = lerp(h, toh, .1);
       wwidth = windowWidth
       colwidth = wwidth/ 86

       if (mouseIsPressed === true) {
        image(images[ipos], x-w/2, y-h/2, w, h);
      } else {
        for (var i = 0; i <= 85; ++i) {
          if (mouseX > colwidth*(i) && mouseX < colwidth*(i+1)){       
              image(images[i], x-w/2, y-h/2, w, h);
              ipos = i
              // image(images[i], 0, 0, width, height, 0, 0, images[i].width, images[i].height, CONTAIN, LEFT);
          }
       
      }
      }
   
       
       
  }

  function mouseMoved() {
     //tween/smooth motion

    
  }

  function mouseClicked() {
   
  }


function mouseDragged() {
    
    tox += mouseX-pmouseX;
    toy += mouseY-pmouseY;
  }

  function mousePressed() {
    // prevent default
    hold = 1
  }

  function mouseWheel(event) {
    var e = -event.delta;
    
  
    if (e>0) { //zoom in
      for (var i=0; i<e; i++) {
        if (tow>30*width) return; //max zoom
        tox -= zoom * (mouseX - tox);
        toy -= zoom * (mouseY - toy);
        tow *= zoom+1;
        toh *= zoom+1;
      }
    }
    
    if (e<0) { //zoom out
      for (var i=0; i<-e; i++) {
        if (tow<width) return; //min zoom
        tox += zoom/(zoom+1) * (mouseX - tox); 
        toy += zoom/(zoom+1) * (mouseY - toy);
        toh /= zoom+1;
        tow /= zoom+1;
      }
    }
  }




