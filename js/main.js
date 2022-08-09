console.log('Hello, world')
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// songs in array of objects
let songs = [
    {songName: "Let-Me-Love-You", filepath: "songs/1.mp3" },
    {songName: "Let-Me-Love-You", filepath: "songs/2.mp3" },
    {songName: "Let-Me-Love-You", filepath: "songs/3.mp3" },
    {songName: "Let-Me-Love-You", filepath: "songs/4.mp3" },
    {songName: "Let-Me-Love-You", filepath: "songs/5.mp3" },
    {songName: "Let-Me-Love-You", filepath: "songs/6.mp3" },
    {songName: "Let-Me-Love-You", filepath: "songs/7.mp3" },
    {songName: "Let-Me-Love-You", filepath: "songs/8.mp3" },
    {songName: "Let-Me-Love-You", filepath: "songs/9.mp3" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//let audioElement = new audio('1.mp3');
// Audio element.play();

// Handle Play / Pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity = 0;


    }
})
// Listen to events
audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdate')

    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100)
    //console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.remove('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
element.addEventListener('click', (e) => {
    // console.log(e.target)
    makeAllPlays();

    songIndex = paresInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
  })
})
    

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex => 0){
    songIndex = 0
    }else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex <= 9){
    songIndex = 0
    }else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');

})