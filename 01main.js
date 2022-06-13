function setup() {
  createCanvas(1920, 1080);
  webcam.insertCapture();
  poseNet = ml5.poseNet(webcam.capture, modelReady);
  poseNet.on("pose", gotPoses);
  // stage 2
  updateFruitCoordinates();
  for (let i = 0; i < numSegments; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }

  // scene 16
  mic = new p5.AudioIn();
  mic.start();

  // 열쇠 애니메이션 자리는 여기!
  key_video = createVideo(["assets/key_ani.mp4"]);
  key_video.hide();
}

function draw() {
  // console.log("X:" + mouseX + "Y:" + mouseY);
  console.log("scene" + scene + "text_index" + text_index);
  // console.log(selectionOn);
  switch (scene) {
    case 0:
      bI_0.display();
      titlestartbutton.display();
      //titlesong.play();
      break;
    case 1:
      background(0);
      textbox.display();
      //titlesong.stop();
      break;
    case 2:
      bI_2.display();
      break;
    case 3:
      bI_3.display();
      break;
    case 4:
      scene4_now_time = millis();
      // console.log(scene4_now_time);
      if (scene4_clicked < 4) {
        // console.log(scene4_clicked + "bi4");
        bI_4.display();
      } else {
        // console.log("흐ㅁ");
        if (scene4_now_time <= scene4_lastclick_time + 3000) {
          scene4_delta_time = scene4_now_time - scene4_lastclick_time;
          // console.log("bb");
          bI_4.display();
          rectMode(CORNER);
          fill(255, (scene4_delta_time / 3000) * 255);
          // console.log(scene4_delta_time);
          // console.log((scene4_delta_time / 3000) * 255);
          rect(0, 0, 1920, 1080);
        } else {
          scene++;
          textboxOn = true;
          scene4_last_time = millis();
          // console.log(scene4_last_time);
        }
      }
      break;
    case 5:
      scene5_now_time = millis();
      // console.log(scene5_now_time);
      scene5_delta_time = scene5_now_time - scene4_last_time;
      // console.log(scene5_delta_time);

      background(0);
      book.display();
      webcam.display(825, 595, 260);
      horn.display();
      textbox.display();
      if (scene5_delta_time <= 3000) {
        // console.log("gma");
        rectMode(CORNER);
        fill(255, 255 - (scene5_delta_time / 3000) * 255);
        // console.log(255 - (scene5_delta_time / 3000) * 255);
        rect(0, 0, 1920, 1080);
      }
      break;
    case 6:
      bI_6.display();
      break;
    case 7:
      bI_7.display();
      crow.display(1400, 570, 1100, 700);
      textbox.display();
      break;
    case 8:
      worldmap.display();
      mark1.display();
      mark2.display();
      mark3.display();
      mark4.display();
      key1.display(145, 140);
      key2.display(245, 140);
      key3.display(345, 140);
      princemap.display(230, 600);
      break;
    case 9:
      // stage 1
      bI_9.display();
      key1.display(90, 90);
      key2.display(190, 90);
      key3.display(290, 90);

      for (let thron of throns) {
        thron.display();
        thron.mouseOver();
      }
      // game intro text box & text
      GITB_0.display();
      // magic hand image
      magichand.display();

      // clear text
      cleartext.display();
      GOTB_0.display();

      break;
    case 10:
      //stage 2

      if (
        GI_clicked == false &&
        cleartext_clicked == false &&
        snake_done == false
      ) {
        // background image
        bI_10.display();
        // key UI
        key1.display(90, 90);
        key2.display(190, 90);
        key3.display(290, 90);
        // game intro text box & text
        GITB_1.display();
      }

      // snakegame
      if (
        GI_clicked == true &&
        cleartext_clicked == false &&
        snake_done == false
      ) {
        if (frameCount % snake_speed == 0) {
          // background image
          bI_10.display();
          // key UI
          key1.display(90, 90);
          key2.display(190, 90);
          key3.display(290, 90);
          scoretext.display(1650, 100);
          for (let i = 0; i < numSegments - 1; i++) {
            // stroke(31, 28, 66);

            stroke(127, 205, 173, (i / numSegments) * 255);
            strokeWeight((i / numSegments) * 50 + 20);
            line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
          }
          imageMode(CENTER);
          image(
            head_image,
            xCor[xCor.length - 1],
            yCor[yCor.length - 1],
            50,
            50
          );

          updateSnakeCoordinates();
          checkGameStatus();
          checkForFruit();

          if (scoreElem >= 5) {
            snake_done = true;
            GI_clicked = false;
          }
        }
      }

      if (snake_done == true) {
        bI_10.display();
        // key UI
        key1.display(90, 90);
        key2.display(190, 90);
        key3.display(290, 90);
        // clear text
        // console.log(this.stage);
        cleartext.display();
        GOTB_1.display();
      }
      break;
    case 11:
      // stage 3
      // background image
      bI_11.display();
      // dragon image
      dragon.display(width / 4, height / 2, width, height);
      // dragon text
      DTB.display((width * 1) / 4 + 200, height / 4 + 100, 800, 500);
      // menu image
      MB.display(width / 2 + 150, height / 4 + 40);
      for (let i = 0; i < 6; i++) {
        if (i % 2 == 0) {
          foods[i].display(210 * (i / 2) + 1240, 500, 210);
        } else {
          foods[i].display(210 * ((i - 1) / 2) + 1240, 500 + 210, 210);
        }
      }
      if (dragon_hate) {
        textSize(30);
        textAlign(CENTER);
        fill(255);
        textStyle(NORMAL);
        textFont(font1);
        rectMode(CORNER);
        stroke(0);
        strokeWeight(0);
        text("엣퉤퉤 이게 뭐야", 300, 300, 300, 100);
      }
      // key UI
      key1.display(90, 90);
      key2.display(190, 90);
      key3.display(290, 90);
      // game intro text box & text
      GITB_2.display();
      // clear text
      cleartext.display();
      GOTB_2.display();

      break;
    case 12:
      bI_12.display();
      textbox.display();
      lock.display();
      break;
    case 13:
      bI_12.display();
      lock.display();
      if (millis() <= key_video_startTime + 3000) {
        imageMode(CENTER);
        image(key_video, 960, 540);
      } else {
        scene++;
        textboxOn = true;
      }
      // bI_13.display();
      break;
    case 14:
      bI_14.display();
      lock.display();
      textbox.display();
      // lock.dis
      keycursor.display();
      break;
    case 15:
      cursor();
      bI_15.display();
      crow.display(1400, 570, 1100, 700);
      textbox.display();

      break;
    case 16:
      bI_16.display();
      // final stage
      // openingsong.stop();
      sleepprincess.display();
      checkmic();
      textbox.display();
      clap.display();
      break;
    case 17:
      bI_17.display();
      princess.display();
      crow.display(1400, 570, 1100, 700);
      selectbox0.display();
      selectbox1.display();
      textbox.display();
      break;
    case 18:
      // ending 1
      // endingsong.stop();
      if (secondending == true) {
        bI_24.display();
      } else {
        bI_18.display();
      }
      crow.display(1400, 570, 1100, 700);
      textbox.display();
      break;
    case 19:
      // ending 1-1
      background(0);
      ending_book.display();
      webcam.display(825, 595, 260);
      horn.display();
      textbox.display();
      break;
    case 20:
      // ending 1-2
      bI_20.display();
      break;
    case 21:
      // ending 1-3
      bI_21.display();
      break;
    case 22:
      // ending 1-4
      bI_22.display();
      break;
    case 23:
      // ending 2
      bI_18.display();
      textbox.display();
      break;
    case 24:
      bI_24.display();
      prince.display();
      wedprincess.display();
      crow.display(1150, 570, 800, 600);
      textbox.display();
      selectbox0.display();
      break;
  }
}

