class backgroundImage {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    imageMode(CORNER);
    image(this.image, 0, 0, 1920, 1080);
  }
}

class titleStartButton {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }

  display() {
    this.x = 980;
    this.y = 880;
    this.w = 420;
    this.h = 330;

    imageMode(CENTER);
    image(this.image, this.x, this.y, this.w, this.h);
  }

  click() {
    if (
      mouseX >= this.x - this.w / 2 &&
      mouseX <= this.x + this.w / 2 &&
      mouseY >= this.y - this.h / 2 &&
      mouseY <= this.y + this.h / 2
    ) {
      scene++;
      textboxOn = true;
    }
  }
}

// scene 1
class textBox {
  constructor() {
    // textbox 위치
    this.x = 960;
    this.w = 1052;
    this.h = (this.w / 1920) * 479;
    this.y = 1080 - this.h / 2;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (textboxOn & (texts[scene] != 0)) {
      this.text = texts[scene][text_index];
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.w, this.h);

      textLeading(35);
      textAlign(LEFT);
      textSize(32);
      fill(0);
      textStyle(NORMAL);
      textFont(font1);
      rectMode(CORNER);
      stroke(0);
      strokeWeight(0);
      text(this.text.text, 545, 920, 840, this.h);

      textAlign(CENTER);
      textSize(37);
      fill(255);
      textStyle(NORMAL);
      textFont(font1);
      rectMode(CORNER);
      stroke(0);
      strokeWeight(0);
      text(this.text.text_who, 250, 850, this.w, this.h);
    }
  }
  click() {
    if (textboxOn & (texts[scene] != 0)) {
      if (
        mouseX >= this.x - this.w / 2 &&
        mouseX <= this.x + this.w / 2 &&
        mouseY >= this.y - this.h / 2 &&
        mouseY <= this.y + this.h / 2
      ) {
        // console.log("textclicked");
        switch (this.text.click_reaction) {
          case "next":
            text_index++;
            // console.log("text next");
            break;
          case "textoff":
            if (text_index == texts[scene].length - 1) {
              console.log("textoff");
              scene++;
              text_index = 0;
              textboxOn = false;
              if (scene == 19) {
                hornOn = true;
              }
            } else {
              textboxOn = false;
              text_index++;
              console.log("textbox clicked " + text_index);
              if (scene == 17 || scene == 24) {
                selectionOn = true;
              }
              if (scene == 16 || scene == 23) {
                selectionOn = false;
                console.log("special");
                textboxOn = true;
                text_index = 0;
                scene++;
              }
            }
            break;
          case "crowon":
            crowOn = true;
            text_index++;
            if (scene == 15 || scene == 17 || scene == 24) {
              textboxOn = true;
              if (scene == 17 || scene == 24) {
                princessOn = false;
              }
            } else {
              textboxOn = false;
            }

            break;
          case "princeon":
            console.log("textclicked");
            princeOn = true;
            text_index++;
            break;
          case "princesson":
            console.log("textclicked");
            // scene 24만 고려
            princeOn = false;
            princessOn = true;
            text_index++;
            break;
        }
      }
    }
  }
}

class Book {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    this.x = 960;
    this.y = 480;
    this.w = 550;
    this.h = 800;

    if (bookOn) {
      imageMode(CENTER);
      image(this.image, this.x, this.y + 100, this.w, this.h);
    }
  }
  click() {
    if (bookOn) {
      if (
        mouseX >= this.x - this.w / 2 &&
        mouseX <= this.x + this.w / 2 &&
        mouseY >= this.y - this.h / 2 &&
        mouseY <= this.y + this.h / 2
      ) {
        if (scene == 5 && text_index == 3 && textboxOn == false) {
          scene5_book_clicked++;
          if (scene5_book_clicked >= 2) {
            webcamOn = true;
          }
        }
        if (scene == 19 && text_index == 2) {
          webcamOn = true;
        }
      }
    }
  }
}

class EndingBook {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    this.x = 960;
    this.y = 540;
    this.w = 1920;
    this.h = 1080;

