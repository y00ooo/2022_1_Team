let scene = 12;
//fonts
let font1;
// video
let key_video;
// songs
let titlesong;
// let dreamsound0;
// let dreamsound1;
// let dreamsound2;
// let booksound;
let openingsong;
let gamesong;
let endingsong;
let endingsong2;

let micOn = false;

// scene 0

let bI_0 = new backgroundImage();
let titlestartbutton = new titleStartButton();

// scene 1
let textbox = new textBox();
let textboxOn = true;
let text_index = 0;

let crowOn = false;
let crowovercheck = true;
let crowclicked = false;

// scene 2
let bI_2 = new backgroundImage();
let scene2_clicked = 0;

// scene 3
let bI_3 = new backgroundImage();
let scene3_clicked = 0;

// scene 4
let bI_4 = new backgroundImage();
let scene4_clicked = 0;

let scene4_lastclick_time = 0;
let scene4_now_time = 0;
let scene4_delta_time = 0;
let scene4_last_time = 0;

// scene 5
let scene5_now_time = 0;
let scene5_delta_time = 0;
let scene5_end_time = 0;
let scene5_book_clicked = 0;
let bookOn = true;
let book = new Book();
let webcamOn = false;

let webcam = new webCam();
let hornOn = false;
let horn = new Horn();

let poseNet;
let LearX = 0;
let LearY = 0;
let RearX = 0;
let RearY = 0;
let LeyeX = 0;
let LeyeY = 0;

// scene 6
let scene6_end_time = 0;
let bI_6 = new backgroundImage();
let scene6_now_time = 0;
// scene 7
let scene7_now_time = 0;
let bI_7 = new backgroundImage();
let crow = new Crow();

// scene 8
let map_images = [];
let map_over_images = [];

let stage = 0;
let mark1 = new Mark(0);
let mark2 = new Mark(1);
let mark3 = new Mark(2);
let mark4 = new Mark(3);
let worldmap = new Map();

let key_over_images = [];
let key_images = [];
let key1 = new Key(0);
let key2 = new Key(1);
let key3 = new Key(2);
let keys = [key1, key2, key3];

let princemap = new princeMap();
//scene 9
let bI_9 = new backgroundImage();
let throns = [];
let throns_num = 50;
let throns_out = 0;

let GI_clicked = false;
let cleartext_clicked = false;
let GITB_0 = new gameintroTextBox(0, 1600, 1000);

let magichand = new magicHand();

let clear = false;
let cleartext = new clearText();

let GO_clicked = true;
let GOTB_0 = new gameoutroTextBox(0, 1600, 1000);
//scene 10
let bI_10 = new backgroundImage();
let GITB_1 = new gameintroTextBox(1, 1600, 1000);
// snake game
let snake_speed = 9;
let snake_done = false;

let gridSize = 80;

let numSegments = 10;
let direction = "right";
let xStart = gridSize * 2;
let yStart = gridSize * 5;
let diff = gridSize;
let xCor = [];
let yCor = [];
let xFruit = 0;
let yFruit = 0;
let scoreElem = 0;
let scoretext = new scoreText();
// image
let head_image;
let rock_image;

let GOTB_1 = new gameoutroTextBox(1, 1600, 1000);

//scene 11
let bI_11 = new backgroundImage(6);
let GITB_2 = new gameintroTextBox(2, 1600, 1000);

let dragon_hate = false;
let dragon_done = false;
let right_food = [0, 1, 2];
let dragon_eat = 0;

let dragon_images = [];
let food_images = [];
let foods = [];

let dragon = new Dragon();
let DTB = new DragonTextBox();
let MB = new MenuBox();
let GOTB_2 = new gameoutroTextBox(2, 1600, 1000);

// scene 12
let bI_12 = new backgroundImage();
let scene12_clicked = 0;
let key_video_startTime = 9999999999999;
let scene12_Timenow = 0;
// scene 13
let bI_13 = new backgroundImage();

// scene 14
let scene14_now_time = 0;
let scene14_last_time = 0;
let bI_14 = new backgroundImage();
let lock = new Lock();
let keycursor = new keyCursor();
let scene14_clicked = 0;

// scene 15
let scene15_now_time = 0;
let bI_15 = new backgroundImage();

// scene 16
let clapOn = true;
let clap = new Clap();

let bI_16 = new backgroundImage();
let mic_w = 0;
let mic;
let mic_overed = 0;

let sleep_stage = 0;
let sleepprincess_images = [];
let sleepprincess = new sleepPrincess();

// scene 17

let bI_17 = new backgroundImage();
let princessOn = true;
let princess = new Princess();
let selectionOn = false;
let secondending = false;
let selectbox0 = new selectBox(0);
let selectbox1 = new selectBox(1);

// scene 18
let scene18_end_time = 0;
let scene18_now_time = 0;
let bI_18 = new backgroundImage();
// scene 19
let endingHornOff = false;
let scene19_hornoff = 0;
let scene19_now_time = 0;
let ending_book_clicked_time = 0;
let ending_book = new EndingBook();

// scene 20
let bI_20 = new backgroundImage();
// scene 21
let bI_21 = new backgroundImage();
// scene 22
let bI_22 = new backgroundImage();
let scene23_now_time = 0;
// let scene23_end_time = 0;
// scene 24
let scene24_now_time = 0;
let bI_24 = new backgroundImage();
let wedprincess = new Princess();
let sixOn = false;
let six = new Six();
let princeOn = false;
let prince = new Prince();
