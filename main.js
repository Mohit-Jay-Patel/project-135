var status="";
var canavs="";
var video="";
var model="";

function preload(){

}
function setup(){
canavs=createCanvas(480,300);
canavs.center();

video=createCapture(VIDEO);
video.hide();
video.size(480,300);



}
function start(){
 model=ml5.objectDetector("cocossd",modellodaded);
 document.getElementById("status").innerHTML="Status : Object Detected";
}
function modellodaded(){
    console.log("Model has been loaded");
    status=true;
}
function draw(){
image(video,0,0,480,380);

}