    if (bookOn) {
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.w, this.h);
    }
  }
  click() {
    if (bookOn) {
      if (
        mouseX >= 960 - 275 &&
        mouseX <= 960 + 275 &&
        mouseY >= 540 - 400 &&
        mouseY <= 540 + 400
      ) {
        if (scene == 5 && text_index == 3 && textboxOn == false) {
          scene5_book_clicked++;
          if (scene5_book_clicked >= 2) {
            webcamOn = true;
          }
        }
        if (scene == 19 && text_index == 2) {
          console.log("a");
          webcamOn = true;
        }
      }
    }
  }
}
class webCam {
  constructor() {}
  insertCapture() {
    this.capture = createCapture(VIDEO);
    this.capture.hide();
    this.webcamclicked = 0;
  }
  display(x, y, w) {
    this.x = x;
    this.y = y + 36;
    this.w = w;
    this.h = (this.capture.height / this.capture.width) * this.w;
    if (webcamOn) {
      push();
      translate(this.x + this.w, this.y);
      scale(-1, 1);
      imageMode(CORNER);
      image(this.capture, 0, 0, this.w, this.h);
      pop();
    }
  }
  click() {
    if (webcamOn) {
      if (
        mouseX >= this.x &&
        mouseX <= this.x + this.w &&
        mouseY >= this.y &&
        mouseY <= this.y + this.h
      ) {
        if (scene == 5) {
          hornOn = true;
        }
        if (scene == 19) {
          this.webcamclicked++;

          // 여기도 똑같은 문제
          switch (this.webcamclicked) {
            case 2:
              hornOn = false;
              break;
            case 3:
              scene++;
              break;
          }
        } else {
          // 이거 왜 이렇게 한건지 기억 안남
          textboxOn = true;
        }
      }
    }
  }
}

class Horn {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (webcamOn && hornOn) {
      push();
      translate(webcam.x + webcam.w, webcam.y);
      scale(-1, 1);
      scale(webcam.w / webcam.capture.width, webcam.h / webcam.capture.height);
      fill(255);
      //   ellipse(LearX, LearY, 10, 10);
      //   ellipse(RearX, RearY, 10, 10);
      //   ellipse(LeyeX, LeyeY, 10, 10);
      //   rect();
      imageMode(CENTER);
      let xpoint = (LearX + RearX) / 2;
      let ypoint = (LearY + RearY) / 2;
      // 뿔 좌표 조정하는 거 어려움 ㅠㅠ
      // 얼굴 따라 방향 바뀌는 거?
      image(
        this.image,
        xpoint - 30,
        ypoint - 90,
        10 * dist(LearX, LearY, RearX, RearY),
        20 * dist(LeyeX, LeyeY, xpoint, LearY)
      );
      pop();
    }
  }
}

function gotPoses(poses) {
  if (poses.length > 0) {
    // let nX = poses[0].pose.keypoints[0].position.x;
    // let nY = poses[0].pose.keypoints[0].position.y;
    // let eX = poses[0].pose.keypoints[1].position.x;
    // let eY = poses[0].pose.keypoints[1].position.y;
    // noseX = lerp(noseX, nX, 0.5);
    // noseY = lerp(noseY, nY, 0.5);
    // eyelX = lerp(eyelX, eX, 0.5);
    // eyelY = lerp(eyelY, eY, 0.5);
    let learX = poses[0].pose.keypoints[3].position.x;
    let learY = poses[0].pose.keypoints[3].position.y;
    let rearX = poses[0].pose.keypoints[4].position.x;
    let rearY = poses[0].pose.keypoints[4].position.y;
    let leyeX = poses[0].pose.keypoints[1].position.x;
    let leyeY = poses[0].pose.keypoints[1].position.y;

    LearX = lerp(LearX, learX, 0.5);
    LearY = lerp(LearY, learY, 0.5);
    RearX = lerp(RearX, rearX, 0.5);
    RearY = lerp(RearY, rearY, 0.5);
    LeyeX = lerp(LeyeX, leyeX, 0.5);
    LeyeY = lerp(LeyeY, leyeY, 0.5);
  }
}
function modelReady() {
  console.log("model ready");
}

class Crow {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    if (crowOn) {
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.w, this.h);
    }
  }

  click() {
    if (crowOn) {
      if (
        mouseX >= this.x - this.w / 2 &&
        mouseX <= this.x + this.w / 2 &&
        mouseY >= this.y - this.h / 2 &&
        mouseY <= this.y + this.h / 2
      ) {
        if (scene == 7) {
          // 일단 scene 7
          textboxOn = true;
        }
      }
    }
  }
}

