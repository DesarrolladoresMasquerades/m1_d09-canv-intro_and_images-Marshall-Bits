console.log("fireball loaded")

const canvas = document.getElementById("canvas");


canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d");

const fireball = new Image()
fireball.src = "../img/fireBall.png"

let frameNumber
const ondaEnergetica = {
    animating: false,
    up: false,
    img: fireball,
    x: 0,
    y: 0,

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // if{
        //     this.x += canvas.width / 180;
        //     this.y += canvas.height / 180;
        // }else{
        //     this.x -= canvas.width / 180;
        //     this.y -= canvas.height / 180;
        // }
        if(this.x > canvas.width || this.y > canvas.height) this.x = this.y = 0;
        ctx.drawImage(
            this.img,
            250, 0, 
            100, 100,
            this.x -90,
            this.y -14,
            100, 100)
        if (this.animating) {
            frameNumber = requestAnimationFrame(this.draw.bind(this))

        }
    },

}


// fireball.addEventListener(
//     "load",
//     () => ondaEnergetica.draw()
// )

canvas.addEventListener(
    "click",
    () => {

        ondaEnergetica.animating = !ondaEnergetica.animating
        
        ondaEnergetica.draw()
    }
)
canvas.addEventListener(
    "mousemove",
    (event) => {
        console.log("mouse coordinates: ", event.clientX, event.clientY);
        ondaEnergetica.x = event.clientX
        ondaEnergetica.y = event.clientY

        //ctx.beginPath()
        //ctx.moveTo(0, 0)
        //ctx.closePath()
    }
)
