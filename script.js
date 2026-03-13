// click to enter
let enter = document.getElementById("enter-screen")
let music = document.getElementById("music")

enter.onclick = () => {
enter.style.display="none"
music.play()
}

// typing animation
const text = "Cyber Security • Gamer • YouTuber"
let i = 0

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i)
i++
setTimeout(typing,60)
}
}

typing()