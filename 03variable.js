let scene = 0;

let bI_0 = new backgroundImage(0);
let iB_0 = new imageButton(0,960,850,600,300);

// scene 1 - opening
let iB_1 = new imageButton(1,960,540,500,700);
let webcamOn = false;
let webcam_1 = new webcam(1,960,640,300,200);

// scene 2
let bI_2 = new backgroundImage(2);
let crow = new imageButton(2, 1150, 570, 400, 400);
let textOn = false;
let textbox = new textBox();
let text_index = 0;

// scene 3
let bI_3 = new backgroundImage(3);
let mark1 = new mark(0);
let mark2 = new mark(1);
let mark3 = new mark(2);

let stage = 0;
let key_images = [];
let key1 = new Key(0);
let key2 = new Key(1);
let key3 = new Key(2);
let keys = [key1, key2, key3];

let prince_mini = new princeMap();

// scene 4
let bI_4 = new backgroundImage(4);
let GI_clicked = false;
let cleartext_clicked = false;
// let introTexts = ['1스테이지 설명글', '2스테이지 설명글', '3스테이지 설명글'];
let GITB_0 = new gameintroTextBox(0, 300,300);
let throns = [];
let throns_num = 100;
let throns_out = 0;
let magichand = new magicHand();

let clear = false;
let cleartext = new clearText();

let GO_clicked = true;
let GOTB_0 = new gameoutroTextBox(0,300,300);


// let outroTexts = ['1스테이지 엔딩글', '2스테이지 엔딩글', '3스테이지 엔딩글'];



//scene 5
let bI_5 = new backgroundImage(5);
let GITB_1 = new gameintroTextBox(1);
// snake game



// scene 6
let bI_6 = new backgroundImage(6);
let GITB_2 = new gameintroTextBox(2);

