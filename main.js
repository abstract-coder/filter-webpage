nose_x= "";
nose_y="";

function preload() {

    lipstick_img = loadImage("https://i.postimg.cc/bJ775twy/lipstick.png");

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video1 = createCapture(VIDEO);
    video1.hide();
    poseNet = ml5.poseNet(video1,modelLoaded);
    poseNet.on('pose',gotPoses);
    background("purple");
}

function draw() {
    image(video1, 0, 0, 400, 400);
    image(lipstick_img, nose_x, nose_y , 55, 55)

}

function take_pic() {
    save("mypic.png");
}

function gotPoses(results){

    console.log(results);
    nose_x = results[0].pose.nose.x - 152;
    nose_y = results[0].pose.nose.y - 45;
}

function modelLoaded(){
    console.log("Model is Loaded.");
}