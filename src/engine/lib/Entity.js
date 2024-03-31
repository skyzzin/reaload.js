
class Entity{
    constructor({x,y,sizeX,sizeY,gravity,speed,animations}){
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.gravity = gravity;
        this.speed = speed
        this.animations = animations

        this.canvas = document.querySelector("#canvas")
        this.ctx = canvas.getContext("2d")
    }
    entitySpawn(){
        
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.fillRect(this.x,this.y,this.sizeX,this.sizeY)
    }
    entityGravity(){
        this.y += this.gravity
    
        if(this.y > 400 - this.sizeX){
            this.gravity = 0
        }
        if(this.x < 0){
            this.x = 0
        }   
    }
    entityPos(x,y){
        this.x = x;
        this.y = y;
    }
    entityLog(msg, name) {
        let logs = document.querySelector('.log');
        let log = logs.querySelector(`.entity[data-name="${name}"]`);
    
        if (!log) {
            log = document.createElement("div");
            log.classList.add("entity");
            log.dataset.name = name;
            logs.append(log);
        }
    
        log.textContent = `Log <Entity>(${name}): ${msg}`;
    }
    entityLoadAnimation(animation){
        console.log(this.animations[animation])
    }
    
}

export default Entity