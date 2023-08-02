song_1 = ""
song_2 = ""
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video ,modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is iniatialized")
}

function gotPoses(results) {
    if(results.length > 0) {
console.log(results)
    }
}

function draw() {
    //image(variable name, x, y, width, height)
    image(video, 0, 0, 600, 500)
}

function preload() {
    song_1= loadSound("song1.mp3")
    song_2= loadSound("song2.mp3")
}

