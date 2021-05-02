 //The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	frameRate(10);
  rectMode(CENTER);

	}

//The draw function happens over and over again

function draw() {
  background(77, 198, 206); //blue background
  //circle
  stroke(52, 157, 40 ) // Green stroke
  strokeWeight(5);
  fill(255, 91, 112 ); // Red fill
  ellipse(width/3,height/6,56,49); // center of canvas, 20px dia
  background(77,198,206);
  rectMode(CENTER);
  translate(width / 7, height / 7);
  translate(p5.Vector.fromAngle(millis() / 99, 50));// Circling fast in the center
  ellipse(width/3,height/6,56,49);
  
  let step = frameCount % 10;// big ellispse to small elipse
  translate(50, 50);
  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  stroke(239, 65, 253 )// light purple stroke
  fill(250, 183, 72 ); // Orange fill
  ellipse(mouseX,mouseY,60,60);

 
  


 }
   
   
   


 