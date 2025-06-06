
const songs = [
    {
        title: "Kya Hua Tera vada",
        src: "songs/Kya Hua Tera Vada.mp3"
    },
    {
        title: "Perfect",
        src: "songs/Perfect (PenduJatt.Com.Se).mp3"
    },
    {
        title: "Shape Of You",
        src: "songs/Shape Of You (PenduJatt.Com.Se).mp3"
    },
    {
        title: "Sweater Weather",
        src: "songs/Sweater Weather (PenduJatt.Com.Se).mp3"
    }
];

let currentsong = 0;
const ap = document.getElementById("song");
const title = document.getElementsByClassName("songname")[0];
const playbtn = document.getElementsByClassName("play")[0];
const playImg = playbtn.getElementsByTagName("img")[0];
const playprev = document.getElementsByClassName("prev")[0];
const play1 = playprev.getElementsByTagName("img")[0];
const playnext = document.getElementsByClassName("next")[0];
const play2 = playnext.getElementsByTagName("img")[0];

function loadsong(index) {
    ap.src = songs[index].src;
    title.textContent = songs[index].title;
}

loadsong(currentsong); // Load first song initially

function playmusic() {
    if (ap.paused) {
        ap.play();
        playImg.src = "buttons/pause.png"; // Show pause icon when playing
    } else {
        ap.pause();
        playImg.src = "buttons/play-buttton.png"; // Show play icon when paused
    }
}

function nextsong(){
    currentsong=currentsong+1;
    loadsong(currentsong);
    playmusic();
}
function prevsong(){
    currentsong=currentsong - 1;
    loadsong(currentsong);
    playmusic();

}


playbtn.addEventListener("click", playmusic);
playprev.addEventListener("click", prevsong);
playnext.addEventListener("click",nextsong);



