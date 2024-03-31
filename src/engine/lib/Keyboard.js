class Keyboard{
    constructor(keys){
        this.keys = keys
    }

    listener(event,cb){
        window.addEventListener(event,cb)
    }
    isPressed(key){
        if(this.keys[key]){
            return true
        } else{
            return false
        }
    }
}

export default Keyboard