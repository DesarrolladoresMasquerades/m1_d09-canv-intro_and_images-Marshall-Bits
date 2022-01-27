console.log("js works");

const canvas = document.querySelector('canvas')

canvas.width = 600
canvas.height = 600

const ctx = canvas.getContext("2d")
//HEAD



ctx.fillStyle = "white"
const leftEye = ctx.fillRect(100, 150, 100, 100)
const rightEye = ctx.fillRect(300, 150, 100, 100)
const mouth = ctx.fillRect(150, 350, 200, 70)


//TEETH
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(200, 450)
ctx.lineTo(200, 350)
ctx.strokeStyle = "black"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(300, 450)
ctx.lineTo(300, 350)
ctx.strokeStyle = "black"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(250, 450)
ctx.lineTo(250, 350)
ctx.strokeStyle = "black"
ctx.stroke()

//EYES
ctx.beginPath();
ctx.arc(150, 200, 20, 0, Math.PI * 1, false)
ctx.fillStyle = "red"
ctx.fill();

ctx.beginPath();
ctx.arc(350, 200, 20, 0, Math.PI * 1, false)
ctx.fillStyle = "red"
ctx.fill();



/*
for (let i = 0; i < 89; i++) {
    let x = Math.random()*canvas.width
    let y = Math.random()*canvas.height
    
    ctx.beginPath();
    ctx.arc(x, y, Math.random()*50, 0, Math.PI * 2, false)
    ctx.fillStyle = "rgb(169, 184, 255)"
    ctx.fill();
}
*/
