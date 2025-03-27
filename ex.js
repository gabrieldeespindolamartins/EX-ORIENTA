class vehicle {
    constructor (type, brand, color, currentSpeed, passengerNumber){
        this.type = type;
        this.brand = brand;
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.passengerNumber = passengerNumber;
    }
    accelerate () {
        this.currentSpeed += 10    
        console.log("vrum")
    }
    brake () {
        this.currentSpeed -= 10    
        console.log("drum")
    }

    toPresent (){
        console.log(`the ${this.brand} brand ${this.type} is going ${this.currentSpeed} miles per hour.`)
    }
}

let motinha = new vehicle('motorcycle','blue', 'Yamaha', 70, 2)
let camaro = new vehicle('car', 'chevrolet', 'yellow', 60, 4)

camaro.toPresent()
motinha.toPresent()
