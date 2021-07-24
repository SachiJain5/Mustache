positionX = 0;
positionY = 0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/4NnH8k7n/mustache.jpg")
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(video, 0, 0, 400, 400);
    image(mustache, positionX, positionY, 50, 50);
}
function take_snapshot(){
    save('Mustache.png');
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
        positionX = results[0].pose.mustache.x;
        positionY = results[0].pose.mustache.y;
        console.log("mustache x = " + positionX);
        console.log("mustache y = " + positionY);
    }
}