//* audio
let insectChirping = document.querySelector('.insect_chirping');
let rhythm = document.querySelector('.rhythm');
let posterSpan = document.querySelector('.rhythm_wrapper .poster span');

let isPlaying = true;
rhythm.addEventListener("click", () => {
    if (isPlaying && !insectChirping.paused) {
        insectChirping.pause();
        isPlaying = false;
        posterSpan.innerText = "👆Play";
    } else {
        insectChirping.play();
        isPlaying = true;
        posterSpan.innerText = "👆Pause";
    }
});