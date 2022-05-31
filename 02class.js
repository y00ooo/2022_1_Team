class backgroundImage {
  constructor(scene) {
    this.scene = scene;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }

  display() {
    if (scene == this.scene) {
      imageMode(CORNER);
      image(this.image, 0, 0, 1920, 1080);
    }
  }
}

// class 상속?
class imageButton {
  constructor(scene, x, y, w, h) {
    this.scene = scene;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.clicked = 0;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }

  display() {
    if (scene == this.scene) {
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.w, this.h);
    }
  }

  click_nextScene(nextScene) {
    if (scene == this.scene) {
      if (
        mouseX >= this.x - this.w / 2 &&
        mouseX <= this.x + this.w / 2 &&
        mouseY >= this.y - this.h / 2 &&
        mouseY <= this.y + this.h / 2
      ) {
        scene = nextScene;
      }
    }
  }

  click_webcamOn() {
    if (scene == this.scene) {
      if (
        mouseX >= this.x - this.w / 2 &&
        mouseX <= this.x + this.w / 2 &&
        mouseY >= this.y - this.h / 2 &&
        mouseY <= this.y + this.h / 2
      ) {
        webcamOn = true;
        this.clicked++;
      }
    }
  }

  click_textOn() {
    if (scene == this.scene) {
      if (
        mouseX >= this.x - this.w / 2 &&
        mouseX <= this.x + this.w / 2 &&
        mouseY >= this.y - this.h / 2 &&
        mouseY <= this.y + this.h / 2
      ) {
        textOn = true;
      }
    }
  }
}

class webcam {
  constructor(scene, x, y, w, h) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  insertCapture() {
    this.capture = createCapture(VIDEO);
    this.capture.hide();
  }

  display() {
    if (scene == this.scene) {
      if (webcamOn) {
        image(this.capture, this.x, this.y, this.w, this.h);
        // 말피 뿔 합성
      }
    }
  }
}

class textBox {
  constructor() {
    this.x = 0;
    this.y = 880;
    this.w = 1920;
    this.h = 200;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }

  display() {
    if (textOn) {
      image(this.image, this.x, this.y, this.w, this.h);
      // rectMode(CORNER);
      // fill(220);
      // noStroke();
      // rect(this.x, this.y, this.w, this.h);
    }
  }
  clicked() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.w &&
      mouseY >= this.y &&
      mouseY <= this.y + this.h
    ) {
      text_index++;
      console.log(text_index);
      if (text_index >= 5) {
        scene++;
      }
    }
  }
}

class mark {
  constructor(stage_num) {
    this.stage_num = stage_num;
    this.stage_done = false;

    switch (this.stage_num) {
      case 0:
        this.x = 600;
        this.y = 850;
        break;
      case 1:
        this.x = 1000;
        this.y = 540;
        break;
      case 2:
        this.x = 1480;
        this.y = 740;
        break;
    }
  }
  display() {
    if (this.stage_done) {
      noFill();
    } else {
      noFill();
    }
    rectMode(CENTER);
    rect(this.x, this.y, 100, 100);
  }

  clicked() {
    if (stage == this.stage_num) {
      if (
        mouseX >= this.x - 50 &&
        mouseX <= this.x + 50 &&
        mouseY >= this.y - 50 &&
        mouseY <= this.y + 50
      ) {
        scene = 4 + this.stage_num;
        this.stage_done = true;
      }
    }
  }
}

class Key {
  constructor(stage_num) {
    this.stage_num = stage_num;
    this.stage_done = false;
  }
  display(x, y) {
    if (this.stage_done) {
      image(key_images[this.stage_num * 2], x, y, 100, 100);
    } else {
      image(key_images[this.stage_num * 2 + 1], x, y, 100, 100);
    }
  }
  set(){
    this.stage_done = true;
    
  }
}

class princeMap {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    switch (stage) {
      case 0:
        image(this.image, 160, 400, 300, 300);
        break;
      case 1:
        image(this.image, 450, 700, 300, 300);
        break;
      case 2:
        image(this.image, 850, 390, 300, 300);
        break;
      case 3:
        image(this.image, 1330, 590, 300, 300);
        break;
        
    }
  }
}

