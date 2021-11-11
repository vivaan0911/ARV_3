function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uFBaCJV-t/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var cats=0;
var dogs=0;
var lions=0;
var birds=0;

function gotResults(error,results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("sound").innerHTML= "Sound - " + results[0].label; 

        img= document.getElementById("picture");

        if(results[0].label == "meowing"){
            img.src= "cat meowing.gif";
            cats=cats+1;
            document.getElementById("cat").innerHTML= "Cat Detected - "+cats;
        } else if(results[0].label == "barking"){
            img.src= "dog barking.gif";
            dogs=dogs+1;
            document.getElementById("dog").innerHTML= "Dog Detected - "+dogs;
        } else if(results[0].label == "roaring"){
            img.src= "lion roaring.gif";
            lions=lions+1;
            document.getElementById("lion").innerHTML= "Lion Detected - "+lions;
        } else if(results[0].label == "chirping"){
            img.src= "birds chirping.gif";
            birds=birds+1;
            document.getElementById("bird").innerHTML= "Bird Detected - "+birds;
        } else{
            img.src= "Hearing gif.gif";
        }
    }
}