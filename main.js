nose_x= "";
nose_y="";

function preload() {}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video1 = createCapture(VIDEO);
    video1.hide();
    poseNet = ml5.poseNet(video1,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video1, 0, 0, 400, 400);
    canvas.background("purple");
}

function take_pic() {
    save("mypic.png");
}

function gotPoses(results){

    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
}

function modelLoaded(){
    console.log("Model is Loaded.");
}