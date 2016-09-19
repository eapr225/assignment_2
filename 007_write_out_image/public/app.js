
var mr_dragon, lazy_dragon; //these are global variables

function preload() {
  mr_dragon = loadImage("./circle.png");
  lazy_dragon = loadImage("./circle3.png");

}

  function setup() {
    createCanvas(1000,1000);
    background(222,178,136,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

    for(var y_counter=0;y_counter<9;y_counter=y_counter+1){
      for(var counter=0;counter<9;counter=counter+1){
        if(y_counter%2==0){
        push();
        translate(50+counter*100,-500+y_counter*200);
        rotate(radians(45));
          image(mr_dragon,counter*84,0,150,150);
          translate();
          pop();
        }
        else{
        push();
        translate(50+counter*100,-500+y_counter*200);
        rotate(radians(45));
          image(lazy_dragon,counter*84,0,150,150);
          translate();
          pop();
        }
      }
}
  }