class gameintroTextBox {
  constructor(stage, w,h) {
    this.stage = stage;
    this.x = 980;
    this.y = 640;
    this.w = w;
    this.h = h;

    // this.text = introTexts[this.stage];
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (GI_clicked == false && cleartext_clicked == false) {
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.w, this.h);
      // rectMode(CENTER);
      // fill(0, 200);
      // noStroke();
      // rect(980, 640, 300, 300);
      // fill(0);
      // text(this.text, 980, 640, 300, 300);
    }
  }
  clicked() {
    if (
      mouseX >= this.x - this.w/2 &&
      mouseX <= this.x + this.w/2 &&
      mouseY >= this.y - this.h/2 &&
      mouseY <= this.y + this.h/2
    ) {
      GI_clicked = true;
    }
  }
}

class Thron {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.mouseovered = 0;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (this.mouseovered < 11) {
      imageMode(CORNER);
      image(this.image, this.x, this.y, this.w, this.h);
    } else if (this.mouseovered == 11) {
      throns_out++;
      this.mouseovered++;
    }
  }
  mouseOver() {
    if (GI_clicked) {
      if (this.mouseovered < 11) {
        if (
          mouseX >= this.x &&
          mouseX <= this.x + this.w &&
          mouseY >= this.y &&
          mouseY <= this.y + this.h
        ) {
          this.mouseovered++;
          this.x += random(-2, 2);
          this.y += random(-2, 2);
        }
      }
    }
  }
}

class magicHand {
  constructor() {
    this.scene = 4;
    this.stage = 0;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if(throns_out < throns_num){
      if (scene == this.scene && stage == this.stage) {
        image(this.image, mouseX, mouseY, 100, 100);
      }
    }
    
  }
}
class clearText {
  constructor() {
    this.stage = stage;
    // this.text = outroTexts[this.stage];
    this.x =  980;
    this.y = 640;
    this.w = 300;
    this.h = 300;
  }
  insertImage(path){
    this.image = loadImage(path);
  }

  display() {
    switch (this.stage) {
      case 0:
        if (throns_out >= throns_num && cleartext_clicked == false) {
          imageMode(CENTER);
          image(this.image, this.x, this.y, this.w, this.h);
          // rectMode(CENTER);
          // fill(0,200);
          // noStroke();
          // rect(980,640,300,300);
          
          // textSize(50);
          // textAlign(CENTER);
          // fill(255);
          // text("CLEAR", width / 2, height / 2);
          
          // textSize(25);
          // text(this.text, 980,640,300,300);
          
          // // 열쇠
          // keys[this.stage].set();
          // keys[this.stage].display(980,940);
        }
        break;
      case 1:
        break;
    }
  }
  clicked(){
    switch (this.stage){
      case 0:
        if(throns_out >= throns_num && cleartext_clicked == false){
          if(mouseX >= this.x - this.w/2 &&
          mouseX <= this.x + this.w/2 &&
          mouseY >= this.y - this.h/2 &&
          mouseY <= this.y + this.h/2){
          GI_clicked = false;
          cleartext_clicked = true;
          GO_clicked = false;
        }
        }
        
    }
  }
}

class gameoutroTextBox {
  constructor(stage, w,h) {
    this.stage = stage;
    this.x = 980;
    this.y = 640;
    this.w = w;
    this.h = h;

    this.keyx = 980;
    this.keyy = 740;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (GO_clicked == false && cleartext_clicked == true) {
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.w, this.h);
      // rectMode(CENTER);
      // fill(0, 200);
      // noStroke();
      // rect(980, 640, 300, 300);
      // fill(0);
      // text(this.text, 980, 640, 300, 300);
      
      // key
      image(key_images[this.stage * 2], this.keyx, this.keyy, 100, 100);
    }
  }
  clicked() {
    if (GO_clicked == false && cleartext_clicked == true){
      if (
        mouseX >= this.keyx - 50 &&
        mouseX <= this.keyx + 50 &&
        mouseY >= this.keyy - 50 &&
        mouseY <= this.keyy + 50
      ) {
        keys[this.stage].set();
        GO_clicked = true;
        scene = 3;
        stage++;
        cleartext_clicked = false;
        
      }
    }
    
  }
}