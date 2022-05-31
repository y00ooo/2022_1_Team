function setup() {
  createCanvas(1920, 1080);

  webcam_1.insertCapture();
}

function draw() {
  console.log("X:" + mouseX + "Y:" + mouseY)
  
  switch (scene) {
    case 0:
      bI_0.display();
      iB_0.display();
      break;
    case 1:
      background(0);
      iB_1.display();
      webcam_1.display();
      break;
    case 2:
      bI_2.display();
      crow.display();
      textbox.display();
      break;
    case 3:
      bI_3.display();
      mark1.display();
      mark2.display();
      mark3.display();
      key1.display(90, 90);
      key2.display(190, 90);
      key3.display(290, 90);
      prince_mini.display(230, 600);
      break;
    case 4:
      // stage 1
      // background image
      bI_4.display();

      // key UI
      key1.display(90, 90);
      key2.display(190, 90);
      key3.display(290, 90);
      // thorns image
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
    case 5:
      //stage 2
      // background image
      bI_5.display();
      // key UI
      key1.display(90, 90);
      key2.display(190, 90);
      key3.display(290, 90);
      // game intro text box & text
      GITB_1.display();
      // snakegame
      // claer text
      
      break;
    case 6:
      // stage 3
      // background image
      bI_6.display();
      // key UI
      key1.display(90, 90);
      key2.display(190, 90);
      key3.display(290, 90);
      // game intro text box & text
      GITB_2.display();
      // dragon image
      // dragon text
      // menu image
      // clear text
      
      break;

    default:
      background(220);
    
  }
}

function keyPressed() {
  // f를 눌러 전체화면으로 플레이하세요
  if (keyCode == 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  // 키보드에서 "1"을 눌러 타이틀 화면으로 돌아가세요
  if (keyCode == 49) {
    console.log("11");
    scene = 0;
    // 각종 변수 다 초기화 시키기
  }
}

function mouseClicked() {
  switch (scene) {
    case 0:
      iB_0.click_nextScene(1);
      break;
    case 1:
      iB_1.click_webcamOn();
      if (iB_1.clicked >= 2) {
        iB_1.click_nextScene(2);
      }
      break;
    case 2:
      crow.click_textOn();
      textbox.clicked();
      break;
    case 3:
      mark1.clicked();
      mark2.clicked();
      mark3.clicked();
      break;
    case 4:
      GITB_0.clicked();
      cleartext.clicked();
      GOTB_0.clicked();
      break;
    case 5:
      GITB_1.clicked();
      
      break;
    case 6:
      GITB_2.clicked();
      
      break;
  }
}

