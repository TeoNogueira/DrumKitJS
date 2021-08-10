document.body.addEventListener('keyup', event => {

// console.log(event.code)
playSound(event.code.toLowerCase())

})

// 3 
document.querySelector('.composer button').addEventListener('click', (event) =>{
let song = document.querySelector('#input').value;

console.log('Música', song)


})



function playSound(sound) {

let audioElement = document.querySelector(`#s_${sound}`) // 1

let keyElement = document.querySelector(`div[data-key="${sound}"]`) // 2

if(audioElement) { // 1 - B
    audioElement.currentTime = 0; // preventDelay TouchKeyBoard (Important concept)
    audioElement.play();
}


// 2 - B
if(keyElement) {

keyElement.classList.add('active');
// 2 - C
setTimeout(() => {
keyElement.classList.remove('active')

}, 200)

}

}