class Map {
  constructor() {}
  display() {
    imageMode(CORNER);
    image(map_images[stage], 0, 0, 1920, 1080);
  }
}
class Mark {
  constructor(stage) {
    this.stage = stage;
    // this.stage_done = false;

    switch (this.stage) {
      case 0:
        this.x = 230 + 190;
        this.y = 640 + 36;
        break;
      case 1:
        this.x = 645 + 190;
        this.y = 360 + 36;
        break;
      case 2:
        this.x = 1040 + 190;
        this.y = 730 + 36;
        break;
      case 3:
        this.x = 1367 + 190;
        this.y = 360 + 36;
        break;
    }
  }
  display() {
    // 빈깡통이라 나중에 필요없으면 빼도 될듯
    noFill();
    noStroke();
    // fill(0);
    rectMode(CENTER);
    rect(this.x, this.y, 380, 72);

    // fill(255, 100);
    ellipse(this.x, this.y, 380, 380);
  }
  click() {
    if (stage == this.stage) {
      if (dist(mouseX, mouseY, this.x, this.y) <= 190) {
        scene = 9 + this.stage;

        if (scene == 12) {
          textboxOn = true;
        }
        //   this.stage_done = true;
      }
    }
  }
}
class Key {
  constructor(stage) {
    this.stage = stage;
    this.stage_done = false;
  }
  display(x, y) {
    if (this.stage_done) {
      image(key_images[this.stage * 2], x, y, 100, 100);
    } else {
      image(key_images[this.stage * 2 + 1], x, y, 100, 100);
    }
  }
  set() {
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
        image(this.image, 130, 230, 250, 150);
        break;
      case 1:
        image(this.image, 300, 810, 250, 150);
        break;
      case 2:
        image(this.image, 740, 540, 250, 150);
        break;
      case 3:
        image(this.image, 1140, 820, 250, 150);
        break;
    }
  }
}

class Thron {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.mouseovered = 0;
    this.thron_done = 30;
  }
  insertImage(path) {
    this.image = loadImage(path);
    this.image.resize(300, 0);
  }
  display() {
    if (this.mouseovered < this.thron_done) {
      imageMode(CORNER);
      image(this.image, this.x, this.y);
    } else if (this.mouseovered == this.thron_done) {
      throns_out++;
      this.mouseovered++;
    }
  }
  mouseOver() {
    if (GI_clicked) {
      if (this.mouseovered < this.thron_done) {
        if (
          mouseX >= this.x &&
          mouseX <= this.x + this.image.width &&
          mouseY >= this.y &&
          mouseY <= this.y + this.image.height
        ) {
          this.mouseovered++;
          this.x += random(-10, 10);
          this.y += random(-10, 10);
        }
      }
    }
  }
  // 추후에 posenet에서 손 인식해서 하는 걸로 바꾸기
}

class gameintroTextBox {
  constructor(stage, w, h) {
    this.stage = stage;
    this.x = 980;
    this.y = 550;
    this.w = w;
    this.h = h;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (GI_clicked == false && cleartext_clicked == false) {
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.w, this.h);

      this.text = gi_texts[this.stage];

      textLeading(90);
      textSize(32);
      textAlign(CENTER);
      fill(255, 201, 74);
      textStyle(NORMAL);
      textFont(font1);
      rectMode(CORNER);
      stroke(0);

      strokeWeight(0);
      text(this.text[0], 980, 425);

      textStyle(ITALIC);
      textFont(font1);
      rectMode(CORNER);
      fill(255);
      stroke(0);
      strokeWeight(0);
      text(this.text[1], 980, 550 + 230);
    }
  }
  clicked() {
    if (GI_clicked == false && cleartext_clicked == false) {
      if (
        mouseX >= this.x - this.w / 2 &&
        mouseX <= this.x + this.w / 2 &&
        mouseY >= this.y - this.h / 2 &&
        mouseY <= this.y + this.h / 2
      ) {
        GI_clicked = true;
      }
    }
  }
}
class magicHand {
  constructor() {
    this.scene = 9;
    this.stage = 0;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (throns_out < throns_num && GI_clicked == true) {
      if (scene == this.scene && stage == this.stage) {
        noCursor();
        imageMode(CENTER);
        image(
          this.image,
          mouseX,
          mouseY,
          300,
          (this.image.height / this.image.width) * 300
        );
      }
    } else {
      cursor();
    }
  }
}

class clearText {
  constructor() {
    // this.text = outroTexts[this.stage];
    this.x = 980;
    this.y = 580;
    this.w = 800;
    this.h = 400;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }

