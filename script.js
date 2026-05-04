const playlistSongs = document.getElementById("playlist-songs")
const playButton = document.getElementById("play")
const pauseButton = document.getElementById("pause")
const nextButton = document.getElementById("next")
const previousButton = document.getElementById("previous")

const allSongs = [ {
id: 0,
title: "Scratching The Surface",
artist: "Quincy Larson",
duration: "4:25",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3"},
{
id: 1,
title: "Can't Stay Down",
artist: "Quincy Larson",
duration: "4:15",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",

}, 
{
id: 2,
title: "Still Learning",
artist: "Quincy Larson",
duration: "3:51",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
}
];


const audio = new Audio();
const userData = {
    songs: allSongs,
    currentSong: null,
    songCurrentTime: 0
}

function playSong(id){
    const song = userData?.songs.find(song => song.id === id)
    audio.src = song.src;
    audio.title = song.title;

    if(!userData.currentSong){
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData.songCurrentTime;
    }

    playButton.classList.add("playing");
    userData.currentSong = song;
    audio.play();
}

playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong?.id);
  }
});