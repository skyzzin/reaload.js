import Entity from "./engine/lib/Entity.js"
import Font from "./engine/lib/Font.js"
import GameLoop from "./engine/lib/Game.js"
import Keyboard from "./engine/lib/Keyboard.js"

const playerOptions = {
    x:0,
    y:0,
    sizeX:20,
    sizeY:20,
    gravity:3,
    speed:5,
    animations:{
        running:"running.gif",
        idle:"idle.gif",
        attack:"attack.gif"
    }
}



let player = new Entity(playerOptions)
player.entityLoadAnimation("running")

let keyboard = new Keyboard({w:false,a:false,s:false,d:false})

keyboard.listener('keydown',({key})=>{
    keyboard.keys[key] = true
})

keyboard.listener('keyup',({key})=>{
    keyboard.keys[key] = false
})

let placar = new Font("Douglas",10,20,"30px","Arial","white")

GameLoop(()=>{

    player.entitySpawn()
    player.entityGravity()
    
    if(keyboard.isPressed("d")){
        player.entityPos(player.x += player.speed,player.y)
    }
    if(keyboard.isPressed("a")){
        if(player.x >= 1){
            player.entityPos(player.x -= player.speed,player.y)
        }
    }

    placar.text(player.x)
      
})       