class vehicle {
    #currentSpeed
    constructor (brand, color, currentSpeed, passengerNumber){
        this.brand = brand;
        this.color = color;
        this.#currentSpeed = currentSpeed;
        this.passengerNumber = passengerNumber;
    }

    get currentSpeed (){
        return this.#currentSpeed
    }
    set currentSpeed (value){
        if(value < 0){
            console.log('erro, o valor nao pode ser menor que 0')
        } else {
            this.#currentSpeed += value
        }
    }
}

class car extends vehicle {
    constructor(proprieties){
        super(proprieties)
        this.wheelBrand = wheelBrand;
    }
    changeTire (){
        this.wheelBrand = Pirelli;
        console.log(`The ${this.brand} brand car had its tires changed.` )
    }
    accelerate () {
        this.currentSpeed += 10    
        console.log("vrum")
    }
    brake () {
        this.currentSpeed -= 10    
        console.log("drum")
    }
}

class airplane extends vehicle {
    constructor(brand, color, currentSpeed, passengerNumber, destination){
        super(brand, color, currentSpeed, passengerNumber, )
        this.destination = destination;
    }
    nineEleven (){
        console.log(` -2 towers to EUA!` )
    }
    accelerate () {
        this.currentSpeed += 100    
        console.log("vrum")
    }
    brake () {
        this.currentSpeed -= 100    
        console.log("drum")
    }
}

class boat extends vehicle {
    constructor(proprieties){
        super(proprieties)
        this.fishingProduct = fishingProduct;
    }
    fishing (){
        console.log(`The boat caught ${this.fishingProduct}` )
    }

    accelerate () {
        this.currentSpeed += 5    
        console.log("vrum")
    }
    brake () {
        this.currentSpeed -= 5  
        console.log("drum")
    }
}


let aviao = new airplane('airbus', 'white', 700, 'Celso Portioli', 'New York')
console.log(aviao)
aviao.nineEleven()