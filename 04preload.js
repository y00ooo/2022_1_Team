function preload() {
  //fonts
  font1 = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff"
  );

  //musics
  //songs
  /*
   titlesong = loadSound('assets/titlemusic.mp3');
  
  dreamsound0 = loadSound('assets/dream0.mp3');
  dreamsound1 = loadSound('assets/dream1.mp3');
  dreamsound2 = loadSound('assets/dream2.mp3');
  
   booksound = loadSound('assets/booksound.mp3');
  
   openingsong = loadSound('assets/openingmusic.mp3');
   gamesong = loadSound('assets/gamemusic.mp3');
   endingsong = loadSound('assets/endingmusic.mp3');
   endingsong2 = loadSound('assets/endingmusic2.mp3');
*/

  // scene 0
  bI_0.insertImage("assets/title.png");
  titlestartbutton.insertImage("assets/start.png");
  // scene 1
  textbox.insertImage("assets/messageBox.png");

  // scene 2
  bI_2.insertImage("assets/dream0.png");
  // scene 3
  bI_3.insertImage("assets/dream1.png");
  // scene 4
  bI_4.insertImage("assets/dream2.png");
  // scene 5
  book.insertImage("assets/book_closeup.png");
  horn.insertImage("assets/horn.png");
  // scene 6
  bI_6.insertImage("assets/book_open.png");
  // scene 7
  bI_7.insertImage("assets/stage0.png");
  crow.insertImage("assets/crow.png");

  // scene 8
  for (let i = 0; i < 4; i++) {
    map_images[i] = loadImage("assets/map" + i + ".png");
  }
  for (let i = 0; i < 6; i++) {
    key_images[i] = loadImage("assets/key" + i + ".png");
  }
  princemap.insertImage("assets/princeicon.png");

  //scene 9
  bI_9.insertImage("assets/stage1.jpg");

  for (let i = 0; i < throns_num; i++) {
    throns[i] = new Thron(random(-100, 1620), random(-100, 780));
  }
  for (let thron of throns) {
    thron.insertImage("assets/thron" + int(random(11)) + ".png");
  }
  GITB_0.insertImage("assets/gameBox.png");
  magichand.insertImage("assets/hand.png");
  cleartext.insertImage("assets/clearBox.png");
  GOTB_0.insertImage("assets/keyBox.png");
  // stage 2
  bI_10.insertImage("assets/stage2.png");
  head_image = loadImage("assets/stage2_w.png");
  rock_image = loadImage("assets/stage2_r.png");
  GITB_1.insertImage("assets/gameBox.png");
  GOTB_1.insertImage("assets/keyBox.png");

  //stage 3
  bI_11.insertImage("assets/stage3.png");
  GITB_2.insertImage("assets/gameBox.png");
  for (let i = 0; i < 4; i++) {
    dragon_images[i] = loadImage("assets/dragon" + i + ".png");
  }
  DTB.insertImage("assets/bubble.png");
  MB.insertImage("assets/menu.png");
  for (let i = 0; i < 6; i++) {
    food_images[i] = loadImage("assets/food" + i + ".png");
    foods[i] = new FoodButton(i);
  }
  GOTB_2.insertImage("assets/keyBox.png");

  // scene 12
  bI_12.insertImage("assets/castle.png");
  // scene 13 - animation을 어떻게 넣을까나...
  bI_13.insertImage("assets/key_ani.png");

  // scene 14
  bI_14.insertImage("assets/castle.png");
  lock.insertImage("assets/keyBox.png");
  keycursor.insertImage("assets/key1.png");

  // scene 15
  bI_15.insertImage("assets/room.png");
  // scene 16
  bI_16.insertImage("assets/stage2.png");
  clap.insertImage("assets/speaker.png");
  for (let i = 0; i < 4; i++) {
    sleepprincess_images[i] = loadImage("assets/sleep" + i + ".png");
  }
  // scene 17
  bI_17.insertImage("assets/room_p.png");
  princess.insertImage("assets/princess.png");

  selectbox0.insertImage("assets/ending_b1.png");
  selectbox1.insertImage("assets/ending_b2.png");

  // scene 18
  bI_18.insertImage("assets/room_p.png");
  // scene 19
  ending_book.insertImage("assets/ending1.png");
  // scene 20
  bI_20.insertImage("assets/theEnd.png");
  // scene 21
  bI_21.insertImage("assets/ending1_book_e.png");
  // scene 22
  bI_22.insertImage("assets/realend.png");
  // scene 24
  bI_24.insertImage("assets/wedding.jpeg");
  prince.insertImage("assets/prince.png");
  wedprincess.insertImage("assets/princess_wed.png");
}
