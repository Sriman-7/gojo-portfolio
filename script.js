let enter = document.getElementById("enter")
let music = document.getElementById("music")

enter.onclick = () => {
enter.style.display="none"
music.play()
}

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

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<100;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*3,
speedX:Math.random()*1-0.5,
speedY:Math.random()*1-0.5
})
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{
p.x+=p.speedX
p.y+=p.speedY

ctx.fillStyle="white"
ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()
})

requestAnimationFrame(animate)
}

animate()
