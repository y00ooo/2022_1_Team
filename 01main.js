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
    // console.log(xCor, yCor);
  }

  // scene 16
  mic = new p5.AudioIn();

  // 열쇠 애니메이션 자리는 여기!
  key_video = createVideo(["assets/key_ani.mp4"]);
  key_video.hide();

  // titlesong.play();
}

function draw() {
  // console.log("X:" + mouseX + "Y:" + mouseY);
  // console.log("scene" + scene + "text_index" + text_index);
  // console.log(selectionOn);
  switch (scene) {
    case 0:
      bI_0.display();
      titlestartbutton.display();

      break;
    case 1:
      background(0);
      textbox.display();

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
      } else {
        if (scene5_end_time != 0) {
          rectMode(CORNER);
          fill(0, ((scene5_now_time - scene5_end_time) / 3000) * 255);
          // console.log(((scene5_now_time - scene5_end_time) / 3000) * 255);
          rect(0, 0, 1920, 1080);
          if (scene5_now_time > scene5_end_time + 3000) {
            // console.log(scene5_end_time - scene5_now_time);
            scene++;
            text_index = 0;
            textboxOn = false;
          }
        }
      }
      break;
    case 6:
      scene6_now_time = millis();
      bI_6.display();

      if (scene6_now_time > scene5_now_time + 3000) {
        // console.log("a");
      } else {
        rectMode(CORNER);
        fill(0, 255 - ((scene6_now_time - scene5_now_time) / 3000) * 255);
        rect(0, 0, 1920, 1080);
      }
      break;
    case 7:
      scene7_now_time = millis();
      bI_7.display();
      crow.display(1400, 570, 1100, 700);
      textbox.display();

      if (scene7_now_time <= scene6_end_time + 3000) {
        rectMode(CORNER);
        fill(0, 255 - ((scene7_now_time - scene6_end_time) / 3000) * 255);
        rect(0, 0, 1920, 1080);
      }
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
            strokeWeight((i / numSegments) * gridSize + 20);
            line(
              xCor[i] + gridSize / 2,
              yCor[i],
              xCor[i + 1] + gridSize / 2,
              yCor[i + 1]
            );
          }
          imageMode(CENTER);
          image(
            head_image,
            xCor[xCor.length - 1] + gridSize / 2,
            yCor[yCor.length - 1],
            gridSize,
            gridSize
          );
          // console.log(xCor, yCor);

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
      if (millis() <= key_video_startTime + 1670) {
        imageMode(CENTER);
        image(key_video, 960, 540);
      } else {
        key_video.pause();
        scene++;
        textboxOn = true;
        
      }
      // bI_13.display();
      break;
    case 14:
      scene14_now_time = millis();
      bI_14.display();
      lock.display();
      textbox.display();
      keycursor.display();

      if (scene14_last_time != 0) {
        rectMode(CORNER);
        fill(0, ((scene14_now_time - scene14_last_time) / 3000) * 255);
        rect(0, 0, 1920, 1080);
        if (scene14_now_time > scene14_last_time + 3000) {
          scene++;
          text_index = 0;
          textboxOn = true;
        }
      }
      break;
    case 15:
      scene15_now_time = millis();
      cursor();
      bI_15.display();
      crow.display(1400, 570, 1100, 700);
      textbox.display();
      if (scene15_now_time <= scene14_now_time + 3000) {
        rectMode(CORNER);
        fill(0, 255 - ((scene15_now_time - scene14_now_time) / 3000) * 255);
        rect(0, 0, 1920, 1080);
      }

      break;
    case 16:
      bI_16.display();
      // final stage

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

      scene18_now_time = millis();

      if (secondending == true) {
        bI_24.display();
      } else {
        bI_18.display();
      }
      crow.display(1400, 570, 1100, 700);
      textbox.display();
      if (scene18_end_time != 0) {
        rectMode(CORNER);
        fill(0, ((scene18_now_time - scene18_end_time) / 3000) * 255);
        rect(0, 0, 1920, 1080);
        if (scene18_now_time > scene18_end_time + 3000) {
          scene++;
          text_index = 0;
        }
      }

      break;
    case 19:
      // ending 1-1
      scene19_now_time = millis();
      background(0);
      ending_book.display();
      webcam.display(825, 595, 260);

      textbox.display();

      if (endingHornOff) {
        let scene19_deltatime = scene19_now_time - scene19_hornoff;
        tint(255, 255 - scene19_deltatime / 5);
        // console.log(scene19_deltatime / 10);
        if (scene19_deltatime / 5 >= 255) {
          hornOn = false;
        }
      }
      horn.display();
      noTint();

      if (scene19_now_time <= scene18_now_time + 3000) {
        rectMode(CORNER);
        fill(0, 255 - ((scene19_now_time - scene18_now_time) / 3000) * 255);
        rect(0, 0, 1920, 1080);
      }
      break;
    case 20:
      // ending 1-2
      if (millis() <= ending_book_clicked_time + 3000) {
        bI_20.display();
        // console.log(millis());
      } else {
        scene++;
      }
      break;
    case 21:
      // ending 1-3
      if (millis() <= ending_book_clicked_time + 6000) {
        bI_21.display();
        // console.log(millis());
      } else {
        scene++;
      }
      break;
    case 22:
      // ending 1-4
      bI_22.display();
      break;
    case 23:
      // ending 2
      scene23_now_time = millis();
      bI_18.display();
      crow.display(1400, 570, 1100, 700);
      textbox.display();

      break;
    case 24:
      scene24_now_time = millis();
      bI_24.display();
      prince.display();
      six.display();
      wedprincess.display();
      crow.display(1400, 570, 1100, 700);
      textbox.display();
      selectbox0.display();
      if (scene24_now_time <= scene23_now_time + 3000) {
        rectMode(CORNER);
        fill(0, 255 - ((scene24_now_time - scene23_now_time) / 3000) * 255);
        rect(0, 0, 1920, 1080);
      }
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
    BackToTitle();
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
        let phornOn = hornOn;
        book.click();
        if (phornOn == hornOn) {
          textbox.click();
        }
      }
      break;
    case 6:
      //booksound.play();
      //openingsong.play();
      if (scene6_now_time > scene5_now_time + 3000) {
        scene++;
        textboxOn = true;
        scene6_end_time = millis();
      }
      break;
    case 7:
      if (scene7_now_time <= scene6_end_time + 3000) {
      } else {
        let pcrowon = crowOn;
        textbox.click();
        if (pcrowon == crowOn) {
          crow.click();
        }
      }

      break;
    case 8:
      mark1.click();
      mark2.click();
      mark3.click();
      mark4.click();
      break;
    case 9:
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
      // console.log(scene12_clicked);

      if (scene12_clicked >= 2) {
        key_video.loop();
        key_video_startTime = millis();
        // console.log(key_video_startTime);
      }

      break;
    case 13:
      break;
    case 14:
      textbox.click();
      lock.click();
      crowOn = false;
      break;
    case 15:
      if (scene15_now_time > scene14_now_time + 3000) {
        textbox.click();
      }
      if (!micOn) {
        mic.start();
        micOn = true;
      }
      break;
    case 16:
      if (sleep_stage == 3) {
        textboxOn = true;
        crowOn = false;
      }
      textbox.click();
      break;
    case 17:
      textbox.click();
      selectbox0.click();
      selectbox1.click();
      break;
    case 18:
      textbox.click();
      textboxOn = true;
      break;
    case 19:
      if (scene19_now_time > scene18_now_time + 3000) {
        let pendinghornoff = endingHornOff;

        ending_book.click();

        if (pendinghornoff == endingHornOff) {
          textbox.click();
          // console.log("clicked");
        }
      }

      break;
    case 20:
      // scene++;
      break;
    case 21:
      // scene++;
      break;
    case 22:
      // 클릭하면 기타 변수들 초기화!!
      BackToTitle();
      break;
    case 23:
      textbox.click();
      break;
    case 24:
      if (scene24_now_time > scene23_now_time + 3000) {
        textbox.click();
        selectbox0.click();
        secondending = true;
      }

      break;
  }
}
