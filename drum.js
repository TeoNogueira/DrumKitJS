document.body.addEventListener('keyup', event => {

// console.log(event.code) show all Digit
playSound(event.code.toLowerCase())

})


function playSound(sound) {

let audioElement = document.querySelector(`#s_${sound}`)

if(audioElement) {

    audioElement.play();
}

}


