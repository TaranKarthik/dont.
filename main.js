Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,

    constraints:{
        facingMode: "environment"
    }

});

const camera = document.getElementById("camera");

Webcam.attach(camera);

function snap_Image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src='" + data_uri + "' id='rounded_img'" + ">";
    });

}

console.log("Ml5 Version- ",ml5.version);

var Image_Classifier = ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded");
}

function check(){
    var image = document.getElementById("rounded_img");
    //haha i make roundedimg even though i do not round it.
    Image_Classifier.classify(image,finalResult);
}

function finalResult(error,results){
    if(error){
        console.error("oh no not coming haha");
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}