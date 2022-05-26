function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function keyPressed(){
  
  // ESC를 눌러 전체화면으로 플레이하세요
  if(keyCode == ESCAPE){
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
