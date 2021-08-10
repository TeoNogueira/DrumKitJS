document.body.addEventListener('keyup', event => {

console.log(event.code)
playSound(event.code.toLowerCase())

})


function playSound(sound) {

let audioElement = document.querySelector(`#s_${sound}`)

let keyElement = document.querySelector(`div[data-key="${sound}"]`)

if(audioElement) {

    audioElement.play();
}


// 2
if(keyElement) {

keyElement.classList.add('active');

setTimeout(() => {
keyElement.classList.remove('active')

}, 200)

}

}