function keyPressed() {
  // f를 눌러 전체화면 -- 포스트잇
  if (keyCode == 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  // 1을 눌러 초기화(타이틀로 돌아가기) -- 포스트잇
  if (keyCode == 49) {
    // 각종 변수 다 초기화 시키기
    scene = 0;
  }
  //stage 2
  switch (keyCode) {
    case 37:
      if (direction !== "right") {
        direction = "left";
      }
      break;
    case 39:
      if (direction !== "left") {
        direction = "right";
      }
      break;
    case 38:
      if (direction !== "down") {
        direction = "up";
      }
      break;
    case 40:
      if (direction !== "up") {
        direction = "down";
      }
      break;
  }
}

function mouseClicked() {
  switch (scene) {
    case 0:
      titlestartbutton.click();
      break;
    case 1:
      textbox.click();
      break;
    case 2:
      // scene_click(){} 함수로 퉁치기 가능할듯
      scene2_clicked++;
      if (scene2_clicked >= 3) {
        scene++;
        //dreamsound0.play();
      }
      break;
    case 3:
      scene3_clicked++;
      if (scene3_clicked >= 3) {
        scene++;
        //dreamsound1.play();
      }
      break;
    case 4:
      scene4_clicked++;
      // console.log("scene4_clicked" + scene4_clicked);
      if (scene4_clicked == 4) {
        scene4_lastclick_time = millis();
        //dreamsound2.play();
        // console.log("lastclick" + scene4_lastclick_time);
      }
      // else if (scene4_clicked >= 5) {
      //   scene++;
      //   textboxOn = true;
      // }
      break;
    case 5:
      if (scene5_delta_time <= 3000) {
      } else {
        textbox.click();
        book.click();
        webcam.click();
      }
      break;
    case 6:
      //booksound.play();
      //openingsong.play();
      scene++;
      textboxOn = true;
      break;
    case 7:
      textbox.click();
      crow.click();
      break;
    case 8:
      mark1.click();
      mark2.click();
      mark3.click();
      mark4.click();
      break;
    case 9:
      //openingsong.stop();
      //gamesong.play();
      GITB_0.clicked();
      cleartext.clicked();
      GOTB_0.clicked();
      break;
    case 10:
      GITB_1.clicked();
      cleartext.clicked();
      GOTB_1.clicked();
      break;
    case 11:
      GITB_2.clicked();
      cleartext.clicked();
      GOTB_2.clicked();
      for (let i = 0; i < 6; i++) {
        foods[i].clicked();
      }
      break;
    case 12:
      textbox.click();
      scene12_clicked++;
      console.log(scene12_clicked);

      if (scene12_clicked >= 2) {
        key_video.loop();
        key_video_startTime = millis();
        console.log(key_video_startTime);
      }

      break;
    case 13:
      // gamesong.stop();
      //openingsong.play();

      break;
    case 14:
      textbox.click();
      lock.click();
      crowOn = false;
      break;
    case 15:
      textbox.click();
      break;
    case 16:
      if (sleep_stage == 3) {
        textboxOn = true;
        crowOn = false;
      }
      textbox.click();
      break;
    case 17:
      //openingsong.stop();
      //endingsong.play();
      textbox.click();
      selectbox0.click();
      selectbox1.click();
      break;
    case 18:
      textbox.click();
      textboxOn = true;
      break;
    case 19:
      //endingsong.stop();
      //endingsong2.play();
      textbox.click();
      ending_book.click();
      webcam.click();
      break;
    case 20:
      scene++;
      break;
    case 21:
      scene++;
      break;
    case 22:
      scene = 0;
      // 기타 변수들 초기화!!
      break;
    case 23:
      //endingsong2.play();
      textbox.click();
      break;
    case 24:
      textbox.click();
      selectbox0.click();
      secondending = true;
      //endingsong2.stop();
      break;
  }
}
