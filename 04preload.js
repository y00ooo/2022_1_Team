function preload(){
  bI_0.insertImage('assets/title.jpg');
  iB_0.insertImage('assets/titlebutton.png');
  iB_1.insertImage('assets/title.jpg');
  bI_2.insertImage('assets/crow.jpg');
  crow.insertImage('assets/none.png');

  textbox.insertImage('assets/title.jpg');
  bI_3.insertImage('assets/map.png');
  for(let i = 0; i < 6; i++){
    key_images[i] = loadImage('assets/key'+i+'.png');
  }
  
  prince_mini.insertImage('assets/princeicon.png');
  bI_4.insertImage('assets/stage1.jpg');
  GITB_0.insertImage('assets/stage1.jpg');
  
  for (let i = 0; i < throns_num; i++) {
    throns[i] = new Thron(
      random(0,1620),
      random(0,380),
      random(100, 300),
      random(500, 700)
    );
  }
  
  for(let thron of throns){
    thron.insertImage('assets/title.jpg');
  }
  magichand.insertImage('assets/title.jpg');
  cleartext.insertImage('assets/stage2.jpg');
  GOTB_0.insertImage('assets/title.jpg');
  
  
  bI_5.insertImage('assets/title.jpg');
  bI_6.insertImage('assets/title.jpg');
}
