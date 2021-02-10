var formVar, database, user, pCount = 0;

function setup() {
  createCanvas(1000, 1000);
  database = firebase.database();
  formVar = new form();
  user = new userData();
  user.getCount();
}

function draw() {
  background(255, 255, 255);
  formVar.display();
  drawSprites();
}