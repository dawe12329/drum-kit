//const keys = document.querySelectorAll(".key");
//const sounds = document.getElementsByTagName("audio");

function removeTransition(k) {
    if (k.classList == 'playing') {
        return}
    else {k.target.classList.remove('playing');
    }}

function playSound (k) {
    const sound = document.querySelector(`audio[data-key="${k.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${k.keyCode}"]`);
    if (!sound){
        return;
    }
    key.classList.add("playing");
    sound.currentTime = 0;
    sound.play()
}

function removeHighlight() {

}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound)