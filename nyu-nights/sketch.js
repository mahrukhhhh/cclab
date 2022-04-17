function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("my-container");
   frameRate(32);
}

function draw() {
  background(148, 131, 114);

  //mat
  fill(106, 96, 73);
  noStroke();
  beginShape();
  vertex(82, 126); //tl
  vertex(192, 210); //bl
  vertex(260, 207); //br
  vertex(230, 126); //tr
  endShape(CLOSE);

  //wall
  fill(94, 67, 40);
  noStroke();
  rect(0, 0, 400, 150);

  //wall shadow
  fill(61, 38, 19);
  noStroke();
  rect(0, 0, 100, 150);

  //wall shadow 2
  noStroke();
  fill(61, 38, 19);
  arc(100, 40, 50, 30, PI * 1.3, PI * 2.5);

  //wall shadow laptop
  noStroke();
  fill(61, 38, 19);
  rect(77, 93, 100, 100);
  //shadow wall below table
  fill(35, 10, 2);
  noStroke();
  rect(0, 370, 400, 50);

  //table corner width
  fill(73, 47, 28);
  noStroke();
  rect(0, 320, 400, 50);

  //laptopframe
  fill(10);
  beginShape();
  vertex(38, 100); //tl
  vertex(43, 196);
  vertex(45, 200);
  vertex(49, 205);
  vertex(190, 195); //br
  vertex(195, 104); //tr
  endShape(CLOSE);

  //purple screen
  fill(45, 65, 216);
  beginShape();
  vertex(48, 110); //tl
  vertex(54, 190); //bl
  vertex(180, 186); //br
  vertex(185, 113); //tr
  endShape(CLOSE);

  //stickynote top
  fill(76, 152, 255);
  beginShape();
  vertex(82, 126); //tl
  vertex(85, 155); //bl
  vertex(103, 154); //br
  vertex(100, 126); //tr
  endShape(CLOSE);

  //stickynote bottom
  fill(76, 152, 255);
  beginShape();
  vertex(86, 160); //tl
  vertex(88.5, 184.5); //bl
  vertex(106, 183.5); //br
  vertex(103, 159); //tr
  endShape(CLOSE);

  //sticky left
  fill(117, 175, 255);
  beginShape();
  vertex(62, 141); //tl
  vertex(64, 154); //bl
  vertex(79, 154); //br
  vertex(77, 141); //tr
  endShape(CLOSE);

  //sticky right
  fill(117, 175, 255);
  beginShape();
  vertex(65, 160); //tl <^
  vertex(67, 174); //bl <v
  vertex(81, 174); //br >v
  vertex(79, 160); //tr >^
  endShape(CLOSE);

  //laptopkeyboard shadow
  fill(75);
  beginShape();
  vertex(54, 200);
  vertex(190, 195);
  vertex(211, 268);
  vertex(210, 270);
  vertex(47, 276);
  vertex(45, 274);
  endShape(CLOSE);

  //laptop base
  fill(100);
  beginShape();
  vertex(45, 200); //tl
  vertex(190, 195); //tr
  vertex(210, 265); //br
  vertex(45, 271); //bl
  endShape(CLOSE);

  //laptop keyboard
  fill(10);
  beginShape();
  vertex(55, 205); //tl
  vertex(182, 200); //tr
  vertex(193, 242); //br
  vertex(55, 248); //bl
  endShape(CLOSE);

  //dent on base
  fill(60);
  beginShape();
  vertex(149, 267); //tr
  vertex(149, 272); //br <v
  vertex(117, 273); //bl >v
  vertex(116, 269); //tl >^
  endShape(CLOSE);

  //mousepad
  fill(75);
  beginShape();
  vertex(148, 244); //tr
  vertex(155, 267); //br
  vertex(109, 269); //bl
  vertex(104, 246); //tl
  endShape(CLOSE);

  //neck
  noFill();
  stroke(112, 103, 85);
  strokeWeight(2);
  curve(500, 200, 280, 75, 210, 165, 260, 100, 90, 206, 69, 0);

  //neck base
  noStroke();
  fill(103, 82, 60);
  rect(209, 165, 5, 5);

  //light
  fill(254, 255, 215);
  ellipse(280, 80, 40, 10);

  //lamp head
  noStroke();
  fill(77, 37, 6);
  arc(279, 79, 50, 30, 1 * PI, 0);

  //lampcutter
  noStroke();
  fill(94, 67, 40);
  rect(251, 75, 5, 5);

  //lap base shadow
  noStroke();
  fill(52, 41, 26);
  ellipse(218, 190, 40, 30);

  //lamp midshadow
  fill(80, 61, 45);
  ellipse(219, 186, 40, 30);

  //lamp base
  fill(171, 145, 115);
  ellipse(220, 183, 38, 28);

  //lamp button shadow
  fill(95, 69, 38);
  ellipse(223, 176, 7, 5);

  //lamp button
  fill(170, 146, 113);
  ellipse(224, 174, 6, 4);

  //headphones shadow
  fill(75);
  beginShape();
  vertex(225, 195); //tr
  vertex(232, 218);
  vertex(233, 220); //br <v
  vertex(232, 224);
  vertex(204, 230);
  vertex(200, 227); //bl >v
  vertex(198, 218);
  vertex(196, 201); //tl >^
  endShape(CLOSE);

  //headphones
  fill(170);
  beginShape();
  vertex(225, 195); //tr
  vertex(232, 218);
  vertex(230, 220); //br <v
  vertex(228, 222);
  vertex(209, 226);
  vertex(205, 225); //bl >v
  vertex(203, 223);
  vertex(200, 200); //tl >^
  endShape(CLOSE);

  //line of headphone
  strokeWeight(1);
  stroke(100);
  line(201, 209, 228, 204);

  //charger port
  fill(50);
  noStroke();
  ellipse(219, 225, 9, 3);

  //book shadow
  fill(118, 85, 57);
  beginShape();
  vertex(205, 225);
  vertex(205, 230); //tl
  vertex(230, 310); //bl
  vertex(332, 300); //br
  vertex(275, 217); //tr
  endShape(CLOSE);

  //page lin3
  stroke(98, 65, 37);
  strokeWeight(3);
  line(231, 308, 235, 299);

  //book
  noStroke();
  fill(45, 56, 103);
  beginShape();
  vertex(209, 226); //tl
  vertex(235, 303); //bl
  vertex(328, 295); //br
  vertex(275, 217); //tr
  endShape(CLOSE);

  //shadow
  fill(40, 25, 13, 120);
  rect(0, 0, 400, 400);

  //light shade
  fill(254, 255, 215, 50);
  beginShape();
  vertex(260, 82); //tl
  vertex(199, 320); //bl
  vertex(355, 320); //br
  vertex(295, 84); //tr
  vertex(280, 85); //m
  endShape(CLOSE);

  //laptopshade
  fill(45, 65, 216, 70);
  beginShape();
  vertex(48, 110); //tl
  vertex(185, 113); //tr
  vertex(230, 310); //br
  vertex(65, 320); //bl
  endShape(CLOSE);

  //stickynote top
  fill(76, 152, 255);
  beginShape();
  vertex(82, 126); //tl
  vertex(85, 155); //bl
  vertex(103, 154); //br
  vertex(100, 126); //tr
  endShape(CLOSE);

  //stickynote bottom
  fill(76, 152, 255);
  beginShape();
  vertex(86, 160); //tl
  vertex(88.5, 184.5); //bl
  vertex(106, 183.5); //br
  vertex(103, 159); //tr
  endShape(CLOSE);

  //sticky left
  fill(117, 175, 255);
  beginShape();
  vertex(62, 141); //tl
  vertex(64, 154); //bl
  vertex(79, 154); //br
  vertex(77, 141); //tr
  endShape(CLOSE);

  //sticky right
  fill(117, 175, 255);
  beginShape();
  vertex(65, 160); //tl <^
  vertex(67, 174); //bl <v
  vertex(81, 174); //br >v
  vertex(79, 160); //tr >^
  endShape(CLOSE);

  noStroke()
  fill(254, 255, 215, 100)
  circle(mouseX, mouseY,75,75);
  print(pmouseX + ' -> ' + mouseX);
}
