expressao1="";
expressao2="";
expressao3="";
webcam.set({
    width:350,
    height:300,
    imageformat:'png',
    pngquality:90
});
camera=document.getElementById("camera");
webcam.attach('#camera');
function takesnapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML='<img id="captura_image" src="+data_uri"/>'
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('',modelLoader);
function modelLoader(){
console.log('modelLoader');
}
function speak(){
    var synth=window.speechSynthesis;
    speakData1="a primeira expressão é de"+expressao1;
    speakData2="a segunda expressão é de"+expressao2;
    speakData3="a terceira expressão é de"+expressao3;
    var utterThis=new SpeechSynthesisUtterance(speakData1+speakData2+speakData3);
    synth.speak(utterThis);
}