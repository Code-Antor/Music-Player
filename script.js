// let song = document.querySelector('#song');
// let range = document.querySelector('.range');
// let play = document.querySelector('#play');
// let music = document.querySelector('.music');
// let controls = document.querySelector('.controls');
// let icon = document.querySelector('i');

// music.onloadmetadata = function(){
//     range.max = song.duration;
//     range.value = song.currentTime;
// }

// function playPause(){
//     if(play.classList.contains('fa-play')){
//         song.play();
//         play.classList.remove('fa-play')
//         play.classList.add('fa-pause')
//     }
//     else{
//         song.pause();
//         play.classList.remove('fa-pause')
//         play.classList.add('fa-play')
//     }
// }
// play.addEventListener('click',function(){
//    playPause();
// })

// if(song.play()){
//     setInterval(()=>{
//         range.value = song.currentTime
//     },10000)
// }
// range.onchange = function(){
//     song.play;
//     song.currentTime = range.value;


// }

let music = document.querySelector('.music');
let song = document.querySelector('#song');
let progress = document.querySelector('.range');
let play = document.querySelector('#play');

window.onload = function(){
    progress.max = song.duration;
    progress.value = song.currentTime ;
}
// function loaded(){
//     progress.max = song.duration;
//     progress.value = song.currentTime ;
// }
// loaded();
function playPause(){
    if(play.classList.contains('fa-play')){
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
    else{
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
}

play.addEventListener('click',function(){
    playPause();
})
if(song.play()){
    
    setInterval(function(){
        progress.value = song.currentTime;
    },500)
   
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;

}