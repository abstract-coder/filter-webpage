function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    canvas.background("purple");
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {

}

function take_pic() {
    save("mypic.png");
}