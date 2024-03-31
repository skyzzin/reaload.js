# ReloadJS
## Entity
```js
 import Entity from "./engine/lib/Entity.js"
 import GameLoop from "./engine/lib/Game.js"

 const GameLoop = 
 const entityData = {
    x:0,        //Posição X 
    y:0,        //Posição Y
    sizeX:0,     //Tamanho da Entidade
    sizeY:0,     //Tamanho da Entidade
    gravity:0,  //Peso Da Gravidade
    speed:0     //Velocidade
 };

 const myEntity = new Entity(entityData);

 GameLoop(()=>{
    myEntity.entitySpawn();
    //Cria a Entidade Na Tela

    myEntity.entityGravity();
    //Adiciona Gravidade a Entidade

    myEntity.entityLog("Log Message","nameEntity");
    //Log Message<entity>(nameEntity)

    myEntity.entityPos(x,y);
    //Movimenta a entidade
 })

```
## Keyboard
```js
  import GameLoop from "./engine/lib/Game.js"
  import Keyboard from "./engine/lib/Keyboard.js"
  import Entity from "./engine/lib/Entity.js"
  
  const keysUsed = {
    w:false,
    a:false,
    s:false,
    d:false
    }

  let keyboard = new Keyboard(keysUsed)

    keyboard.listener('keydown',({key})=>{
    keyboard.keys[key] = true
   });
   //Adicionar Um Escutador De Eventos

   keyboard.listener('keydown',({key})=>{
    keyboard.keys[key] = true
   });

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

   //Criado Uma Movimentação para o Player
   
   GameLoop(()=>{
   player.entitySpawn();
   player.entityGravity();

    if(keyboard.isPressed("d")){
        player.entityPos(player.x += player.speed,player.y)
    }

    if(keyboard.isPressed("a")){
        if(player.x >= 1){
            player.entityPos(player.x -= player.speed,player.y)
        }
    }

 })

```