// Video
let video = document.getElementById('cjVideo');
function playPause() {
    video.paused ? video.play() : video.pause();
}

function toggleLoop() {
    video.loop = !video.loop;
}

let loopStatusText = document.querySelector('#loopButton .status');
let loopObserver = new MutationObserver(() => {
    // if (mutationsList.some(mutation => mutation.attributeName === "loop")) {
    loopStatusText.textContent = video.loop ? 'Bucle actiu' : 'Bucle desactivat';
});

loopObserver.observe(video, { attributes: true, attributeFilter: ['loop'] })

// Imatges
const images = document.querySelectorAll('.gallery img');
let scale = 1

document.getElementById('zoom-in').addEventListener('click', () => {
    if (scale < 1.12) {
        scale += .06;
        images.forEach(img => {
            img.style.transform = `scale(${scale})`;
        });
    }
});
document.getElementById('zoom-out').addEventListener('click', () => {
    if (scale > 1) {
        scale -= .06;
        images.forEach(img => {
            img.style.transform = `scale(${scale})`;
        });
    }
});

// Àudio
let audio = document.getElementById('audio');
let sources = audio.querySelectorAll('source');
audio.addEventListener('ended',function(){
    if (audio.src == sources[1].src) {
        audio.src = sources[0].src;
        audio.pause();
    } else {
        audio.src = sources[1].src;
    }
});