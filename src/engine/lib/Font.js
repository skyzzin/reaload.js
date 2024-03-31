class Font{
    constructor(content,x,y,size,font,style){
        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext("2d")

        this.font = font
        this.size = size
        this.x = x
        this.y = y
        this.content = content
        this.style = style

    }
    text(content){
        this.content = content
        this.ctx.font = `${this.font} ${this.size}`
        this.ctx.fillStyle = this.style
        this.ctx.fillText(this.content,this.x,this.y)
    }
    stroke(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.font = `${this.font} ${this.size}`
        this.ctx.strokeText(this.content,this.x,this.y)

    }

}

export default Font