var status="";
var canavs="";
var video="";
var model="";
var input='';
var objects=[];

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
 input=document.getElementById("name_of_object").value;
 
}
function modellodaded(){
    console.log("Model has been loaded");
    status=true;
}
function gotResults(error,results){
    if(error){
       console.log(error);
    }
    else{
       console.log(results);
       objects=results;
    }
   }
   function draw(){
   image(video,0,0,480,380);
   if(status!=""){
       model.detect(video,gotResults);
       for(var j =0;j<objects.length;j++){
           document.getElementById("status").innerHTML="Status : Objects Detected";
    
           
           fill("#FF0000");
           var percent=floor(objects[j].confidence*100);
           text(objects[j].label+" "+percent+"%",objects[j].x+10,objects[j].y+15);
           noFill();
           stroke("#FF0000");
           rect(objects[j].x,objects[j].y,objects[j].width,objects[j].height);
           if(objects[j].label==input){
            video.stop();
            model.detect(gotResults);
            document.getElementById("oject_found").innerHTML=input+" found";
             var synth= window.speechSynthesis;
             var utterthis= new SpeechSynthesisUtterance(input+" found");
             synth.speak(utterthis);
           }
           else{
            document.getElementById("oject_found").innerHTML=input+" not found";
           }
       }
   }
   
   }