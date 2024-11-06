const countButton=document.getElementById("count-button");
countButton.addEventListener("click", function(){
    const count= document.getElementById("count");
    let countNumber =Number(count.innerHTML);
    countNumber++;
    count.innerHTML=countNumber;
    if(countNumber===5){
        alert("Lütfen Dinlenin")
    }
  
});
const birdAudioPlay= document.getElementById("birdAudioPlay");
const birdIcon= document.getElementById("birdIcon");
birdIcon.addEventListener("click", function(){
    if(birdAudioPlay.paused){
        birdAudioPlay.play()
        birdIcon.className="bi bi-music-note-beamed"
    }
    else{
        birdAudioPlay.pause()
        birdIcon.className="bi bi-twitter"
    }
});
const pianoAudioPlay= document.getElementById("pianoAudioPlay");
const pianoIcon= document.getElementById("pianoIcon");
pianoIcon.addEventListener("click", function(){
    if(pianoAudioPlay.paused){
        pianoAudioPlay.play()
        pianoIcon.className="bi bi-music-note-beamed"
    }
    else{
        pianoAudioPlay.pause()
        pianoIcon.className="i bi-moon-fill"
    }
});
const rainAudioPlay= document.getElementById("rainAudioPlay");
const rainIcon= document.getElementById("rainIcon");
rainIcon.addEventListener("click", function(){
    if(rainAudioPlay.paused){
        rainAudioPlay.play()
        rainIcon.className="bi bi-music-note-beamed"
    }
    else{
        rainAudioPlay.pause()
        rainIcon.className="bi bi-cloud-fill"
    }
});
const volumeInput=document.getElementById("volume-input");
volumeInput.addEventListener("input" ,function(){
 birdAudioPlay.volume=volumeInput.value / 100;  
 pianoAudioPlay.volume=volumeInput.value / 100;  
 rainAudioPlay.volume=volumeInput.value / 100;   
});