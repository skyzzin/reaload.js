
const GameLoop = (cb)=>{
    setInterval(()=>{
        cb()
    },1000/60)
}

export default GameLoop