  display() {
    switch (stage) {
      case 0:
        if (throns_out >= throns_num && cleartext_clicked == false) {
          imageMode(CENTER);
          image(this.image, this.x, this.y, this.w, this.h);
        }
        break;
      case 1:
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.w, this.h);
        break;
      case 2:
        if (dragon_done == true && cleartext_clicked == false) {
          imageMode(CENTER);
          image(this.image, this.x, this.y, this.w, this.h);
        }
        break;
    }
  }
  clicked() {
    switch (stage) {
      case 0:
        if (throns_out >= throns_num && cleartext_clicked == false) {
          if (
            mouseX >= this.x - this.w / 2 &&
            mouseX <= this.x + this.w / 2 &&
            mouseY >= this.y - this.h / 2 &&
            mouseY <= this.y + this.h / 2
          ) {
            GI_clicked = false;
            cleartext_clicked = true;
            GO_clicked = false;
          }
        }
        break;
      case 1:
        if (snake_done == true) {
          if (
            mouseX >= this.x - this.w / 2 &&
            mouseX <= this.x + this.w / 2 &&
            mouseY >= this.y - this.h / 2 &&
            mouseY <= this.y + this.h / 2
          ) {
            GI_clicked = false;
            cleartext_clicked = true;
            GO_clicked = false;
          }
        }
        break;
      case 2:
        if (dragon_done == true) {
          if (
            mouseX >= this.x - this.w / 2 &&
            mouseX <= this.x + this.w / 2 &&
            mouseY >= this.y - this.h / 2 &&
            mouseY <= this.y + this.h / 2
          ) {
            GI_clicked = false;
            cleartext_clicked = true;
            GO_clicked = false;
          }
        }
        break;
    }
  }
}

class gameoutroTextBox {
  constructor(stage, w, h) {
    this.stage = stage;
    this.x = 980;
    this.y = 580;
    this.w = w;
    this.h = h;

    this.keyx = 980;
    this.keyy = 880;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (GO_clicked == false && cleartext_clicked == true) {
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.w, this.h);

      this.text = go_texts[this.stage];
      textSize(32);
      textAlign(CENTER);
      fill(255, 201, 74);
      textStyle(NORMAL);
      textFont(font1);
      rectMode(CORNER);
      stroke(0);
      strokeWeight(1);
      text(this.text[0], 190, 500, this.w, this.h);

      // key
      imageMode(CENTER);
      image(key_images[this.stage * 2], this.keyx, this.keyy, 300, 300);
    }
  }
  clicked() {
    if (GO_clicked == false && cleartext_clicked == true) {
      if (
        mouseX >= this.keyx - 150 &&
        mouseX <= this.keyx + 150 &&
        mouseY >= this.keyy - 150 &&
        mouseY <= this.keyy + 150
      ) {
        keys[this.stage].set();

        GO_clicked = true;
        scene = 8;
        stage++;
        cleartext_clicked = false;
      }
    }
  }
}
class scoreText {
  constructor() {}
  display(x, y) {
    this.text = "Rocks " + scoreElem + " / 5";
    textAlign(CENTER);
    textSize(64);
    stroke(0);
    strokeWeight(1);
    textStyle(NORMAL);
    fill(255);
    textFont(font1);
    rectMode(CORNER);
    text(this.text, x, y);
  }
}

