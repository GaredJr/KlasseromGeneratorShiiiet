let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")

let windowHeight = window.innerHeight
let windowWidth = window.innerWidth

canvas.width = windowHeight
canvas.height = windowHeight

canvas.style.background = "#ff000099"

const sleep = ms => new Promise(r => setTimeout(r, ms));

/*for (let i = 0; i < 999; i++) {
    context.fillRect(Math.round(Math.random()*300), i, Math.round(Math.random()*300), Math.round(Math.random()*300))
    context.fillStyle = "rgb(" + Math.round(Math.random()*255) + ", " + Math.round(Math.random()*255) + ", " + Math.round(Math.random()*255) + ")"
    context.radius = ""
}*/

class pornographyclass {
    constructor(xpos, ypos, radius, color, text) {
        this.xpos = xpos
        this.ypos = ypos
        this.radius = radius
        this.color = color
        this.text = text
        // this.linewidth = 1000
    }

    draw(context) {
        context.strokeStyle = this.color
        context.lineWidth = Math.round(Math.random()*1)
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false)
        context.stroke()
        context.closePath()
    }
}

let rada = Math.round(Math.random()*800)
let radb = Math.round(Math.random()*800)
let radc = Math.round(Math.random()*200)
let radcol = "rgb(" + Math.round(Math.random()*255) + ", " + Math.round(Math.random()*255) + ", " + Math.round(Math.random()*255) + ")"

async function goy() {
    
    while (true) {
        rada += Math.random() - 0.5
        radb += Math.random() - 0.5
        radc += Math.random() - 0.5
        let my_porn = new pornographyclass(rada, radb, radc, radcol, "niggr")
        my_porn.draw(context)
        await sleep(5)
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

goy()
