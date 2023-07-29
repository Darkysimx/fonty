function setup(){
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(502,502);
canvas.position(800,100);

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function modelLoaded(){
console.log("poseNet carregado")

}
function draw(){



}