function updateFruitCoordinates() {
  xFruit = floor(random(10, (1920 - 100) / 50)) * 50;
  yFruit = floor(random(10, (1080 - 100) / 50)) * 50;
}
function updateSnakeCoordinates() {
  for (let i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case "right":
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case "up":
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case "left":
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case "down":
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}

function checkGameStatus() {
  if (
    xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 ||
    checkSnakeCollision()
  ) {
    if (scoreElem > 0) {
      scoreElem--;
    }

    for (let i = 0; i < numSegments; i++) {
      xCor[i] = xStart;
      yCor[i] = yStart;
      direction = "right";
    }

    updateFruitCoordinates();
  }
}
function checkSnakeCollision() {
  const snakeHeadX = xCor[xCor.length - 1];
  const snakeHeadY = yCor[yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}

function checkForFruit() {
  image(rock_image, xFruit, yFruit, 50, 50);
  // stroke(0);
  // strokeWeight(25);
  // point(xFruit, yFruit);
  if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
    scoreElem++;
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    updateFruitCoordinates();
  }
}

class Dragon {
  constructor() {
    this.face = 0;
  }
  display(x, y, w, h) {
    this.image = dragon_images[this.face];

    imageMode(CENTER);
    image(this.image, x, y, w, h);
  }
  set(face_num) {
    this.face = face_num;
  }
  get() {
    return this.face;
  }
}
class DragonTextBox {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display(x, y, w, h) {
    imageMode(CENTER);
    image(this.image, x + 43, y, 550, 200);

    this.text = dragon_texts[dragon.get()];
    textSize(30);
    textAlign(CENTER);
    fill(255);
    textStyle(NORMAL);
    textFont(font1);
    rectMode(CORNER);
    stroke(0);
    strokeWeight(0);
    text(this.text, x - 198, y - 32, 500, h);
  }
}

class MenuBox {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display(x, y) {
    let h = (this.image.height / this.image.width) * 800;
    imageMode(CORNER);
    image(this.image, x - 47, y, 850, h + 50);
  }
}

class FoodButton {
  constructor(food_num) {
    this.food_num = food_num;
    this.stage = 2;
  }
  display(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h =
      (food_images[this.food_num].height / food_images[this.food_num].width) *
      210;
    imageMode(CORNER);
    image(food_images[this.food_num], this.x - 50, this.y, this.w, this.h);
  }
  clicked() {
    if (stage == this.stage && GI_clicked == true && dragon_done == false) {
      if (
        mouseX >= this.x &&
        mouseX <= this.x + this.w &&
        mouseY >= this.y &&
        mouseY <= this.y + this.h
      ) {
        if (this.food_num == right_food[dragon_eat]) {
          dragon_eat++;
          dragon.set(dragon_eat);
          console.log("먹음" + dragon_eat);
          dragon_hate = false;
        } else {
          // 잘못 줬을 때 반응
          dragon_hate = true;
          if (dragon_eat >= 1) {
            dragon_eat--;
            dragon.set(dragon_eat);
            console.log("뱉음" + dragon_eat);
          }
        }
        if (dragon_eat >= 3) {
          dragon_done = true;
          console.log("다 먹음");
        }
      }
    }
  }
}
class Lock {
  constructor() {
    this.x = 960;
    this.y = 540;
    this.w = 100;
    this.h = 100;
  }
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.w, this.h);
  }
  click() {
    if (
      mouseX >= this.x - this.w / 2 &&
      mouseX <= this.x + this.w / 2 &&
      mouseY >= this.y - this.h / 2 &&
      mouseY <= this.y + this.h / 2
    ) {
      if (textboxOn == false) {
        scene++;
        text_index = 0;
        textboxOn = true;
      }
    }
  }
}

class keyCursor {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    noCursor();
    imageMode(CENTER);
    image(this.image, mouseX, mouseY, 300, 100);
  }
}

class sleepPrincess {
  constructor() {}
  display() {
    this.image = sleepprincess_images[sleep_stage];
    imageMode(CENTER);
    image(this.image, 960, 540);
  }
}
class Princess {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (princessOn) {
      imageMode(CENTER);
      image(this.image, 960, 540);
    }
  }
}

class Clap {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    imageMode(CENTER);
    image(this.image, 1680, mic_height - 75, 150, 150);
  }
}

function checkmic() {
  let vol = mic.getLevel();
  console.log("get mic level");
  // test 용
  fill(127);
  stroke(0);
  // 마이크 소리의 볼륨에 따라 떠있는 높이가 변하는 타원 그리기
  mic_height = map(vol, 0, 1, 1080, 0);

  if (mic_height <= 550 && mic_height >= 350) {
    mic_overed++;
    console.log(mic_overed);
  }

  if (mic_overed == 5) {
    sleep_stage = 1;
  } else if (mic_overed == 15) {
    sleep_stage = 2;
  } else if (mic_overed == 25) {
    sleep_stage = 3;
    textboxOn = true;
  } else {
    // pass
  }
}
class selectBox {
  constructor(selection) {
    this.selection = selection;
    if (this.selection == 0) {
      this.x = 450;
      this.y = 330;
    } else {
      this.x = 450;
      this.y = 770;
    }
  }
  insertImage(path) {
    this.image = loadImage(path);
  }

  display() {
    if (selectionOn) {
      // console.log("selectionOn은" + selectionOn);
      imageMode(CENTER);
      image(this.image, this.x, this.y, 600, 300);
    }
  }
  click() {
    if (selectionOn) {
      if (
        mouseX >= this.x - 300 &&
        mouseX <= this.x + 300 &&
        mouseY >= this.y - 150 &&
        mouseY <= this.y + 150
      ) {
        if (this.selection == 0) {
          scene = 18;
        } else {
          scene = 23;
        }
        console.log(this.selection);
        selectionOn == false;
        text_index = 0;
        crowOn = false;
        textboxOn = true;
      }
    }
  }
}

class Prince {
  constructor() {}
  insertImage(path) {
    this.image = loadImage(path);
  }
  display() {
    if (princeOn) {
      imageMode(CENTER);
      image(this.image, 960, 540);
    }
  }
}
