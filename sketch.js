function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  
  noStroke();
  fill(255);
  textSize(20)
  text("I thought of gifting you an automatic watch",50,430);
  text("But I didn't have enogh money",50,460)
  text("So I thought of making this clock for you ",50,490)
  text("Which on screen will always remind you ",50,520)
  text("that I grew and made a coded watch just for you",50,550)
  
  translate(200,200);
  rotate(-90);
  
  let hr = hour();
  let min = minute();
  let sec = second();
  
  stroke(255,100,150);
  strokeWeight(8)
  noFill();
  let secondAngle = map(sec,0,60,0,360)
  arc(0,0,300,300,0,secondAngle);
  
 
  stroke(150,100,255)
   let minuteAngle = map(min,0,60,0,360)
  arc(0,0,280,280,0,minuteAngle);

  stroke(150,255,100);
   let hourAngle = map(hr  % 12,0,12,0,360)
  arc(0,0,260,260,0,hourAngle);
  
  // stroke(255)
  // strokeWeight(4);
  // noFill();
  // ellipse(200,200,300,300);
  
   push();
  rotate(secondAngle);
  stroke(255,100,150);
  line(0,0,115,0);
  pop();
  
   push();
  rotate(minuteAngle);
  stroke(150,100,255);
  line(0,0,95,0);
  pop();
  
  
   push();
  rotate(hourAngle);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();
  
 stroke(255);
  point(0,0);
  
  // fill(255);
  // noStroke();
  // text(hr + ':' + min + ':' + sec,10,200);
  
  
}















