Webcam.set({
    width:300,
    height:300,
    img_format:png,
    png_quality:90
});

    camera = document.getElementById("camera");
Webcam.attach( "#camera" );
function takesnap(){
    Webcam.snap(function (data_uri){document.getElementById("snap".innerHTML = '<img id="img" src="'+data_uri+'"></img>');});
}
console.log("ml5version ",ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BVORUqPw6/model.json",modeloaded);